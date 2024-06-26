import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

const createUser = async (payload: any) => {
  const { user, password } = payload;
  const result = await prisma.user.create({
    data: { ...user, password },
  });
  return result;
};

const getAllUser = async (queryParams: any) => {
  const {
    q,
    limit = 2,
    sortOrder = "asc",
    sortBy = "username",
    page = 1,
    ...otherQuery
  } = queryParams;
  console.log(sortBy, sortOrder);
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
    orderBy: {
      [sortBy]: sortOrder,
    },
  });
  return result;
};

const getSingleUserFromDB = async (userId: string) => {
  const result = await prisma.user.findUniqueOrThrow({
    where: {
      id: userId,
    },
  });
  return result;
};
const updateUserFromDB = async (payload: Partial<User>, userId: string) => {
  const result = await prisma.user.update({
    where: {
      id: userId,
    },
    data: payload,
  });
  return result;
};

const deleteFromDb = async (userId: string) => {
  await prisma.user.delete({
    where: {
      id: userId,
    },
  });
};
export const userServices = {
  createUser,
  getAllUser,
  getSingleUserFromDB,
  updateUserFromDB,
  deleteFromDb,
};
