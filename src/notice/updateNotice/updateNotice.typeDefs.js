import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    updateNotice(id: Int!, title: String, content: String): MutationResponse
  }
`;
