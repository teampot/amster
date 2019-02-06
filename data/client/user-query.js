// @flow
const { gql } = require('apollo-server-express');

export const user_query = gql`
query UserQuery {
	me{id, firstName}
}
`;