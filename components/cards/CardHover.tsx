import React, { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "primary" | "secondary";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
  imageUrl: string;
  heading: string;
  paragraph: string;
  slug: string;
}

const sizeClasses = {
  default: "w-full max-w-md h-[400px]",
  sm: "w-full max-w-sm h-[350px]",
  lg: "w-full h-[450px] sm:h-[500px]",
};

const overlayBgClasses = {
   default: 'bg-[#3480eb]',
      primary: 'bg-blue-600',
      secondary: 'bg-blue-600',
};

const gradientFromClasses = {
 default: 'from-[#3480eb]',
      primary: 'from-blue-600',
      secondary: 'from-blue-600',
};

const CardHover = forwardRef<HTMLDivElement, ComponentProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      imageUrl,
      heading,
      paragraph,
      slug,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden group mx-auto bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {/* Image Container */}
        <div className="w-full h-full">
          <Image
            src={
              imageUrl ||
              "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=800&fit=crop&crop=face&auto=format&dpr=3&q=70"
            }
            alt={heading || "Project image"}
            width={1300}
            height={1300}
            className="h-full w-full object-cover scale-105 group-hover:scale-100 transition-transform duration-500 ease-out rounded-lg"
          />
        </div>

        {/* Hover Overlay - Appears on hover */}
        <div
          className={cn(
            "absolute inset-0 z-10 p-5 sm:p-6 md:p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg",
            overlayBgClasses[variant]
          )}
        >
          <div className="translate-y-8 group-hover:translate-y-0 transition-all duration-300 delay-75 space-y-3">
            <h3 className="text-xl sm:text-2xl font-semibold text-white line-clamp-2">
              {heading}
            </h3>
            <p className="text-sm sm:text-base text-neutral-200 line-clamp-3 sm:line-clamp-4">
              {paragraph}
            </p>
            <Link href={`/work/${slug}`} className="inline-block mt-2">
              <Button
                variant="secondary"
                className="mt-1 px-4 py-2 flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
              >
                View Case Study <ChevronsRight size={18} />
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Label - Visible when not hovering */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 w-full h-[30%] flex flex-col justify-end p-4 sm:p-5 rounded-b-lg opacity-100 group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-300 bg-gradient-to-t",
            gradientFromClasses[variant]
          )}
        >
          <h3 className="text-lg sm:text-xl font-medium text-white line-clamp-1">
            {heading}
          </h3>
        </div>
      </div>
    );
  }
);

CardHover.displayName = "CardHover";

export default CardHover;
