import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { BellRing, CheckCheckIcon, CheckIcon, TicketIcon } from "lucide-react";

const ProductCard = [
  {
    title: "Free Plan",
    description: "5 Cards for all AI Services of Alpha",
    descriptionPlan: "5 Cards for all Serviecs.",
    desciptionPlanCon: "Conversation available",
    descriptionPlanCode: "Code Generation Available",
    descriptionPlanImage: "Image Generation Available",
    descriptionPlanVideo: "Video Generation Available",
  },
];

const ProductProPlan = [
  {
    title: "Pro Plan",
    description: "Unlimited Cards for all Ai Services of Alpha",
    descriptionProPlanCon: "Unlimited Conversations",
    descriptionProPlanImage: "Unlimited Image Generation",
    descriptionProPlanCode: "Unlimited Code Generation",
    descriptionProPlanVideo: "Unlimited Video Generation",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export const ProplanCard = ({ className, ...props }: CardProps) => {
  return (
    <div className="w-full h-full grid sm:grid-row md:grid-cols-2 gap-y-6 md:gap-y-0 sm:justify-center justify-center px-5 md:px-0">
      <div className="w-full h-full flex justify-center items-center mt-5 md:mt-0">
        {ProductCard.map((free) => (
          <Card
            className={cn(
              "w-[100%] md:w-[80%] h-[100%] md:h-[77%] lg:h-[65%] xl:h-[60%] 2xl:h-fit bg-[#192339] border-none",
              className
            )}
            {...props}
            key={`product_${free.title}`}
          >
            <CardHeader>
              <CardTitle className="text-3xl text-white text-center mb-2">
                {free.title}
              </CardTitle>
              <CardDescription className="mt-3 text-lg opacity-90 text-white text-center">
                {free.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="grid gap-4">
              <div className="flex items-center space-x-4 rounded-md border-none bg-[#202d49] p-4 text-center">
                <BellRing className="text-white" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none text-white">
                    {free.descriptionPlan}
                  </p>
                </div>
              </div>

              <div className="grid items-center justify-center pb-0 mt-4">
                <div className="flex">
                  <CheckIcon className="h-5 w-5 translate-y-1 text-sky-600 mr-4" />
                  <p className="block text-white text-xl">
                    {free.desciptionPlanCon}
                  </p>
                </div>
              </div>

              <div className="grid items-center justify-center pb-0 mt-4">
                <div className="flex">
                  <CheckIcon className="h-5 w-5 translate-y-1 text-sky-600 mr-4" />
                  <p className="block text-white text-xl">
                    {free.descriptionPlanCode}
                  </p>
                </div>
              </div>

              <div className=" grid items-center justify-center mt-4">
                <div className="flex">
                  <CheckIcon className="h-5 w-5 translate-y-1 text-sky-600 mr-4" />
                  <p className="block text-white text-xl">
                    {free.descriptionPlanImage}
                  </p>
                </div>
              </div>

              <div className="mb-4 grid items-center justify-center mt-4">
                <div className="flex">
                  <CheckIcon className="h-5 w-5 translate-y-1 text-sky-600 mr-4" />
                  <p className="block text-white text-xl">
                    {free.descriptionPlanVideo}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="h-full w-full flex justify-center items-center mt-5 md:mt-0">
        {ProductProPlan.map((pro) => (
          <Card
            className={cn(
              "w-[100%] md:w-[80%] h-[100%] md:h-[77%] lg:h-[65%] xl:h-[60%] 2xl:h-fit bg-[#192339] border-none",
              className
            )}
            {...props}
            key={`product_${pro.title}`}
          >
            <CardHeader>
              <CardTitle className="text-3xl text-white text-center mb-2">
                {pro.title}
              </CardTitle>
              <CardDescription className="mt-3 text-lg opacity-90 text-white text-center">
                {pro.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="grid gap-4">
              <div className="flex items-center space-x-4 rounded-md border-none bg-[#202d49] p-4 text-center">
                <BellRing className="text-white" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none text-white">
                    {pro.description}
                  </p>
                </div>
              </div>

              <div className="grid items-center justify-center pb-0 mt-4">
                <div className="flex">
                  <CheckIcon className="h-5 w-5 translate-y-1 text-sky-600 mr-4" />
                  <p className="block text-white text-xl">
                    {pro.descriptionProPlanCon}
                  </p>
                </div>
              </div>

              <div className="grid items-center justify-center pb-0 mt-4">
                <div className="flex">
                  <CheckIcon className="h-5 w-5 translate-y-1 text-sky-600 mr-4" />
                  <p className="block text-white text-xl">
                    {pro.descriptionProPlanCode}
                  </p>
                </div>
              </div>

              <div className=" grid items-center justify-center mt-4">
                <div className="flex">
                  <CheckIcon className="h-5 w-5 translate-y-1 text-sky-600 mr-4" />
                  <p className="block text-white text-xl">
                    {pro.descriptionProPlanImage}
                  </p>
                </div>
              </div>

              <div className="mb-4 grid items-center justify-center mt-4">
                <div className="flex">
                  <CheckIcon className="h-5 w-5 translate-y-1 text-sky-600 mr-4" />
                  <p className="block text-white text-xl">
                    {pro.descriptionProPlanVideo}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
