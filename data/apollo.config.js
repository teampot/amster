module.exports = {
  client: {
    name: 'Teampot App',
    service: {
      name: 'teampot-service',
      localSchemaFile: 'client-query.js',
      includes:['server-schema.json']
      // url: 'http://localhost:4000/graphql'
    }
  }
};