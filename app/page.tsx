import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import XOfficeSection from '@/components/XOfficeSection'
import XConnectorSection from '@/components/XConnectorSection'
import FeaturesSection from '@/components/FeaturesSection'
import IntegrationSection from '@/components/IntegrationSection'
import UseCasesSection from '@/components/UseCasesSection'
import PricingSection from '@/components/PricingSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <XOfficeSection />
      <XConnectorSection />
      <FeaturesSection />
      <IntegrationSection />
      <UseCasesSection />
      <PricingSection />
      <Footer />
    </main>
  )
}
