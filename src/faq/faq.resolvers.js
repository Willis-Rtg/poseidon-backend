import client from "../client";

export default {
  Faq: {
    author: ({ id }) => client.faq.findUnique({ where: { id } }).author(),
  },
};
