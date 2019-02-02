#failing apollo client:codegen src/types --target=flow

#to download the latest schema, run server in
#.../backend
-> node index.js
#in another terminal
-> apollo service:download --endpoint=http://localhost:4000/graphql

https://www.apollographql.com/docs/react/features/developer-tooling.html
apollo-codegen generate .\query.js  --schema schema.json --target flow --output types.js
