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
    id: '20',
    text: 'Comment 1',
    author: '1',
    posts: '12',
  },
  {
    id: '21',
    text: 'Comment 2',
    author: '2',
    posts: '12',
  },
  {
    id: '22',
    text: 'Comment 3',
    author: '1',
    posts: '10',
  },
  {
    id: '23',
    text: 'Comment 4',
    author: '3',
    posts: '11',
  },
];

const db = {
  users,
  posts,
  comments,
};

export default db;
