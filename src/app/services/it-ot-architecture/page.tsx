import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'IT and OT Architecture - Technology Integration | DreamVersion',
  description: 'Strategic alignment of Information Technology and Operational Technology infrastructures for secure, scalable industrial systems.',
}

export default function ITOTArchitecturePage() {
  const services = [
    {
      title: 'Network Architecture Design',
      description: 'Comprehensive network design for secure, reliable communication between IT and OT systems.',
      components: ['Network Segmentation', 'VLAN Configuration', 'Firewall Design', 'Wireless Infrastructure', 'Redundancy Planning', 'Performance Optimization']
    },
    {
      title: 'Security Framework',
      description: 'Multi-layered security approach protecting both operational technology and information systems.',
      components: ['Zero Trust Architecture', 'Industrial Firewalls', 'VPN Solutions', 'Access Control', 'Threat Detection', 'Incident Response']
    },
    {
      title: 'System Integration',
      description: 'Seamless integration between enterprise systems and manufacturing operations.',
      components: ['API Development', 'Middleware Solutions', 'Database Integration', 'Protocol Translation', 'Data Synchronization', 'System Monitoring']
    },
    {
      title: 'Infrastructure Planning',
      description: 'Strategic planning for scalable, future-ready IT/OT infrastructure.',
      components: ['Capacity Planning', 'Technology Roadmap', 'Upgrade Strategies', 'Disaster Recovery', 'Business Continuity', 'Change Management']
    }
  ]

  const challenges = [
    {
      challenge: 'Security Convergence',
      description: 'Bridging the security gap between IT and OT environments while maintaining operational integrity.',
      solution: 'Implement defense-in-depth strategy with industrial-grade security controls and continuous monitoring.',
      technologies: ['Industrial Firewalls', 'Network Segmentation', 'Access Control Systems', 'Security Monitoring']
    },
    {
      challenge: 'Legacy System Integration',
      description: 'Connecting legacy operational systems with modern IT infrastructure and applications.',
      solution: 'Deploy protocol gateways and middleware solutions for seamless data exchange and system interoperability.',
      technologies: ['Protocol Converters', 'API Gateways', 'Middleware Platforms', 'Data Translation Services']
    },
    {
      challenge: 'Performance Requirements',
      description: 'Meeting real-time performance requirements while ensuring network reliability and availability.',
      solution: 'Design high-performance networks with redundancy, QoS, and optimized data flows.',
      technologies: ['Redundant Networks', 'QoS Implementation', 'Load Balancing', 'Performance Monitoring']
    },
    {
      challenge: 'Compliance & Standards',
      description: 'Ensuring compliance with industry standards and regulatory requirements across IT/OT domains.',
      solution: 'Implement standards-based architecture with comprehensive documentation and audit capabilities.',
      technologies: ['IEC 62443', 'NIST Framework', 'ISA-99', 'Audit Systems']
    }
  ]

  const architectureTypes = [
    {
      type: 'Purdue Model Implementation',
      description: 'Industry-standard reference model for industrial automation and control systems.',
      levels: ['Level 0: Physical Process', 'Level 1: Basic Control', 'Level 2: Supervisory Control', 'Level 3: Operations Management', 'Level 4: Business Planning']
    },
    {
      type: 'Zero Trust Architecture',
      description: 'Security model that requires verification for every user and device accessing the network.',
      principles: ['Never Trust, Always Verify', 'Least Privilege Access', 'Assume Breach', 'Verify Explicitly', 'Continuous Monitoring']
    },
    {
      type: 'Hybrid Cloud Integration',
      description: 'Combination of on-premises infrastructure with cloud services for optimal performance and scalability.',
      components: ['Edge Computing', 'Private Cloud', 'Public Cloud Services', 'Hybrid Connectivity', 'Data Governance']
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                IT and OT Architecture
                <span className="block text-primary-sky">Strategic Technology Alignment</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Strategic alignment of Information Technology and Operational Technology infrastructures 
                for secure, scalable, and integrated industrial systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-primary-sky text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  Start Assessment
                </Link>
                <Link 
                  href="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-blue transition-all duration-300 transform hover:scale-105"
                >
                  Our Approach
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
                Architecture Services
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Comprehensive IT/OT architecture design and implementation services
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
                    <h4 className="font-medium text-primary-blue mb-3">Key Components:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.components.map((component, compIndex) => (
                        <div key={compIndex} className="flex items-center text-sm text-secondary-slate">
                          <svg className="h-3 w-3 text-secondary-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {component}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="py-20 bg-primary-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Common Challenges & Solutions
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Addressing critical IT/OT integration challenges with proven solutions
              </p>
            </div>

            <div className="space-y-8">
              {challenges.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-blue mb-3">
                        {item.challenge}
                      </h3>
                      <p className="text-secondary-slate mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="bg-primary-gray p-4 rounded-lg">
                        <h4 className="font-medium text-primary-blue mb-2">Our Solution:</h4>
                        <p className="text-secondary-slate text-sm leading-relaxed">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-blue mb-4">Technologies Used:</h4>
                      <div className="space-y-2">
                        {item.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-primary-sky rounded-full mr-3"></div>
                            <span className="text-secondary-slate text-sm">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Types */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Architecture Frameworks
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Industry-standard frameworks and modern approaches to IT/OT integration
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {architectureTypes.map((arch, index) => (
                <div 
                  key={index}
                  className="bg-primary-gray p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-primary-blue mb-4">
                    {arch.type}
                  </h3>
                  <p className="text-secondary-slate mb-6 leading-relaxed">
                    {arch.description}
                  </p>
                  <div>
                    <h4 className="font-medium text-primary-blue mb-3">
                      {arch.levels ? 'Levels:' : arch.principles ? 'Principles:' : 'Components:'}
                    </h4>
                    <ul className="space-y-2">
                      {(arch.levels || arch.principles || arch.components || []).map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-sm text-secondary-slate">
                          <svg className="h-3 w-3 text-secondary-green mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
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
                Implementation Methodology
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Systematic approach to IT/OT architecture design and deployment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  phase: 'Assessment',
                  description: 'Comprehensive evaluation of current IT and OT infrastructure, identifying gaps and opportunities.',
                  deliverables: ['Current State Analysis', 'Gap Assessment', 'Risk Evaluation', 'Compliance Review']
                },
                {
                  phase: 'Architecture Design',
                  description: 'Design future-state architecture with detailed technical specifications and implementation roadmap.',
                  deliverables: ['Architecture Blueprint', 'Technical Specifications', 'Security Framework', 'Integration Plan']
                },
                {
                  phase: 'Security Planning',
                  description: 'Develop comprehensive security strategy addressing both IT and OT security requirements.',
                  deliverables: ['Security Architecture', 'Risk Mitigation Plan', 'Access Control Design', 'Monitoring Strategy']
                },
                {
                  phase: 'Implementation',
                  description: 'Phased deployment of architecture components with minimal disruption to operations.',
                  deliverables: ['System Deployment', 'Configuration Management', 'Testing & Validation', 'Documentation']
                },
                {
                  phase: 'Optimization',
                  description: 'Ongoing monitoring, optimization, and continuous improvement of integrated systems.',
                  deliverables: ['Performance Monitoring', 'System Optimization', 'User Training', 'Support Processes']
                }
              ].map((phase, index) => (
                <div key={index} className="bg-white p-6 rounded-xl">
                  <div className="w-12 h-12 bg-primary-blue text-white rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-primary-blue mb-3">
                    {phase.phase}
                  </h3>
                  <p className="text-secondary-slate text-sm mb-4 leading-relaxed">
                    {phase.description}
                  </p>
                  <div>
                    <h4 className="font-medium text-primary-blue mb-2 text-sm">Deliverables:</h4>
                    <ul className="space-y-1">
                      {phase.deliverables.map((deliverable, delIndex) => (
                        <li key={delIndex} className="flex items-center text-xs text-secondary-slate">
                          <div className="w-1.5 h-1.5 bg-primary-sky rounded-full mr-2 flex-shrink-0"></div>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Business Benefits
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Measurable outcomes from properly aligned IT/OT architecture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: 'Security Incidents', improvement: '80% Reduction', description: 'Fewer security breaches and faster incident response' },
                { metric: 'System Integration', improvement: '60% Faster', description: 'Accelerated deployment of new systems and technologies' },
                { metric: 'Operational Visibility', improvement: '100% Coverage', description: 'Complete visibility across all operational systems' },
                { metric: 'Maintenance Costs', improvement: '30% Reduction', description: 'Lower ongoing maintenance and support costs' }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-primary-gray rounded-xl">
                  <div className="text-3xl font-bold text-primary-sky mb-2">
                    {benefit.improvement}
                  </div>
                  <div className="text-lg font-semibold text-primary-blue mb-2">
                    {benefit.metric}
                  </div>
                  <div className="text-sm text-secondary-slate">
                    {benefit.description}
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
              Ready to Align Your IT/OT Architecture?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Transform your industrial operations with strategic IT/OT architecture design 
              that delivers security, scalability, and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-primary-sky text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Assessment
              </Link>
              <Link 
                href="/resources"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-blue transition-all duration-300 transform hover:scale-105"
              >
                View Frameworks
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}