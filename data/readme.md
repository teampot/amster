
#Generate Client side data contracts
#Run the apollo server from /backend
-> node index.js
#In another terminal
-> apollo service:download --endpoint=http://localhost:4000/graphql

#Temp usage of apollo-codegen generate in /data folder https://www.apollographql.com/docs/react/features/developer-tooling.html

-> apollo-codegen generate .\client-query.js  --schema server-schema.json --target flow --output client-types.js

#To do: try to fix failing ->apollo client:codegen src/types --target=flow

