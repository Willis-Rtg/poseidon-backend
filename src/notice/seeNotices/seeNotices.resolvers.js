import client from "../../client";

export default {
  Query: {
    seeNotices: () => client.notice.findMany(),
  },
};
