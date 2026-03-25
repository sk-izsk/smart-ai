import { Eraser, Hash, Sparkles } from "lucide-react";
import React, { useState } from "react";

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

const RemoveBackgroundScreen: React.FC = () => {
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
          <Sparkles className="w-6 text-[#ff4938]" />
          <h1 className="text-xl font-semibold">Background Removal</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Keyword</p>
        <input
          type="file"
          className="w-full p-2 px-3 mt-2 text-sm border border-gray-300 rounded-md outline-none text-gray-600"
          required
          onChange={(e) => setInput(e.target?.files?.[0])}
          accept="image/*"
        />
        <p className="text-xs text-gray-500 font-light mt-1">
          Supports JPG, PNG , and other image formats
        </p>
        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#f6ab41] to-[#ff4938] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          <Eraser className="w-5" />
          Remove background
        </button>
      </form>
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
        <div className="flex items-center gap-3">
          <Eraser className="w-5 h-5 text-[#ff4938]" />
          <h1 className="text-xl font-semibold">Processed image</h1>
        </div>
        <div className="flex items-center justify-center flex-1">
          <div className="flex flex-col items-center gap-5 text-sm text-gray-400">
            <Eraser className="w-9 h-9" />
            <p>Upload an image and click "Remove background" to see the result.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveBackgroundScreen;
