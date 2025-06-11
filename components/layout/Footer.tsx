"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { NavgationDark } from "@/types";

const Footer = ({ dark }: NavgationDark) => {
	const pathname = usePathname();
	const [email, setEmail] = useState("");

	const navigationItems = [
		{ name: "Services", href: "/services" },
		{ name: "Work", href: "/work" },
		{ name: "Company", href: "/company" },
		{ name: "Careers", href: "/careers" },
	];

	const isActivePage = (href: string) => {
		return pathname === href;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle newsletter signup
		console.log("Newsletter signup:", email);
		setEmail("");
	};

	return (
		<footer
			className={`${dark ? "bg-black text-white" : "bg-white text-black"}`}>
			<div className="min-h-screen flex flex-col">
				{/* Main Content */}
				<div className="flex-1 px-6 sm:px-8 lg:px-12 py-16 lg:py-20 mx-auto">
					<div className="max-w-7xl mx-auto h-full">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 h-full items-center">
							{/* Left Section - Newsletter */}
							<div className="space-y-12 lg:space-y-16">
								<h2 className="text-3xl sm:text-4xl lg:text-4xl font-light leading-tight">
									Sign up for our newsletter
								</h2>

								<form
									onSubmit={handleSubmit}
									className={`space-y-2 ${
										dark ? "bg-black text-white" : "bg-white text-black"
									}`}>
									<div className="relative">
										<input
											type="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											placeholder="Your email address"
											className={`w-full bg-transparent border-b-2 pb-4 text-xl sm:text-2xl focus:outline-none transition-colors duration-300
    ${
			dark
				? "border-white/30 text-white placeholder-white/50 focus:border-white"
				: "border-black/30 text-black placeholder-black/50 focus:border-black"
		}`}
											required
										/>

										<button
											type="submit"
											className={`absolute right-0 top-0 transition-colors duration-300 ${
												dark
													? "text-white hover:text-white/70"
													: "text-black hover:text-black/70"
											}`}>
											<svg
												width="32"
												height="32"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M5 12H19M19 12L12 5M19 12L12 19"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</button>
									</div>
								</form>

								<div className="pt-8 space-y-4">
									<p className="text-lg ">San Francisco, CA 94110</p>
									<p className="text-lg ">3579 17th St</p>
									<Link
										href="/directions"
										className="inline-block text-xl  underline hover:no-underline transition-all duration-300 mt-6 font-semibold">
										Get directions
									</Link>
								</div>
							</div>

							{/* Right Section - Navigation */}
							<div className="lg:text-right">
								<nav className="space-y-1">
									{navigationItems.map((item) => (
										<div key={item.name}>
											<Link
												href={item.href}
												className={`block font-bold leading-none transition-all duration-300 hover:opacity-70 text-[clamp(3.5rem,6vw,6rem)] ${
													isActivePage(item.href)
														? dark
															? "text-transparent [text-stroke:2px_white] [-webkit-text-stroke:2px_white] [-webkit-text-fill-color:transparent]"
															: "text-transparent [text-stroke:2px_black] [-webkit-text-stroke:2px_black] [-webkit-text-fill-color:transparent]"
														: dark
														? "text-white"
														: "text-black"
												}`}>
												{item.name}
											</Link>
										</div>
									))}
								</nav>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Copyright */}
				<div className="px-6 sm:px-8 lg:px-12 pb-8">
					<div className="max-w-7xl mx-auto">
						<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-white/70">
							<p className="text-lg">© TM 2020. All rights reserved.</p>
							<Link
								href="/privacy"
								className="text-lg underline hover:no-underline transition-all duration-300 font-semibold">
								Privacy Policy
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
