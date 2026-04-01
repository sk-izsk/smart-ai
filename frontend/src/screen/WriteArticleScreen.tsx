import { Edit, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { GenerateResultCard } from "../components/GenerateResultCard";
import { Tags } from "../components/Tags";
import { TextInputCard } from "../components/TextInputCard";

const articleLength = [
  { Length: 800, text: "Short (500-800 words) " },
  { length: 1200, text: "Medium (800-1200 words)" },
  { length: 1600, text: "Long (1200+ words) " },
];

const WriteArticleScreen: React.FC = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-wrap items-start h-full gap-4 p-6 overflow-y-scroll text-slate-700">
      <TextInputCard handleSubmit={handleSubmit}>
        <TextInputCard.Title>
          <Sparkles className="w-6 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Article Configuration</h1>
        </TextInputCard.Title>
        <TextInputCard.Input
          placeholder="The future of AI is..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
          label="Article Topic"
        />
        <TextInputCard.Content>
          <p className="mt-4 text-sm font-medium">Article Length</p>
          <div className="flex flex-wrap gap-3 mt-3 sm:max-w-9/11">
            <Tags tags={articleLength.map((option) => option.text)} selectedTagColor="blue" />
          </div>
        </TextInputCard.Content>
        <TextInputCard.Button fromColor="#226BFF" toColor="#65ADFF">
          <Edit className="w-5" />
          Generate Article
        </TextInputCard.Button>
      </TextInputCard>

      <GenerateResultCard>
        <GenerateResultCard.Title>
          <Edit className="w-5 h-5 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Article insights</h1>
        </GenerateResultCard.Title>
        <GenerateResultCard.Content>
          <div className="flex items-center justify-center flex-1">
            <div className="flex flex-col items-center gap-5 text-sm text-gray-400">
              <Edit className="w-9 h-9" />
              <p>After generating the article, you can see the insights here.</p>
            </div>
          </div>
        </GenerateResultCard.Content>
      </GenerateResultCard>
    </div>
  );
};

export default WriteArticleScreen;
