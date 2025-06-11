"use client";
import { useEffect, useState } from "react";

export const CircleWithDot = () => {
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
		<div className="relative w-90 h-90 flex items-center justify-center">
			<svg width="360" height="360" className="transform -rotate-90">
				{/* Background Circle */}
				<circle
					cx="180"
					cy="180"
					r="160"
					fill="none"
					stroke="#374151"
					strokeWidth="4"
				/>
				{/* Animated Fill Circle */}
				<circle
					cx="180"
					cy="180"
					r="160"
					fill="none"
					stroke="#ff6b35"
					strokeWidth="2"
					strokeDasharray={`${2 * Math.PI * 160}`}
					strokeDashoffset={`${2 * Math.PI * 160 * (1 - fillProgress / 100)}`}
					className="transition-all duration-300 ease-out"
				/>
				{/* Rotating Dot */}
				<circle
					cx={180 + 160 * Math.cos((dotRotation * Math.PI) / 180)}
					cy={180 + 160 * Math.sin((dotRotation * Math.PI) / 180)}
					r="8"
					fill="#fff"
					className="drop-shadow-lg"
				/>
			</svg>
		</div>
	);
};

export const DoubleCircle = () => {
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
		<div className="relative w-96 h-96 flex items-center justify-center">
			<svg width="360" height="360" className="transform -rotate-90">
				{/* Outer Background Circle */}
				<circle
					cx="180"
					cy="180"
					r="160"
					fill="none"
					stroke="#374151"
					strokeWidth="2"
				/>
				{/* Outer Animated Fill */}
				<circle
					cx="180"
					cy="180"
					r="160"
					fill="none"
					stroke="#db0202"
					strokeWidth="2"
					strokeDasharray={`${2 * Math.PI * 160}`}
					strokeDashoffset={`${2 * Math.PI * 160 * (1 - outerFill / 100)}`}
					className="transition-all duration-300 ease-out"
				/>

				{/* Inner Background Circle (Dashed) */}
				<circle
					cx="180"
					cy="180"
					r="100"
					fill="none"
					stroke="#db0202"
					strokeWidth="1"
					strokeDasharray="5,5"
				/>
				{/* Inner Animated Fill */}
				<circle
					cx="180"
					cy="180"
					r="100"
					fill="none"
					stroke="#db0202"
					strokeWidth="2"
					strokeDasharray={`${2 * Math.PI * 100}`}
					strokeDashoffset={`${2 * Math.PI * 100 * (1 - innerFill / 100)}`}
					className="transition-all duration-300 ease-out"
				/>

				{/* Rotating Dot */}
				<circle
					cx={180 + 160 * Math.cos((dotRotation * Math.PI) / 180)}
					cy={180 + 160 * Math.sin((dotRotation * Math.PI) / 180)}
					r="8"
					fill="#ffff"
					className="drop-shadow-lg"
				/>
			</svg>
		</div>
	);
};


export const SphereGrid = () => {
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
				<div className="relative w-[500px] h-[500px] flex items-start justify-start">
			<svg width="400" height="400">
				{/* Outer Circle */}
				<circle
					cx="200"
					cy="200"
					r="180"
					fill="none"
					stroke="#0268db"
					strokeWidth="3"
				/>

				{/* Vertical Lines */}
				<path
					d="M 200 20 Q 200 200 200 380"
					fill="none"
					stroke="#0268db"
					strokeWidth="2"
				/>
				<path
					d="M 200 20 Q 110 200 200 380"
					fill="none"
					stroke="#0268db"
					strokeWidth="2"
				/>
				<path
					d="M 200 20 Q 290 200 200 380"
					fill="none"
					stroke="#0268db"
					strokeWidth="2"
				/>

				{/* Horizontal Lines */}
				<ellipse
					cx="200"
					cy="200"
					rx="180"
					ry="45"
					fill="none"
					stroke="#0268db"
					strokeWidth="2"
				/>
				<ellipse
					cx="200"
					cy="200"
					rx="135"
					ry="34"
					fill="none"
					stroke="#0268db"
					strokeWidth="2"
				/>

				{/* Animated Fill Lines */}
				<path
					d="M 200 20 Q 200 200 200 380"
					fill="none"
					stroke="#0268db"
					strokeWidth="3"
					strokeDasharray="720"
					strokeDashoffset={720 - fillProgress * 7.2}
					className="transition-all duration-300 ease-out"
				/>
				<path
					d="M 200 20 Q 110 200 200 380"
					fill="none"
					stroke="#0268db"
					strokeWidth="3"
					strokeDasharray="800"
					strokeDashoffset={800 - fillProgress * 8}
					className="transition-all duration-300 ease-out"
				/>
				<path
					d="M 200 20 Q 290 200 200 380"
					fill="none"
					stroke="#0268db"
					strokeWidth="3"
					strokeDasharray="800"
					strokeDashoffset={800 - fillProgress * 8}
					className="transition-all duration-300 ease-out"
				/>

				{/* Animated Horizontal Lines */}
				<ellipse
					cx="200"
					cy="200"
					rx="180"
					ry="45"
					fill="none"
					stroke="#0268db"
					strokeWidth="3"
					strokeDasharray={`${2 * Math.PI * 180}`}
					strokeDashoffset={`${2 * Math.PI * 180 * (1 - fillProgress / 100)}`}
					className="transition-all duration-300 ease-out"
				/>

				{/* Rotating Dot */}
				<circle
					cx={200 + 180 * Math.cos((dotRotation * Math.PI) / 180)}
					cy={200 + 45 * Math.sin((dotRotation * Math.PI) / 180)}
					r="8"
					fill="#ffff"
					className="drop-shadow-lg"
				/>
			</svg>
		</div>

	);
};