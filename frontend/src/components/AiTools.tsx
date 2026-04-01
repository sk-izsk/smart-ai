import { useUser } from "@clerk/react";
import React from "react";
import { useNavigate } from "react-router";
import { AiToolsData } from "../mockData";
import { AiCard } from "./AiCard";

export const AiTools: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  return (
    <div className="px-4 sm:px-20 xl:px-32 my-24">
      <div className="text-center">
        <h2 className="text-slate-700 text-[42px] font-semibold">Powerful AI Tools</h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Everything you need to create, enhance, and optimize your content with cutting-edge AI
          technology.
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-10">
        {AiToolsData.map((tool) => (
          <AiCard key={tool.title} tool={tool} onClick={() => user && navigate(tool.path)} />
        ))}
      </div>
    </div>
  );
};
