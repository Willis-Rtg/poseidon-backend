import { gql } from "apollo-server";

export default gql`
  enum Role {
    ADMIN
    USER
  }
  type User {
    id: Int!
    username: String!
    role: Role
    password: String!
    updatedAt: String!
    createdAt: String!
  }
`;
