import React from "react";
import Link from "next/link";

import { services, works } from "@/constants";
import Image from "next/image";
import FooterCTA from "@/components/layout/footercta";
import FaqSection from "@/components/home/module/ui/FAQ";

const WorkSlug = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const project = works.find((proj: any) => proj.slug === slug);

	if (!project) {
		return <div>Project not found</div>;
	}

	return (
		<div className="my-10">
			<div className="py-20 px-6 text-center">
				<h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl mx-auto">
					{project.title}: turning complex workflows into a profit-first SaaS
					platform.
				</h1>
				<p className="max-w-xl mx-auto text-lg mb-10">
					{project.shortDescription}
				</p>

				<div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mx-auto max-w-5xl mt-8">
					<Image
						src={project.imageCover}
						alt={project.title}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
						className="object-contain"
						priority
					/>
				</div>
			</div>

			{/* Metrics */}
			<div className="flex flex-row  items-center justify-center gap-8">
				{services.map((service, index) => (
					<div
						key={index}
						className=" p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
						{/* Icon */}
						<div className="mb-6">
							<div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center">
								<service.icon className="w-6 h-6 " strokeWidth={1.5} />
							</div>
						</div>

						{/* Title */}
						<h3 className="text-2xl font-bold  mb-6">{service.title}</h3>

						{/* Services List */}
						<ul className="space-y-3">
							{service.items.map((item, itemIndex) => (
								<li key={itemIndex} className="flex items-start">
									<span className="w-1.5 h-1.5  rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
									<span className="leading-relaxed">{item}</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>

			{/* About + Highlights */}
			<section className="max-w-6xl mx-auto py-20 px-6">
				<div className="space-y-12 ">
					{/* Text Content First */}
					<div className="   p-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-6 ">
							About the Client
						</h2>
						<p className=" mb-8 leading-relaxed text-lg">
							{project.longDescription}
						</p>

						<h3 className="text-xl font-semibold mb-4 ">Project Highlights</h3>
						<ul className="space-y-3 ">
							{project.keyFeatures?.map((highlight: any, index: any) => (
								<li key={index} className="flex items-start  space-x-3">
									<div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 mt-1">
										<svg
											className="h-4 w-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
									<span>{highlight}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Image Below */}
					<div className="relative h-[500px] w-full ">
						{
							<Image
								src={project.imageCover}
								alt={`${project.title} cover image`}
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
								className="object-cover"
								priority
							/>
						}

						{/* Optional overlay gradient at the bottom for better text visibility if needed */}
						<div className="absolute bottom-0 left-0 right-0 h-24 "></div>

						{/* Optional caption */}
						<div className="absolute bottom-4 left-4 right-4">
							<p className=" text-sm font-medium">
								{project.title} - Implementation Screenshot
							</p>
						</div>
					</div>
					{project.images?.length > 0 &&
						project.images.map((img, index) => (
							<div key={index} className=" p-8 space-y-6">
								<div>
									<h2 className="text-3xl md:text-3xl font-bold mb-6 ">
										Challenges
									</h2>
									<p className=" mb-8 leading-relaxed text-lg">
										{project.challenge}
									</p>
									<h2 className="text-3xl md:text-3xl font-bold mb-6 ">
										Results
									</h2>
									<p className=" mb-8 leading-relaxed text-lg">
										{project.solution}
									</p>
								</div>

								<div>
									<Image
										src={img}
										alt={`Feature ${index + 1} image`}
										width={1200}
										height={600}
										className="w-full h-auto object-cover"
									/>
								</div>
							</div>
						))}
				</div>
			</section>
			<FooterCTA />
			<FaqSection />
		</div>
	);
};

export default WorkSlug;
