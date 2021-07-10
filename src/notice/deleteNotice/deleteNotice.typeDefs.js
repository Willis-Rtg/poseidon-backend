import { gql } from "apollo-server";

export default gql`
  type Mutation {
    deleteNotice(id: Int!): MutationResponse
  }
`;
