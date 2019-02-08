// @flow
import gql from 'graphql-tag';
export const typeDefs = gql`
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

  input TeamInput {    
    id: ID!
    name: String!
    header: String
    description: String
    members: [MemberInput]
    jobsAppliedTo: [JobInput]
    tags: [ScoredTagInput]
  }

  type Member {
    user: User!
    role: RoleType!
    noticePeriod: Int
    availableAt: Date
  }

  input MemberInput {
    user: UserInput!
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

  input UserInput {
    id: ID!
    available: Boolean!
    firstName: String! 
    lastName: String! 
    description: String! 
    socialAccounts: [SocialAccountInput]
    teamMemberOf: [TeamInput]
    jobsCreated: [JobInput]
    tags: [ScoredTagInput]
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

  input JobInput {
    id: ID!
    name: String!
    header: String
    description: String
    applications: [TeamInput]
    createdAt: Date!
    createdByUserId: ID!
    updatedAt: Date
    updatedByUserId: ID
    tags: [TagInput]
  }

  type SocialAccount {
    externalId: String!
    type: SocialAccountType!
  }

  input SocialAccountInput {
    externalId: String!
    type: SocialAccountType!
  }
 
  type ScoredTag {
    name: String!
    score: Int
  }
 
  input ScoredTagInput {
    name: String!
    score: Int
  }

  type Tag {
    id: Int
    name: String!
  }

  input TagInput {
    name: String!
  }
  
  type RootQuery {
    me: User
    team(id: String): Team
    job(id: String): Job
    matchingTags(search: String, first: Int, cursor: String): [Tag]
    matchingJobs(tags: [TagInput], first: Int, cursor: String): [Job]
    matchingTeamSummaries(tags: [TagInput], first: Int, cursor: String): [Team]
  }

  type RootMutation {
    upsertUser(user: UserInput): User
    upsertTeam(team: TeamInput): Team
    upsertJob(job: JobInput): Job
  }
  
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;
