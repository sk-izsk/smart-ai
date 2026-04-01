import { FileText, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { GenerateResultCard } from "../components/GenerateResultCard";

const ReviewResumeScreen: React.FC = () => {
  const [, setInput] = useState("");

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
          <Sparkles className="w-6 text-[#00da83]" />
          <h1 className="text-xl font-semibold">Resume Review</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Upload Resume</p>
        <input
          type="file"
          className="w-full p-2 px-3 mt-2 text-sm border border-gray-300 rounded-md outline-none text-gray-600"
          required
          onChange={(e) => setInput(e.target?.files?.[0]!.name || "")}
          accept="application/pdf"
        />
        <p className="text-xs text-gray-500 font-light mt-1">Supports pdf resume only</p>
        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00da83] to-[#009bb3] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          <FileText className="w-5" />
          Review Resume
        </button>
      </form>

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
