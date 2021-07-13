import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    createUser(
      username: String!
      password: String!
      role: Role
    ): MutationResponse!
  }
`;
