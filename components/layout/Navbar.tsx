"use client";
import * as React from "react";
import { Menu, X, ChevronDown } from "lucide-react";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "../ui/mode-toggle";
import BookACallModal from "../home/module/ui/BookACallModal";

const services: {
	title: string;
	href: string;
	description: string;
	icon: string;
}[] = [
	{
		title: "Web Development",
		href: "/services/web-development",
		description:
			"Custom websites and web applications tailored to your business needs.",
		icon: "💻",
	},
	{
		title: "Mobile App Development",
		href: "/services/mobile-development",
		description:
			"Native and cross-platform mobile applications for iOS and Android.",
		icon: "📱",
	},
	{
		title: "UI/UX Design",
		href: "/services/ui-ux-design",
		description:
			"User-centered design that enhances user experience and engagement.",
		icon: "🎨",
	},
	{
		title: "Digital Marketing",
		href: "/services/digital-marketing",
		description:
			"Comprehensive digital marketing strategies to grow your online presence.",
		icon: "📈",
	},
	{
		title: "Brand Strategy",
		href: "/services/brand-strategy",
		description:
			"Develop a cohesive brand identity that resonates with your target audience.",
		icon: "✨",
	},
	{
		title: "E-commerce Solutions",
		href: "/services/ecommerce",
		description:
			"Complete e-commerce platforms with secure payment processing and inventory management.",
		icon: "🛒",
	},
];

const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isScrolled, setIsScrolled] = React.useState(false);
	const [lastScrollY, setLastScrollY] = React.useState(0);
	const [isVisible, setIsVisible] = React.useState(true);
	const [isMobileServicesOpen, setIsMobileServicesOpen] = React.useState(false);

	// Handle scroll event for smart navbar behavior
	React.useEffect(() => {
		const controlNavbar = () => {
			const currentScrollY = window.scrollY;

			// Determine if scrolled past threshold
			if (currentScrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}

			// Hide on scroll down, show on scroll up
			if (currentScrollY > lastScrollY && currentScrollY > 200) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", controlNavbar);
		return () => window.removeEventListener("scroll", controlNavbar);
	}, [lastScrollY]);

	// Close mobile menu when screen size changes
	React.useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsMenuOpen(false);
				setIsMobileServicesOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Close mobile menu on escape key
	React.useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsMenuOpen(false);
				setIsMobileServicesOpen(false);
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, []);

	const handleMobileLinkClick = () => {
		setIsMenuOpen(false);
		setIsMobileServicesOpen(false);
	};

	return (
		<div
			className={cn(
				"fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out",
				isScrolled
					? "bg-[#ffff]/90  dark:bg-[#121212]/90 backdrop-blur-md border-b shadow-lg"
					: "bg-transparent",
				!isVisible && isScrolled ? "-translate-y-full" : "translate-y-0"
			)}>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center">
					{/* Logo */}
					<div className="flex items-center flex-shrink-0">
						<Link
							href="/"
							className={cn(
								"text-xl sm:text-2xl font-bold tracking-tight transition-colors hover:text-primary",
								isScrolled ? "dark:text-white" : "text-foreground"
							)}>
							AgencyWebsite
						</Link>
					</div>

					{/* Desktop Navigation - Centered */}
					<div className="hidden md:flex flex-1 justify-center">
						<NavigationMenu>
							<NavigationMenuList className="space-x-1">
								<NavigationMenuItem>
									<NavigationMenuLink
										asChild
										className={cn(
											navigationMenuTriggerStyle(),
											"bg-transparent hover:bg-white/10",
											isScrolled
												? "dark:text-white hover:text-white"
												: "text-foreground"
										)}>
										<Link href="/" className="font-medium">
											Home
										</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>

								<NavigationMenuItem>
									<NavigationMenuTrigger
										className={cn(
											"font-medium bg-transparent hover:bg-white/10",
											isScrolled
												? "dark:text-white hover:text-white"
												: "text-foreground"
										)}>
										Services
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<div className="w-[480px] p-4 bg-background">
											<div className="grid grid-cols-2 gap-3">
												{services.slice(0, 4).map((service) => (
													<Link
														key={service.title}
														href={service.href}
														className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
														<div className="flex items-center gap-2 mb-2">
															<span className="text-lg group-hover:scale-110 transition-transform duration-200">
																{service.icon}
															</span>
															<div className="text-sm font-medium leading-none">
																{service.title}
															</div>
														</div>
														<p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
															{service.description}
														</p>
													</Link>
												))}
											</div>
											{services.length > 4 && (
												<div className="mt-4 pt-3 border-t">
													<Link
														href="/services"
														className="text-sm font-medium text-primary hover:underline">
														View all services →
													</Link>
												</div>
											)}
										</div>
									</NavigationMenuContent>
								</NavigationMenuItem>

								<NavigationMenuItem>
									<NavigationMenuLink
										asChild
										className={cn(
											navigationMenuTriggerStyle(),
											"bg-transparent hover:bg-white/10",
											isScrolled
												? "dark:text-white hover:text-white"
												: "text-foreground"
										)}>
										<Link href="/work" className="font-medium">
											Work
										</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>

								<NavigationMenuItem>
									<NavigationMenuLink
										asChild
										className={cn(
											navigationMenuTriggerStyle(),
											"bg-transparent hover:bg-white/10",
											isScrolled
												? "dark:text-white hover:text-white"
												: "text-foreground"
										)}>
										<Link href="/contact" className="font-medium">
											Contact
										</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</div>

					<div className="flex items-center gap-4 ml-auto">
						<BookACallModal />
						<ModeToggle />
					</div>

					{/* Mobile menu button */}
					<Button
						variant="ghost"
						size="sm"
						className={cn(
							"md:hidden p-2 hover:bg-white/10 ml-2",
							isScrolled ? "text-white hover:text-white" : "text-foreground"
						)}
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu">
						{isMenuOpen ? (
							<X className="h-5 w-5" />
						) : (
							<Menu className="h-5 w-5" />
						)}
					</Button>
				</div>
			</div>

			{/* Mobile Navigation Overlay */}
			{isMenuOpen && (
				<div
					className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
					onClick={() => setIsMenuOpen(false)}
				/>
			)}

			{/* Mobile Navigation Menu */}
			<div
				className={cn(
					"absolute top-16 left-0 right-0 bg-[#121212]/95 backdrop-blur-md border-b shadow-lg z-50 md:hidden transition-all duration-300 ease-in-out",
					isMenuOpen
						? "opacity-100 translate-y-0"
						: "opacity-0 -translate-y-2 pointer-events-none"
				)}>
				<div className="container mx-auto px-4 py-6 max-h-[calc(100vh-4rem)] overflow-y-auto">
					<nav className="space-y-4">
						{/* Home Link */}
						<Link
							href="/"
							className="block py-3 px-2 text-base font-medium text-white hover:text-primary hover:bg-white/10 rounded-md transition-colors"
							onClick={handleMobileLinkClick}>
							Home
						</Link>

						{/* Services Dropdown */}
						<div className="space-y-2">
							<button
								onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
								className="flex items-center justify-between w-full py-3 px-2 text-base font-medium text-white hover:text-primary hover:bg-white/10 rounded-md transition-colors">
								Services
								<ChevronDown
									className={cn(
										"h-4 w-4 transition-transform duration-200",
										isMobileServicesOpen ? "rotate-180" : ""
									)}
								/>
							</button>

							<div
								className={cn(
									"pl-4 space-y-2 overflow-hidden transition-all duration-300 ease-in-out",
									isMobileServicesOpen
										? "max-h-96 opacity-100"
										: "max-h-0 opacity-0"
								)}>
								<div className="grid gap-3 sm:grid-cols-2">
									{services.map((service) => (
										<Link
											key={service.title}
											href={service.href}
											className="group block p-3 rounded-md hover:bg-white/10 transition-colors border border-white/20"
											onClick={handleMobileLinkClick}>
											<div className="flex items-center gap-2 mb-2">
												<span className="text-lg group-hover:scale-110 transition-transform duration-200">
													{service.icon}
												</span>
												<div className="text-sm font-medium text-white">
													{service.title}
												</div>
											</div>
											<p className="text-xs text-gray-300 leading-relaxed">
												{service.description}
											</p>
										</Link>
									))}
								</div>
							</div>
						</div>

						{/* Other Links */}
						<Link
							href="/work"
							className="block py-3 px-2 text-base font-medium text-white hover:text-primary hover:bg-white/10 rounded-md transition-colors"
							onClick={handleMobileLinkClick}>
							Work
						</Link>

						<Link
							href="/contact"
							className="block py-3 px-2 text-base font-medium text-white hover:text-primary hover:bg-white/10 rounded-md transition-colors"
							onClick={handleMobileLinkClick}>
							Contact
						</Link>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
