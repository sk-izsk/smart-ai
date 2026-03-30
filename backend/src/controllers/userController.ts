import { Request, Response } from "express";
import { sql } from "../config/db";

export const getUserCreations = async (req: Request, res: Response) => {
  try {
    const { userId } = req.auth();
    const creations =
      await sql`SELECT * FROM creations WHERE user_id = ${userId} ORDER BY created_at DESC`;
    res.json({ success: true, creations });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};

export const getPublishedCreations = async (req: Request, res: Response) => {
  try {
    const creations =
      await sql`SELECT * FROM creations WHERE publish = true ORDER BY created_at DESC`;
    res.json({ success: true, creations });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};

export const toggleLikeCreation = async (req: Request, res: Response) => {
  try {
    const { userId } = req.auth();
    const { id } = req.body;
    const [creation] = await sql`SELECT * FROM creations WHERE id = ${id}`;
    if (!creation) {
      return res.json({ success: false, message: "Creation not found" });
    }
    const likes = creation.likes || [];
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

    const formattedArray = `{${updatedLikes.join(",")}}`;

    await sql`UPDATE creations SET likes = ${formattedArray}::text[] WHERE id = ${id}`;

    // const creations =
    //   await sql`SELECT * FROM creations WHERE publish = true ORDER BY created_at DESC`;
    res.json({ success: true, message });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};
