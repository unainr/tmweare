"use client";
import React from "react";
import Image from "next/image";
import { ChevronsRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

export interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: "default" | "primary" | "secondary";
	size?: "default" | "sm" | "lg";
	asChild?: boolean;
	imageUrl: string;
	heading: string;
	paragraph: string;
	slug:string
	
}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
	(
		{
			variant = "default",
			size = "default",
			asChild,
			className,
			imageUrl,
			heading,
			paragraph,
			slug
		},
		ref: any
	) => {
		const sizeClasses = {
			default: "w-[400px] h-[450px]",
			sm: "w-[300px] h-[350px]",
			lg: "w-[500px] h-[550px]",
		};

		const overlayBgClasses = {
			default: "bg-[#3d5dd1]",
			primary: "bg-blue-600",
			secondary: "bg-purple-600",
		};

		const gradientFromClasses = {
			default: "from-[#3d5dd1]",
			primary: "from-blue-600",
			secondary: "from-purple-600",
		};

		const Comp = asChild ? React.Fragment : "div";

		return (
			<Comp
				ref={ref}
				className={cn(
					"relative mt-4 overflow-hidden group mx-auto dark:bg-black bg-white dark:border-0 border rounded-md dark:text-white text-black flex flex-col",
					sizeClasses[size],
					className
				)}>
				<div className="w-full h-full">
					<Image
						src={
							imageUrl
								? imageUrl
								: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=800&fit=crop&crop=face&auto=format&dpr=3&q=70"
						}
						alt="Portrait Girl"
						width={1300}
						height={1300}
						className="h-full w-full scale-105 group-hover:scale-100 object-cover transition-all duration-300 rounded-md"
					/>
				</div>
				<article
					className={cn(
						"p-8 w-full h-full overflow-hidden z-10 absolute top-0 flex flex-col justify-end rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300",
						overlayBgClasses[variant]
					)}>
					<div className="translate-y-10 group-hover:translate-y-0 transition-all duration-300 space-y-2">
						<h1 className="md:text-2xl font-semibold">{heading}</h1>
						<p className="sm:text-base text-sm">{paragraph}</p>
						<Link href={`/work/${slug}`}>
						<Button variant={'secondary'} className="p-2 flex rounded-md cursor-pointer	 ">
							View Case Study <ChevronsRight />
						</Button>
						</Link>
					</div>
				</article>
				<article
					className={cn(
						"p-2 w-full h-[20%] flex flex-col justify-end overflow-hidden absolute bottom-0 rounded-b-md opacity-100 group-hover:opacity-0 group-hover:-bottom-4 transition-all duration-300 bg-gradient-to-t",
						gradientFromClasses[variant]
					)}>
					
				</article>
			</Comp>
		);
	}
);

Component.displayName = "Component";

export default Component;
