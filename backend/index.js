const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const { Kitten } = require("./connectors");

const typeDefs = gql`
  type Query {    
    allKittens: [Kitten]
  }
  type Kitten {
    name: String
  }
`;

const resolvers = {
    Query: {
        allKittens() {
        return Kitten.find();
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
