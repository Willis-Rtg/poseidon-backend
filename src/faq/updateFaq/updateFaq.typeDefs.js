import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    updateFaq(id: Int!, question: String, answer: String): MutationResponse!
  }
`;
