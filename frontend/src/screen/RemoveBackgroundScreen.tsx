import { Eraser, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { FileInputCard } from "../components/FileInputCard";
import { GenerateResultCard } from "../components/GenerateResultCard";

const RemoveBackgroundScreen: React.FC = () => {
  const [, setInput] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-wrap items-start h-full gap-4 p-6 overflow-y-scroll text-slate-700">
      <FileInputCard handleSubmit={handleSubmit}>
        <FileInputCard.Title>
          <Sparkles className="w-6 text-[#ff4938]" />
          <h1 className="text-xl font-semibold">Original Image</h1>
        </FileInputCard.Title>
        <FileInputCard.FileInput
          label="Upload Image"
          onChange={(e) => setInput(e.target?.files?.[0]!.name || "")}
          accept="image/*"
          suffix={
            <p className="text-xs text-gray-500 font-light mt-1">
              Supports JPG, PNG , and other image formats
            </p>
          }
        />
        <FileInputCard.Button fromColor="#f6ab41" toColor="#ff4938">
          <Eraser className="w-5" />
          Remove background
        </FileInputCard.Button>
      </FileInputCard>

      <GenerateResultCard>
        <GenerateResultCard.Title>
          <Eraser className="w-5 h-5 text-[#ff4938]" />
          <h1 className="text-xl font-semibold">Processed image</h1>
        </GenerateResultCard.Title>
        <GenerateResultCard.Content>
          <div className="flex flex-col items-center gap-5 text-sm text-gray-400">
            <Eraser className="w-9 h-9" />
            <p>Upload an image and click "Remove background" to see the result.</p>
          </div>
        </GenerateResultCard.Content>
      </GenerateResultCard>
    </div>
  );
};

export default RemoveBackgroundScreen;
