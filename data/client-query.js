const { gql } = require('apollo-server-express');


export const query = gql`
query RootQuery {
	me{id, firstName}
}

mutation RootMutation{
	upsertUser{id:id}
}
`;