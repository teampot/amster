// @flow
export const typeDefs = /* GraphQL */ `type AggregateJob {
  count: Int!
}

type AggregateTag {
  count: Int!
}

type AggregateTeam {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Job {
  id: ID!
  enabled: Boolean!
  name: String!
  header: String
  description: String
  applications(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
  createdAt: DateTime!
  createdByUserId: ID!
  updatedAt: DateTime
  updatedByUserId: ID!
  tags: [ScoredTag!]
}

type JobConnection {
  pageInfo: PageInfo!
  edges: [JobEdge]!
  aggregate: AggregateJob!
}

input JobCreateInput {
  enabled: Boolean
  name: String!
  header: String
  description: String
  applications: TeamCreateManyWithoutJobsAppliedToInput
  tags: ScoredTagCreateManyInput
}

input JobCreateManyInput {
  create: [JobCreateInput!]
  connect: [JobWhereUniqueInput!]
}

input JobCreateManyWithoutApplicationsInput {
  create: [JobCreateWithoutApplicationsInput!]
  connect: [JobWhereUniqueInput!]
}

input JobCreateWithoutApplicationsInput {
  enabled: Boolean
  name: String!
  header: String
  description: String
  tags: ScoredTagCreateManyInput
}

type JobEdge {
  node: Job!
  cursor: String!
}

enum JobOrderByInput {
  id_ASC
  id_DESC
  enabled_ASC
  enabled_DESC
  name_ASC
  name_DESC
  header_ASC
  header_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  createdByUserId_ASC
  createdByUserId_DESC
  updatedAt_ASC
  updatedAt_DESC
  updatedByUserId_ASC
  updatedByUserId_DESC
}

type JobPreviousValues {
  id: ID!
  enabled: Boolean!
  name: String!
  header: String
  description: String
  createdAt: DateTime!
  createdByUserId: ID!
  updatedAt: DateTime
  updatedByUserId: ID!
}

input JobScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  enabled: Boolean
  enabled_not: Boolean
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  header: String
  header_not: String
  header_in: [String!]
  header_not_in: [String!]
  header_lt: String
  header_lte: String
  header_gt: String
  header_gte: String
  header_contains: String
  header_not_contains: String
  header_starts_with: String
  header_not_starts_with: String
  header_ends_with: String
  header_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  createdByUserId: ID
  createdByUserId_not: ID
  createdByUserId_in: [ID!]
  createdByUserId_not_in: [ID!]
  createdByUserId_lt: ID
  createdByUserId_lte: ID
  createdByUserId_gt: ID
  createdByUserId_gte: ID
  createdByUserId_contains: ID
  createdByUserId_not_contains: ID
  createdByUserId_starts_with: ID
  createdByUserId_not_starts_with: ID
  createdByUserId_ends_with: ID
  createdByUserId_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  updatedByUserId: ID
  updatedByUserId_not: ID
  updatedByUserId_in: [ID!]
  updatedByUserId_not_in: [ID!]
  updatedByUserId_lt: ID
  updatedByUserId_lte: ID
  updatedByUserId_gt: ID
  updatedByUserId_gte: ID
  updatedByUserId_contains: ID
  updatedByUserId_not_contains: ID
  updatedByUserId_starts_with: ID
  updatedByUserId_not_starts_with: ID
  updatedByUserId_ends_with: ID
  updatedByUserId_not_ends_with: ID
  AND: [JobScalarWhereInput!]
  OR: [JobScalarWhereInput!]
  NOT: [JobScalarWhereInput!]
}

type JobSubscriptionPayload {
  mutation: MutationType!
  node: Job
  updatedFields: [String!]
  previousValues: JobPreviousValues
}

input JobSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: JobWhereInput
  AND: [JobSubscriptionWhereInput!]
  OR: [JobSubscriptionWhereInput!]
  NOT: [JobSubscriptionWhereInput!]
}

input JobUpdateDataInput {
  enabled: Boolean
  name: String
  header: String
  description: String
  applications: TeamUpdateManyWithoutJobsAppliedToInput
  tags: ScoredTagUpdateManyInput
}

input JobUpdateInput {
  enabled: Boolean
  name: String
  header: String
  description: String
  applications: TeamUpdateManyWithoutJobsAppliedToInput
  tags: ScoredTagUpdateManyInput
}

input JobUpdateManyDataInput {
  enabled: Boolean
  name: String
  header: String
  description: String
}

input JobUpdateManyInput {
  create: [JobCreateInput!]
  update: [JobUpdateWithWhereUniqueNestedInput!]
  upsert: [JobUpsertWithWhereUniqueNestedInput!]
  delete: [JobWhereUniqueInput!]
  connect: [JobWhereUniqueInput!]
  disconnect: [JobWhereUniqueInput!]
  deleteMany: [JobScalarWhereInput!]
  updateMany: [JobUpdateManyWithWhereNestedInput!]
}

input JobUpdateManyMutationInput {
  enabled: Boolean
  name: String
  header: String
  description: String
}

input JobUpdateManyWithoutApplicationsInput {
  create: [JobCreateWithoutApplicationsInput!]
  delete: [JobWhereUniqueInput!]
  connect: [JobWhereUniqueInput!]
  disconnect: [JobWhereUniqueInput!]
  update: [JobUpdateWithWhereUniqueWithoutApplicationsInput!]
  upsert: [JobUpsertWithWhereUniqueWithoutApplicationsInput!]
  deleteMany: [JobScalarWhereInput!]
  updateMany: [JobUpdateManyWithWhereNestedInput!]
}

input JobUpdateManyWithWhereNestedInput {
  where: JobScalarWhereInput!
  data: JobUpdateManyDataInput!
}

input JobUpdateWithoutApplicationsDataInput {
  enabled: Boolean
  name: String
  header: String
  description: String
  tags: ScoredTagUpdateManyInput
}

input JobUpdateWithWhereUniqueNestedInput {
  where: JobWhereUniqueInput!
  data: JobUpdateDataInput!
}

input JobUpdateWithWhereUniqueWithoutApplicationsInput {
  where: JobWhereUniqueInput!
  data: JobUpdateWithoutApplicationsDataInput!
}

input JobUpsertWithWhereUniqueNestedInput {
  where: JobWhereUniqueInput!
  update: JobUpdateDataInput!
  create: JobCreateInput!
}

input JobUpsertWithWhereUniqueWithoutApplicationsInput {
  where: JobWhereUniqueInput!
  update: JobUpdateWithoutApplicationsDataInput!
  create: JobCreateWithoutApplicationsInput!
}

input JobWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  enabled: Boolean
  enabled_not: Boolean
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  header: String
  header_not: String
  header_in: [String!]
  header_not_in: [String!]
  header_lt: String
  header_lte: String
  header_gt: String
  header_gte: String
  header_contains: String
  header_not_contains: String
  header_starts_with: String
  header_not_starts_with: String
  header_ends_with: String
  header_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  createdByUserId: ID
  createdByUserId_not: ID
  createdByUserId_in: [ID!]
  createdByUserId_not_in: [ID!]
  createdByUserId_lt: ID
  createdByUserId_lte: ID
  createdByUserId_gt: ID
  createdByUserId_gte: ID
  createdByUserId_contains: ID
  createdByUserId_not_contains: ID
  createdByUserId_starts_with: ID
  createdByUserId_not_starts_with: ID
  createdByUserId_ends_with: ID
  createdByUserId_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  updatedByUserId: ID
  updatedByUserId_not: ID
  updatedByUserId_in: [ID!]
  updatedByUserId_not_in: [ID!]
  updatedByUserId_lt: ID
  updatedByUserId_lte: ID
  updatedByUserId_gt: ID
  updatedByUserId_gte: ID
  updatedByUserId_contains: ID
  updatedByUserId_not_contains: ID
  updatedByUserId_starts_with: ID
  updatedByUserId_not_starts_with: ID
  updatedByUserId_ends_with: ID
  updatedByUserId_not_ends_with: ID
  tags_every: ScoredTagWhereInput
  tags_some: ScoredTagWhereInput
  tags_none: ScoredTagWhereInput
  AND: [JobWhereInput!]
  OR: [JobWhereInput!]
  NOT: [JobWhereInput!]
}

input JobWhereUniqueInput {
  id: ID
  createdByUserId: ID
  updatedByUserId: ID
}

scalar Long

type Member {
  user: User!
  role: RoleType!
  noticePeriod: Int
  availableAt: DateTime
}

input MemberCreateInput {
  user: UserCreateOneInput!
  role: RoleType!
  noticePeriod: Int
  availableAt: DateTime
}

input MemberCreateManyInput {
  create: [MemberCreateInput!]
}

type MemberPreviousValues {
  role: RoleType!
  noticePeriod: Int
  availableAt: DateTime
}

input MemberScalarWhereInput {
  role: RoleType
  role_not: RoleType
  role_in: [RoleType!]
  role_not_in: [RoleType!]
  noticePeriod: Int
  noticePeriod_not: Int
  noticePeriod_in: [Int!]
  noticePeriod_not_in: [Int!]
  noticePeriod_lt: Int
  noticePeriod_lte: Int
  noticePeriod_gt: Int
  noticePeriod_gte: Int
  availableAt: DateTime
  availableAt_not: DateTime
  availableAt_in: [DateTime!]
  availableAt_not_in: [DateTime!]
  availableAt_lt: DateTime
  availableAt_lte: DateTime
  availableAt_gt: DateTime
  availableAt_gte: DateTime
  AND: [MemberScalarWhereInput!]
  OR: [MemberScalarWhereInput!]
  NOT: [MemberScalarWhereInput!]
}

type MemberSubscriptionPayload {
  mutation: MutationType!
  node: Member
  updatedFields: [String!]
  previousValues: MemberPreviousValues
}

input MemberSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MemberWhereInput
  AND: [MemberSubscriptionWhereInput!]
  OR: [MemberSubscriptionWhereInput!]
  NOT: [MemberSubscriptionWhereInput!]
}

input MemberUpdateManyDataInput {
  role: RoleType
  noticePeriod: Int
  availableAt: DateTime
}

input MemberUpdateManyInput {
  create: [MemberCreateInput!]
  deleteMany: [MemberScalarWhereInput!]
  updateMany: [MemberUpdateManyWithWhereNestedInput!]
}

input MemberUpdateManyWithWhereNestedInput {
  where: MemberScalarWhereInput!
  data: MemberUpdateManyDataInput!
}

input MemberWhereInput {
  role: RoleType
  role_not: RoleType
  role_in: [RoleType!]
  role_not_in: [RoleType!]
  noticePeriod: Int
  noticePeriod_not: Int
  noticePeriod_in: [Int!]
  noticePeriod_not_in: [Int!]
  noticePeriod_lt: Int
  noticePeriod_lte: Int
  noticePeriod_gt: Int
  noticePeriod_gte: Int
  availableAt: DateTime
  availableAt_not: DateTime
  availableAt_in: [DateTime!]
  availableAt_not_in: [DateTime!]
  availableAt_lt: DateTime
  availableAt_lte: DateTime
  availableAt_gt: DateTime
  availableAt_gte: DateTime
  AND: [MemberWhereInput!]
  OR: [MemberWhereInput!]
  NOT: [MemberWhereInput!]
}

type Mutation {
  createJob(data: JobCreateInput!): Job!
  updateJob(data: JobUpdateInput!, where: JobWhereUniqueInput!): Job
  updateManyJobs(data: JobUpdateManyMutationInput!, where: JobWhereInput): BatchPayload!
  upsertJob(where: JobWhereUniqueInput!, create: JobCreateInput!, update: JobUpdateInput!): Job!
  deleteJob(where: JobWhereUniqueInput!): Job
  deleteManyJobs(where: JobWhereInput): BatchPayload!
  createTag(data: TagCreateInput!): Tag!
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updateManyTags(data: TagUpdateManyMutationInput!, where: TagWhereInput): BatchPayload!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  deleteTag(where: TagWhereUniqueInput!): Tag
  deleteManyTags(where: TagWhereInput): BatchPayload!
  createTeam(data: TeamCreateInput!): Team!
  updateTeam(data: TeamUpdateInput!, where: TeamWhereUniqueInput!): Team
  updateManyTeams(data: TeamUpdateManyMutationInput!, where: TeamWhereInput): BatchPayload!
  upsertTeam(where: TeamWhereUniqueInput!, create: TeamCreateInput!, update: TeamUpdateInput!): Team!
  deleteTeam(where: TeamWhereUniqueInput!): Team
  deleteManyTeams(where: TeamWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  job(where: JobWhereUniqueInput!): Job
  jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job]!
  jobsConnection(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JobConnection!
  tag(where: TagWhereUniqueInput!): Tag
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  team(where: TeamWhereUniqueInput!): Team
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team]!
  teamsConnection(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum RoleType {
  ADMIN
  MEMBER
}

type ScoredTag {
  score: Int
  tag: Tag
}

input ScoredTagCreateInput {
  score: Int
  tag: TagCreateOneInput
}

input ScoredTagCreateManyInput {
  create: [ScoredTagCreateInput!]
}

type ScoredTagPreviousValues {
  score: Int
}

input ScoredTagScalarWhereInput {
  score: Int
  score_not: Int
  score_in: [Int!]
  score_not_in: [Int!]
  score_lt: Int
  score_lte: Int
  score_gt: Int
  score_gte: Int
  AND: [ScoredTagScalarWhereInput!]
  OR: [ScoredTagScalarWhereInput!]
  NOT: [ScoredTagScalarWhereInput!]
}

type ScoredTagSubscriptionPayload {
  mutation: MutationType!
  node: ScoredTag
  updatedFields: [String!]
  previousValues: ScoredTagPreviousValues
}

input ScoredTagSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ScoredTagWhereInput
  AND: [ScoredTagSubscriptionWhereInput!]
  OR: [ScoredTagSubscriptionWhereInput!]
  NOT: [ScoredTagSubscriptionWhereInput!]
}

input ScoredTagUpdateManyDataInput {
  score: Int
}

input ScoredTagUpdateManyInput {
  create: [ScoredTagCreateInput!]
  deleteMany: [ScoredTagScalarWhereInput!]
  updateMany: [ScoredTagUpdateManyWithWhereNestedInput!]
}

input ScoredTagUpdateManyWithWhereNestedInput {
  where: ScoredTagScalarWhereInput!
  data: ScoredTagUpdateManyDataInput!
}

input ScoredTagWhereInput {
  score: Int
  score_not: Int
  score_in: [Int!]
  score_not_in: [Int!]
  score_lt: Int
  score_lte: Int
  score_gt: Int
  score_gte: Int
  AND: [ScoredTagWhereInput!]
  OR: [ScoredTagWhereInput!]
  NOT: [ScoredTagWhereInput!]
}

type SocialAccount {
  externalId: String!
  type: SocialAccountType!
}

input SocialAccountCreateInput {
  externalId: String!
  type: SocialAccountType!
}

input SocialAccountCreateManyInput {
  create: [SocialAccountCreateInput!]
}

type SocialAccountPreviousValues {
  externalId: String!
  type: SocialAccountType!
}

input SocialAccountScalarWhereInput {
  externalId: String
  externalId_not: String
  externalId_in: [String!]
  externalId_not_in: [String!]
  externalId_lt: String
  externalId_lte: String
  externalId_gt: String
  externalId_gte: String
  externalId_contains: String
  externalId_not_contains: String
  externalId_starts_with: String
  externalId_not_starts_with: String
  externalId_ends_with: String
  externalId_not_ends_with: String
  type: SocialAccountType
  type_not: SocialAccountType
  type_in: [SocialAccountType!]
  type_not_in: [SocialAccountType!]
  AND: [SocialAccountScalarWhereInput!]
  OR: [SocialAccountScalarWhereInput!]
  NOT: [SocialAccountScalarWhereInput!]
}

type SocialAccountSubscriptionPayload {
  mutation: MutationType!
  node: SocialAccount
  updatedFields: [String!]
  previousValues: SocialAccountPreviousValues
}

input SocialAccountSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SocialAccountWhereInput
  AND: [SocialAccountSubscriptionWhereInput!]
  OR: [SocialAccountSubscriptionWhereInput!]
  NOT: [SocialAccountSubscriptionWhereInput!]
}

enum SocialAccountType {
  LINKEDIN
  GITHUB
}

input SocialAccountUpdateManyDataInput {
  externalId: String
  type: SocialAccountType
}

input SocialAccountUpdateManyInput {
  create: [SocialAccountCreateInput!]
  deleteMany: [SocialAccountScalarWhereInput!]
  updateMany: [SocialAccountUpdateManyWithWhereNestedInput!]
}

input SocialAccountUpdateManyWithWhereNestedInput {
  where: SocialAccountScalarWhereInput!
  data: SocialAccountUpdateManyDataInput!
}

input SocialAccountWhereInput {
  externalId: String
  externalId_not: String
  externalId_in: [String!]
  externalId_not_in: [String!]
  externalId_lt: String
  externalId_lte: String
  externalId_gt: String
  externalId_gte: String
  externalId_contains: String
  externalId_not_contains: String
  externalId_starts_with: String
  externalId_not_starts_with: String
  externalId_ends_with: String
  externalId_not_ends_with: String
  type: SocialAccountType
  type_not: SocialAccountType
  type_in: [SocialAccountType!]
  type_not_in: [SocialAccountType!]
  AND: [SocialAccountWhereInput!]
  OR: [SocialAccountWhereInput!]
  NOT: [SocialAccountWhereInput!]
}

type Subscription {
  job(where: JobSubscriptionWhereInput): JobSubscriptionPayload
  member(where: MemberSubscriptionWhereInput): MemberSubscriptionPayload
  scoredTag(where: ScoredTagSubscriptionWhereInput): ScoredTagSubscriptionPayload
  socialAccount(where: SocialAccountSubscriptionWhereInput): SocialAccountSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  team(where: TeamSubscriptionWhereInput): TeamSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Tag {
  id: ID!
  name: String!
}

type TagConnection {
  pageInfo: PageInfo!
  edges: [TagEdge]!
  aggregate: AggregateTag!
}

input TagCreateInput {
  name: String!
}

input TagCreateOneInput {
  create: TagCreateInput
  connect: TagWhereUniqueInput
}

type TagEdge {
  node: Tag!
  cursor: String!
}

enum TagOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type TagPreviousValues {
  id: ID!
  name: String!
}

type TagSubscriptionPayload {
  mutation: MutationType!
  node: Tag
  updatedFields: [String!]
  previousValues: TagPreviousValues
}

input TagSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TagWhereInput
  AND: [TagSubscriptionWhereInput!]
  OR: [TagSubscriptionWhereInput!]
  NOT: [TagSubscriptionWhereInput!]
}

input TagUpdateInput {
  name: String
}

input TagUpdateManyMutationInput {
  name: String
}

input TagWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [TagWhereInput!]
  OR: [TagWhereInput!]
  NOT: [TagWhereInput!]
}

input TagWhereUniqueInput {
  id: ID
}

type Team {
  id: ID!
  enabled: Boolean!
  name: String!
  header: String
  description: String
  createdAt: DateTime!
  createdByUserId: ID!
  updatedAt: DateTime
  updatedByUserId: ID!
  members: [Member!]
  jobsAppliedTo(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job!]
  tags: [ScoredTag!]
}

type TeamConnection {
  pageInfo: PageInfo!
  edges: [TeamEdge]!
  aggregate: AggregateTeam!
}

input TeamCreateInput {
  enabled: Boolean
  name: String!
  header: String
  description: String
  members: MemberCreateManyInput
  jobsAppliedTo: JobCreateManyWithoutApplicationsInput
  tags: ScoredTagCreateManyInput
}

input TeamCreateManyWithoutJobsAppliedToInput {
  create: [TeamCreateWithoutJobsAppliedToInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateWithoutJobsAppliedToInput {
  enabled: Boolean
  name: String!
  header: String
  description: String
  members: MemberCreateManyInput
  tags: ScoredTagCreateManyInput
}

type TeamEdge {
  node: Team!
  cursor: String!
}

enum TeamOrderByInput {
  id_ASC
  id_DESC
  enabled_ASC
  enabled_DESC
  name_ASC
  name_DESC
  header_ASC
  header_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  createdByUserId_ASC
  createdByUserId_DESC
  updatedAt_ASC
  updatedAt_DESC
  updatedByUserId_ASC
  updatedByUserId_DESC
}

type TeamPreviousValues {
  id: ID!
  enabled: Boolean!
  name: String!
  header: String
  description: String
  createdAt: DateTime!
  createdByUserId: ID!
  updatedAt: DateTime
  updatedByUserId: ID!
}

input TeamScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  enabled: Boolean
  enabled_not: Boolean
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  header: String
  header_not: String
  header_in: [String!]
  header_not_in: [String!]
  header_lt: String
  header_lte: String
  header_gt: String
  header_gte: String
  header_contains: String
  header_not_contains: String
  header_starts_with: String
  header_not_starts_with: String
  header_ends_with: String
  header_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  createdByUserId: ID
  createdByUserId_not: ID
  createdByUserId_in: [ID!]
  createdByUserId_not_in: [ID!]
  createdByUserId_lt: ID
  createdByUserId_lte: ID
  createdByUserId_gt: ID
  createdByUserId_gte: ID
  createdByUserId_contains: ID
  createdByUserId_not_contains: ID
  createdByUserId_starts_with: ID
  createdByUserId_not_starts_with: ID
  createdByUserId_ends_with: ID
  createdByUserId_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  updatedByUserId: ID
  updatedByUserId_not: ID
  updatedByUserId_in: [ID!]
  updatedByUserId_not_in: [ID!]
  updatedByUserId_lt: ID
  updatedByUserId_lte: ID
  updatedByUserId_gt: ID
  updatedByUserId_gte: ID
  updatedByUserId_contains: ID
  updatedByUserId_not_contains: ID
  updatedByUserId_starts_with: ID
  updatedByUserId_not_starts_with: ID
  updatedByUserId_ends_with: ID
  updatedByUserId_not_ends_with: ID
  AND: [TeamScalarWhereInput!]
  OR: [TeamScalarWhereInput!]
  NOT: [TeamScalarWhereInput!]
}

type TeamSubscriptionPayload {
  mutation: MutationType!
  node: Team
  updatedFields: [String!]
  previousValues: TeamPreviousValues
}

input TeamSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TeamWhereInput
  AND: [TeamSubscriptionWhereInput!]
  OR: [TeamSubscriptionWhereInput!]
  NOT: [TeamSubscriptionWhereInput!]
}

input TeamUpdateInput {
  enabled: Boolean
  name: String
  header: String
  description: String
  members: MemberUpdateManyInput
  jobsAppliedTo: JobUpdateManyWithoutApplicationsInput
  tags: ScoredTagUpdateManyInput
}

input TeamUpdateManyDataInput {
  enabled: Boolean
  name: String
  header: String
  description: String
}

input TeamUpdateManyMutationInput {
  enabled: Boolean
  name: String
  header: String
  description: String
}

input TeamUpdateManyWithoutJobsAppliedToInput {
  create: [TeamCreateWithoutJobsAppliedToInput!]
  delete: [TeamWhereUniqueInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutJobsAppliedToInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutJobsAppliedToInput!]
  deleteMany: [TeamScalarWhereInput!]
  updateMany: [TeamUpdateManyWithWhereNestedInput!]
}

input TeamUpdateManyWithWhereNestedInput {
  where: TeamScalarWhereInput!
  data: TeamUpdateManyDataInput!
}

input TeamUpdateWithoutJobsAppliedToDataInput {
  enabled: Boolean
  name: String
  header: String
  description: String
  members: MemberUpdateManyInput
  tags: ScoredTagUpdateManyInput
}

input TeamUpdateWithWhereUniqueWithoutJobsAppliedToInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutJobsAppliedToDataInput!
}

input TeamUpsertWithWhereUniqueWithoutJobsAppliedToInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutJobsAppliedToDataInput!
  create: TeamCreateWithoutJobsAppliedToInput!
}

input TeamWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  enabled: Boolean
  enabled_not: Boolean
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  header: String
  header_not: String
  header_in: [String!]
  header_not_in: [String!]
  header_lt: String
  header_lte: String
  header_gt: String
  header_gte: String
  header_contains: String
  header_not_contains: String
  header_starts_with: String
  header_not_starts_with: String
  header_ends_with: String
  header_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  createdByUserId: ID
  createdByUserId_not: ID
  createdByUserId_in: [ID!]
  createdByUserId_not_in: [ID!]
  createdByUserId_lt: ID
  createdByUserId_lte: ID
  createdByUserId_gt: ID
  createdByUserId_gte: ID
  createdByUserId_contains: ID
  createdByUserId_not_contains: ID
  createdByUserId_starts_with: ID
  createdByUserId_not_starts_with: ID
  createdByUserId_ends_with: ID
  createdByUserId_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  updatedByUserId: ID
  updatedByUserId_not: ID
  updatedByUserId_in: [ID!]
  updatedByUserId_not_in: [ID!]
  updatedByUserId_lt: ID
  updatedByUserId_lte: ID
  updatedByUserId_gt: ID
  updatedByUserId_gte: ID
  updatedByUserId_contains: ID
  updatedByUserId_not_contains: ID
  updatedByUserId_starts_with: ID
  updatedByUserId_not_starts_with: ID
  updatedByUserId_ends_with: ID
  updatedByUserId_not_ends_with: ID
  members_every: MemberWhereInput
  members_some: MemberWhereInput
  members_none: MemberWhereInput
  tags_every: ScoredTagWhereInput
  tags_some: ScoredTagWhereInput
  tags_none: ScoredTagWhereInput
  AND: [TeamWhereInput!]
  OR: [TeamWhereInput!]
  NOT: [TeamWhereInput!]
}

input TeamWhereUniqueInput {
  id: ID
  createdByUserId: ID
  updatedByUserId: ID
}

type User {
  id: ID!
  email: String
  available: Boolean!
  firstName: String!
  lastName: String!
  description: String!
  socialAccounts: [SocialAccount!]
  createdAt: DateTime!
  createdByUserId: ID!
  updatedAt: DateTime
  updatedByUserId: ID!
  jobsCreated(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job!]
  tags: [ScoredTag!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String
  available: Boolean!
  firstName: String!
  lastName: String!
  description: String!
  socialAccounts: SocialAccountCreateManyInput
  jobsCreated: JobCreateManyInput
  tags: ScoredTagCreateManyInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  available_ASC
  available_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  createdByUserId_ASC
  createdByUserId_DESC
  updatedAt_ASC
  updatedAt_DESC
  updatedByUserId_ASC
  updatedByUserId_DESC
}

type UserPreviousValues {
  id: ID!
  email: String
  available: Boolean!
  firstName: String!
  lastName: String!
  description: String!
  createdAt: DateTime!
  createdByUserId: ID!
  updatedAt: DateTime
  updatedByUserId: ID!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  available: Boolean
  firstName: String
  lastName: String
  description: String
  socialAccounts: SocialAccountUpdateManyInput
  jobsCreated: JobUpdateManyInput
  tags: ScoredTagUpdateManyInput
}

input UserUpdateManyMutationInput {
  email: String
  available: Boolean
  firstName: String
  lastName: String
  description: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  available: Boolean
  available_not: Boolean
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  socialAccounts_every: SocialAccountWhereInput
  socialAccounts_some: SocialAccountWhereInput
  socialAccounts_none: SocialAccountWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  createdByUserId: ID
  createdByUserId_not: ID
  createdByUserId_in: [ID!]
  createdByUserId_not_in: [ID!]
  createdByUserId_lt: ID
  createdByUserId_lte: ID
  createdByUserId_gt: ID
  createdByUserId_gte: ID
  createdByUserId_contains: ID
  createdByUserId_not_contains: ID
  createdByUserId_starts_with: ID
  createdByUserId_not_starts_with: ID
  createdByUserId_ends_with: ID
  createdByUserId_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  updatedByUserId: ID
  updatedByUserId_not: ID
  updatedByUserId_in: [ID!]
  updatedByUserId_not_in: [ID!]
  updatedByUserId_lt: ID
  updatedByUserId_lte: ID
  updatedByUserId_gt: ID
  updatedByUserId_gte: ID
  updatedByUserId_contains: ID
  updatedByUserId_not_contains: ID
  updatedByUserId_starts_with: ID
  updatedByUserId_not_starts_with: ID
  updatedByUserId_ends_with: ID
  updatedByUserId_not_ends_with: ID
  tags_every: ScoredTagWhereInput
  tags_some: ScoredTagWhereInput
  tags_none: ScoredTagWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  createdByUserId: ID
  updatedByUserId: ID
}
`