import client from "../../client";

export default {
  Query: {
    seeFaqs: async (_, { scope, term }) => {
      let where;
      if (!scope || term === "") where = {};
      if (scope === "제목") {
        where = { question: { contains: term } };
      }
      if (scope === "내용") {
        where = { answer: { contains: term } };
      }
      if (scope === "제목+내용") {
        where = {
          OR: [
            { question: { contains: term } },
            { answer: { contains: term } },
          ],
        };
      }
      return await client.faq.findMany({ where });
    },
  },
};
