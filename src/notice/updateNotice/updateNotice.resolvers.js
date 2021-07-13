import client from "../../client";

export default {
  Mutation: {
    updateNotice: async (_, { id, title, content }, { loggedInUser }) => {
      if (!loggedInUser) return { ok: false, error: "Need log in" };
      const notice = await client.notice.findUnique({ where: { id } });
      if (!notice) return { ok: false, error: "Not found notice" };
      if (notice.authorId !== loggedInUser.id)
        return { ok: false, error: "Not Auther" };
      await client.notice.update({ where: { id }, data: { title, content } });
      return {
        ok: true,
      };
    },
  },
};
