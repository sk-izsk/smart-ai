import type { LucideProps } from "lucide-react";

// --- AI Tools Data Types ---
export interface AiTool {
  title: string;
  description: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >; // For Lucide icons
  bg: {
    from: string;
    to: string;
  };
  path: string;
}

// --- Testimonial Data Types ---
export interface Testimonial {
  image: string; // URL or static asset path
  name: string;
  title: string;
  content: string;
  rating: number; // 1-5
}

// --- Creation Data Types ---
// Defining the possible creation types for better autocomplete
export type CreationType =
  | "blog-title"
  | "article"
  | "image"
  | "remove-background"
  | "remove-object"
  | "review-resume";

export interface CreationData {
  id: number;
  user_id: string;
  prompt: string;
  content: string; // For images, this is the URL. For text, it's the generated string.
  type: CreationType;
  publish: boolean;
  likes: string[]; // Array of user IDs who liked
  created_at: string; // ISO Date string
  updated_at: string; // ISO Date string
  __v?: number; // Optional MongoDB version key
}
