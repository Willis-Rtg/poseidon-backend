import { gql } from "apollo-server-express";

export default gql`
  type Notice {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String!
    author: User!
    content: String!
    views: Int!
  }
`;
