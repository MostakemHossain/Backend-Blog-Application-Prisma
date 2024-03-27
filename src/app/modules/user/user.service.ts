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
  const { q, limit, page, ...otherQuery } = queryParams;
  const conditions = [];
  if (q) {
    conditions.push({
      OR: ["username", "email"].map((field) => ({
        [field]: {
          contains: q,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(otherQuery).length > 0) {
    const filterData = Object.keys(otherQuery).map((key) => ({
      [key]: otherQuery[key],
    }));
    conditions.push(...filterData);
  }
  const result = await prisma.user.findMany({
    where: { AND: conditions },
    skip: (Number(page) - 1) * limit,
    take: Number(limit),
  });
  return result;
};

export const userServices = {
  createUser,
  getAllUser,
};
