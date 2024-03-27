import { Request, Response } from "express";
import { catchAsync } from "../../../shared/CatchAsync";
import { userServices } from "./user.service";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.createUser(req.body);
  res.json({
    success: true,
    message: "User create successfully",
    data: result,
  });
});
const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.getAllUser(req.query);

  res.json({
    success: true,
    message: "get All users fetched successfully",
    data: result,
  });
});
const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.getSingleUserFromDB(req.params.userId);

  res.json({
    success: true,
    message: "get single user fetched successfully",
    data: result,
  });
});
const updateUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.updateUserFromDB(
    req.body,
    req.params.userId
  );

  res.json({
    success: true,
    message: "update User successfully",
    data: result,
  });
});
const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.deleteFromDb(req.params.userId);

  res.json({
    success: true,
    message: "delete User successfully",
    data: null,
  });
});

export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
