require("dotenv").config();
import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./schema";
import { getUser } from "./users/user.utils";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async (ctx) => {
    return {
      loggedInUser: await getUser(ctx.req.headers.token),
    };
  },
});

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
