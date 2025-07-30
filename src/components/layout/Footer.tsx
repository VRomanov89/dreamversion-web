import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">DreamVersion</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Industrial systems integration and proprietary software products for manufacturing excellence. 
              Bridging automation and digital transformation across North America.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-gray-300 hover:text-primary-sky transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://github.com" className="text-gray-300 hover:text-primary-sky transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/control-systems" className="text-gray-300 hover:text-primary-sky transition-colors">
                  Control Systems
                </Link>
              </li>
              <li>
                <Link href="/services/scada-mes" className="text-gray-300 hover:text-primary-sky transition-colors">
                  SCADA and MES
                </Link>
              </li>
              <li>
                <Link href="/services/panel-design" className="text-gray-300 hover:text-primary-sky transition-colors">
                  Panel Design
                </Link>
              </li>
              <li>
                <Link href="/services/data-integration" className="text-gray-300 hover:text-primary-sky transition-colors">
                  Data Integration
                </Link>
              </li>
              <li>
                <Link href="/services/it-ot-architecture" className="text-gray-300 hover:text-primary-sky transition-colors">
                  IT/OT Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/products/ai" className="text-gray-300 hover:text-primary-sky transition-colors">
                  AI Platform
                </Link>
              </li>
              <li>
                <Link href="/products/pi" className="text-gray-300 hover:text-primary-sky transition-colors">
                  PI Platform
                </Link>
              </li>
              <li>
                <Link href="/products/csi" className="text-gray-300 hover:text-primary-sky transition-colors">
                  CSI Platform
                </Link>
              </li>
            </ul>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-sky transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-primary-sky transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-sky transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2024 DreamVersion. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-300 hover:text-primary-sky transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-primary-sky transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
          <p className="text-gray-300 mb-4">Get the latest insights on industrial automation and digital transformation.</p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-black"
            />
            <button className="bg-primary-sky text-white px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}