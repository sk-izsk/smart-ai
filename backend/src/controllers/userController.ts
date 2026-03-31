import { Request, Response } from "express";
import { Creation } from "../entities/Creation";

export const getUserCreations = async (req: Request, res: Response) => {
  try {
    const { userId } = req.auth();
    const creations = await req.em?.find(
      Creation,
      { userId: userId },
      { orderBy: { createdAt: "DESC" } },
    );
    res.json({ success: true, creations });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};

export const getPublishedCreations = async (req: Request, res: Response) => {
  try {
    const creations = await req.em?.find(
      Creation,
      { publish: true },
      { orderBy: { createdAt: "DESC" } },
    );
    res.json({ success: true, creations });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};

export const toggleLikeCreation = async (req: Request, res: Response) => {
  try {
    const { userId } = req.auth();
    const { id } = req.body;
    const creation = await req.em?.findOne(Creation, { id });
    if (!creation) {
      return res.json({ success: false, message: "Creation not found" });
    }
    const likes = (creation as any).likes || [];
    const hasLiked = likes.includes(userId);
    let updatedLikes;
    let message;
    if (hasLiked) {
      updatedLikes = likes.filter((like: string) => like !== userId);
      message = "Creation unliked";
    } else {
      updatedLikes = [...likes, userId];
      message = "Creation liked";
    }
    (creation as any).likes = updatedLikes;
    if (req.em) {
      req.em.persist(creation);
      await req.em.flush();
    }
    res.json({ success: true, message });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};
