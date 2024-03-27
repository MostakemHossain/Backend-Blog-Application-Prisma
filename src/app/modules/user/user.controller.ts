import { Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.createUser(req.body);

    res.json({
      success: true,
      message: "User create successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: err,
    });
  }
};
const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUser(req.query);

    res.json({
      success: true,
      message: "get All users fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: err,
    });
  }
};

export const userController = {
  createUser,
  getAllUser,
};
