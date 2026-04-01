import { Eraser, FileText, Hash, Image, Scissors, SquarePen } from "lucide-react";
import { assets } from "./assets/assets";
import type { AiTool, CreationData, Testimonial } from "./types/data";

export const AiToolsData: AiTool[] = [
  {
    title: "AI Article Writer",
    description:
      "Generate high-quality, engaging articles on any topic with our AI writing technology.",
    Icon: SquarePen,
    bg: { from: "#3588F2", to: "#0BB0D7" },
    path: "/ai/write-article",
  },
  {
    title: "Blog Title Generator",
    description:
      "Find the perfect, catchy title for your blog posts with our AI-powered generator.",
    Icon: Hash,
    bg: { from: "#B153EA", to: "#E549A3" },
    path: "/ai/blog-titles",
  },
  {
    title: "AI Image Generation",
    description:
      "Create stunning visuals with our AI image generation tool, Experience the power of AI ",
    Icon: Image,
    bg: { from: "#20C363", to: "#11B97E" },
    path: "/ai/generate-images",
  },
  {
    title: "Background Removal",
    description: "Effortlessly remove backgrounds from your images with our AI-driven tool.",
    Icon: Eraser,
    bg: { from: "#F76C1C", to: "#F04A3C" },
    path: "/ai/remove-background",
  },
  {
    title: "Object Removal",
    description:
      "Remove unwanted objects from your images seamlessly with our AI object removal tool.",
    Icon: Scissors,
    bg: { from: "#5C6AF1", to: "#427DF5" },
    path: "/ai/remove-object",
  },
  {
    title: "Resume Reviewer",
    description:
      "Get your resume reviewed by AI to improve your chances of landing your dream job.",
    Icon: FileText,
    bg: { from: "#12B7AC", to: "#08B6CE" },
    path: "/ai/review-resume",
  },
];

export const dummyTestimonialData: Testimonial[] = [
  {
    image: assets.profile_img_1,
    name: "John Doe",
    title: "Marketing Director, TechCorp",
    content:
      "ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.",
    rating: 4,
  },
  {
    image: assets.profile_img_1,
    name: "Jane Smith",
    title: "Content Creator, TechCorp",
    content:
      "ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.",
    rating: 5,
  },
  {
    image: assets.profile_img_1,
    name: "David Lee",
    title: "Content Writer, TechCorp",
    content:
      "ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.",
    rating: 4,
  },
];

export const dummyCreationData: CreationData[] = [
  {
    id: 9,
    user_id: "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    prompt: "Generate a blog title for the keyword blog in the category Technology.",
    content: "Here are a few blog title options for a technology blog...",
    type: "blog-title",
    publish: false,
    likes: [],
    created_at: "2025-07-01T11:09:50.492Z",
    updated_at: "2025-07-01T11:09:50.492Z",
  },
  {
    id: 8,
    user_id: "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    prompt: "Generate a blog title for the keyword blog in the category General.",
    content: "Here are a few blog title options for a blog about blogs...",
    type: "blog-title",
    publish: false,
    likes: [],
    created_at: "2025-07-01T11:08:10.450Z",
    updated_at: "2025-07-01T11:08:10.450Z",
  },
  {
    id: 7,
    user_id: "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    prompt: "Write an article about AI With Coding in Short (500-800 word).",
    content: "## AI and Coding: A Symbiotic Partnership...",
    type: "article",
    publish: false,
    likes: [],
    created_at: "2025-07-01T11:07:51.312Z",
    updated_at: "2025-07-01T11:07:51.312Z",
  },
];

export const dummyPublishedCreationData: CreationData[] = [
  {
    id: 1,
    user_id: "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    prompt: "Generate an image of A Boy is on Boat , and fishing in the style Anime style.",
    content: assets.ai_gen_img_1,
    type: "image",
    publish: true,
    likes: ["user_2yMX02PRbyMtQK6PebpjnxvRNIA", "user_2yaW5EHzeDfQbXdAJWYFnZo2bje"],
    created_at: "2025-06-19T09:02:25.035Z",
    updated_at: "2025-06-19T09:58:37.552Z",
  },
  {
    id: 2,
    user_id: "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
    prompt: "Generate an image of A Boy Riding a bicycle...",
    content: assets.ai_gen_img_2,
    type: "image",
    publish: true,
    likes: ["user_2yMX02PRbyMtQK6PebpjnxvRNIA", "user_2yaW5EHzeDfQbXdAJWYFnZo2bje"],
    created_at: "2025-06-19T08:16:54.614Z",
    updated_at: "2025-06-19T09:58:40.072Z",
  },
  {
    id: 3,
    user_id: "user_2yaW5EHzeDfQbXdAJWYFnZo2bje",
    prompt: "Generate an image of a boy riding a car on sky...",
    content: assets.ai_gen_img_3,
    type: "image",
    publish: true,
    likes: ["user_2yaW5EHzeDfQbXdAJWYFnZo2bje"],
    created_at: "2025-06-23T11:29:23.351Z",
    updated_at: "2025-06-23T11:29:44.434Z",
    __v: 1,
  },
];
