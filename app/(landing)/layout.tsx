import Bg from "@/components/Bg";
import { CrispProvider } from "@/components/crisp-provider";
import Image from "next/image";
import React from "react";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen w-screen m-0 bg-[#111827] overflow-auto bg-start bg-no-repeat">
      <div className="mx-auto  h-full w-full">
        <CrispProvider />
        {children}
      </div>
    </main>
  );
};

export default LandingLayout;
