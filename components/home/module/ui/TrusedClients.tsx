import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { InfiniteSlider } from "./infinitedSlider";
import Image from "next/image";

function TrustedClient() {
	return (
		<div className="w-full text-center py-12 sm:py-16 px-4 sm:px-6">
  {/* Heading */}
  <PointerHighlight
    rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 dark:border-neutral-700 leading-loose"
    pointerClassName="text-blue-500"
    containerClassName="inline-block"
  >
    <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight relative z-10">
      Trusted by Industry Leaders
    </span>
  </PointerHighlight>

  {/* Subtext */}
  <p className="mt-3 text-base sm:text-lg text-muted-foreground">
    Partnering with forward-thinking companies to deliver exceptional results
  </p>

  {/* Infinite Logo Slider */}
  <InfiniteSlider gap={24} reverse className="w-full h-full py-8 sm:py-12">
    {[
      { src: "/josh.png", alt: "Apple Music", width: 120 },
      { src: "/vodafone.png", alt: "Vodafone", width: 120 },
      { src: "/Novartis.png", alt: "Novartis", width: 50 },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/800px-Samsung_Logo.svg.png",
        alt: "Samsung",
        width: 120,
      },
    ].map((logo, index) => (
      <div
        key={index}
        className="flex items-center justify-center h-[50px] sm:h-[60px] w-[100px] sm:w-[140px]"
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={50}
          className="object-contain"
        />
      </div>
    ))}
  </InfiniteSlider>
</div>

	);
}

export default TrustedClient;
