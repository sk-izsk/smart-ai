import { useUser } from "@clerk/react";
import React, { useState } from "react";
import { CommunityCard } from "../components/CommunityCard";
import { dummyPublishedCreationData } from "../mockData";

const CommunityScreen: React.FC = () => {
  const [creations] = useState(dummyPublishedCreationData);
  const { user } = useUser();

  return (
    <div className="flex-1 h-full flex flex-col gap-4 p-6">
      Creations
      <div className="bg-white h-full w-full rounded-xl overflow-y-scroll">
        {creations.map((creation) => (
          <CommunityCard key={creation.id} creation={creation} />
        ))}
      </div>
    </div>
  );
};

export default CommunityScreen;
