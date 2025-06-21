import { PointerHighlight } from "@/components/ui/pointer-highlight";
import {
  Brain,
  Rocket,
  LayoutDashboard,
  Code2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Brain,
    title: "AI Strategy in 7 Days",
    description:
      "Get a complete, AI-powered roadmap in one week — from use case discovery to implementation planning.",
  },
  {
    icon: Rocket,
    title: "48-Hour MVPs",
    description:
      "Launch validated products in just 48 hours using AI-assisted development and testing.",
  },
  {
    icon: LayoutDashboard,
    title: "Product Design",
    description:
      "Conversion-focused, mobile-first UI/UX design systems delivered in 7 days.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Production-ready websites built fast with AI coding assistants and modern frameworks.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute h-full w-full bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Heading with improved typography and spacing */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3">
            <PointerHighlight
               rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 dark:border-neutral-700 leading-loose"
              pointerClassName="text-blue-500 "
              containerClassName="inline-block"
            >
              <span className="text-4xl md:text-5xl font-bold relative z-10 tracking-tight">
                Our Expertise
              </span>
            </PointerHighlight>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-2xl mx-auto">
            From AI strategy to full-stack development, we deliver comprehensive solutions that scale your business.
          </p>
        </div>

        {/* Services Grid with improved card design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-transparent dark:from-neutral-800 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon with improved styling */}
              <div className="mb-6 relative z-10">
                <div className="w-14 h-14 border-2 border-neutral-300 dark:border-neutral-700 rounded-full flex items-center justify-center bg-neutral-50 dark:bg-neutral-800 group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-neutral-700 dark:text-neutral-300" strokeWidth={1.5} />
                </div>
              </div>

              {/* Title with improved typography */}
              <h3 className="text-2xl font-bold mb-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10">
                {service.title}
              </h3>

              {/* Description with improved readability */}
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 relative z-10">
                {service.description}
              </p>
              
              {/* Learn more link that appears on hover */}
              <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-sm font-medium relative z-10">
                <span>Learn more</span>
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
        
       
      </div>
    </section>
  );
}
