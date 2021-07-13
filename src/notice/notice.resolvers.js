import client from "../client";

export default {
  Notice: {
    author: ({ id }) => client.notice.findUnique({ where: { id } }).author(),
  },
};
