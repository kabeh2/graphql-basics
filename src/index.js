import { GraphQLServer } from 'graphql-yoga';

// String, Boolean, Int, Float, ID

// Type definitions

const typeDefs = `
    type Query {
        title: String!
        price: Float!
        releaseYear: Int
        rating: Float
        inStock: Boolean!
    }
`;

// Resolvers

const resolvers = {
  Query: {
    title() {
      return 'NBA 2k50';
    },
    price() {
      return 49.99;
    },
    releaseYear() {
      return 2049;
    },
    rating() {
      return 9.1;
    },
    inStock() {
      return false;
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => console.log('The server is up!'));
