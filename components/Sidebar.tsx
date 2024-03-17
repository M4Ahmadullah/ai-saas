"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import FreeCounter from "./FreeCounter";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-teal-600",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversations",
    color: "text-cyan-700",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-sky-600",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-blue-600",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-indigo-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-violet-600",
  },
];

interface SidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}



const Sidebar = ({
  apiLimitCount = 0,
  isPro = false,
}: SidebarProps) => {
  const pathName = usePathname();
  return (
    <div className="space-y-5 py-5 flex flex-col h-full bg-[#2a395e]  text-white">
      <div className="px-3 py-2  bg-opacity-100 border-transparent border-opacity-25 h-full">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image alt="logo" width="100" height="100" src="/logo.png" />
          </div>

          <h1 className={cn("text-2xl font-bold pt-2", montserrat.className)}>
            Alpha
          </h1>
        </Link>

        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathName === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter isPro={isPro} apiLimitCount={apiLimitCount} />
    </div>
  );
};

export default Sidebar;
