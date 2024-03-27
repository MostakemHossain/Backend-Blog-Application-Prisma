import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createUser = async (payload: any) => {
  const { user, password } = payload;
  const result = await prisma.user.create({
    data: { ...user, password },
  });
  return result;
};

const getAllUser = async (queryParams: any) => {
  const { q } = queryParams;
  const conditions = [];
  if (q) {
    conditions.push({
      OR: ["username", "email"].map((field) => ({
        [field]: {
          contains: q,
        },
      })),
    });
  }
  const result = await prisma.user.findMany({
    where: { AND: conditions },
  });
  return result;
};

export const userServices = {
  createUser,
  getAllUser,
};
