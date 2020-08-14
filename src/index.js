import { GraphQLServer } from 'graphql-yoga';
import db from './db';
import Query from './resolvers/query';
import Mutation from './resolvers/mutation';
import Post from './resolvers/post';
import Comment from './resolvers/comment';
import User from './resolvers/user';

// Resolvers
const resolvers = {
  Query,
  Mutation,
  User,
  Post,
  Comment,
};

const server = new GraphQLServer({
  typeDefs: `./src/schema.graphql`,
  resolvers,
  context: {
    db,
  },
});

server.start(() => console.log('The server is up!'));
