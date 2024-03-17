import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LandingNavbar } from "@/components/LandinNavbar";
import { LandingHero } from "@/components/LandingHero";
import { LandingComponent } from "@/components/LandingComponent";
import ProPlan from "@/components/LandingProPlan";
import LandingFooter from "@/components/LandingFooter";

const LandingPage = () => {
  return (
    <div className="w-full h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingComponent />
      <ProPlan />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
