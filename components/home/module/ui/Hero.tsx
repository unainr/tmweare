import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon, Cpu, ShieldCheck, Layers, Zap, Eye } from "lucide-react";
import { Scene } from "@/components/ui/fluid-blob";
import { ContainerTextFlip } from "./container-text-flip";

const features = [
	{
		icon: Cpu,
		title: "AI Acceleration",
		description: "Leverage cutting-edge AI tools to build smarter and faster.",
	},
	{
		icon: ShieldCheck,
		title: "Enterprise-Grade Security",
		description:
			"End-to-end encryption and compliance built into every project.",
	},
	{
		icon: Layers,
		title: "Scalable Architecture",
		description: "Designed to scale with your business from MVP to enterprise.",
	},
	{
		icon: Zap,
		title: "Lightning-Fast Delivery",
		description: "Launch MVPs and strategies in days, not months.",
	},
];

const HeroMain = () => {
	return (
<div className="relative w-full  h-full overflow-hidden bg-[#121212] text-white flex flex-col items-center justify-center p-8 my-16 rounded-xl">
			<div className="w-full max-w-6xl space-y-12 relative z-10">
				<div className="flex flex-col items-center text-center space-y-8">
					<Badge
						variant="secondary"
						className="backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 px-4 py-2 rounded-full">
						✨ Rovamo
					</Badge>

					<div className="flex items-center justify-center px-4  text-center">
						<div className="max-w-5xl">
							<h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
								AI-Powered Innovation for&nbsp;
								<span className="block sm:inline">
									Tomorrow's Products&nbsp;
									<span className="inline-block align-middle">
										<ContainerTextFlip
											className="inline-block "
											words={["Faster", "Smarter", "Impactful"]}
										/>
									</span>
								</span>
							</h1>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
					{features.map((feature, idx) => (
						<div
							key={idx}
							className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 h-40 md:h-48 flex flex-col justify-start items-start space-y-2 md:space-y-3">
							<feature.icon size={18} className="text-white/80 md:w-5 md:h-5" />
							<h3 className="text-sm md:text-base font-medium">
								{feature.title}
							</h3>
							<p className="text-xs md:text-sm text-neutral-400">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
			<div className="absolute inset-0">
				<Scene />
			</div>
		</div>
	);
};

export default HeroMain;
