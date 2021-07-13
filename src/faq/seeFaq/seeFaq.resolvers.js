import client from "../../client";

export default {
  Query: {
    seeFaq: (_, { id }) => client.faq.findUnique({ where: { id } }),
  },
};
