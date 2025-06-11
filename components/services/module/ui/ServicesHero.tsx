import React from "react";
import { ArrowDown } from "lucide-react";

const ServicesHero = () => {
	return (
		<section className="min-h-screen bg-gray-50">
			<div className="container mx-auto px-4 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
					{/* Left Content */}
					<div className="space-y-8">
						<h1 className="text-6xl lg:text-7xl font-bold text-black ">
							We work as an extension of your team
						</h1>

						<p className="text-lg text-gray-600 leading-relaxed max-w-lg">
							We help internal leaders reimagine the product experience and
							leave teams with industrial-grade designs geared to delight
							customers and reach product market fit quickly.
						</p>
					</div>

					{/* Right Image */}
					<div className="relative">
						<img
							src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
							alt="Team collaboration"
							className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
						/>

						
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesHero;
