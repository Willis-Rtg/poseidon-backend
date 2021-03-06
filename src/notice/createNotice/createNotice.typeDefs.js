import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    createNotice(title: String!, content: String!): createNoticeResult
  }
  type createNoticeResult {
    ok: Boolean!
    error: String
    id: Int
  }
`;
