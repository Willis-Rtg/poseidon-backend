import client from "../../client";

export default {
  Mutation: {
    deleteFaq: async (_, { id }, { loggedInUser }) => {
      if (!loggedInUser) return { ok: false, error: "Need log in" };
      const faq = await client.faq.findUnique({
        where: { id },
        select: { id: true, author: true },
      });
      if (!faq) return { ok: false, error: "Not found Faq" };
      if (faq.author.id !== loggedInUser.id || faq.author.role !== "ADMIN")
        return { ok: false, error: "You are not Admin" };
      await client.faq.delete({ where: { id } });
      return { ok: true };
    },
  },
};
