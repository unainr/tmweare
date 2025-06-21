import React from "react";
import Component from "./CardHover";
import { PointerHighlight } from "../ui/pointer-highlight";
import { works } from "@/constants";

const MainCard = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-12 p-8  min-h-screen my-10">
			<div className="flex flex-col justify-center items-center gap-3">
				<PointerHighlight
					rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 dark:border-neutral-700 leading-loose"
					pointerClassName="text-blue-500 "
					containerClassName="inline-block">
					<span className="text-4xl md:text-5xl font-bold relative z-10 tracking-tight">
						Featued Work
					</span>
				</PointerHighlight>
				<p className="text-center">
					{" "}
					Showcasing our latest projects that demonstrate innovation, technical
					excellence, and measurable results
				</p>
<div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4">
					{works.slice(0, 4).map(work => (
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
		</div>
	);
};

export default MainCard;
