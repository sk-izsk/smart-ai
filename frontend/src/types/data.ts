import type { LucideProps } from "lucide-react";

export interface AiTool {
  title: string;
  description: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  bg: {
    from: string;
    to: string;
  };
  path: string;
}

export interface Testimonial {
  image: string;
  name: string;
  title: string;
  content: string;
  rating: number;
}

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
  content: string;
  type: CreationType;
  publish: boolean;
  likes: string[];
  created_at: string;
  updated_at: string;
  __v?: number;
}
