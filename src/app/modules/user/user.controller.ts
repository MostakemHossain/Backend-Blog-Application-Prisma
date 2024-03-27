import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userServices.createUser(req.body);

    res.json({
      success: true,
      message: "User create successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userServices.getAllUser(req.query);

    res.json({
      success: true,
      message: "get All users fetched successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const userController = {
  createUser,
  getAllUser,
};
