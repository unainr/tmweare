"use client";

import { slugify } from "@/lib/utils";
import { ProjectFeatureProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function ProjectFeature({
	pageTitle,
    featured,
	title,
	subtitle,
	description,
	imageUrl,
	reverse = false,
	reverseColumn = false,
    color
}: ProjectFeatureProps) {
	
	const slug = slugify(title);

	return (
		<section className="min-h-screen px-6 md:px-16 py-16">
			{ featured ?

                <div className="text-5xl md:text-7xl w-1/2 font-bold mb-10">
				<span className="block">{pageTitle}</span>
                <div className="w-24 h-1 bg-white my-5" />
			</div>:""
            }

			{/* Grid Layout */}
			<div className={`flex items-center justify-center gap-20 ${reverseColumn ? 'flex-col' : 'flex-row'} ${reverse ? (reverseColumn ? 'flex-col-reverse' : 'flex-row-reverse') : ''}`}>
				{/* Left Text Section - 1/3 */}
				<div className="md:col-span-1">
					<div className="max-w-xs">
						<div className="w-50 h-[0.3rem] bg-white mb-2" />

						<h3 className={`${color?color:'text-blue-500'} text-xl  mb-4`}>{title}</h3>
						<h2 className="text-xl font-bold leading-snug">
							{subtitle}
						</h2>
						<p className="text-sm text-gray-300 mt-4">
							{description}
						</p>
						<Link href={`/work/${slug}`}>
						<button className="relative font-semibold cursor-pointer text-white group my-3">
							Read case study
							<span className="absolute left-0 -bottom-1 w-full h-[0.01rem] bg-white scale-x-0 transform transition-transform duration-300 origin-right group-hover:scale-x-100 group-hover:origin-left"></span>
						</button>
						</Link>
					</div>
				</div>

				{/* Right Image - 2/3 */}
				<div className="relative md:col-span-2 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]  overflow-hidden">
					<Image
						src={imageUrl}
						alt="Project Visual"
						fill
						className="object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
