import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-purple-600 via-blue-500 to-orange-400" />
            <span className="font-semibold text-gray-900 text-lg">Auralith AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#testimonials" className="hover:text-gray-900">Testimonials</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#pricing" className="px-4 py-2 text-sm font-medium text-gray-900">Pricing</a>
            <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-black">Book a demo</a>
          </div>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#features" className="block py-2">Features</a>
            <a href="#pricing" className="block py-2">Pricing</a>
            <a href="#testimonials" className="block py-2">Testimonials</a>
            <a href="#faq" className="block py-2">FAQ</a>
            <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="block py-2 text-white bg-gray-900 text-center rounded-md">Book a demo</a>
          </div>
        )}
      </div>
    </header>
  )
}
