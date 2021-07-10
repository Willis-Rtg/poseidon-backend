import client from "../../client";

export default {
  Mutation: {
    createNotice: async (_, { title, content }, { loggedInUser }) => {
      if (!loggedInUser) return { ok: false, error: "Need log in" };
      if (loggedInUser.role !== "ADMIN")
        return { ok: false, error: "This action is allowed to Admin" };
      const notice = await client.notice.create({
        data: { title, content, user: { connect: { id: loggedInUser.id } } },
      });
      return { ok: true };
    },
  },
};
