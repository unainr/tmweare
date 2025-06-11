"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavgationDark } from "@/types";

const Navigation = ({dark}:NavgationDark) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ name: "Services", href: "/services" },
		{ name: "Work", href: "/work" },
		{ name: "Company", href: "/company" },
		{ name: "Careers", href: "/careers" },
	];

	const isActive = (href: string) => pathname === href;

	return (
		
		<nav
	className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
		isScrolled
			? dark
				? "bg-black/40 backdrop-blur-sm shadow-lg"
				: "bg-white/80 backdrop-blur-sm shadow-lg"
			: dark
				? "bg-black"
				: "bg-white"
	}`}>

			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 lg:h-20">
					{/* Logo */}
					<Link
						href="/"
						className="flex-shrink-0 group transition-transform duration-200 hover:scale-105">
						<div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-white flex items-center justify-center group-hover:border-gray-300 transition-colors">
							<span className="text-white text-lg lg:text-xl font-bold">
								TM
							</span>
						</div>
					</Link>

					{/* Navigation Links */}
					<div className="hidden md:flex items-center space-x-8 lg:space-x-12">
						{navItems.map((item) => (
							<Link
	key={item.href}
	href={item.href}
	className={`group relative flex items-center space-x-2 text-sm lg:text-base font-medium transition-colors duration-200 ${
		isActive(item.href)
			? dark
				? "text-white"
				: "text-black"
			: dark
				? "text-gray-300 hover:text-white"
				: "text-gray-600 hover:text-black"
	}`}>
	<span>{item.name}</span>

	{/* Animated underline */}
	<div
		className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
			isActive(item.href)
				? dark
					? "bg-white w-full"
					: "bg-black w-full"
				: dark
					? "bg-white w-0 group-hover:w-full"
					: "bg-black w-0 group-hover:w-full"
		}`}
	/>
</Link>

						))}
					</div>

					{/* Contact Button */}
					<Link
						href="/contact"
						className="group flex items-center space-x-3 px-4 lg:px-6 py-2 lg:py-3 rounded-full border border-gray-600 hover:border-white transition-all duration-200 hover:bg-white/5">
						<span className="text-white text-sm lg:text-base font-medium">
							Contact
						</span>
						<div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-200">
							<svg
								viewBox="0 0 16 12"
								className="w-3 h-3 lg:w-4 lg:h-4 transform group-hover:translate-x-0.5 transition-transform duration-200">
								<polygon
									className="fill-black"
									points="15.8,6 15.3,5.5 15.3,5.5 9.9,0.1 9.2,0.8 13.9,5.5 0.5,5.5 0.5,6.5 13.9,6.5 9.2,11.2 9.9,11.9 15.3,6.5 15.3,6.5"
								/>
							</svg>
						</div>
					</Link>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="md:hidden"
						aria-label="Toggle menu">
						<svg
							className="w-6 h-6 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>

				{/* Mobile Menu */}
				<div
					className={`md:hidden fixed top-[70px] left-0 right-0 bg-black/95 z-50 transition-all duration-300 overflow-hidden px-6 ${
						isMenuOpen
							? "h-auto max-h-[calc(100vh-70px)] pb-6 shadow-lg"
							: "max-h-0"
					}`}>
					<div className="space-y-4">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={`block py-2 text-base font-medium transition-colors duration-200 ${
									isActive(item.href)
										? "text-white"
										: "text-gray-300 hover:text-white"
								}`}>
								{item.name}
							</Link>
						))}
						<Link
							href="/contact"
							className="block py-3 px-4 mt-4 text-center bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors duration-200">
							Contact
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
