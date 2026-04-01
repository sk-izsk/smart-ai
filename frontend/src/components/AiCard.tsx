import React from "react";
import type { AiTool } from "../types/data";

interface RootProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

interface IconProps {
  Icon: AiTool["Icon"];
  bg: AiTool["bg"];
}

interface TitleProps {
  children: React.ReactNode;
}

interface DescriptionProps {
  children: React.ReactNode;
}

interface AiCardProps {
  tool: AiTool;
  onClick?: () => void;
  disabled?: boolean;
}

const Root: React.FC<RootProps> = ({ children, onClick, disabled = false }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="group p-8 m-4 max-w-xs text-left rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};

const Icon: React.FC<IconProps> = ({ Icon, bg }) => {
  return (
    <Icon
      className="w-12 h-12 p-3 text-white rounded-xl"
      style={{
        background: `linear-gradient(to bottom, ${bg.from}, ${bg.to})`,
      }}
    />
  );
};

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h3 className="text-lg font-semibold mt-6 mb-3">{children}</h3>;
};

const Description: React.FC<DescriptionProps> = ({ children }) => {
  return <p className="text-gray-400 text-sm max-w-[95%]">{children}</p>;
};

const AiCardRoot: React.FC<AiCardProps> = ({ tool, onClick, disabled = false }) => {
  return (
    <AiCard.Root onClick={onClick} disabled={disabled}>
      <AiCard.Icon Icon={tool.Icon} bg={tool.bg} />
      <AiCard.Title>{tool.title}</AiCard.Title>
      <AiCard.Description>{tool.description}</AiCard.Description>
    </AiCard.Root>
  );
};

export const AiCard = Object.assign(AiCardRoot, {
  Root,
  Icon,
  Title,
  Description,
});
