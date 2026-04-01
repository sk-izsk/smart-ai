import { Show, useClerk, useUser } from "@clerk/react";
import { LogOut } from "lucide-react";
import React from "react";

export const UserPremiumSection: React.FC = () => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();
  return (
    <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
      <div onClick={() => openUserProfile()} className="cursor-pointer flex gap-2 items-center">
        <img src={user?.imageUrl} alt="User Avatar" className="w-8 rounded-full" />
        <div>
          <h1 className="text-sm font-medium">{user?.fullName}</h1>
          <p className="text-xs text-gray-500">
            <Show when={{ plan: "pro" }} fallback={<span>Upgrade to Pro</span>}>
              Premium
            </Show>
          </p>
        </div>
      </div>
      <LogOut
        className="w-4.5 text-gray-400 hover:text-gray-700 transition cursor-pointer"
        onClick={() => signOut()}
      />
    </div>
  );
};
