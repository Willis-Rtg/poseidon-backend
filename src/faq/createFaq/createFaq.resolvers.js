import client from "../../client";

export default {
  Mutation: {
    createFaq: async (_, { question, answer }, { loggedInUser }) => {
      if (!loggedInUser) return { ok: false, error: "Need log in" };
      if (loggedInUser.role !== "ADMIN")
        return { ok: false, error: "You are not Admin" };
      const faq = await client.faq.create({
        data: {
          question,
          answer,
          author: { connect: { id: loggedInUser.id } },
        },
      });
      return { ok: true, id: faq.id };
    },
  },
};
