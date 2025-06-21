"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function FaqSection() {
	return (
		<section className="py-20 bg-background text-foreground">
			<div className="container max-w-3xl mx-auto px-4 text-center">
				<PointerHighlight
					rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 dark:border-neutral-700 leading-loose"
					pointerClassName="text-blue-500 "
					containerClassName="inline-block">
					<span className="text-4xl md:text-5xl font-bold relative z-10 tracking-tight">
						Frequently Asked Questions
					</span>
				</PointerHighlight>
				<p className="text-muted-foreground mb-10 my-3">
					Got questions? We've answered the most common ones below. Still need
					help? Reach out anytime.
				</p>

				<Accordion type="single" collapsible className="w-full text-left">
					<AccordionItem value="q1">
						<AccordionTrigger>
							How can you deliver an AI strategy in just 7 days?
						</AccordionTrigger>
						<AccordionContent>
							We use AI-powered market analysis, competitive research, and use
							case modeling to compress traditional 12-week consulting into a
							7-day sprint — with better data and faster results.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="q2">
						<AccordionTrigger>
							What exactly is included in the 48-Hour MVP?
						</AccordionTrigger>
						<AccordionContent>
							Our MVPs include core functionality (3–5 features), a responsive
							frontend, backend integration, user auth, analytics, and even
							payment setup if needed — all in 48 hours.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="q3">
						<AccordionTrigger>
							Will the products you build be scalable?
						</AccordionTrigger>
						<AccordionContent>
							Yes. We use proven tech stacks (Next.js, Supabase, AI tools) with
							scalable architecture, so your product can grow from prototype to
							production smoothly.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="q4">
						<AccordionTrigger>
							What if I need changes after delivery?
						</AccordionTrigger>
						<AccordionContent>
							Every engagement includes post-delivery support: 7 days for MVPs,
							2 weeks for strategy, and ongoing support in fractional product
							management.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="q5">
						<AccordionTrigger>
							How does your fractional product management work?
						</AccordionTrigger>
						<AccordionContent>
							You get 20 hours/week of senior product leadership — including
							roadmap planning, team coordination, analytics, and strategy.
							Perfect for growing startups that need execution without hiring
							full-time.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</section>
	);
}
