import client from "../../client";

export default {
  Mutation: {
    deleteNotice: async (_, { id }, { loggedInUser }) => {
      if (!loggedInUser) return { ok: false, error: "Need log in" };
      const notice = await client.notice.findUnique({ where: { id } });
      if (!notice) return { ok: false, error: "The notice is not exsit" };
      await client.notice.delete({ where: { id } });
      return {
        ok: true,
      };
    },
  },
};
