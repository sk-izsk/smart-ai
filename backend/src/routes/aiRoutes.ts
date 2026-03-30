import express from "express";
import { upload } from "../config/multer";
import {
  generateArticle,
  generateBlogTitle,
  generateImage,
  removeImageBackground,
  removeImageObject,
  resumeReview,
} from "../controllers/aiController";
import { authMiddleware } from "../middlewares/auth";

const aiRouter = express.Router();

aiRouter.post("/generate-article", authMiddleware, generateArticle);
aiRouter.post("/generate-blog-title", authMiddleware, generateBlogTitle);
aiRouter.post("/generate-image", authMiddleware, generateImage);
aiRouter.post(
  "/remove-image-background",
  upload.single("image"),
  authMiddleware,
  removeImageBackground,
);
aiRouter.post("/remove-image-object", upload.single("image"), authMiddleware, removeImageObject);
aiRouter.post("/resume-review", upload.single("resume"), authMiddleware, resumeReview);

export default aiRouter;
