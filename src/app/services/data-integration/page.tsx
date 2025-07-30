import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Data Integration & IIoT - Industrial Internet of Things | DreamVersion',
  description: 'Expert data integration and Industrial IoT services connecting plant floor systems to enterprise infrastructure for complete operational visibility.',
}

export default function DataIntegrationPage() {
  const services = [
    {
      title: 'Industrial IoT Implementation',
      description: 'Complete IIoT solutions connecting sensors, devices, and systems for real-time data collection and analysis.',
      technologies: ['Edge Computing', 'Wireless Sensors', 'MQTT Brokers', 'Time-Series Databases', 'Cloud Connectivity', 'Security Protocols']
    },
    {
      title: 'Protocol Translation',
      description: 'Seamless communication between diverse industrial protocols and modern IT systems.',
      technologies: ['OPC UA', 'Modbus', 'Ethernet/IP', 'Profinet', 'BACnet', 'REST APIs']
    },
    {
      title: 'Data Warehousing',
      description: 'Centralized data storage and management solutions for operational and business intelligence.',
      technologies: ['SQL Server', 'PostgreSQL', 'InfluxDB', 'MongoDB', 'Data Lakes', 'ETL Processes']
    },
    {
      title: 'Cloud Integration',
      description: 'Secure cloud connectivity for remote monitoring, analytics, and enterprise system integration.',
      technologies: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'Private Cloud', 'Hybrid Solutions', 'API Management']
    }
  ]

  const benefits = [
    { title: 'Data Accessibility', value: '24/7 Access' },
    { title: 'Integration Speed', value: '60% Faster' },
    { title: 'System Reliability', value: '99.9% Uptime' },
    { title: 'Cost Reduction', value: 'Up to 30%' }
  ]

  const architectures = [
    {
      name: 'Edge-to-Cloud',
      description: 'Local processing with cloud analytics and storage capabilities.',
      components: ['Edge Gateways', 'Local Processing', 'Cloud Analytics', 'Remote Access'],
      useCase: 'Remote facilities requiring local control with centralized monitoring'
    },
    {
      name: 'Hybrid Integration',
      description: 'Combination of on-premises and cloud-based data processing and storage.',
      components: ['On-Premise Servers', 'Cloud Services', 'VPN Connectivity', 'Data Synchronization'],
      useCase: 'Organizations with security requirements and scalability needs'
    },
    {
      name: 'Distributed Systems',
      description: 'Multiple connected facilities with centralized data aggregation.',
      components: ['Site Controllers', 'WAN Connectivity', 'Central Database', 'Unified Dashboard'],
      useCase: 'Multi-site operations requiring consolidated reporting and control'
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Data Integration & IIoT
                <span className="block text-primary-sky">Connected Industrial Intelligence</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Seamless connectivity between plant floor systems and enterprise infrastructure 
                through Industrial Internet of Things solutions and advanced data integration.
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
                Integration Impact
              </h2>
              <p className="text-xl text-secondary-slate">
                Measurable improvements from data integration and IIoT implementation
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

        {/* Services Section */}
        <section className="py-20 bg-primary-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Integration Services
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Comprehensive data integration and IIoT solutions for modern manufacturing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-primary-blue mb-4">
                    {service.title}
                  </h3>
                  <p className="text-secondary-slate mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div>
                    <h4 className="font-medium text-primary-blue mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
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

        {/* Architecture Patterns */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Integration Architectures
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Proven architectural patterns for different operational requirements and scales
              </p>
            </div>

            <div className="space-y-8">
              {architectures.map((arch, index) => (
                <div 
                  key={index}
                  className="bg-primary-gray p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-2xl font-semibold text-primary-blue mb-4">
                        {arch.name}
                      </h3>
                      <p className="text-secondary-slate leading-relaxed">
                        {arch.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-blue mb-3">Key Components:</h4>
                      <ul className="space-y-2">
                        {arch.components.map((component, compIndex) => (
                          <li key={compIndex} className="flex items-center text-sm text-secondary-slate">
                            <svg className="h-3 w-3 text-secondary-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {component}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-blue mb-3">Best For:</h4>
                      <p className="text-sm text-secondary-slate leading-relaxed">
                        {arch.useCase}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20 bg-primary-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Implementation Process
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Systematic approach to data integration and IIoT deployment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Assessment & Planning',
                  description: 'Evaluate existing systems, data sources, and integration requirements.',
                  activities: ['System Audit', 'Requirements Analysis', 'Architecture Design', 'Security Planning']
                },
                {
                  step: '2',
                  title: 'Infrastructure Setup',
                  description: 'Deploy networking, security, and data collection infrastructure.',
                  activities: ['Network Configuration', 'Security Implementation', 'Gateway Installation', 'Database Setup']
                },
                {
                  step: '3',
                  title: 'Data Integration',
                  description: 'Connect systems, configure protocols, and establish data flows.',
                  activities: ['Protocol Configuration', 'Data Mapping', 'Testing & Validation', 'Performance Tuning']
                },
                {
                  step: '4',
                  title: 'Monitoring & Support',
                  description: 'Ongoing monitoring, maintenance, and optimization of integrated systems.',
                  activities: ['Performance Monitoring', 'System Maintenance', 'User Training', 'Continuous Improvement']
                }
              ].map((phase, index) => (
                <div key={index} className="bg-white p-6 rounded-xl">
                  <div className="w-12 h-12 bg-primary-sky text-white rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold text-primary-blue mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-secondary-slate text-sm mb-4 leading-relaxed">
                    {phase.description}
                  </p>
                  <ul className="space-y-1">
                    {phase.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-center text-xs text-secondary-slate">
                        <div className="w-1.5 h-1.5 bg-primary-sky rounded-full mr-2 flex-shrink-0"></div>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Common Use Cases
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Real-world applications of data integration and IIoT solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Equipment Monitoring',
                  description: 'Real-time monitoring of critical equipment for predictive maintenance and performance optimization.',
                  benefits: ['Reduced Downtime', 'Predictive Maintenance', 'Performance Analytics', 'Cost Savings']
                },
                {
                  title: 'Energy Management',
                  description: 'Comprehensive energy monitoring and management across facilities for cost reduction and sustainability.',
                  benefits: ['Energy Optimization', 'Cost Reduction', 'Sustainability Reporting', 'Demand Management']
                },
                {
                  title: 'Quality Tracking',
                  description: 'Automated quality data collection and traceability throughout the production process.',
                  benefits: ['Quality Assurance', 'Traceability', 'Compliance', 'Process Improvement']
                },
                {
                  title: 'Supply Chain Visibility',
                  description: 'End-to-end visibility of materials, products, and logistics across the supply chain.',
                  benefits: ['Inventory Optimization', 'Supply Chain Transparency', 'Logistics Efficiency', 'Risk Management']
                },
                {
                  title: 'Environmental Monitoring',
                  description: 'Continuous monitoring of environmental conditions for compliance and safety.',
                  benefits: ['Regulatory Compliance', 'Safety Monitoring', 'Risk Mitigation', 'Reporting Automation']
                },
                {
                  title: 'Remote Operations',
                  description: 'Remote monitoring and control capabilities for distributed facilities and assets.',
                  benefits: ['Remote Access', 'Centralized Control', 'Operational Efficiency', 'Reduced Travel Costs']
                }
              ].map((useCase, index) => (
                <div 
                  key={index}
                  className="bg-primary-gray p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold text-primary-blue mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-secondary-slate text-sm mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div>
                    <h4 className="font-medium text-primary-blue mb-2 text-sm">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-secondary-slate">
                          <svg className="h-3 w-3 text-secondary-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-blue text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Connect Your Operations?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Transform your manufacturing operations with comprehensive data integration 
              and Industrial IoT solutions tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-primary-sky text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Start Integration
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