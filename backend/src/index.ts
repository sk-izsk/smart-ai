import { clerkMiddleware, requireAuth } from "@clerk/express";
import cors from "cors";
import express from "express";
import { connectCloudinary } from "./config/cloudinary";
import { ENV } from "./config/env";
import aiRouter from "./routes/aiRoutes";
import userRouter from "./routes/userRoutes";

const port = Number(ENV.PORT ?? 3020);

const app = express();

(async () => {
  await connectCloudinary();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(clerkMiddleware());

  app.get("/", (req, res) => res.send("server is live!"));

  app.use(requireAuth());

  app.use("/api/ai", aiRouter);
  app.use("/api/user", userRouter);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})();
