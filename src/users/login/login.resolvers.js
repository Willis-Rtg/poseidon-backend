import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
  Mutation: {
    login: async (_, { username, password }) => {
      try {
        const user = await client.user.findUnique({ where: { username } });
        if (!user) return { ok: false, error: "유저가 없습니다." };
        const match = bcrypt.compareSync(password, user.password);
        if (!match) return { ok: false, error: "비밀번호가 다릅니다." };

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

        return { ok: true, token };
      } catch (error) {
        return { ok: false, error };
      }
    },
  },
};
