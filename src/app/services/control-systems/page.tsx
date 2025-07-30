import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Control Systems - PLC Programming & HMI Development | DreamVersion',
  description: 'Expert control systems integration including PLC programming, HMI development, and control panel design for reliable industrial automation.',
}

export default function ControlSystemsPage() {
  const capabilities = [
    {
      title: 'PLC Programming',
      description: 'Expert programming across all major PLC platforms including Allen-Bradley, Siemens, and Schneider Electric.',
      technologies: ['Rockwell RSLogix/Studio 5000', 'Siemens TIA Portal', 'Schneider Unity Pro', 'Omron CX-Programmer']
    },
    {
      title: 'HMI Development',
      description: 'Intuitive operator interfaces that provide clear visibility and control of industrial processes.',
      technologies: ['FactoryTalk View ME/SE', 'WinCC', 'Ignition Perspective', 'Wonderware InTouch']
    },
    {
      title: 'Control Panel Design',
      description: 'Complete electrical panel design and fabrication following industry standards and best practices.',
      technologies: ['AutoCAD Electrical', 'EPLAN', 'UL 508A Standards', 'NFPA 79 Compliance']
    },
    {
      title: 'System Integration',
      description: 'Seamless integration between control systems, field devices, and enterprise networks.',
      technologies: ['Ethernet/IP', 'Profinet', 'Modbus', 'OPC UA']
    }
  ]

  const industries = [
    { name: 'Food & Beverage', description: 'Process control and packaging automation' },
    { name: 'Pharmaceutical', description: 'GMP-compliant control systems' },
    { name: 'Manufacturing', description: 'Production line automation and control' },
    { name: 'Water Treatment', description: 'Municipal and industrial water systems' },
    { name: 'Energy', description: 'Power generation and distribution control' },
    { name: 'Chemical', description: 'Process safety and batch control systems' }
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Control Systems
                <span className="block text-primary-sky">Reliable Automation Solutions</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Expert PLC programming, HMI development, and control panel design for industrial 
                automation systems that deliver reliability, performance, and long-term value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-primary-sky text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-blue transition-all duration-300 transform hover:scale-105"
                >
                  Our Expertise
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Core Capabilities
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Comprehensive control systems expertise across all major industrial platforms and technologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div 
                  key={index}
                  className="bg-primary-gray p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-primary-blue mb-4">
                    {capability.title}
                  </h3>
                  <p className="text-secondary-slate mb-6 leading-relaxed">
                    {capability.description}
                  </p>
                  <div>
                    <h4 className="font-medium text-primary-blue mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {capability.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-primary-sky bg-opacity-10 text-primary-blue px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-primary-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Our Approach
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Systematic methodology ensuring reliable, maintainable control systems
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Requirements Analysis', description: 'Detailed assessment of control requirements and system specifications' },
                { step: '2', title: 'System Design', description: 'Architecture design with focus on reliability and maintainability' },
                { step: '3', title: 'Development & Testing', description: 'Programming, simulation, and comprehensive testing procedures' },
                { step: '4', title: 'Commissioning & Support', description: 'On-site installation, startup, and ongoing technical support' }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
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

        {/* Industries Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Industry Experience
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Control systems expertise across diverse manufacturing and process industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="bg-primary-gray p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold text-primary-blue mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-secondary-slate text-sm">
                    {industry.description}
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
              Ready to Modernize Your Control Systems?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let our control systems experts help you design and implement reliable automation 
              solutions tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-primary-sky text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Request Consultation
              </Link>
              <Link 
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-blue transition-all duration-300 transform hover:scale-105"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}