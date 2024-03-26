import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createUser = async (payload: any) => {
  const { user, password } = payload;
  const result = await prisma.user.create({
    data: { ...user, password },
  });
  return result;
};

const getAllUser = async () => {
  const result = await prisma.user.findMany();
  return result;
};

export const userServices = {
  createUser,
  getAllUser,
};
