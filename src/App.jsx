import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <footer className="py-10 text-center text-sm text-gray-500 bg-white">© {new Date().getFullYear()} Auralith AI — All rights reserved.</footer>
    </div>
  )
}

export default App
