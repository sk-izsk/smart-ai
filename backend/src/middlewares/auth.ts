import { clerkClient } from "@clerk/express";
import type { NextFunction, Request, Response } from "express";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const auth = req.auth();

    if (!auth || !auth.userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { userId, has } = auth;

    // ✅ has() is synchronous — no await needed
    const hasPremiumPlan = has({ plan: "premium" });

    const user = await clerkClient.users.getUser(userId);

    const privateMetadata = user.privateMetadata as { free_usage?: number };
    const freeUsage = privateMetadata.free_usage;

    if (!hasPremiumPlan && freeUsage && freeUsage > 0) {
      req.free_usage = freeUsage;
      req.plan = "free";
    } else {
      if (freeUsage !== 0) {
        await clerkClient.users.updateUserMetadata(userId, {
          privateMetadata: { free_usage: 0 },
        });
      }
      req.free_usage = 0;
      req.plan = hasPremiumPlan ? "premium" : "free";
    }

    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
