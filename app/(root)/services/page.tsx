import FAQ from "@/components/services/module/ui/FAQ";
import OurServices from "@/components/services/module/ui/OurServices";
import ProcessSteps from "@/components/services/module/ui/ProcessSteps";
import ServicesGlobe from "@/components/services/module/ui/ServicesGlobe";
import ServicesHero from "@/components/services/module/ui/ServicesHero";
import React from "react";

const ServicesPage = () => {
	return (
		<>
			<ServicesHero />
			<OurServices />
			<ProcessSteps />
			{/* <ServicesGlobe
			circleWithDot={true}
				heading="Our Services"
				paragraph="We are a team of experienced professionals who are passionate about what we do. We have a proven track record of delivering high-quality solutions to our clients."
				subheading="Our Process"
				subparagraph="We follow a structured process to ensure that we deliver the best possible results for our clients. Our process includes the following steps:"
			/>
			<ServicesGlobe
				heading="Reimagin an exiting product for scale"
				paragraph="kick starting growth throught fully re-architeching a design experience"
				subheading="safeguarding first responders with next-level location services"
				subparagraph="see how TM helped unlock a fundrizsee and the "
				doubleCircle={true}
			/>
			<ServicesGlobe
				heading="Reimagin an exiting product for scale"
				paragraph="kick starting growth throught fully re-architeching a design experience"
				subheading="safeguarding first responders with next-level location services"
				subparagraph="see how TM helped unlock a fundrizsee and the "
				sphereGrid={true}
			/>
			<FAQ/> */}
		</>
	);
};

export default ServicesPage;
