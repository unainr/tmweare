import DesignImpact from "@/components/home/module/ui/DesignImpact";
import ProjectFeature from "@/components/home/module/ui/FeaturedProduct";
import FuturisticHero from "@/components/home/module/ui/FuturisticHero ";
import AnimatedCircles from "@/components/home/module/ui/Globe";

export default function Home() {
	return (
		<div className="bg-[#121212] text-white">
			<FuturisticHero />
			<DesignImpact />
			<AnimatedCircles />
			<ProjectFeature
			pageTitle="Featured Projects"
				featured={true}
				title="Anthem"
				subtitle="Helping teams make decisions with real-time health data"
				description="How TM designed a data-driven platform during COVID."
				imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&crop=face"
			/>

			<ProjectFeature
				title="PulseAI"
				subtitle="Visualizing patient data to optimize outcomes"
				description="An intelligent dashboard for medical professionals."
				imageUrl="https://images.unsplash.com/photo-1607706189992-eae578626c86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwaW1hZ2VzfGVufDB8fDB8fHww"
				reverse={true}
				color="text-red-500"
			/>

			<ProjectFeature
				title="Anthem"
				subtitle="Helping teams make decisions with real-time health data"
				description="How TM designed a data-driven platform during COVID."
				imageUrl="https://media.istockphoto.com/id/1979289151/photo/data-analysis-science-and-big-data-with-ai-technology-analyst-or-scientist-uses-a-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=GrvCSFwQFUuKN6batVV8RGDLAY3YMIxj_bJ4xdsVbGw="
			/>
			<ProjectFeature
				title="Forethought"
				subtitle="Visualizing patient data to optimize outcomes"
				description="An intelligent dashboard for medical professionals."
				imageUrl="https://media.istockphoto.com/id/2158919442/photo/digital-eye-ai-artificial-intelligence-digital-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=3pPriny2ZmQK4fq289jwODHuKg94Lytr5_S13JVi-h8="
				reverse={true}
				color="text-[#0bbba9]"
			/>
		</div>
	);
}
