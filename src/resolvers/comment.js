const Comment = {
  author(parent, args, { db }, info) {
    return db.users.find((user) => {
      return user.id === parent.author;
    });
  },
  posts(parent, args, { db }, info) {
    return db.posts.filter((post) => {
      return post.id === parent.posts;
    });
  },
};

export default Comment;
