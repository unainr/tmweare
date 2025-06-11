import { ServicesGlobeProps } from "@/types";
import { CircleWithDot, DoubleCircle, SphereGrid } from "./HelperIcons";

const ServicesGlobe = ({circleWithDot, doubleCircle, sphereGrid , heading,paragraph,subheading,subparagraph  }: ServicesGlobeProps) => {
	return (
		<div className="min-h-screen bg-black text-white  p-8">
			<div className="max-w-6xl w-full md:flex md:flex-col md:gap-10 lg:flex lg:flex-row lg:gap-32  items-center justify-center">
				{/* Left side - Circle Animation */}
				<div className="flex justify-center lg:justify-start">
					<div className="relative w-80 h-80">
						{circleWithDot && <CircleWithDot />}
						{doubleCircle && <DoubleCircle />}
						{sphereGrid && <SphereGrid />}
					</div>
				</div>

				{/* Right side - Content */}
				<div className="space-y-8">
					<div className="space-y-6">
						<h1 className="text-5xl lg:text-6xl font-bold leading-tight">
							{heading}
						</h1>

						<p className="text-gray-400 text-lg leading-relaxed max-w-md">
							{paragraph}
						</p>
					</div>

					{/* Divider line */}
					<div className="w-full h-px bg-white"></div>

					{/* Bottom section */}
					<div className="space-y-6">
						<h2 className="text-xl font-semibold">
							{subheading}
						</h2>

						<p className="text-gray-400">
							{subparagraph}
						</p>

						<button className="relative font-semibold cursor-pointer text-white group my-3">
							Read case study
							<span className="absolute left-0 -bottom-1 w-full h-[0.01rem] bg-white scale-x-0 transform transition-transform duration-300 origin-right group-hover:scale-x-100 group-hover:origin-left"></span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesGlobe;
