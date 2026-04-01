import { Hash, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { GenerateResultCard } from "../components/GenerateResultCard";
import { Tags } from "../components/Tags";
import { TextInputCard } from "../components/TextInputCard";

const blogCategories = [
  "General",
  "Technology",
  "Business",
  "Health",
  "Travel",
  "Food",
  "Lifestyle",
  "Education",
  "Finance",
  "Entertainment",
  "Sports",
];

const BlogTitlesScreen: React.FC = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-wrap items-start h-full gap-4 p-6 overflow-y-scroll text-slate-700">
      <TextInputCard handleSubmit={handleSubmit}>
        <TextInputCard.Title>
          <Sparkles className="w-6 text-[#8e37eb]" />
          <h1 className="text-xl font-semibold">AI title Generator</h1>
        </TextInputCard.Title>
        <TextInputCard.Input
          placeholder="The future of AI is..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
          label="Keyword"
        />
        <TextInputCard.Content>
          <p className="mt-4 text-sm font-medium">Category</p>
          <div className="flex flex-wrap gap-3 mt-3 sm:max-w-9/11">
            <Tags tags={blogCategories} selectedTagColor="purple" />
          </div>
        </TextInputCard.Content>
        <TextInputCard.Button fromColor="#C341F6" toColor="#8E37EB">
          <Hash className="w-5" />
          Generate title
        </TextInputCard.Button>
      </TextInputCard>
      <GenerateResultCard>
        <GenerateResultCard.Title>
          <Hash className="w-5 h-5 text-[#8e37eb]" />
          <h1 className="text-xl font-semibold">Generated titles</h1>
        </GenerateResultCard.Title>
        <GenerateResultCard.Content>
          <div className="flex flex-col items-center gap-5 text-sm text-gray-400">
            <Hash className="w-9 h-9" />
            <p>Enter a topic and click "Generate title" to see the result.</p>
          </div>
        </GenerateResultCard.Content>
      </GenerateResultCard>
    </div>
  );
};

export default BlogTitlesScreen;
