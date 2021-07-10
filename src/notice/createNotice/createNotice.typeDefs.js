import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createNotice(title: String!, content: String!): MutationResponse
  }
`;
