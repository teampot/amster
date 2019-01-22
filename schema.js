import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar Date

  enum Role {
    Member
    Leader    
  }

  enum SocialAccountType {
    LinkedIn
  }

  enum TagType {
    ProfessionalDomain
    BussinessDomain
    GeoLocations
    Languages
  }

  type Team {    
    Id: ID!,
    Name: String!,    
    Header: String,
    Description: String,
    ProjectEndDate: Date,
    CanStartAtMin: Int,
    CanStartAtMax: Int,
    CreationDate: Date!,
    CreationUser: User!,
    EditDate: Date,
    EditUser: User,
    Users: [User],
    Teams: [Team],
    Tags: [Tag]
  }

  type User {
    Id: ID!,
    FirstName: String!, 
    LastName: String!, 
    Role: Role,
    NoticePeriod: Int,
    Description: String!, 
    SocialAccounts: [SocialAccount],
    CreationDate: Date!,
    CreationUser: User!,
    EditDate: Date,
    EditUser: User,
    Teams: [Team],
    Tags: [Tag]
  }

  type SocialAccount {
    Id: ID!,
    ExternalId: String!,
    User: User!
    Type: SocialAccountType!
  }
  
  type Tag {
    Id: ID!,
    Name: String!
    Type: TagType!,
    Source: SocialAccountType!,
    CreationDate: Date!,
    CreationUser: User!,
    EditDate: Date,
    EditUser: User,
  }

  type Query {
    allUsers: [User]
  }
`;

export default typeDefs;