import client from "../../client";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    createUser: async (_, { username, password, role }) => {
      try {
        const user = await client.user.findUnique({ where: { username } });
        if (user) return { ok: false, error: "The username already exist." };
        const uglypwd = bcrypt.hashSync(password, 10);
        await client.user.create({
          data: { username, password: uglypwd, role },
        });
        return { ok: true };
      } catch (error) {
        return { ok: false, error };
      }
    },
  },
};
