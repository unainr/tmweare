"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { images } from "@/constants";

const FuturisticHero = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [currentImage, setCurrentImage] = useState(0);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const containerRef = useRef<HTMLDivElement>(null);
	const eyeRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Trigger animations on mount
		const timer = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		// Auto-rotate images
		const interval = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % images.length);
		}, 4000);
		return () => clearInterval(interval);
	}, [images.length]);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (containerRef.current) {
				const rect = containerRef.current.getBoundingClientRect();
				setMousePosition({
					x: ((e.clientX - rect.left) / rect.width) * 100,
					y: ((e.clientY - rect.top) / rect.height) * 100,
				});
			}
		};

		const container = containerRef.current;
		if (container) {
			container.addEventListener("mousemove", handleMouseMove);
			return () => container.removeEventListener("mousemove", handleMouseMove);
		}
	}, []);

	return (
		<section
			ref={containerRef}
			className="relative min-h-screen overflow-hidden ">
			{/* Background Gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900 opacity-50" />

			{/* Animated Grid Background */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse" />
			</div>

			<div className="relative z-10 flex items-center min-h-screen">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						{/* Left Content */}
						<div className="space-y-8">
							{/* Main Heading */}
							<div className="space-y-4">
								<h1 className="text-5xl lg:text-7xl xl:text-6xl font-bold leading-none">
									<div className="overflow-hidden">
										<span
											className={`block transform transition-all duration-1000 delay-200 ${
												isVisible
													? "translate-y-0 opacity-100"
													: "translate-y-full opacity-0"
											}`}>
											Future-proofing
										</span>
									</div>
									<div className="overflow-hidden">
										<span
											className={`block transform transition-all duration-1000 delay-400 ${
												isVisible
													? "translate-y-0 opacity-100"
													: "translate-y-full opacity-0"
											}`}>
											businesses
										</span>
									</div>
									<div className="overflow-hidden">
										<span
											className={`block transform transition-all duration-1000 delay-600 ${
												isVisible
													? "translate-y-0 opacity-100"
													: "translate-y-full opacity-0"
											}`}>
											through design
										</span>
									</div>
								</h1>
							</div>

							{/* Description */}
							<div className="overflow-hidden">
								<p
									className={`text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl transform transition-all duration-1000 delay-800 ${
										isVisible
											? "translate-y-0 opacity-100"
											: "translate-y-full opacity-0"
									}`}>
									TM is a product design and innovation group that cracks tough
									problems for established organizations looking to change — and
									startups looking to change the world.
								</p>
							</div>
						</div>

						{/* Right Image Carousel Section */}
						<div className="relative">
							{/* Image Carousel Container */}
							<div
								ref={eyeRef}
								className={`relative aspect-square w-full my-5 mb-10 mx-auto transform transition-all duration-1500 delay-300 ${
									isVisible
										? "scale-100 opacity-100 rotate-0"
										: "scale-75 opacity-0 rotate-12"
								}`}>
								{/* Wave Carousel Effect */}
								<div className="relative w-full h-full  overflow-hidden shadow-2xl">
									{/* Background Gradient */}
									<div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 animate-pulse" />

									{/* Dynamic Image Carousel */}
									<div className="relative w-full h-full">
										{images.map((image, index) => (
											<div
												key={index}
												className={`absolute inset-0 transition-all duration-1000 ${
													index === currentImage
														? "opacity-100 scale-100"
														: "opacity-0 scale-105"
												}`}>
												<Image
													width={900}
													height={900}
													loading="lazy"
													src={image.src}
													alt={image.alt}
													className="w-full h-full object-cover"
												/>
												<div
													className={`absolute inset-0  ${image.gradient}`}
												/>
											</div>
										))}

										{/* Animated Wave Overlay */}
										<div
											className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
											style={{
												animation: "wave 4s ease-in-out infinite",
											}}
										/>

										{/* Tech HUD Overlay */}
										<div className="absolute inset-0">
											{/* Corner Brackets */}
											<div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-300 opacity-70 animate-pulse" />
											<div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-300 opacity-70 animate-pulse" />
											<div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-300 opacity-70 animate-pulse" />
											<div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-300 opacity-70 animate-pulse" />

											{/* Center Crosshair */}
											<div className="absolute inset-0 flex items-center justify-center">
												<div className="w-16 h-px bg-cyan-300 opacity-60 animate-pulse" />
												<div className="absolute w-px h-16 bg-cyan-300 opacity-60 animate-pulse" />
											</div>

											{/* Scanning Line */}
											<div
												className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-80"
												style={{
													animation: "scan 3s ease-in-out infinite",
												}}
											/>
										</div>
									</div>

									{/* Image Indicators */}
									<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
										{images.map((_, index) => (
											<button
												key={index}
												onClick={() => setCurrentImage(index)}
												className={`w-2 h-2 rounded-full transition-all duration-300 ${
													index === currentImage
														? "bg-cyan-300 w-6"
														: "bg-gray-500 hover:bg-gray-400"
												}`}
											/>
										))}
									</div>
								</div>

								{/* Floating Tech Elements */}
								<div
									className="absolute -top-4 -left-4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"
									style={{ animationDelay: "0s" }}
								/>
								<div
									className="absolute -top-8 right-8 w-2 h-2 bg-blue-400 rounded-full animate-bounce"
									style={{ animationDelay: "0.5s" }}
								/>
								<div
									className="absolute bottom-4 -right-6 w-4 h-4 bg-indigo-400 rounded-full animate-bounce"
									style={{ animationDelay: "1s" }}
								/>
								<div
									className="absolute -bottom-6 left-12 w-2 h-2 bg-purple-400 rounded-full animate-bounce"
									style={{ animationDelay: "1.5s" }}
								/>
							</div>

							{/* Circular Scroll Indicator */}
						</div>
					</div>
				</div>
			</div>

			{/* Particle Effects */}
			<div className="absolute inset-0 pointer-events-none">
				{[...Array(20)].map((_, i) => (
					<div
						key={i}
						className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30 animate-pulse"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 3}s`,
							animationDuration: `${2 + Math.random() * 3}s`,
						}}
					/>
				))}
			</div>
		</section>
	);
};

export default FuturisticHero;
