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
	<div className="w-full my-10">
  {/* Hero Section */}
  <div className="py-12 md:py-20 px-4 sm:px-6 text-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 max-w-3xl mx-auto leading-tight">
      {project.title}: turning complex workflows into a profit-first SaaS platform.
    </h1>
    <p className="max-w-xl mx-auto text-base sm:text-lg mb-8 text-neutral-700 dark:text-neutral-300">
      {project.shortDescription}
    </p>
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mx-auto max-w-5xl mt-8 rounded-lg overflow-hidden shadow-lg">
      <Image
        src={project.imageCover}
        alt={project.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
        className="object-contain"
        priority
      />
    </div>
  </div>

  {/* Services/Metrics Section */}
  <div className="px-4 sm:px-6 py-8 md:py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {services.map((service, index) => (
        <div
          key={index}
          className="p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-neutral-200 dark:border-neutral-800"
        >
          {/* Icon */}
          <div className="mb-5">
            <div className="w-12 h-12 border-2 border-neutral-300 dark:border-neutral-700 rounded-full flex items-center justify-center">
              <service.icon className="w-6 h-6" strokeWidth={1.5} />
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold mb-4">{service.title}</h3>
          
          {/* Services List */}
          <ul className="space-y-2.5">
            {service.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start">
                <span className="w-1.5 h-1.5 bg-neutral-700 dark:bg-neutral-300 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                <span className="leading-relaxed text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>

  {/* About + Highlights Section */}
  <section className="max-w-6xl mx-auto py-12 md:py-20 px-4 sm:px-6">
    <div className="space-y-12">
      {/* Text Content First */}
      <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
          About the Client
        </h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none mb-8">
          <p className="leading-relaxed text-base sm:text-lg">
            {project.longDescription}
          </p>
        </div>
        
        <h3 className="text-lg sm:text-xl font-semibold mb-4">Project Highlights</h3>
        <ul className="space-y-3">
          {project.keyFeatures?.map((highlight: any, index: any) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 mt-0.5">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-sm sm:text-base">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Featured Image */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-md">
        <Image
          src={project.imageCover}
          alt={`${project.title} cover image`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 90vw, 80vw"
          className="object-cover"
          priority
        />
        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-white text-sm font-medium">
            {project.title} - Implementation Screenshot
          </p>
        </div>
      </div>

      {/* Additional Images and Content */}
      {project.images?.length > 0 &&
        project.images.map((img, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 space-y-6 p-4 sm:p-6">
              {index === 0 && (
                <>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                      Challenges
                    </h2>
                    <p className="text-base sm:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                      Results
                    </h2>
                    <p className="text-base sm:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                      {project.solution}
                    </p>
                  </div>
                </>
              )}
              {index > 0 && (
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                    Feature {index}
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                    Additional details about this feature or implementation aspect.
                  </p>
                </div>
              )}
            </div>
            
            {/* Image */}
            <div className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-md">
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

  {/* Call to Action and FAQ Sections */}
  <FooterCTA />
  <FaqSection />
</div>

	);
};

export default WorkSlug;
