'use client'
import { useAuth } from "@clerk/nextjs"
import Link from "next/link";
import TypewriterComponent from "typewriter-effect"
import { Button } from "./ui/button";

export const LandingHero = () => {
    const { isSignedIn } = useAuth();

    return (
      <div className="text-white font-bold text-center space-y-5">
        <div className="text-4xl sm:text-5xl md:text-6xl lg-7xl pt-24 md:pt-28 space-y-5 font-extrabold">
          <h1>The best Ai Tool for</h1>
          <div className=" text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-purple-900">
            <TypewriterComponent
              options={{
                strings: [
                  "Chatbot.",
                  "Photo Generation.",
                  "Code Generation.",
                  "Video Generation.",
                  //   "AM Team Your Partner in Success."
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="text-xl md:text-xl font-semibold text-zinc-400 px-9 py-5">
          Create content Using AI faster and more efficiently. Our tools are
          designed to make the process alot easier.
        </div>
        <div>
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button
              variant="premium"
              className="rounded-full font-semibold md:text-lg p-4 md:p-6"
            >
              Start Generating For Free
            </Button>
          </Link>
        </div>
        <div className="text-zinc-400 text-xs md:text-sm font-normal">
          <TypewriterComponent
            options={{
              strings: ["No credit Card required. (Free Trial)"],
              autoStart: true,
              loop: true
            }}
          />
        </div>
      </div>
    );
}