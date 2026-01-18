import HeroSection from "@/components/landing/hero-section"
import ProblemSection from "@/components/landing/problem-section"
import SolutionShowcase from "@/components/landing/solution-showcase"
import CategoryGrid from "@/components/landing/category-grid"
import Testimonials from "@/components/landing/testimonials"
import FAQSection from "@/components/landing/faq-section"
import FinalCTA from "@/components/landing/final-cta"
import Footer from "@/components/landing/footer"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionShowcase />
      <CategoryGrid />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
