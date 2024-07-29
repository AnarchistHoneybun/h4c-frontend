import React from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import Link from "next/link";
import { Home, ChartArea, User } from "lucide-react";

export default function TabSwitcher({className}:{className?:string}){
  return (
    <div className={className}>
      <Dock className="gap-8" direction="middle" magnification={90}>
      <DockIcon className="mx-6">
          <Link className="flex items-center justify-center px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300" href="/">
            <Home className="mr-2" />
            <span>Home</span>
          </Link>
        </DockIcon>
        <DockIcon className="mx-6">
          <Link className="flex items-center justify-center px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300" href="/dash">
            <ChartArea className="mr-2" />
            <span>Dashboard</span>
          </Link>
        </DockIcon>
        <DockIcon className="mx-6">
          <Link className="flex items-center justify-center px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300" href="/profile">
            <User className="mr-2" />
            <span>Profile</span>
          </Link>
        </DockIcon>
      </Dock>
    </div>
  );
};