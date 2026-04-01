import { Image, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { GenerateResultCard } from "../components/GenerateResultCard";
import { Tags } from "../components/Tags";
import { TextInputCard } from "../components/TextInputCard";

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
  const [input, setInput] = useState("");
  const [publish, setPublish] = useState(false);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-wrap items-start h-full gap-4 p-6 overflow-y-scroll text-slate-700">
      <TextInputCard handleSubmit={handleSubmit}>
        <TextInputCard.Title>
          <Sparkles className="w-6 text-[#00ad25]" />
          <h1 className="text-xl font-semibold">AI Image Generator</h1>
        </TextInputCard.Title>
        <TextInputCard.Input
          placeholder="What you want to see in the image"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          label="Describe your image"
        />
        <TextInputCard.Content>
          <p className="mt-4 text-sm font-medium">Style</p>
          <div className="flex flex-wrap gap-3 mt-3 sm:max-w-9/11">
            <Tags tags={imageStyle} selectedTagColor="green" />
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
        </TextInputCard.Content>
        <TextInputCard.Button fromColor="#00ad25" toColor="#04ff50">
          <Image className="w-5" />
          Generate image
        </TextInputCard.Button>
      </TextInputCard>

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
