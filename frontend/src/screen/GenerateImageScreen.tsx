import { Image, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { GenerateResultCard } from "../components/GenerateResultCard";
import { cn } from "../utils/tailwindClass";

const imageStyle = [
  "Realistic",
  "Ghibli style",
  "Anime style",
  "Cartoon style",
  "Fantasy style",
  "Realistic style",
  "3D style",
  "Portrait style",
];

const GenerateImageScreen: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState(imageStyle[0]);
  const [input, setInput] = useState("");
  const [publish, setPublish] = useState(false);

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
          <Sparkles className="w-6 text-[#00ad25]" />
          <h1 className="text-xl font-semibold">AI Image Generator</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Describe your image</p>
        <textarea
          rows={4}
          className="w-full p-2 px-3 mt-2 text-sm border border-gray-300 rounded-md outline-none"
          placeholder="What you want to see in the image"
          required
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <p className="mt-4 text-sm font-medium">Style</p>
        <div className="flex flex-wrap gap-3 mt-3 sm:max-w-9/11">
          {imageStyle.map((option) => (
            <span
              onClick={() => setSelectedStyle(option)}
              className={cn(`px-4 py-1 text-xs border rounded-full cursor-pointer`, {
                "bg-green-50 text-green-700": selectedStyle === option,
                "border-gray-300 text-gray-500": selectedStyle !== option,
              })}
              key={option}
            >
              {option}
            </span>
          ))}
        </div>
        <div className="my-6 flex items-center gap-2">
          <label className="relative cursor-pointer">
            <input
              type="checkbox"
              checked={publish}
              onChange={(e) => setPublish(e.target.checked)}
              className="sr-only peer"
              value={input}
            />
            <div className="w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition"></div>
            <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4"></span>
          </label>
          <p className="text-sm">Make this image public</p>
        </div>
        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00ad25] to-[#04ff50] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          <Image className="w-5" />
          Generate image
        </button>
      </form>

      <GenerateResultCard>
        <GenerateResultCard.Title>
          <Image className="w-5 h-5 text-[#00ad25]" />
          <h1 className="text-xl font-semibold">Generated images</h1>
        </GenerateResultCard.Title>
        <GenerateResultCard.Content>
          <div className="flex flex-col items-center gap-5 text-sm text-gray-400">
            <Image className="w-9 h-9" />
            <p>Enter a description and click "Generate image" to see the result.</p>
          </div>
        </GenerateResultCard.Content>
      </GenerateResultCard>
    </div>
  );
};

export default GenerateImageScreen;
