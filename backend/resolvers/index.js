const resolvers = {
  Query: {
    allUsers() {
      return [{Id: 1, FirstName: "John", LastName: "Dude" }];
    }
  }
};
module.exports.resolvers = resolvers;