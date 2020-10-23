const { gql } = require("apollo-server");
module.exports = gql`
  type User {
    userName: String!
    email: String!
    token:String
    createdAt:String
  }
  type Query {
    getUser: [User]!
    login(userName:String!,password:String!):User!
  }
  type Mutation {
    register(
      userName: String!,
      email: String!,
      password: String!,
      confirmPassword: String!
    ): User!
  }
`;
