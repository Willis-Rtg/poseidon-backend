import client from "../../client";

export default {
  Mutation: {
    createNotice: async (_, { title, content }, { loggedInUser }) => {
      if (!loggedInUser) return { ok: false, error: "Need log in" };
      if (loggedInUser.role !== "ADMIN")
        return { ok: false, error: "This action is allowed to only Admin" };
      const notice = await client.notice.create({
        data: { title, content, author: { connect: { id: loggedInUser.id } } },
      });
      return { ok: true, id: notice.id };
    },
  },
};
