import { clerkClient } from "@clerk/express";
import { GoogleGenAI } from "@google/genai";
import axios from "axios";
import { v2 as cloudinary } from "cloudinary";
import { Request, Response } from "express";
import fs from "fs";
import OpenAI from "openai";
import pdf from "pdf-parse";
import { ENV } from "../config/env";
import { Creation } from "../entities/Creation";

const AI = new OpenAI({
  apiKey: ENV.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

const ai = new GoogleGenAI({ apiKey: ENV.GEMINI_API_KEY });

export const generateArticle = async (req: Request, res: Response) => {
  try {
    const { userId } = req.auth();
    const { prompt, length } = req.body || {};
    console.log("length: ", length);
    console.log("prompt: ", prompt);
    const plan = req.plan;
    const free_usage = req?.free_usage;
    if (plan !== "premium" && free_usage && free_usage >= 10) {
      return res.json({ success: false, message: "Limit reached. Upgrade to continue." });
    }
    console.log("tick");
    // const response = await AI.chat.completions.create({
    //   model: "gemini-2.0-flash",
    //   messages: [
    //     {
    //       role: "user",
    //       content: prompt,
    //     },
    //   ],
    //   temperature: 0.7,
    //   max_tokens: length,
    // });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      // @ts-expect-error
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: length || 500, // This is your max_tokens
      },

      // temperature: 0.7,
      // maxOutputTokens: length,
    });
    const content = response.text;
    const creation = req.em?.create(Creation, {
      user_id: userId,
      prompt,
      content,
      type: "article",
    });
    if (req.em && creation) {
      req.em.persist(creation);
      await req.em.flush();
    }

    if (plan !== "premium") {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: { free_usage: free_usage ? free_usage + 1 : 1 },
      });
    }

    res.json({ success: true, content });
  } catch (error) {
    console.error("Error generating article:", error);
    res.json({ success: false, message: error });
  }
};

export const generateBlogTitle = async (req: Request, res: Response) => {
  try {
    const { userId } = req.auth();
    const { prompt } = req.body || {};
    console.log("prompt: ", prompt);
    const plan = req.plan;
    const free_usage = req?.free_usage;
    if (plan !== "premium" && free_usage && free_usage >= 10) {
      return res.json({ success: false, message: "Limit reached. Upgrade to continue." });
    }
    console.log("tick");

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Explain how AI works in a few words",
      // @ts-expect-error
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 100, // This is your max_tokens
      },
    });
    const content = response.text;
    const creation = req.em?.create(Creation, {
      user_id: userId,
      prompt,
      content,
      type: "blog-title",
    });
    if (req.em && creation) {
      req.em.persist(creation);
      await req.em.flush();
    }

    if (plan !== "premium") {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: { free_usage: free_usage ? free_usage + 1 : 1 },
      });
    }

    res.json({ success: true, content });
  } catch (error) {
    console.error("Error generating article:", error);
    res.json({ success: false, message: error });
  }
};

export const generateImage = async (req: Request, res: Response) => {
  try {
    const { userId } = req.auth();
    const { prompt, publish } = req.body || {};
    console.log("prompt: ", prompt);
    const plan = req.plan;
    if (plan !== "premium") {
      return res.json({
        success: false,
        message: "This feature is only available for premium user",
      });
    }
    console.log("tick");

    const formData = new FormData();
    formData.append("prompt", prompt);
    const { data } = await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
      headers: {
        "x-api-key": ENV.CLIPBOARD_API_KEY,
        responseType: "arraybuffer",
      },
    });

    const base64Image = `data:image/png;base64,${Buffer.from(data, "binary").toString("base64")}`;

    const { secure_url } = await cloudinary.uploader.upload(base64Image);

    // const response = await ai.models.generateContent({
    //   model: "gemini-3-flash-preview",
    //   contents: "Explain how AI works in a few words",
    //   // @ts-expect-error
    //   generationConfig: {
    //     temperature: 0.7,
    //     maxOutputTokens: 100, // This is your max_tokens
    //   },
    // });
    // const content = response.text;
    const creation = req.em?.create(Creation, {
      user_id: userId,
      prompt,
      content: secure_url,
      type: "image",
      publish: publish ?? false,
    });
    if (req.em && creation) {
      req.em.persist(creation);
      await req.em.flush();
    }

    res.json({ success: true, content: secure_url });
  } catch (error) {
    console.error("Error generating article:", error);
    res.json({ success: false, message: error });
  }
};

export const removeImageBackground = async (req: Request, res: Response) => {
  try {
    const { userId } = req.auth();
    // @ts-expect-error
    const { image } = req.file || {};
    console.log("prompt: ", prompt);
    const plan = req.plan;
    if (plan !== "premium") {
      return res.json({
        success: false,
        message: "This feature is only available for premium user",
      });
    }
    console.log("tick");

    // const formData = new FormData();
    // formData.append("prompt", prompt);
    // const { data } = await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
    //   headers: {
    //     "x-api-key": ENV.CLIPBOARD_API_KEY,
    //     responseType: "arraybuffer",.
    //   },
    // });

    // const base64Image = `data:image/png;base64,${Buffer.from(data, "binary").toString("base64")}`;

    const { secure_url } = await cloudinary.uploader.upload(image.path, {
      transformation: [
        {
          effect: "background_removal",
          background_removal: "remove_the_background",
        },
      ],
    });

    // const response = await ai.models.generateContent({
    //   model: "gemini-3-flash-preview",
    //   contents: "Explain how AI works in a few words",
    //   // @ts-expect-error
    //   generationConfig: {
    //     temperature: 0.7,
    //     maxOutputTokens: 100, // This is your max_tokens
    //   },
    // });
    // const content = response.text;
    const creation = req.em?.create(Creation, {
      user_id: userId,
      prompt: "Remove background from image",
      content: secure_url,
      type: "image",
    });
    if (req.em && creation) {
      req.em.persist(creation);
      await req.em.flush();
    }

    res.json({ success: true, content: secure_url });
  } catch (error) {
    console.error("Error generating article:", error);
    res.json({ success: false, message: error });
  }
};

export const removeImageObject = async (req: Request, res: Response) => {
  try {
    const { userId } = req.auth();
    // @ts-expect-error
    const { image } = req.file || {};
    const { object } = req.body || {};
    console.log("prompt: ", prompt);
    const plan = req.plan;

    if (plan !== "premium") {
      return res.json({
        success: false,
        message: "This feature is only available for premium user",
      });
    }
    console.log("tick");

    // const formData = new FormData();
    // formData.append("prompt", prompt);
    // const { data } = await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
    //   headers: {
    //     "x-api-key": ENV.CLIPBOARD_API_KEY,
    //     responseType: "arraybuffer",.
    //   },
    // });

    // const base64Image = `data:image/png;base64,${Buffer.from(data, "binary").toString("base64")}`;

    const { public_id } = await cloudinary.uploader.upload(image.path);

    const imageUrl = cloudinary.url(public_id, {
      transformation: [
        {
          effect: `gen_remove:${object}`,
        },
      ],
      resource_type: "image",
    });

    // const response = await ai.models.generateContent({
    //   model: "gemini-3-flash-preview",
    //   contents: "Explain how AI works in a few words",
    //   // @ts-expect-error
    //   generationConfig: {
    //     temperature: 0.7,
    //     maxOutputTokens: 100, // This is your max_tokens
    //   },
    // });
    // const content = response.text;
    const creation = req.em?.create(Creation, {
      user_id: userId,
      prompt: `Remove ${object} from image`,
      content: imageUrl,
      type: "image",
    });
    if (req.em && creation) {
      req.em.persist(creation);
      await req.em.flush();
    }

    res.json({ success: true, content: imageUrl });
  } catch (error) {
    console.error("Error generating article:", error);
    res.json({ success: false, message: error });
  }
};

export const resumeReview = async (req: Request, res: Response) => {
  try {
    const { userId } = req.auth();
    const resume = req.file || {};
    const plan = req.plan;

    if (plan !== "premium") {
      return res.json({
        success: false,
        message: "This feature is only available for premium user",
      });
    }
    console.log("tick");

    // const formData = new FormData();
    // formData.append("prompt", prompt);
    // const { data } = await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
    //   headers: {
    //     "x-api-key": ENV.CLIPBOARD_API_KEY,
    //     responseType: "arraybuffer",.
    //   },
    // });

    // const base64Image = `data:image/png;base64,${Buffer.from(data, "binary").toString("base64")}`;

    // @ts-expect-error
    if (resume.size > 5 * 1024 * 1024) {
      return res.json({
        success: false,
        message: "File size exceeds the 5MB limit.",
      });
    }
    // @ts-expect-error
    const dataBuffer = fs.readFileSync(resume.path);

    // @ts-expect-error
    const pdfData = await pdf(dataBuffer);

    const prompt = `Review the following resume and provide constructive feedback on its strengths, weaknesses, and areas for improvement Resume Content: \n\n${pdfData.text}`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      // @ts-expect-error
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000, // This is your max_tokens
      },
    });
    const content = response.text;

    const creation = req.em?.create(Creation, {
      user_id: userId,
      prompt: "Review the resume",
      content,
      type: "resume-review",
    });
    if (req.em && creation) {
      req.em.persist(creation);
      await req.em.flush();
    }

    res.json({ success: true, content });
  } catch (error) {
    console.error("Error generating article:", error);
    res.json({ success: false, message: error });
  }
};
