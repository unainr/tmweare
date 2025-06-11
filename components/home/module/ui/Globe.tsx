"use client";
import React, { useState, useEffect } from "react";

const CircleWithDot = () => {
	const [fillProgress, setFillProgress] = useState(0);
	const [dotRotation, setDotRotation] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setFillProgress((prev) => (prev >= 100 ? 0 : prev + 2));
			setDotRotation((prev) => prev + 3);
		}, 100);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative w-48 h-48 flex items-center justify-center">
			<svg width="180" height="180" className="transform -rotate-90">
				{/* Background Circle */}
				<circle
					cx="90"
					cy="90"
					r="80"
					fill="none"
					stroke="#374151"
					strokeWidth="2"
				/>
				{/* Animated Fill Circle */}
				<circle
					cx="90"
					cy="90"
					r="80"
					fill="none"
					stroke="#ffff"
					strokeWidth="2"
					strokeDasharray={`${2 * Math.PI * 80}`}
					strokeDashoffset={`${2 * Math.PI * 80 * (1 - fillProgress / 100)}`}
					className="transition-all duration-300 ease-out"
				/>
				{/* Rotating Dot */}
				<circle
					cx={90 + 80 * Math.cos((dotRotation * Math.PI) / 180)}
					cy={90 + 80 * Math.sin((dotRotation * Math.PI) / 180)}
					r="6"
					fill="#ffff"
					className="drop-shadow-lg"
				/>
			</svg>
		</div>
	);
};

const DoubleCircle = () => {
	const [outerFill, setOuterFill] = useState(0);
	const [innerFill, setInnerFill] = useState(0);
	const [dotRotation, setDotRotation] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setOuterFill((prev) => (prev >= 100 ? 0 : prev + 1.5));
			setInnerFill((prev) => (prev >= 100 ? 0 : prev + 2.5));
			setDotRotation((prev) => prev + 2);
		}, 100);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative w-48 h-48 flex items-center justify-center">
			<svg width="180" height="180" className="transform -rotate-90">
				{/* Outer Background Circle */}
				<circle
					cx="90"
					cy="90"
					r="80"
					fill="none"
					stroke="#374151"
					strokeWidth="2"
				/>
				{/* Outer Animated Fill */}
				<circle
					cx="90"
					cy="90"
					r="80"
					fill="none"
					stroke="#ffff"
					strokeWidth="2"
					strokeDasharray={`${2 * Math.PI * 80}`}
					strokeDashoffset={`${2 * Math.PI * 80 * (1 - outerFill / 100)}`}
					className="transition-all duration-300 ease-out"
				/>

				{/* Inner Background Circle (Dashed) */}
				<circle
					cx="90"
					cy="90"
					r="50"
					fill="none"
					stroke="#ffff"
					strokeWidth="1"
					strokeDasharray="5,5"
				/>
				{/* Inner Animated Fill */}
				<circle
					cx="90"
					cy="90"
					r="50"
					fill="none"
					stroke="#ffff"
					strokeWidth="2"
					strokeDasharray={`${2 * Math.PI * 50}`}
					strokeDashoffset={`${2 * Math.PI * 50 * (1 - innerFill / 100)}`}
					className="transition-all duration-300 ease-out"
				/>

				{/* Rotating Dot */}
				<circle
					cx={90 + 80 * Math.cos((dotRotation * Math.PI) / 180)}
					cy={90 + 80 * Math.sin((dotRotation * Math.PI) / 180)}
					r="6"
					fill="#ffff"
					className="drop-shadow-lg"
				/>
			</svg>
		</div>
	);
};

const SphereGrid = () => {
	const [fillProgress, setFillProgress] = useState(0);
	const [dotRotation, setDotRotation] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setFillProgress((prev) => (prev >= 100 ? 0 : prev + 1));
			setDotRotation((prev) => prev + 2);
		}, 100);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative w-48 h-48 flex items-center justify-center">
			<svg width="180" height="180">
				{/* Outer Circle */}
				<circle
					cx="90"
					cy="90"
					r="80"
					fill="none"
					stroke="#374151"
					strokeWidth="2"
				/>

				{/* Vertical Lines */}
				<path
					d="M 90 10 Q 90 90 90 170"
					fill="none"
					stroke="#374151"
					strokeWidth="1"
				/>
				<path
					d="M 90 10 Q 50 90 90 170"
					fill="none"
					stroke="#374151"
					strokeWidth="1"
				/>
				<path
					d="M 90 10 Q 130 90 90 170"
					fill="none"
					stroke="#374151"
					strokeWidth="1"
				/>

				{/* Horizontal Lines */}
				<ellipse
					cx="90"
					cy="90"
					rx="80"
					ry="20"
					fill="none"
					stroke="#ffff"
					strokeWidth="1"
				/>
				<ellipse
					cx="90"
					cy="90"
					rx="60"
					ry="15"
					fill="none"
					stroke="#ffff"
					strokeWidth="1"
				/>

				{/* Animated Fill Lines */}
				<path
					d="M 90 10 Q 90 90 90 170"
					fill="none"
					stroke="#fff"
					strokeWidth="2"
					strokeDasharray="500"
					strokeDashoffset={500 - fillProgress * 5}
					className="transition-all duration-300 ease-out"
				/>
				<path
					d="M 90 10 Q 50 90 90 170"
					fill="none"
					stroke="#ffff"
					strokeWidth="2"
					strokeDasharray="600"
					strokeDashoffset={600 - fillProgress * 6}
					className="transition-all duration-300 ease-out"
				/>
				<path
					d="M 90 10 Q 130 90 90 170"
					fill="none"
					stroke="#ffff"
					strokeWidth="2"
					strokeDasharray="600"
					strokeDashoffset={600 - fillProgress * 6}
					className="transition-all duration-300 ease-out"
				/>

				{/* Animated Horizontal Lines */}
				<ellipse
					cx="90"
					cy="90"
					rx="80"
					ry="20"
					fill="none"
					stroke="#ffff"
					strokeWidth="2"
					strokeDasharray={`${2 * Math.PI * 80}`}
					strokeDashoffset={`${2 * Math.PI * 80 * (1 - fillProgress / 100)}`}
					className="transition-all duration-300 ease-out"
				/>

				{/* Rotating Dot */}
				<circle
					cx={90 + 80 * Math.cos((dotRotation * Math.PI) / 180)}
					cy={90 + 20 * Math.sin((dotRotation * Math.PI) / 180)}
					r="6"
					fill="#ffff"
					className="drop-shadow-lg"
				/>
			</svg>
		</div>
	);
};

export default function AnimatedCircles() {
	return (
		<div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
  <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
    <div className="text-start max-w-xs">
      <div className="flex justify-center lg:justify-start">
        <CircleWithDot />
      </div>
      <h3 className="text-white mt-4 text-2xl sm:text-3xl font-bold">
        <span className="block">Take New</span>
        <span className="block">business from</span>
        <span className="block">zero to 1</span>
      </h3>
      <p className="text-gray-400 text-sm mt-2 w-full sm:w-52">
        Leading startups through the process of designing and launching a new product.
      </p>
    </div>

    <div className="text-start max-w-xs mt-12 lg:mt-0">
      <div className="flex justify-center lg:justify-start">
        <DoubleCircle />
      </div>
      <h3 className="text-white mt-4 text-2xl sm:text-3xl font-bold">
        <span className="block">Reimagine an</span>
        <span className="block">existing product</span>
        <span className="block">for scale</span>
      </h3>
      <p className="text-gray-400 text-sm mt-2 w-full sm:w-52">
        Kickstarting growth through fully rearchitecting a design experience.
      </p>
    </div>

    <div className="text-start max-w-xs mt-12 lg:mt-0">
      <div className="flex justify-center lg:justify-start">
        <SphereGrid />
      </div>
      <h3 className="text-white mt-4 text-2xl sm:text-3xl font-bold">
        <span className="block">Innovate within</span>
        <span className="block">an institution</span>
      </h3>
      <p className="text-gray-400 text-sm mt-2 w-full sm:w-52">
        Guiding the design of strategic initiatives within established businesses looking to modernize.
      </p>
    </div>
  </div>
</div>

	);
}
