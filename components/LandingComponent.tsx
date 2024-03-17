'use client'

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"


const testimoials = [
  {
    name: "Baheer Samsoor",
    avatar: "BS",
    title: "Software Developer",
    description: "Here we have an Amazing AI. Check it out.",
  },
  {
    name: "Sami",
    avatar: "SM",
    title: "Web Designer",
    description: "This AI designed as Comfortable as Possible.",
  },
  {
    name: "Farzam Sultani",
    avatar: "FS",
    title: "Web Developer",
    description:
      "This AI Provide an Entire Code Generating Facility. for Developers.",
  },
  {
    name: "AM (Developer)",
    avatar: "AM",
    title: "Software Engineer",
    description: "Contact Me From right hand Side Chatbot Icon.",
  },
];

export const LandingComponent = () => {
    return (
      <div className="px-10 pb-20 pt-28">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">
          Users & Developer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {testimoials.map((item) => (
            <Card
              key={item.description}
              className="bg-[#192339] border-none text-white"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div className="">
                    <p className="text-lg">{item.name}</p>
                    <p className="text-zinc-400 text-sm">{item.title}</p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0 bg-opacity-100 backdrop-filter backdrop-blur-md border-transparent border-opacity-25">
                  {item.description}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    );
}