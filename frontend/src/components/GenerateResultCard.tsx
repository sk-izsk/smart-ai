import React from "react";

//  <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
//         <div className="flex items-center gap-3">
//           <Hash className="w-5 h-5 text-[#8e37eb]" />
//           <h1 className="text-xl font-semibold">Generated titles</h1>
//         </div>
//         <div className="flex items-center justify-center flex-1">
//           <div className="flex flex-col items-center gap-5 text-sm text-gray-400">
//             <Hash className="w-9 h-9" />
//             <p>Enter a topic and click "Generate title" to see the result.</p>
//           </div>
//         </div>
//       </div>

interface Props {}

interface RootProps {
  children: React.ReactNode;
}

const Root: React.FC<RootProps> = ({ children }) => {
  return (
    <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
      {children}
    </div>
  );
};

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <div className="flex items-center gap-3">{children}</div>;
};

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <div className="flex items-center justify-center flex-1">{children}</div>;
};

export const GenerateResultCard = Object.assign(Root, {
  Title,
  Content,
});
