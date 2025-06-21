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
import { servicesDetails } from "@/constants";

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
          ? "bg-white/90 dark:bg-[#121212]/90 backdrop-blur-md border-b shadow-lg"
          : "bg-transparent",
        !isVisible && isScrolled ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link
              href="/"
              className={cn(
                "text-xl sm:text-2xl font-bold tracking-tight transition-colors hover:text-primary",
                isScrolled ? "dark:text-white" : "text-foreground"
              )}
            >
              Ravamo
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {/* Home */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-white/10",
                      isScrolled
                        ? "dark:text-white hover:text-white"
                        : "text-foreground"
                    )}
                  >
                    <Link href="/" className="font-medium">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* About */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-white/10",
                      isScrolled
                        ? "dark:text-white hover:text-white"
                        : "text-foreground"
                    )}
                  >
                    <Link href="/about" className="font-medium">
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "font-medium bg-transparent hover:bg-white/10",
                      isScrolled
                        ? "dark:text-white hover:text-white"
                        : "text-foreground"
                    )}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[480px] p-4 bg-background dark:bg-zinc-900 rounded-lg shadow-lg">
                      <div className="grid grid-cols-2 gap-3">
                        {servicesDetails.slice(0, 4).map((service) => (
                          <Link
                            key={service.title}
                            href={`/services/${service.id}`}
                            className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2 mb-2">
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
                      {servicesDetails.length > 4 && (
                        <div className="mt-4 pt-3 border-t">
                          <Link
                            href="/services"
                            className="text-sm font-medium text-primary hover:underline"
                          >
                            View all services →
                          </Link>
                        </div>
                      )}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Work */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-white/10",
                      isScrolled
                        ? "dark:text-white hover:text-white"
                        : "text-foreground"
                    )}
                  >
                    <Link href="/work" className="font-medium">
                      Work
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-white/10",
                      isScrolled
                        ? "dark:text-white hover:text-white"
                        : "text-foreground"
                    )}
                  >
                    <Link href="/contact" className="font-medium">
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Book a Call - Hidden on mobile */}
            <div className="hidden md:block">
              <BookACallModal />
            </div>
            
            {/* Theme Toggle */}
            <ModeToggle />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "md:hidden p-2 hover:bg-white/10",
                isScrolled ? "text-foreground" : "text-foreground"
              )}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
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
          "absolute top-16 left-0 right-0 bg-white/95 dark:bg-[#121212]/95 backdrop-blur-md border-b shadow-lg z-50 md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="space-y-2">
            {/* Home Link */}
            <Link
              href="/"
              className="block py-2.5 px-3 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
              onClick={handleMobileLinkClick}
            >
              Home
            </Link>
            
            {/* About Link */}
            <Link
              href="/about"
              className="block py-2.5 px-3 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
              onClick={handleMobileLinkClick}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="space-y-1">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full py-2.5 px-3 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
              >
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
                  "pl-3 space-y-1 overflow-hidden transition-all duration-300 ease-in-out",
                  isMobileServicesOpen
                    ? "max-h-[500px] opacity-100 mt-1"
                    : "max-h-0 opacity-0"
                )}
              >
                <div className="grid gap-2">
                  {servicesDetails.map((service) => (
                    <Link
                      key={service.title}
                      href={`/services/${service.id}`}
                      className="block p-2.5 rounded-md hover:bg-accent transition-colors border border-border"
                      onClick={handleMobileLinkClick}
                    >
                      <div className="text-sm font-medium text-foreground">
                        {service.title}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {service.description}
                      </p>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="block py-2 px-2 mt-2 text-sm font-medium text-primary hover:underline"
                  onClick={handleMobileLinkClick}
                >
                  View all services →
                </Link>
              </div>
            </div>

            {/* Work Link */}
            <Link
              href="/work"
              className="block py-2.5 px-3 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
              onClick={handleMobileLinkClick}
            >
              Work
            </Link>
            
            {/* Contact Link */}
            <Link
              href="/contact"
              className="block py-2.5 px-3 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
              onClick={handleMobileLinkClick}
            >
              Contact
            </Link>
            
            {/* Book a Call - Mobile version */}
            <div className="pt-2 mt-2 border-t border-border">
              <Link
                href="/contact"
                className="block py-3 px-3 text-center text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors"
                onClick={handleMobileLinkClick}
              >
                Book a Discovery Call
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
	);
};

export default Navigation;
