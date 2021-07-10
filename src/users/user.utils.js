import jwt from "jsonwebtoken";
import client from "../client";

export const getUser = async (token) => {
  if (!token) return null;
  const verifiedToken = await jwt.verify(token, process.env.JWT_SECRET);
  if ("id" in verifiedToken) {
    const user = await client.user.findUnique({
      where: { id: verifiedToken.id },
    });
    if (!user) return null;
    return user;
  } else return null;
};
