import cors from "cors";
import express, { Request, Response } from "express";
import { userRoutes } from "./app/modules/user/user.routes";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRoutes);
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello Blog app",
  });
});
export default app;
