import ContactSection from '@/components/ContactSection'
import HeroSection from '@/components/HeroSection'
import XConnectorSection from '@/components/XConnectorSection'
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
        <UseCasesSection />
      </ScrollReveal>
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
    </main>
  )
}
