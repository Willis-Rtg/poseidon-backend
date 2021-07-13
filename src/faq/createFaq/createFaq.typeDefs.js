import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    createFaq(question: String!, answer: String!): createFaqResult
  }
  type createFaqResult {
    ok: Boolean!
    error: String
    id: Int
  }
`;
