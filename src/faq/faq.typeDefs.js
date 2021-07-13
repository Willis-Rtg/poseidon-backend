import { gql } from "apollo-server-express";

export default gql`
  type Faq {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    question: String!
    answer: String!
    author: User!
  }
`;
