"use client";
import React from "react";
import sidebar from "@/public/data/sidebar.json";
import { useRouter } from "next/navigation";

import {
  LuHouse,
  LuShoppingCart,
  LuClipboardList,
  LuFileText,
  LuUsers,
  LuCalendar,
  LuUserCog,
  LuLogOut,
} from "react-icons/lu";

const iconComponents = {
  LuHouse: LuHouse,
  LuShoppingCart: LuShoppingCart,
  LuClipboardList: LuClipboardList,
  LuFileText: LuFileText,
  LuUsers: LuUsers,
  LuCalendar: LuCalendar,
  LuUserCog: LuUserCog,
  LuLogOut: LuLogOut,
};

export default function SideBar() {
  const router = useRouter();

  return (
    <nav className="space-y-2 max-w-[300px] sticky top-40 ml-5">
      {sidebar.map((sidebar) => {
        const IconComponent = iconComponents[sidebar.icon];

        return (
          <div
            key={sidebar.id}
            className="flex items-center space-x-3 p-3 rounded-2xl bg-white cursor-pointer text-blue-400 font-semibold hover:bg-gray-200"
            onClick={() => router.push(sidebar.lien)}
          >
            {IconComponent && <IconComponent className="w-5 h-5" />}
            <span>{sidebar.name}</span>
          </div>
        );
      })}
    </nav>
  );
}
