import React, { useState } from "react";
import { cn } from "../utils/tailwindClass";

interface Props {
  tags: string[];
  handleTag?: (tag: string) => void;
  selectedTagColor: string;
}

export const Tags: React.FC<Props> = ({ tags, handleTag, selectedTagColor }) => {
  const [selectedTag, setSelectedTag] = useState<string>(tags[0]);

  return (
    <>
      {tags.map((tag) => (
        <span
          onClick={() => {
            setSelectedTag(tag);
            handleTag?.(tag);
          }}
          className={cn(`px-4 py-1 text-xs border rounded-full cursor-pointer`, {
            [`bg-${selectedTagColor}-50 text-${selectedTagColor}-700`]: selectedTag === tag,
            "border-gray-300 text-gray-500": selectedTag !== tag,
          })}
          key={tag}
        >
          {tag}
        </span>
      ))}
    </>
  );
};
