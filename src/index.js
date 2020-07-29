import { GraphQLServer } from 'graphql-yoga';

// Scalar types - String, Boolean, Int, Float, ID

// Demo user data
const users = [
  {
    id: '1',
    name: 'Andrew',
    email: 'andrew@examples.com',
    age: 27,
  },
  {
    id: '2',
    name: 'Andy',
    email: 'andy@examples.com',
    age: 72,
  },
  {
    id: '3',
    name: 'Ann',
    email: 'ann@examples.com',
    age: 23,
  },
];

const posts = [
  {
    id: '10',
    title: 'Title 1',
    body: 'Random text 1...',
    published: false,
    author: '1',
  },
  {
    id: '11',
    title: 'Title 2',
    body: 'Random text 2...',
    published: true,
    author: '1',
  },
  {
    id: '12',
    title: 'Title 3',
    body: 'Random text 3...',
    published: false,
    author: '2',
  },
];

const comments = [
  {
    id: 20,
    text: 'Comment 1',
    author: '1',
    posts: '12',
  },
  {
    id: 21,
    text: 'Comment 2',
    author: '2',
    posts: '12',
  },
  {
    id: 22,
    text: 'Comment 3',
    author: '1',
    posts: '10',
  },
  {
    id: 23,
    text: 'Comment 4',
    author: '3',
    posts: '11',
  },
];
// Type definitions

const typeDefs = `
    type Query {
        users(query: String): [User!]!
        posts(query: String): [Post!]!
        me: User!
        post: Post!
        comments(query: String): [Comment!]!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
        posts: [Post!]!
        comments: [Comment!]!
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
        author: User!
        comments: [Comment!]!
    }

    type Comment {
        id: ID!
        text: String!
        author: User!
        posts: [Post!]!
    }
`;

// Resolvers

const resolvers = {
  Query: {
    users(parent, args, ctx, info) {
      if (!args.query) {
        return users;
      }

      return users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts;
      }

      return posts.filter((post) => {
        const isTitleMatch = post.title
          .toLowerCase()
          .includes(args.query.toLowerCase());
        const isBodyMatch = post.body
          .toLowerCase()
          .includes(args.query.toLowerCase());
        return isTitleMatch || isBodyMatch;
      });
    },
    me() {
      return {
        id: '123098',
        name: 'Mike',
        email: 'mike@example.com',
        age: 28,
      };
    },
    post() {
      return {
        id: '123434',
        title: 'Test Title',
        body: 'Lorem ipsum afsadfsad...',
        published: false,
      };
    },
    comments(parent, args, ctx, info) {
      if (!args.query) {
        return comments;
      }

      return comments.filter((comment) => {
        return comment.text.toLowerCase().includes(args.query.toLowerCase());
      });
    },
  },
  Post: {
    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id === parent.author;
      });
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => {
        return comment.posts === parent.id;
      });
    },
  },
  User: {
    posts(parent, args, ctx, info) {
      return posts.filter((post) => {
        return post.author === parent.id;
      });
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => {
        return comment.author === parent.id;
      });
    },
  },
  Comment: {
    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id === parent.author;
      });
    },
    posts(parent, args, ctx, info) {
      return posts.filter((post) => {
        return post.id === parent.posts;
      });
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => console.log('The server is up!'));
