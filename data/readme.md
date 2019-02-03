
# In '\data' folder
#Run apollo sverver to be able to get the latest schema if you edited it in gql
-> npm run server

#Download the schema from the server in another terminal
-> npm run download

#generate clint side contracts based on queries/mutations and server introspection schema (local, can be the running server version if url is used in apollo.config.js)
-> npm run types

