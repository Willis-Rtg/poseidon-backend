import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createUser(
      username: String!
      password: String!
      role: Role
    ): MutationResponse!
  }
`;
