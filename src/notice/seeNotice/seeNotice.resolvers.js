import client from "../../client";

export default {
  Query: {
    seeNotice: async (_, { id }) => {
      const notice = await client.notice.findUnique({ where: { id } });
      if (!notice) throw new Error("Not found Notice");
      await client.notice.update({
        where: { id },
        data: { views: notice.views + 1 },
      });
      return notice;
    },
  },
};
