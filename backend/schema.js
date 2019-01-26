import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar Date

  enum RoleType {
    Admin,
    Member
  }

  enum SocialAccountType {
    LinkedIn,
    GitHub
  }

  type Team {    
    Id: ID!,
    Name: String!,    
    Header: String,
    Description: String,
    CreatedAt: Date!,
    CreatedByUserId: ID!,
    UpdatedAt: Date,
    UpdatedByUserId: ID,
    Members: [Member],
    JobsAppliedTo: [Job],
    Tags: [ScoredTag]
  }

  type Member {
    User: User!
    Role: RoleType!
    NoticePeriod: Int,
    AvailableAt: Date
  }

  type User {
    Id: ID!,
    Available: Boolean!
    FirstName: String!, 
    LastName: String!, 
    Description: String!, 
    SocialAccounts: [SocialAccount],
    CreatedAt: Date!,
    CreatedByUserId: ID!,
    UpdatedAt: Date,
    UpdatedByUserId: ID,
    TeamMemberOf: [Team],
    JobsCreated: [Job],
    Tags: [ScoredTag]
  }

  type Job {
    Id: ID!,
    Name: String!,
    Header: String,
    Description: String,
    Applications: [Team],
    CreatedAt: Date!,
    CreatedByUserId: ID!,
    UpdatedAt: Date,
    UpdatedByUserId: ID,
    Tags: [Tag]
  }

  type SocialAccount {
    ExternalId: String!,
    Type: SocialAccountType!
  }
 
  type ScoredTag {
    Name: String!,
    Score: Integer
  }

  type Tag {
    Name: String!
  }

  type Query {
    allUsers: [User]
  }
`;

export default typeDefs;