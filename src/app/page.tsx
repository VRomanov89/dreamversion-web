import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/pages/HeroSection'
import ServicesOverview from '@/components/pages/ServicesOverview'
import ProductsShowcase from '@/components/pages/ProductsShowcase'
import TestimonialsSection from '@/components/pages/TestimonialsSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <ProductsShowcase />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}