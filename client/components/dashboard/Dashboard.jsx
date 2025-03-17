"use client";
import dashboard from "@/public/data/dashboard.json";
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

export default function Dashboard() {
  const router = useRouter();
  return (
    <div className="h-full bg-white grid grid-cols-3 gap-5 rounded-2xl drop-shadow-[5px_5px_3px_rgba(0,0,0,0.5)] p-15 mr-5 mt-10 mb-10">
      {dashboard.map((dashboard) => {
        const IconComponent = iconComponents[dashboard.icon];
        return (
          <div
            key={dashboard.id}
            className="flex items-center justify-center p-3 bg-white cursor-pointer text-black hover:bg-gray-200 rounded-md drop-shadow-[5px_5px_3px_rgba(0,0,0,0.5)]"
            onClick={() => router.push(dashboard.lien)}
          >
            {IconComponent && <IconComponent className="w-5 h-5 mr-2" />}
            <span>{dashboard.name}</span>
          </div>
        );
      })}
    </div>
  );
}
