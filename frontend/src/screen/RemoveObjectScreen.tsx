import { Scissors, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { FileInputCard } from "../components/FileInputCard";
import { GenerateResultCard } from "../components/GenerateResultCard";

const RemoveObjectScreen: React.FC = () => {
  const [object, setObject] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-wrap items-start h-full gap-4 p-6 overflow-y-scroll text-slate-700">
      <FileInputCard handleSubmit={handleSubmit}>
        <FileInputCard.Title>
          <Sparkles className="w-6 text-[#4a7aff]" />
          <h1 className="text-xl font-semibold">Original Image</h1>
        </FileInputCard.Title>
        <FileInputCard.Content>
          <p className="mt-6 text-sm font-medium">Describe Object name to remove</p>
          <textarea
            rows={4}
            className="w-full p-2 px-3 mt-2 text-sm border border-gray-300 rounded-md outline-none"
            placeholder="e.g, watch, spoon or any specific object in the image"
            required
            onChange={(e) => setObject(e.target.value)}
            value={object}
          />
        </FileInputCard.Content>
        <FileInputCard.Button fromColor="#417df6" toColor="#8E37EB">
          <Scissors className="w-5" />
          Remove Object
        </FileInputCard.Button>
      </FileInputCard>

      <GenerateResultCard>
        <GenerateResultCard.Title>
          <Scissors className="w-5 h-5 text-[#417df6]" />
          <h1 className="text-xl font-semibold">Processed image</h1>
        </GenerateResultCard.Title>
        <GenerateResultCard.Content>
          <div className="flex flex-col items-center gap-5 text-sm text-gray-400">
            <Scissors className="w-9 h-9" />
            <p>Upload an image and click "Remove Object" to see the result.</p>
          </div>
        </GenerateResultCard.Content>
      </GenerateResultCard>
    </div>
  );
};

export default RemoveObjectScreen;
