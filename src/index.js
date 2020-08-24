import { GraphQLServer, PubSub } from 'graphql-yoga';
import db from './db';
import Query from './resolvers/query';
import Mutation from './resolvers/mutation';
import Subscription from './resolvers/Subscription';
import Post from './resolvers/post';
import Comment from './resolvers/comment';
import User from './resolvers/user';

const pubsub = new PubSub();

// Resolvers
const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Post,
  Comment,
};

const server = new GraphQLServer({
  typeDefs: `./src/schema.graphql`,
  resolvers,
  context: {
    db,
    pubsub,
  },
});

server.start(() => console.log('The server is up!'));
