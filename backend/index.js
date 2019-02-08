const express  = require('express');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs } = require('../data/server/schema.js');
const { resolvers } = require('./resolvers/index.js');

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
