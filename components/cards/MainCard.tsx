import React from "react";
import Component from "./CardHover";
import { PointerHighlight } from "../ui/pointer-highlight";
import { works } from "@/constants";

const MainCard = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 md:gap-8 mb-10 md:mb-16">
          <PointerHighlight
            rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 dark:border-neutral-700 leading-loose"
            pointerClassName="text-blue-500"
            containerClassName="inline-block"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold relative z-10 tracking-tight text-center">
              Featured Work
            </h2>
          </PointerHighlight>
          
          <p className="text-center text-base md:text-lg max-w-2xl text-neutral-700 dark:text-neutral-300">
            Showcasing our latest projects that demonstrate innovation, technical 
            excellence, and measurable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl mx-auto">
          {works.slice(0, 4).map((work) => (
            <Component
              key={work.slug}
              size="lg"
              imageUrl={work.imageCover}
              heading={work.title}
              paragraph={work.shortDescription}
              slug={work.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainCard;
