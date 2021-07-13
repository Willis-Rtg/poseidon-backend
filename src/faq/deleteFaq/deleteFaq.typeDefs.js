import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    deleteFaq(id: Int!): MutationResponse
  }
`;
