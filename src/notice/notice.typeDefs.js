import { gql } from "apollo-server";

export default gql`
  type Notice {
    id: Int!
    createdAt: String!
    updatedAt: String!
    title: String!
    author: User!
    content: String!
    views: Int!
  }
`;
