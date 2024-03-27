import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
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

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: err.message || "Something went wrong",
    error: err,
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Opps! this url does not exists",
    path: req.originalUrl,
  });
});
export default app;
