import ContactSection from '@/components/ContactSection'
import HeroSection from '@/components/HeroSection'
import IntegrationSection from '@/components/IntegrationSection'
import XConnectorSection from '@/components/XConnectorSection'
import PricingSection from '@/components/PricingSection'
import FeaturesSection from '@/components/FeaturesSection'
import ScrollReveal from '@/components/ScrollReveal'
import UseCasesSection from '@/components/UseCasesSection'
import XOfficeSection from '@/components/XOfficeSection'

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <ScrollReveal asHero>
        <HeroSection />
      </ScrollReveal>
      <ScrollReveal>
        <XOfficeSection />
      </ScrollReveal>
      <ScrollReveal>
        <XConnectorSection />
      </ScrollReveal>
      <ScrollReveal>
        <FeaturesSection />
      </ScrollReveal>
      <ScrollReveal>
        <IntegrationSection />
      </ScrollReveal>
      <ScrollReveal>
        <UseCasesSection />
      </ScrollReveal>
      <ScrollReveal>
        <PricingSection />
      </ScrollReveal>
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
    </main>
  )
}
