import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { InfiniteSlider } from "./infinitedSlider";
import Image from "next/image";

function TrustedClient() {
	return (
		<div className="w-full text-center py-12">
			<PointerHighlight
				rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 dark:border-neutral-700 leading-loose"
				pointerClassName="text-blue-500 "
				containerClassName="inline-block">
				<span className="text-4xl md:text-5xl font-bold relative z-10 tracking-tight">
					Trusted by Industry Leaders
				</span>
			</PointerHighlight>
			<p className="mt-2 text-lg ">
				Partnering with forward-thinking companies to deliver exceptional
				results
			</p>

			<InfiniteSlider gap={24} reverse className="w-full h-full py-12">
				<div className="flex items-center justify-center h-[60px] w-[140px]">
					<Image
						src="/josh.png"
						alt="Apple Music logo"
						width={120}
						height={50}
						className="object-contain"
					/>
				</div>
				<div className="flex items-center justify-center h-[60px] w-[140px]">
					<Image
						src="/vodafone.png"
						alt="Netflix logo"
						width={120}
						height={50}
						className="object-contain"
					/>
				</div>
				<div className="flex items-center justify-center h-[60px] w-[140px]">
					<Image
						src="/Novartis.png"
						alt="Google Chrome logo"
						width={50}
						height={50}
						className="object-contain"
					/>
				</div>
				<div className="flex items-center justify-center h-[60px] w-[140px]">
					<Image
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/800px-Samsung_Logo.svg.png"
						alt="Samsung logo"
						width={120}
						height={50}
						className="object-contain"
					/>
				</div>
			</InfiniteSlider>
		</div>
	);
}

export default TrustedClient;
