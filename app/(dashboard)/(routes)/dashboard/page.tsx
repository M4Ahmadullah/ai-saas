'use client'

import React from "react";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, Video } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { easeInOut, motion } from "framer-motion"
import TypewriterComponent from "typewriter-effect"

const tools = [
  {
    label: "Conversations",
    icon: MessageSquare,
    color: "text-cyan-700",
    bgColor: "bg-cyan-700/10",
    href: "/conversations",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-sky-600",
    bgColor: "bg-sky-600/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: Video,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
    href: "/video",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    href: "/code",
  },
];

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mr-8 space-y-3 mb-5 text-white">
        <h2 className="text-2xl md:text-4xl font-bold text-center ">
          Power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg pl-5 text-center">
          Chat with the Smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-6 pt-5">
        {tools.map((tool) => (
          <motion.div
            key={tool.href}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1.06 }}
            dragConstraints={{ left: -100, right: 100 }}
          >
            <Card
              onClick={() => router.push(tool.href)}
              key={tool.href}
              className=" p-4 flex items-center justify-between 
              hover:shadow-md transition cursor-pointer bg-[#2a395e] bg-opacity-100 
              backdrop-filter backdrop-blur-md border-transparent border-opacity-25 text-white"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8 ", tool.color)} />
                </div>
                <div className="font-semibold">{tool.label}</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Card>
          </motion.div>
        ))}
      </div>
      <div className=" text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-purple-900 w-full h-full text-center items-center pt-20 px-5 text-4xl font-mono font-bold sm:sapce-x-5">
        <TypewriterComponent
          options={{
            strings: [
              "Conversation: Chat with our Ultimate Chatbot.",
              "Image Generation: Write the description of any Imagination.",
              "Video Generation: any Animation or Video you can think of!",
              "Code Generation: Expert in Coding, Ask anything.",
              "AM Team Your Partner in Success."
            ],
            autoStart: true,
            loop: true,
            delay: 50
          }}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
