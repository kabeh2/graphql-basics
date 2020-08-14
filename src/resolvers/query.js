const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users;
    }

    return db.users.filter((user) => {
      return user.name.toLowerCase().includes(args.query.toLowerCase());
    });
  },
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    }

    return db.posts.filter((post) => {
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
  comments(parent, args, { db }, info) {
    if (!args.query) {
      return db.comments;
    }

    return db.comments.filter((comment) => {
      return comment.text.toLowerCase().includes(args.query.toLowerCase());
    });
  },
};

export default Query;
