import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary-blue via-primary-blue to-secondary-slate text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Industrial Technology
            <span className="block text-primary-sky">Built for Results</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            DreamVersion delivers automation solutions and proprietary software that transform 
            manufacturing operations across North America. From control systems to data insights, 
            we bridge the gap between execution and strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="bg-primary-sky text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book a Demo
            </Link>
            <Link 
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-blue transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Trusted Platforms */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-8">Trusted expertise across leading industrial platforms</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white bg-opacity-10 px-6 py-3 rounded-lg font-mono text-sm">
              Rockwell Automation
            </div>
            <div className="bg-white bg-opacity-10 px-6 py-3 rounded-lg font-mono text-sm">
              Siemens TIA Portal
            </div>
            <div className="bg-white bg-opacity-10 px-6 py-3 rounded-lg font-mono text-sm">
              Ignition
            </div>
            <div className="bg-white bg-opacity-10 px-6 py-3 rounded-lg font-mono text-sm">
              Cognex
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}