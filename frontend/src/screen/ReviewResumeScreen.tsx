import { FileText, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { FileInputCard } from "../components/FileInputCard";
import { GenerateResultCard } from "../components/GenerateResultCard";

const ReviewResumeScreen: React.FC = () => {
  const [, setInput] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-wrap items-start h-full gap-4 p-6 overflow-y-scroll text-slate-700">
      <FileInputCard handleSubmit={handleSubmit}>
        <FileInputCard.Title>
          <Sparkles className="w-6 text-[#00da83]" />
          <h1 className="text-xl font-semibold">Resume Review</h1>
        </FileInputCard.Title>
        <FileInputCard.FileInput
          label="Upload Resume"
          onChange={(e) => setInput(e.target?.files?.[0]!.name || "")}
          accept="application/pdf"
          suffix={<p className="text-xs text-gray-500 font-light mt-1">Supports pdf resume only</p>}
        />
        <FileInputCard.Button fromColor="#00da83" toColor="#009bb3">
          <FileText className="w-5" />
          Review Resume
        </FileInputCard.Button>
      </FileInputCard>

      <GenerateResultCard>
        <GenerateResultCard.Title>
          <FileText className="w-5 h-5 text-[#00da83]" />
          <h1 className="text-xl font-semibold">Analysis Results</h1>
        </GenerateResultCard.Title>
        <GenerateResultCard.Content>
          <div className="flex items-center justify-center flex-1">
            <div className="flex flex-col items-center gap-5 text-sm text-gray-400">
              <FileText className="w-9 h-9" />
              <p>Upload a resume and click "Review Resume" to see the result.</p>
            </div>
          </div>
        </GenerateResultCard.Content>
      </GenerateResultCard>
    </div>
  );
};

export default ReviewResumeScreen;
