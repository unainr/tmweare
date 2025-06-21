"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function BookACallModal() {
	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
		if (open) {
			(async () => {
				const cal = await getCalApi({ namespace: "discovery" });
				cal("ui", { layout: "month_view", hideEventTypeDetails: false });
			})();
		}
	}, [open]);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button
					variant={"ghost"}
					className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-accent/90 transition-all duration-300 ease-in-out cursor-pointer">
					<Image
						src="/murtaza.jpg"
						alt="Murtaza"
						width={32}
						height={32}
						className="rounded-full object-cover"
					/>
					<span className="text-sm font-medium">Book a Call with Murtaza</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="w-full p-0 h-[90vh] overflow-y-scroll">
				<DialogHeader className="flex flex-row items-center justify-between px-4 pt-4">
					<div className="flex items-center gap-3">
						<Image
							src="/murtaza.jpg"
							alt="Murtaza"
							width={40}
							height={40}
							className="rounded-full"
						/>
						<DialogTitle className="text-base">
							Book a Discovery Call
						</DialogTitle>
					</div>
				</DialogHeader>
				<div className="w-full h-full">
					<Cal
						namespace="discovery"
						calLink="murtaza-akbar/discovery"
						style={{ width: "100%", height: "100%", overflow: "auto" }}
						config={{ layout: "month_view" }}
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
}
