# Launching the backend server

Because we are using Prisma as a library to query the database, we first need to make sure the Prisma framework is correctly launched locally

## Setting up Prisma

First, install prisma 

``` shell
npm install -g prisma
```

Then, you need to install docker, so that you can launch both Prisma Server and MongoDB.

After docker is installed, run

``` shell
docker-compose up -d
```

As soon as both containers are running, you are ready to start the application API server.

## Starting the Graphql backend server

In the command line, run

``` shell
node index.js
```

____
### Note 

The Application graphql schema hasn't been correctly added to the API graphql server.
