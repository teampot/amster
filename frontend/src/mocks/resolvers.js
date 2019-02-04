const resolvers = {
  RootQuery: {
    me(){
      return {firstName:'Dude', id:15, lastName: 'John'};
    },
    team(id) {

    },
    job(id) {

    },
    matchingTags(search, first, cursor) {

    },
    matchingJobs(tags, first, cursor) {

    },
    matchingTeamSummaries(tags, first, cursor) {

    }
  },
  RootMutation : {
    upsertUser(user) {

    },
    upsertTeam(team) {

    },
    upsertJob(job) {

    },
  }
}

module.exports.resolvers = resolvers;