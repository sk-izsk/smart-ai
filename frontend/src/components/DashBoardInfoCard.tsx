import React from "react";

interface RootProps {
  children: React.ReactNode;
}

const Root: React.FC<RootProps> = ({ children }) => {
  return (
    <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
      {children}
    </div>
  );
};

interface IconProps {
  children: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({ children }) => {
  return (
    <div className={`w-10 h-10 rounded-lg text-white flex justify-center items-center`}>
      {children}
    </div>
  );
};

interface DescriptionProps {
  description: string;
  children: React.ReactNode;
}

const Description: React.FC<DescriptionProps> = ({ description, children }) => {
  return (
    <div className="text-slate-600">
      <p className="text-sm">{description}</p>
      <h2 className="text-xl font-semibold">{children}</h2>
    </div>
  );
};

export const DashBoardInfoCard = Object.assign(Root, {
  Icon,
  Description,
  Root,
});
