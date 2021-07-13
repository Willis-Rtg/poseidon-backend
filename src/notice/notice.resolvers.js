import client from "../client";
import { GraphQLDateTime } from "graphql-iso-date";

export default {
  Notice: {
    author: ({ id }) => client.notice.findUnique({ where: { id } }).author(),
  },
  DateTime: GraphQLDateTime,
};
