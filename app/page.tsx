import ContactSection from '@/components/ContactSection'
import HeroSection from '@/components/HeroSection'
import LogoMarquee from '@/components/LogoMarquee'
import XConnectorSection from '@/components/XConnectorSection'
import UseCasesSection from '@/components/UseCasesSection'
import XOfficeSection from '@/components/XOfficeSection'

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <HeroSection />
      <LogoMarquee />
      <XOfficeSection />
      <XConnectorSection />
      <UseCasesSection />
      <ContactSection />
    </main>
  )
}
