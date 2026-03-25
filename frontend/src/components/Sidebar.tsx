import { Show, useClerk, useUser } from "@clerk/react";
import {
  Eraser,
  FileText,
  Hash,
  House,
  Image,
  LogOut,
  Scissors,
  SquarePen,
  Users,
  type LucideProps,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router";
import { cn } from "../utils/tailwindClass";

interface Props {
  isSidebarOpen?: boolean;
  handleOpenSidebar?: (value: boolean) => void;
}

interface NavItem {
  to: string;
  label: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

const navItems: NavItem[] = [
  {
    to: "/ai",
    label: "Dashboard",
    Icon: House,
  },
  {
    to: "/ai/write-article",
    label: "Write Article",
    Icon: SquarePen,
  },
  {
    to: "/ai/blog-titles",
    label: "Blog Titles",
    Icon: Hash,
  },
  {
    to: "/ai/generate-images",
    label: "Generate Images",
    Icon: Image,
  },
  {
    to: "/ai/remove-background",
    label: "Remove Background",
    Icon: Eraser,
  },
  {
    to: "/ai/remove-object",
    label: "Remove Object",
    Icon: Scissors,
  },
  {
    to: "/ai/review-resume",
    label: "Review Resume",
    Icon: FileText,
  },
  {
    to: "/ai/community",
    label: "Community",
    Icon: Users,
  },
];

export const Sidebar: React.FC<Props> = ({ isSidebarOpen, handleOpenSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();
  return (
    <div
      className={cn(
        "w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 transition-all duration-300 ease-in-out",
        {
          "translate-x-0": isSidebarOpen,
          "max-sm:-translate-x-full": !isSidebarOpen,
        },
      )}
    >
      <div className="my-7 w-full">
        <img src={user?.imageUrl} alt="User Avatar" className="w-13 rounded-full mx-auto" />
        <h1 className="mt-1 text-center">{user?.fullName}</h1>
        <div>
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              to={to}
              key={label}
              end={to === "/ai"}
              onClick={() => handleOpenSidebar?.(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center gap-3 rounded ${isActive ? "bg-gradient-to-r from-[#3c81f6] to-[#9234ea] text-white" : ""}`
              }
            >
              {({ isActive }) => {
                return (
                  <>
                    {Icon && <Icon className={cn("w-5 h-5", isActive ? "text-white" : "")} />}
                    {label}
                  </>
                );
              }}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
        <div onClick={() => openUserProfile()} className="cursor-pointer flex gap-2 items-center">
          <img src={user?.imageUrl} alt="User Avatar" className="w-8 rounded-full" />
          <div>
            <h1 className="text-sm font-medium">{user?.fullName}</h1>
            <p className="text-xs text-gray-500">
              <Show when={{ plan: "pro" }} fallback={<p>Upgrade to Pro</p>}>
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
    </div>
  );
};
