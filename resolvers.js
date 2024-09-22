import { users, books, posts } from "./data/_db.js";

const resolvers = {
  Query: {
    users() {
      return users;
    },
    user(_, args) {
      return users.find((user) => user.id === args.id);
    },
    books() {
      return books;
    },
    book(_, args) {
      return { name: "king james" };
    },

    posts() {
      return posts;
    },
    post(_, args) {
      return posts.find((post) => post.id === args.id);
    },
  },

  Post: {
    user(parent) {
      return users.find((user) => user.id === parent.user_id);
    },
  },

  User: {
    posts(parent) {
      return posts.filter((post) => post.user_id === parent.id);
    },
  },
  Mutation: {
    deleteUser(_, args) {
      const newUsers = users.filter((user) => user.id !== args.id);
      console.log(newUsers);
      return newUsers;
    },
    addUser(_, args) {
      users.push(args.userData);
      return users;
    },

    updateUser(_, args) {
      const updatedUsers = users.map((user) => {
        if (user.id === args.id) {
          return { ...user, ...args.userData };
        }

        return user;
      });

      console.log(updatedUsers);
      return updatedUsers;
    },
  },
};

export default resolvers;
