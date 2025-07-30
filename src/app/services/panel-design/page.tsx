import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Panel Design & Commissioning - Electrical Control Panels | DreamVersion',
  description: 'Professional electrical panel design, fabrication, and commissioning services following UL 508A standards and NFPA 79 compliance.',
}

export default function PanelDesignPage() {
  const services = [
    {
      title: 'Electrical Design',
      description: 'Complete electrical schematics and panel layouts using industry-standard CAD tools and best practices.',
      features: ['AutoCAD Electrical', 'EPLAN Design', 'Component Selection', 'Load Calculations', 'Wire Sizing', 'Protection Coordination']
    },
    {
      title: 'Panel Fabrication',
      description: 'In-house panel fabrication with quality control processes and industry standard compliance.',
      features: ['UL 508A Listed Panels', 'NFPA 79 Compliance', 'Quality Control Testing', 'Documentation Package', 'Custom Enclosures', 'Wire Management']
    },
    {
      title: 'Field Installation',
      description: 'Professional installation and startup services with experienced field technicians.',
      features: ['On-site Installation', 'Point-to-Point Checkout', 'System Commissioning', 'Training Support', 'As-Built Documentation', 'Warranty Support']
    },
    {
      title: 'Testing & Validation',
      description: 'Comprehensive testing protocols to ensure safety, functionality, and compliance.',
      features: ['Functional Testing', 'Safety Circuit Verification', 'Insulation Testing', 'Ground Fault Testing', 'Load Testing', 'Performance Validation']
    }
  ]

  const standards = [
    {
      standard: 'UL 508A',
      description: 'Industrial Control Panels - Safety Standard for Industrial Control Panels',
      compliance: ['Listing Requirements', 'Construction Standards', 'Component Approvals', 'Testing Protocols']
    },
    {
      standard: 'NFPA 79',
      description: 'Electrical Standard for Industrial Machinery',
      compliance: ['Electrical Safety', 'Grounding Requirements', 'Circuit Protection', 'Control Circuits']
    },
    {
      standard: 'NEC',
      description: 'National Electrical Code Compliance',
      compliance: ['Wiring Methods', 'Circuit Protection', 'Grounding Systems', 'Electrical Safety']
    },
    {
      standard: 'IEC 61439',
      description: 'Low-voltage Switchgear and Controlgear Assemblies',
      compliance: ['Design Verification', 'Type Testing', 'Routine Testing', 'Form Classification']
    }
  ]

  const panelTypes = [
    {
      type: 'Motor Control Centers',
      description: 'Centralized motor control and protection for multiple motor applications.',
      applications: ['Production Lines', 'Conveyor Systems', 'Pump Stations', 'Fan Control']
    },
    {
      type: 'Variable Frequency Drive Panels',
      description: 'Custom VFD panels with integrated control and monitoring capabilities.',
      applications: ['Speed Control', 'Energy Savings', 'Process Control', 'Pump Control']
    },
    {
      type: 'PLC Control Panels',
      description: 'Complete PLC-based control systems with HMI and communication interfaces.',
      applications: ['Machine Control', 'Process Automation', 'Data Collection', 'Remote Monitoring']
    },
    {
      type: 'Power Distribution Panels',
      description: 'Electrical distribution and protection systems for industrial facilities.',
      applications: ['Load Centers', 'Disconnect Switches', 'Circuit Protection', 'Metering']
    },
    {
      type: 'Safety & Emergency Panels',
      description: 'Safety-rated control panels for emergency stop and safety system applications.',
      applications: ['Emergency Stop', 'Safety Interlocks', 'Fire Protection', 'Security Systems']
    },
    {
      type: 'Custom Control Solutions',
      description: 'Specialized panels designed for unique application requirements.',
      applications: ['Process Control', 'Test Equipment', 'Special Machinery', 'R&D Applications']
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-blue to-secondary-slate text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-2xl mb-8">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Panel Design & Commissioning
                <span className="block text-primary-sky">Professional Electrical Solutions</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Complete electrical panel design, fabrication, and commissioning services following 
                UL 508A standards and NFPA 79 compliance for safe, reliable industrial control systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-primary-sky text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  Request Quote
                </Link>
                <Link 
                  href="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-blue transition-all duration-300 transform hover:scale-105"
                >
                  Our Capabilities
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Complete Panel Solutions
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                From design concept to field commissioning, we provide comprehensive electrical panel services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-primary-gray p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-primary-blue mb-4">
                    {service.title}
                  </h3>
                  <p className="text-secondary-slate mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div>
                    <h4 className="font-medium text-primary-blue mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-secondary-slate">
                          <svg className="h-3 w-3 text-secondary-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Panel Types */}
        <section className="py-20 bg-primary-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Panel Types & Applications
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Custom-designed panels for diverse industrial applications and requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {panelTypes.map((panel, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold text-primary-blue mb-3">
                    {panel.type}
                  </h3>
                  <p className="text-secondary-slate mb-4 text-sm leading-relaxed">
                    {panel.description}
                  </p>
                  <div>
                    <h4 className="font-medium text-primary-blue mb-2 text-sm">Applications:</h4>
                    <div className="space-y-1">
                      {panel.applications.map((app, appIndex) => (
                        <div key={appIndex} className="flex items-center text-xs text-secondary-slate">
                          <div className="w-1.5 h-1.5 bg-primary-sky rounded-full mr-2"></div>
                          {app}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards & Compliance */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Standards & Compliance
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                All panel designs meet or exceed industry standards for safety and performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {standards.map((std, index) => (
                <div 
                  key={index}
                  className="bg-primary-gray p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-sky text-white rounded-lg flex items-center justify-center font-bold text-sm mr-4">
                      {std.standard.split(' ')[0]}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-blue">
                        {std.standard}
                      </h3>
                      <p className="text-sm text-secondary-slate">
                        {std.description}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-blue mb-3">Compliance Areas:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {std.compliance.map((comp, compIndex) => (
                        <div key={compIndex} className="flex items-center text-sm text-secondary-slate">
                          <svg className="h-3 w-3 text-secondary-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {comp}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 bg-primary-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Project Timeline
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Structured approach ensuring quality delivery and customer satisfaction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { phase: 'Design', duration: '1-2 weeks', description: 'Electrical design and engineering documentation' },
                { phase: 'Review', duration: '3-5 days', description: 'Customer review and approval process' },
                { phase: 'Fabrication', duration: '2-4 weeks', description: 'Panel assembly and factory testing' },
                { phase: 'Delivery', duration: '1-2 days', description: 'Shipping and delivery coordination' },
                { phase: 'Commissioning', duration: '1-3 days', description: 'Installation and startup support' }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-primary-blue mb-2">
                    {phase.phase}
                  </h3>
                  <p className="text-sm font-medium text-primary-sky mb-2">
                    {phase.duration}
                  </p>
                  <p className="text-sm text-secondary-slate">
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
              Ready to Start Your Panel Project?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Get professional electrical panel design and fabrication services 
              that meet your specifications and exceed industry standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-primary-sky text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Request Quote
              </Link>
              <Link 
                href="/resources"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-blue transition-all duration-300 transform hover:scale-105"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}