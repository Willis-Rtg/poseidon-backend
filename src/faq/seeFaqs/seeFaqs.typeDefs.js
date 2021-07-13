import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeFaqs(scope: String, term: String): [Faq]
  }
`;
