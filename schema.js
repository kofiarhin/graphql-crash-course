export const typeDefs = `#graphql

type User {
  id: ID!
name: String!
email: String!
password: String!
posts: [Post!]
}
type Book {
    id: ID
    title: String
    author: String
  }
  type Post {
    id: ID
    title: String
    user_id: String
    body: String
    user: User
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
    users: [User]
    user(id: ID!): User
    posts: [Post!]
    post(id: ID!): Post
  }
  
  type Mutation {
    deleteUser(id: ID!): [User]
    addUser(userData: UserInput!): [User]
    updateUser(id: ID!, userData: UpdateUserInput): [User]
  }

  input UserInput {
    name: String!,
    email: String!,
    password: String!
  }

  input UpdateUserInput {
    name: String
  email: String
  password: String

  }


`;
