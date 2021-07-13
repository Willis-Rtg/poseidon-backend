import client from "../../client";

export default {
  Query: {
    me: async (_, __, { loggedInUser }) => {
      if (!loggedInUser) return null;
      return await client.user.findUnique({ where: { id: loggedInUser.id } });
    },
  },
};
