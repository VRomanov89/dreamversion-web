import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'CSI Platform - Connected Systems Intelligence | DreamVersion',
  description: 'DreamVersion\'s CSI Platform provides unified connectivity between plant floor systems and enterprise infrastructure for complete operational visibility.',
}

export default function CSIProductPage() {
  const features = [
    {
      title: 'System Integration',
      description: 'Seamlessly connect disparate industrial systems and create unified data flows across your organization.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Data Connectivity',
      description: 'Bridge the gap between OT and IT systems with secure, reliable data exchange and synchronization.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: 'Protocol Translation',
      description: 'Support for multiple industrial communication protocols with automatic translation and routing.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
      )
    },
    {
      title: 'Unified Interface',
      description: 'Single pane of glass for monitoring and managing all connected systems and data flows.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      )
    }
  ]

  const protocols = [
    'OPC UA', 'Ethernet/IP', 'Modbus TCP/RTU', 'Profinet', 'BACnet', 'MQTT',
    'REST APIs', 'SOAP', 'SQL Databases', 'Historian Systems', 'ERP Systems', 'Cloud Platforms'
  ]

  const benefits = [
    { title: 'Integration Time', value: '70% Faster' },
    { title: 'Data Visibility', value: '100% Coverage' },
    { title: 'System Reliability', value: '99.9% Uptime' },
    { title: 'Maintenance Reduction', value: 'Up to 40%' }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-600 via-red-600 to-orange-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-2xl mb-8">
                <span className="text-3xl font-bold">CSI</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                CSI Platform
                <span className="block text-orange-200">Connected Systems Intelligence</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Unified connectivity solution that bridges plant floor systems with enterprise 
                infrastructure, providing complete operational visibility and seamless data integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  Book a Demo
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  Request Trial
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-blue mb-4">
                Integration Results
              </h2>
              <p className="text-xl text-secondary-slate">
                Proven outcomes from connected systems implementation
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                    {benefit.value}
                  </div>
                  <div className="text-secondary-slate font-medium">
                    {benefit.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-primary-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Core Integration Capabilities
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Comprehensive connectivity solutions for industrial systems and enterprise applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-orange-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-slate leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Protocols Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Supported Protocols & Systems
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Native support for industrial and enterprise communication protocols
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {protocols.map((protocol, index) => (
                <div 
                  key={index}
                  className="bg-primary-gray p-4 rounded-lg text-center hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-primary-blue font-medium text-sm">
                    {protocol}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Process */}
        <section className="py-20 bg-primary-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Integration Process
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Streamlined approach to connecting your systems and data
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'System Assessment',
                  description: 'Comprehensive evaluation of existing systems, protocols, and integration requirements.'
                },
                {
                  step: '2',
                  title: 'Configuration & Setup',
                  description: 'Deploy CSI platform with custom configurations for your specific system landscape.'
                },
                {
                  step: '3',
                  title: 'Testing & Go-Live',
                  description: 'Thorough testing of all connections and data flows before full production deployment.'
                }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-4">
                    {phase.title}
                  </h3>
                  <p className="text-secondary-slate">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-blue text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Connect Your Systems with CSI Platform
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Break down data silos and create unified visibility across your entire 
              operational technology and information technology landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-primary-sky text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Schedule CSI Demo
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-blue transition-all duration-300 transform hover:scale-105"
              >
                Start Integration
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}