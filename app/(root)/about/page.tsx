import AboutHero from '@/components/about/module/ui/AboutHero'
import FaqSection from '@/components/home/module/ui/FAQ'
import ServicesOverview from '@/components/home/module/ui/ServicesOverview'
import ServicesShowcase from '@/components/home/module/ui/showcaseservices'
import TrustedClient from '@/components/home/module/ui/TrusedClients'
import FooterCTA from '@/components/layout/footercta'
import React from 'react'

const AboutPage = () => {
  return (
    <>
      <AboutHero/>
			<TrustedClient/>
      <ServicesOverview />
            <ServicesShowcase />
            <FooterCTA />
			<FaqSection/>

    </>
  )
}

export default AboutPage