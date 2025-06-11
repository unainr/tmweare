import ProjectFeature from "@/components/home/module/ui/FeaturedProduct";
import React from "react";

const WorkPage = () => {
	return (
		<div className="bg-[#121212] text-white py-16 ">
			<ProjectFeature
				pageTitle="Explore Our Work"
				featured={true}
				title="Anthem"
				subtitle="Helping teams make decisions with real-time health data"
				description="How TM designed a data-driven platform during COVID."
				imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&crop=face"
			/>
			<div className="flex">
				<ProjectFeature
					title="Pulse AI working"
					subtitle="Visualizing patient data to optimize outcomes"
					description="An intelligent dashboard for medical professionals."
					imageUrl="https://images.unsplash.com/photo-1607706189992-eae578626c86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwaW1hZ2VzfGVufDB8fDB8fHww"
					reverseColumn={true}
					reverse={true}
					color="text-red-500"
				/>

				<ProjectFeature
					title="Anthem"
					subtitle="Helping teams make decisions with real-time health data"
					description="How TM designed a data-driven platform during COVID."
					imageUrl="https://media.istockphoto.com/id/1979289151/photo/data-analysis-science-and-big-data-with-ai-technology-analyst-or-scientist-uses-a-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=GrvCSFwQFUuKN6batVV8RGDLAY3YMIxj_bJ4xdsVbGw="
					reverseColumn={true}
					reverse={true}
				/>
				<ProjectFeature
					title="Forethought"
					subtitle="Visualizing patient data to optimize outcomes"
					description="An intelligent dashboard for medical professionals."
					imageUrl="https://media.istockphoto.com/id/2158919442/photo/digital-eye-ai-artificial-intelligence-digital-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=3pPriny2ZmQK4fq289jwODHuKg94Lytr5_S13JVi-h8="
					reverseColumn={true}
					reverse={true}
					color="text-[#0bbba9]"
				/>
			</div>
			<div className="flex">
				<ProjectFeature
					title="PulseAI"
					subtitle="Visualizing patient data to optimize outcomes"
					description="An intelligent dashboard for medical professionals."
					imageUrl="https://media.istockphoto.com/id/1889510378/photo/ai-enhanced-social-networking.webp?a=1&b=1&s=612x612&w=0&k=20&c=sk0WLDB408NZU5Vr_XLrk1z8FcoVSkenMwxNut1R2Pw="
					reverseColumn={true}
					reverse={true}
					color="text-red-500"
				/>

				<ProjectFeature
					title="Anthem"
					subtitle="Helping teams make decisions with real-time health data"
					description="How TM designed a data-driven platform during COVID."
					imageUrl="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1taW5nfGVufDB8fDB8fHww"
					reverseColumn={true}
					reverse={true}
				/>
				<ProjectFeature
					title="Forethought"
					subtitle="Visualizing patient data to optimize outcomes"
					description="An intelligent dashboard for medical professionals."
					imageUrl="https://images.unsplash.com/photo-1564865878688-9a244444042a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2dyYW1taW5nfGVufDB8fDB8fHww"
					reverseColumn={true}
					reverse={true}
					color="text-[#0bbba9]"
				/>
			</div>
			<ProjectFeature
							title="PulseAI"
							subtitle="Visualizing patient data to optimize outcomes"
							description="An intelligent dashboard for medical professionals."
							imageUrl="https://images.unsplash.com/photo-1607706189992-eae578626c86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwaW1hZ2VzfGVufDB8fDB8fHww"
							reverse={true}
							color="text-red-500"
						/>
		</div>
	);
};

export default WorkPage;
