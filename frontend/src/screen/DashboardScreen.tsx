import { Show } from "@clerk/react";
import { Gem, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { CreationItem } from "../components/CreationItem";
import { DashBoardInfoCard } from "../components/DashBoardInfoCard";
import { dummyCreationData } from "../mockData";
import type { CreationData } from "../types/data";

const DashboardScreen: React.FC = () => {
  const [creations] = useState<CreationData[]>(dummyCreationData);

  return (
    <div className="h-full overflow-y-scroll p-6">
      <div className="flex justify-start gap-4 flex-wrap">
        <DashBoardInfoCard>
          <DashBoardInfoCard.Description description="Total Creations">
            {creations.length}
          </DashBoardInfoCard.Description>
          <DashBoardInfoCard.Icon>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588f2] to-[#0bb0d7] text-white flex justify-center items-center">
              <Sparkles className="w-5 text-white" />
            </div>
          </DashBoardInfoCard.Icon>
        </DashBoardInfoCard>

        <DashBoardInfoCard>
          <DashBoardInfoCard.Description description="Active Plan">
            <Show when={{ plan: "pro" }} fallback={<p>Upgrade to Pro</p>}>
              Premium
            </Show>
          </DashBoardInfoCard.Description>
          <DashBoardInfoCard.Icon>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff61c5] to-[#9e53ee] text-white flex justify-center items-center">
              <Gem className="w-5 text-white" />
            </div>
          </DashBoardInfoCard.Icon>
        </DashBoardInfoCard>
      </div>
      <div className="space-y-3">
        <p className="mt-6 mb-4">Recent Creations</p>
        {creations.map((item) => (
          <CreationItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DashboardScreen;
