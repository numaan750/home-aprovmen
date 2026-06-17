import Hero from '@/components/Hero'
import State from '@/components/State'
import ExpertCraftsmanship from '@/components/ExpertCraftsmanship'
import TrustSection from '@/components/TrustSection'
import React from 'react'
import TransformationsSection from '@/components/TransformationsSection'
import PathToPerfection from '@/components/Pathtoperfection '
import Portfolioofdreams from '@/components/Portfolioofdreams'
import Budgetplanner from '@/components/Budgetplanner'
import AwardsSection from '../components/Awardssection'
import FAQSection from '@/components/Faqsection'
import ContactSection from '@/components/ContectSection'
import ScrollToHashOnLoad from '@/components/ScrollToHashOnLoad'

const page = () => {
  return (
    <div>
      <ScrollToHashOnLoad />
      <Hero />
      <State />
      <section id="services">
        <ExpertCraftsmanship />
      </section>
      <TrustSection />
      <section id="projects">
        <TransformationsSection />
      </section>
      <section id="process">
        <PathToPerfection />
      </section>
      <section id="portfolio">
        <Portfolioofdreams />
      </section>
      <Budgetplanner />
      <AwardsSection />
      <section id="faq">
        <FAQSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  )
}

export default page