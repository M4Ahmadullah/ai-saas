'use client'

import Image from 'next/image';
import React from 'react'
import { ProplanCard } from './ProplanCard';
import TypewriterComponent from "typewriter-effect";


const ProPlan = () => {
  return (
    <div id="pricing" className="w-full h-full mb-[42rem] md:mb-48 lg:mb-36">
      <div className="w-full items-center text-center h-fit mt-20 mb-10 md:mb-0">
        <h1 className="text-white text-3xl font-semibold mb-3">
          Expreience the Best
        </h1>
        <p className=" text-muted-foreground ">
          Our Pro Plan is Designed to Give You the Best Experience
        </p>
      </div>
      <ProplanCard />

      <div className=" w-full h-fit text-center pt-[27rem] md:pt-0 justify-center px-5 text-3xl md:text-4xl font-semibold text-transparent  bg-clip-text bg-gradient-to-r from-sky-300 to-purple-900">
        <TypewriterComponent
          options={{
            strings: [
              "Try our Free Trial...",
              "Then upgrade to Pro for unlimited access!",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
}

export default ProPlan
