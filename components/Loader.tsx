import Image from 'next/image'
import React from 'react'
import TypewriterComponent from "typewriter-effect"

export const Loader = () => {
  return (
    <div className="h-full w-full flex flex-col gap-y-4 items-center rounded-lg justify-center bg-[#2a395e] text-white ">
      <div className="w-16 h-20 mt-5 relative bg-[#2a395e]">
        <Image fill src="/logo.png" alt="logo" />
      </div>
      <p className="text-sm text-muted-foreground">
        <div className=" text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-purple-900 w-full h-full text-center items-center pt-10 pb-10 px-5 text-4xl font-mono font-bold sm:sapce-x-5">
          <TypewriterComponent
            options={{
              strings: ["Alpha is Generating ..."],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>
      </p>
    </div>
  );
}
