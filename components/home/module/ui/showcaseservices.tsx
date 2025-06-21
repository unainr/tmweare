'use client'
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const ServicesShowcase = () => {
 

  const services = [
    {
      id: 1,
      name: "AI",
      color: "bg-blue-400",
      descriptions: ["Advisory AI", "AI engineer support"],
      delay: "delay-100"
    },
    {
      id: 2,
      name: "Development",
      color: "bg-slate-900 dark:bg-white",
      descriptions: ["MVP", "Software development", "Development support"],
      delay: "delay-200"
    },
    {
      id: 3,
      name: "Research",
      color: "bg-green-500",
      descriptions: ["Concept validation", "User research"],
      delay: "delay-300"
    },
    {
      id: 4,
      name: "Design",
      color: "bg-yellow-400",
      descriptions: ["MVP", "Design support"],
      delay: "delay-400"
    },
    {
      id: 5,
      name: "Training",
      color: "bg-purple-400",
      descriptions: ["MVP founder course", "Design sprint training (Coming Soon)"],
      delay: "delay-500"
    }
  ];

 
   
  

  return (
    <div className="min-h-screen ">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Services List */}
        <div >
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group opacity-0 animate-fade-in"
              style={{
                animationFillMode: 'forwards',
                animationDelay: `${(index + 1) * 150}ms`
              }}
            >
              {/* Service Item */}
              <div className="flex items-start gap-8 p-6 rounded-xl transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-900 hover:shadow-lg hover:scale-[1.02]">
                {/* Colored Dot */}
                <div className="flex-shrink-0 mt-2">
                  <div 
                    className={`w-6 h-6 rounded-full ${service.color} transition-transform duration-300 group-hover:scale-110 shadow-lg`}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    {/* Service Name */}
                    <h2 className="text-4xl md:text-7xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {service.name}
                    </h2>

                    {/* Service Descriptions */}
                    <div className="flex flex-col gap-2 md:text-right md:min-w-[280px]">
                      {service.descriptions.map((desc, descIndex) => (
                        <div key={descIndex} className="flex flex-col">
                          <span 
                            className={`text-lg transition-colors duration-300 ${
                              desc.includes('Coming Soon') 
                                ? 'text-slate-500 dark:text-slate-400' 
                                : desc.includes('MVP') 
                                  ? 'text-blue-600 dark:text-blue-400 font-medium' 
                                  : 'text-slate-600 dark:text-slate-300'
                            }`}
                          >
                            {desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator Line */}
              {index < services.length - 1 && (
                <div className="mt-12">
                  <hr className="border-slate-200 dark:border-slate-700 opacity-30" />
                </div>
              )}
            </div>
          ))}
        </div>
 {/* Added CTA section */}
        <div className="mt-16 text-center">
          <Link href="/services" className="inline-flex items-center px-6 py-3 border-2 border-black dark:border-white rounded-full font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300">
            Explore all services
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>

     
    </div>
  );
};

export default ServicesShowcase;