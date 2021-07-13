import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    login(username: String!, password: String!): LoginResponse!
  }
  type LoginResponse {
    ok: Boolean!
    error: String
    token: String
  }
`;
