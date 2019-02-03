module.exports = {
  client: {
    name: 'Teampot App',
    tagName: 'gql',
    addTypename: true,
    includes:[
      __dirname + '\\client\\*.js'],
    service: {
      name: 'teampot-service',
      localSchemaFile: __dirname + '\\server\\schema.json',
      //url: 'http://localhost:4000/graphql' // uncomment and comment the previous line if you want to use the server version
    }
  }
};