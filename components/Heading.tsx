import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeaderProps) => {
  return (
    <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
      <div className={cn("p-2 w-fit rounded-lg", bgColor)}>
        <Icon className={cn("sm:w-10 sm:h-10 lg:w-16 lg:h-16", iconColor)} />
      </div>
      <div>
        <h2 className="sm:text-2xl lg:text-3xl font-bold text-white">{title}</h2>
        <p className="sm:text-sm text-muted-foreground lg:mt-3 sm:mt-0">{description}</p>
      </div>
    </div>
  );
};
