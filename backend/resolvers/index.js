const resolvers = {
  Query: {
    allUsers() {
      return [{Id: 1, FirstName: "asdasd", LastName: "asidoasdas" }];
    }
  }
};

export default resolvers;