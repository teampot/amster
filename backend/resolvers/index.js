const resolvers = {
  Query: {
    allUsers() {
      return [{Id: 1, FirstName: "asdasd", LastName: "asidoasdas" }];
    }
  }
};
module.exports.resolvers = resolvers;