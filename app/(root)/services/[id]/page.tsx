import { servicesDetails } from "@/constants";
import { notFound } from "next/navigation";
import Image from "next/image";
import TrustedClient from "@/components/home/module/ui/TrusedClients";
import MainCard from "@/components/cards/MainCard";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import FooterCTA from "@/components/layout/footercta";
import FaqSection from "@/components/home/module/ui/FAQ";
export default async function ServiceDetailPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	// Find the matching service
	const service = servicesDetails.find((s) => s.id === id);

	if (!service) {
		return notFound();
	}

	return (
		<div className="min-h-screen w-full">
  {/* Hero Section */}
  <section className="relative my-12 md:my-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col items-center text-center py-8 md:py-12">
        {/* Service Badge */}
        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 dark:bg-primary/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-primary/20 dark:border-primary/30">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary mr-2 animate-pulse"></div>
          Professional Services
        </div>
        
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
          {service.title}
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed text-neutral-700 dark:text-neutral-300">
          {service.subtitle}
        </h2>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md mx-auto">
          <button className="px-6 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-md hover:shadow-lg">
            {service.cta}
          </button>
          <button className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-neutral-300 dark:border-neutral-700 hover:border-primary dark:hover:border-primary rounded-lg font-semibold transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
    
    {/* Enhanced Wave Divider */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-12 sm:h-16 md:h-20 text-background dark:text-background"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          className="fill-current"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          className="fill-current"
        ></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          className="fill-current"
        ></path>
      </svg>
    </div>
  </section>

  {/* Service Image Section */}
  <section className="py-12 md:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group">
        {service.imageUrl && (
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
          <div className="flex items-center space-x-3 mb-2 sm:mb-3">
            <div className="p-1.5 sm:p-2 bg-white/20 dark:bg-black/30 backdrop-blur-sm rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <span className="font-medium text-sm sm:text-base text-white">Enterprise-grade solutions</span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Trusted by industry leaders
          </h3>
        </div>
      </div>
    </div>
  </section>

  {/* Service Details Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
    {/* Description Section */}
    <section className="mb-12 md:mb-16">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
        About the Service
      </h3>
      <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-4xl">
        {service.description}
      </p>
    </section>

    {/* Features Section */}
    <section className="mb-6 flex flex-col items-center justify-center gap-8 md:gap-10">
      <PointerHighlight
        rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 dark:border-neutral-700 leading-loose"
        pointerClassName="text-blue-500"
        containerClassName="inline-block"
      >
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold relative z-10 tracking-tight">
          Key Features
        </span>
      </PointerHighlight>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
        {service.features.map((feature, index) => (
          <div
            key={index}
            className="group relative p-5 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg hover:translate-y-[-4px] transition-all duration-300 border border-neutral-200 dark:border-neutral-800 overflow-hidden"
          >
            {/* Icon Container */}
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg mb-4 sm:mb-6 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
            </div>
            
            {/* Feature Text */}
            <div className="relative">
              <p className="text-neutral-800 dark:text-neutral-200 font-semibold text-base sm:text-lg leading-relaxed group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
                {feature}
              </p>
            </div>
            
            {/* Hover Effect Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        ))}
      </div>
    </section>
  </div>

  {/* Additional Sections */}
  <TrustedClient />
  <MainCard />
  <FooterCTA />
  <FaqSection />
</div>

	);
}
