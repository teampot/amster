const { gql } = require('apollo-server-express');

const typeDefs = gql`
  #TYPES#####################################
  scalar Date

  enum RoleType {
    Admin
    Member
  }

  enum SocialAccountType {
    LinkedIn
    GitHub
  }

  type Team {    
    id: ID!
    name: String!    
    header: String
    description: String
    createdAt: Date!
    createdByUserId: ID!
    updatedAt: Date
    updatedByUserId: ID
    members: [Member]
    jobsAppliedTo: [Job]
    tags: [ScoredTag]
  }

  type Member {
    user: User!
    role: RoleType!
    noticePeriod: Int
    availableAt: Date
  }

  type User {
    id: ID!
    available: Boolean!
    firstName: String! 
    lastName: String! 
    description: String! 
    socialAccounts: [SocialAccount]
    createdAt: Date!
    createdByUserId: ID!
    updatedAt: Date
    updatedByUserId: ID
    teamMemberOf: [Team]
    jobsCreated: [Job]
    tags: [ScoredTag]
  }

  type Job {
    id: ID!
    name: String!
    header: String
    description: String
    applications: [Team]
    createdAt: Date!
    createdByUserId: ID!
    updatedAt: Date
    updatedByUserId: ID
    tags: [Tag]
  }

  type SocialAccount {
    externalId: String!
    type: SocialAccountType!
  }
 
  type ScoredTag {
    name: String!
    score: Int
  }

  type Tag {
    name: String!
  }

  #QUERIES#####################################

  #based on token
  query {
    me: User
  }

  query Team($id: Int) {
    team(id: $id): Team
  }

  query Job($id: Int) {
    job(id: $id): Job
  }

  query MatchingTags ($search: String, $first: Int, $cursor: String) {
    matches(search: $search, first: $first, cursor: $cursor): {
      totalCount
      edges {
        node: Tag
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }

  query MatchingJobs ($tags: Tag[], $first: Int, $cursor: String) {
    matches(tags: $tags, first: $first, cursor: $cursor): {
      totalCount
      edges {
        node: Job
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }

  query MatchingTeamSummaries ($tags: Tag[], $first: Int, $cursor: String) {
    matches(tags: $tags, first: $first, cursor: $cursor): {
      totalCount
      edges {
        node: TeamSummary
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }

  fragment TeamSummary on Team {
    id
    name  
    header
    description
    tags
  }

  #MUTATIONS###################################
  
  # the only upsertable user is the authenticated one 
  mutation UpsertUser ($user: User){
    upsert(user: $user): User
  }

  mutation UpsertTeam($team: Team) {
    upsert(team: $team): Team
  }

  mutation UpsertJob($job: Job) {
    upsert(job: $job): Job
  }

  mutation UpsertUser($user: User) {
    upsert(user: $user): User
  }
`;

module.exports.typeDefs = typeDefs;