import { Edit, Hash, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { cn } from "../utils/tailwindClass";

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
  const [selectedCategory, setSelectedCategory] = useState(blogCategories[0]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-wrap items-start h-full gap-4 p-6 overflow-y-scroll text-slate-700">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#8e37eb]" />
          <h1 className="text-xl font-semibold">AI title Generator</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Keyword</p>
        <input
          type="text"
          className="w-full p-2 px-3 mt-2 text-sm border border-gray-300 rounded-md outline-none"
          placeholder="The future of AI is..."
          required
          onChange={(e) => setInput(e.target.value)}
        />
        <p className="mt-4 text-sm font-medium">Category</p>
        <div className="flex flex-wrap gap-3 mt-3 sm:max-w-9/11">
          {blogCategories.map((option) => (
            <span
              onClick={() => setSelectedCategory(option)}
              className={cn(`px-4 py-1 text-xs border rounded-full cursor-pointer`, {
                "bg-purple-50 text-purple-700": selectedCategory === option,
                "border-gray-300 text-gray-500": selectedCategory !== option,
              })}
              key={option}
            >
              {option}
            </span>
          ))}
        </div>
        <br />
        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#C341F6] to-[#8E37EB] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          <Hash className="w-5" />
          Generate title
        </button>
      </form>
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
        <div className="flex items-center gap-3">
          <Hash className="w-5 h-5 text-[#8e37eb]" />
          <h1 className="text-xl font-semibold">Generated titles</h1>
        </div>
        <div className="flex items-center justify-center flex-1">
          <div className="flex flex-col items-center gap-5 text-sm text-gray-400">
            <Hash className="w-9 h-9" />
            <p>Enter a topic and click "Generate title" to see the result.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitlesScreen;
