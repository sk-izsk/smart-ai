import express from "express";
import {
  getPublishedCreations,
  getUserCreations,
  toggleLikeCreation,
} from "../controllers/userController";
import { authMiddleware } from "../middlewares/auth";

const userRouter = express.Router();

userRouter.get("/get-user-creations", authMiddleware, getUserCreations);
userRouter.get("/get-published-creations", authMiddleware, getPublishedCreations);
userRouter.post("/toggle-like-creation", authMiddleware, toggleLikeCreation);

export default userRouter;
