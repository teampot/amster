const { gql } = require('apollo-server-express');

export const user_mutation = gql`
mutation UserMutation {
	upsertUser{id:id}
}
`;