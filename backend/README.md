 
> **Note**:  The Application graphql schema hasn't been correctly added to the API graphql server.

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

### Publishing the data model

With the Prisma Server running, we can now publish the actual data model. To accomplish this, run

``` shell
prisma deploy
```

**Note**: As the [prisma.yml](./dal/prisma.yml) states, after a successful deployment, the prisma client will be automatically generated.

## Starting the Graphql backend server

In the command line, run

``` shell
node index.js
```
