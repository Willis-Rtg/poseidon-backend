import { gql } from "apollo-server";

export default gql`
  type Mutation {
    updateNotice(id: Int!, title: String, content: String): MutationResponse
  }
`;
