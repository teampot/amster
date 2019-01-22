import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

import Kitten from "./connectors";
import typeDefs from "../schema";

const resolvers = {
    Query: {
      allUsers() {
        return [{Id: 1, FirstName: "asdasd", LastName: "asidoasdas" }];
      }
    }
};

const server = new ApolloServer({ typeDefs, resolvers, introspection: true, playground: true });

const app = express();
server.applyMiddleware({ app });
app.get("/", (req, res) => {
  res.redirect("/graphql");
});

const port = 4000;

app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);
