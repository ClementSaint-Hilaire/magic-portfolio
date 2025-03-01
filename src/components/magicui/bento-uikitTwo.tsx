import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Target } from "lucide-react";

const BentoGridTwo = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[35rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCardTwo = ({
  name,
  className,
  background,
  description,
}: {
  name: string;
  className: string;
  background: ReactNode;
  description: string;
}) => (
  <a
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-gris",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >

  <div className="pointer-events-none z-10 flex flex-col items-center justify-center transform-gpu gap-1 p-6 transition-all duration-300 bg-transparent">
    <h3 className="text-3xl font-semibold text-neutral-700 dark:text-neutral-300">
      {name}
    </h3>
    <p className="max-w-lg text-neutral-400 text-center">{description}</p>
  </div>
  <div>{background}</div>

    
  </a>
);

export { BentoCardTwo, BentoGridTwo };

