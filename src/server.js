require("dotenv").config();
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { typeDefs, resolvers } from "./schema";
import { getUser } from "./users/user.utils";
import http from "http";

const PORT = process.env.PORT;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async (ctx) => {
    return {
      loggedInUser: await getUser(ctx.req.headers.token),
    };
  },
});
const app = express();
server.applyMiddleware({ app });

const httpServer = http.createServer(app);

httpServer.listen(PORT, () =>
  console.log(`🚀  Server ready at http://localhost:${PORT}/graphql`)
);
