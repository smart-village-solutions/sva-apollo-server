import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import mongoose from 'mongoose';

import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';
import { databaseLocation, mongooseOptions } from '../config';

const startServer = async () => {
  const app = express();
  const server = new ApolloServer({
    schema: makeExecutableSchema({
      typeDefs,
      resolvers,
    }),
  });

  server.applyMiddleware({ app });

  await mongoose.connect(databaseLocation, mongooseOptions);

  app.listen({ port: 4000 }, () =>
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    ),
  );
};

startServer();
