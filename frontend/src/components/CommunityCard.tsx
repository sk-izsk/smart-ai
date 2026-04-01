import { useUser } from "@clerk/react";
import { Heart } from "lucide-react";
import React from "react";
import type { CreationData } from "../types/data";
import { cn } from "../utils/tailwindClass";

interface Props {
  creation: CreationData;
}

export const CommunityCard: React.FC<Props> = ({ creation }) => {
  const { user } = useUser();
  return (
    <div
      className="relative group inline-block pl-3 pt-3 w-full sm:max-w-1/2 lg:max-w-1/3"
      key={creation.id}
    >
      <img src={creation.content} className="w-full h-full object-cover rounded-lg" />
      <div className="absolute bottom-0 top-0 right-0 left-3 flex gap-2 items-end justify-end group-hover:justify-between p-3 group-hover:bg-gradient-to-b from-transparent to-black/80 text-white rounded-lg">
        <p className="text-sm hidden group-hover:block">{creation.prompt}</p>
        <div className="flex gap-1 items-center">
          <p>{creation.likes.length}</p>
          <Heart
            className={cn("min-w-5 h-5 hover:scale-110 cursor-pointer", {
              "fill-red-500 text-red-600": creation.likes.includes(user?.id || ""),
              "text-white": !creation.likes.includes(user?.id || ""),
            })}
          />
        </div>
      </div>
    </div>
  );
};
