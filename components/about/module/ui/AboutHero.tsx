import Image from "next/image";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function AboutHero() {
  return (
    <section className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-3">
            <PointerHighlight
               rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 dark:border-neutral-700 leading-loose"
              pointerClassName="text-blue-500 "
              containerClassName="inline-block"
            >
              <span className="text-4xl md:text-5xl font-bold relative z-10 tracking-tight">
                Our Expertise
              </span>
            </PointerHighlight>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            AI-Powered Execution for Bold Product Teams
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed">
            We partner with ambitious startups and enterprise innovators to build strategies, MVPs, and full-stack products — all powered by AI, delivered in days not months. From 7-day GTM sprints to 48-hour prototypes, speed is our edge and your advantage.
          </p>

          <p className="text-muted-foreground">
            With deep expertise in FinTech, HealthTech, and B2B SaaS, we blend design, engineering, and AI integration to move your product forward — fast.
          </p>
        </div>

        {/* Image or Illustration */}
        <div className="w-full lg:w-1/2">
          <Image
            src="https://cieden.com/cieden/images/article/2023-01-27_14-18-28-teamabout.webp" // place this image in your /public folder or replace with external URL
            alt="AI Product Strategy"
            width={600}
            height={500}
            className="rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
