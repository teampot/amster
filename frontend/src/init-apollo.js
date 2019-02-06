
// @flow
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { makeExecutableSchema } from 'graphql-tools';
import { SchemaLink } from 'apollo-link-schema';
import fetch from 'isomorphic-unfetch';
import process from 'process';

import { resolvers } from './mocks/resolvers.js';
import { typeDefs } from './mocks/schema.js';


let apolloClient = null

function getLink () {
  let executableSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
  return new SchemaLink({ schema: executableSchema });
  // return new HttpLink({
  //   uri: 'http://localhost:4000/graphql' // Server URL (must be absolute)
  // });
}

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

function create (initialState: any) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: getLink(),
    cache: new InMemoryCache().restore(initialState || {})
  })
}

export default function initApollo (initialState:any) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}