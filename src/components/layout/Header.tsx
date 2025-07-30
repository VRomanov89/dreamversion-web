'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary-blue">
              DreamVersion
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/about" 
              className="text-secondary-slate hover:text-primary-blue transition-colors font-medium"
            >
              About
            </Link>
            <div className="relative group">
              <button className="text-secondary-slate hover:text-primary-blue transition-colors font-medium flex items-center">
                Integration Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/services/control-systems" className="block px-4 py-2 text-sm text-secondary-slate hover:bg-primary-gray">
                    Control Systems
                  </Link>
                  <Link href="/services/scada-mes" className="block px-4 py-2 text-sm text-secondary-slate hover:bg-primary-gray">
                    SCADA and MES
                  </Link>
                  <Link href="/services/panel-design" className="block px-4 py-2 text-sm text-secondary-slate hover:bg-primary-gray">
                    Panel Design & Commissioning
                  </Link>
                  <Link href="/services/data-integration" className="block px-4 py-2 text-sm text-secondary-slate hover:bg-primary-gray">
                    Data Integration & IIoT
                  </Link>
                  <Link href="/services/it-ot-architecture" className="block px-4 py-2 text-sm text-secondary-slate hover:bg-primary-gray">
                    IT and OT Architecture
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-secondary-slate hover:text-primary-blue transition-colors font-medium flex items-center">
                Software Products
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/products/ai" className="block px-4 py-2 text-sm text-secondary-slate hover:bg-primary-gray">
                    AI Platform
                  </Link>
                  <Link href="/products/pi" className="block px-4 py-2 text-sm text-secondary-slate hover:bg-primary-gray">
                    PI Platform
                  </Link>
                  <Link href="/products/csi" className="block px-4 py-2 text-sm text-secondary-slate hover:bg-primary-gray">
                    CSI Platform
                  </Link>
                </div>
              </div>
            </div>
            <Link 
              href="/resources" 
              className="text-secondary-slate hover:text-primary-blue transition-colors font-medium"
            >
              Resources
            </Link>
            <Link 
              href="/careers" 
              className="text-secondary-slate hover:text-primary-blue transition-colors font-medium"
            >
              Careers
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link 
              href="/contact"
              className="bg-primary-sky text-white px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary-slate hover:text-primary-blue"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="space-y-4">
              <Link href="/about" className="block text-secondary-slate hover:text-primary-blue font-medium">
                About
              </Link>
              <div>
                <div className="text-secondary-slate font-medium mb-2">Integration Services</div>
                <div className="pl-4 space-y-2">
                  <Link href="/services/control-systems" className="block text-sm text-secondary-slate">
                    Control Systems
                  </Link>
                  <Link href="/services/scada-mes" className="block text-sm text-secondary-slate">
                    SCADA and MES
                  </Link>
                  <Link href="/services/panel-design" className="block text-sm text-secondary-slate">
                    Panel Design & Commissioning
                  </Link>
                  <Link href="/services/data-integration" className="block text-sm text-secondary-slate">
                    Data Integration & IIoT
                  </Link>
                  <Link href="/services/it-ot-architecture" className="block text-sm text-secondary-slate">
                    IT and OT Architecture
                  </Link>
                </div>
              </div>
              <div>
                <div className="text-secondary-slate font-medium mb-2">Software Products</div>
                <div className="pl-4 space-y-2">
                  <Link href="/products/ai" className="block text-sm text-secondary-slate">
                    AI Platform
                  </Link>
                  <Link href="/products/pi" className="block text-sm text-secondary-slate">
                    PI Platform
                  </Link>
                  <Link href="/products/csi" className="block text-sm text-secondary-slate">
                    CSI Platform
                  </Link>
                </div>
              </div>
              <Link href="/resources" className="block text-secondary-slate hover:text-primary-blue font-medium">
                Resources
              </Link>
              <Link href="/careers" className="block text-secondary-slate hover:text-primary-blue font-medium">
                Careers
              </Link>
              <Link 
                href="/contact"
                className="inline-block bg-primary-sky text-white px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}