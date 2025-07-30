import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'SCADA and MES - Manufacturing Execution Systems | DreamVersion',
  description: 'Expert SCADA and MES implementation services providing comprehensive monitoring and manufacturing execution systems for operational visibility.',
}

export default function SCADAMESPage() {
  const capabilities = [
    {
      title: 'SCADA Systems',
      description: 'Comprehensive supervisory control and data acquisition systems for real-time monitoring and control.',
      technologies: ['Ignition by Inductive Automation', 'Wonderware InTouch', 'GE iFIX', 'Siemens WinCC']
    },
    {
      title: 'Manufacturing Execution Systems',
      description: 'Complete MES solutions that bridge the gap between enterprise systems and plant floor operations.',
      technologies: ['Ignition MES Modules', 'Rockwell FactoryTalk ProductionCentre', 'Siemens SIMATIC IT', 'Custom MES Solutions']
    },
    {
      title: 'Historian & Analytics',
      description: 'Data collection, storage, and analysis systems for long-term trending and performance optimization.',
      technologies: ['Ignition Historian', 'OSIsoft PI System', 'GE Proficy Historian', 'InfluxDB']
    },
    {
      title: 'Reporting & Dashboards',
      description: 'Executive dashboards and automated reporting systems for operational and business intelligence.',
      technologies: ['Ignition Perspective', 'Power BI Integration', 'Crystal Reports', 'Custom Web Dashboards']
    }
  ]

  const benefits = [
    { title: 'Operational Visibility', value: 'Real-time' },
    { title: 'Production Efficiency', value: 'Up to 25%' },
    { title: 'Data Accuracy', value: '99.9%' },
    { title: 'Decision Speed', value: '5x Faster' }
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                SCADA & MES
                <span className="block text-primary-sky">Complete Operational Visibility</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Comprehensive SCADA and Manufacturing Execution Systems that provide real-time visibility, 
                control, and optimization of your manufacturing operations.
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

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-blue mb-4">
                Proven Results
              </h2>
              <p className="text-xl text-secondary-slate">
                Measurable improvements from SCADA and MES implementations
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-sky mb-2">
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

        {/* Capabilities Section */}
        <section className="py-20 bg-primary-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Core Capabilities
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Complete SCADA and MES solutions from data collection to executive reporting
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-primary-blue mb-4">
                    {capability.title}
                  </h3>
                  <p className="text-secondary-slate mb-6 leading-relaxed">
                    {capability.description}
                  </p>
                  <div>
                    <h4 className="font-medium text-primary-blue mb-3">Platforms:</h4>
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

        {/* Industry Applications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                SCADA and MES solutions tailored to specific industry requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  industry: 'Food & Beverage',
                  applications: ['Recipe Management', 'Batch Tracking', 'Quality Control', 'Regulatory Compliance'],
                  icon: (
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  )
                },
                {
                  industry: 'Pharmaceutical',
                  applications: ['FDA Compliance', 'Batch Records', 'Environmental Monitoring', 'Audit Trails'],
                  icon: (
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                {
                  industry: 'Manufacturing',
                  applications: ['Production Tracking', 'OEE Monitoring', 'Inventory Management', 'Equipment Status'],
                  icon: (
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                },
                {
                  industry: 'Water Treatment',
                  applications: ['Process Control', 'Alarm Management', 'Trending & Analytics', 'Remote Monitoring'],
                  icon: (
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  )
                },
                {
                  industry: 'Energy & Utilities',
                  applications: ['Grid Monitoring', 'Asset Management', 'Performance Analytics', 'Regulatory Reporting'],
                  icon: (
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  industry: 'Chemical Processing',
                  applications: ['Safety Systems', 'Batch Control', 'Material Tracking', 'Environmental Monitoring'],
                  icon: (
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  )
                }
              ].map((app, index) => (
                <div 
                  key={index}
                  className="bg-primary-gray p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-primary-sky mb-4">
                    {app.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary-blue mb-4">
                    {app.industry}
                  </h3>
                  <ul className="space-y-2">
                    {app.applications.map((application, appIndex) => (
                      <li key={appIndex} className="flex items-center text-sm text-secondary-slate">
                        <svg className="h-3 w-3 text-secondary-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {application}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-blue text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Implement SCADA & MES?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Transform your operations with comprehensive SCADA and MES solutions 
              designed for your specific industry requirements and business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-primary-sky text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Request Consultation
              </Link>
              <Link 
                href="/resources"
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