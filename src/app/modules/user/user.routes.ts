import { PrismaClient } from "@prisma/client";
import express from "express";
import { userController } from "./user.controller";
const prisma = new PrismaClient();

const router = express.Router();

router.post("/create-user", userController.createUser);
router.get("/", userController.getAllUser);
router.get("/:userId", userController.getSingleUser);
router.patch("/:userId", userController.updateUser);
router.delete("/:userId", userController.deleteUser);

export const userRoutes = router;
