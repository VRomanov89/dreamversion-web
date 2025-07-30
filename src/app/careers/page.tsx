import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Careers - Join Our Engineering Team | DreamVersion',
  description: 'Join DreamVersion\'s team of industrial automation experts. Explore career opportunities in control systems, software development, and digital transformation.',
}

export default function CareersPage() {
  const openPositions = [
    {
      title: 'Senior Controls Engineer',
      location: 'Remote / On-site',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Lead control systems design and implementation projects across diverse industrial sectors.',
      requirements: ['5+ years PLC programming experience', 'Rockwell/Siemens platform expertise', 'HMI development skills']
    },
    {
      title: 'Software Developer - Industrial Applications',
      location: 'Remote',
      type: 'Full-time',
      department: 'Software',
      description: 'Develop and maintain our proprietary AI, PI, and CSI software platforms.',
      requirements: ['Full-stack development experience', 'Industrial IoT knowledge', 'React/Node.js proficiency']
    },
    {
      title: 'Project Manager - Integration Services',
      location: 'Hybrid',
      type: 'Full-time',
      department: 'Operations',
      description: 'Manage complex industrial automation projects from conception to delivery.',
      requirements: ['PMP certification preferred', 'Industrial project experience', 'Client management skills']
    },
    {
      title: 'SCADA Specialist',
      location: 'On-site / Travel',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Design and implement SCADA systems for manufacturing and process industries.',
      requirements: ['Ignition platform expertise', 'Database design skills', 'System integration experience']
    }
  ]

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Industry-leading salary packages with performance bonuses and equity opportunities.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: 'Professional Development',
      description: 'Continuous learning opportunities, certifications, and conference attendance.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Flexible Work Environment',
      description: 'Remote-first culture with flexible schedules and modern collaboration tools.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Cutting-Edge Projects',
      description: 'Work on innovative automation and digital transformation initiatives.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Team Culture',
      description: 'Collaborative environment with experienced engineers and mentorship opportunities.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Team
                <span className="block text-primary-sky">Build the Future of Industrial Technology</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Work alongside experienced engineers on cutting-edge automation projects and innovative 
                software solutions that transform manufacturing operations across North America.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#positions"
                  className="bg-primary-sky text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-blue transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work Here */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Why Work at DreamVersion?
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Join a forward-thinking company where engineering excellence meets innovation in industrial technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-primary-gray p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-primary-sky mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-secondary-slate leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-20 bg-primary-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Current opportunities to join our growing team of industrial technology experts.
              </p>
            </div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-primary-blue mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-secondary-slate">
                        <span className="flex items-center">
                          <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {position.type}
                        </span>
                        <span className="flex items-center">
                          <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
                          </svg>
                          {position.department}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <Link 
                        href="/contact"
                        className="bg-primary-sky text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors inline-block"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>

                  <p className="text-secondary-slate mb-6 leading-relaxed">
                    {position.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-primary-blue mb-3">Key Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-secondary-slate">
                          <svg className="h-4 w-4 text-secondary-green mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-secondary-slate mb-6">
                Don&apos;t see a position that fits? We&apos;re always interested in hearing from talented engineers.
              </p>
              <Link 
                href="/contact"
                className="bg-primary-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Send Your Resume
              </Link>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Application Process
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Our streamlined hiring process designed to identify the best talent efficiently and respectfully.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Application', description: 'Submit your resume and cover letter through our contact form.' },
                { step: '2', title: 'Initial Review', description: 'Our team reviews applications and responds within 5 business days.' },
                { step: '3', title: 'Interview Process', description: 'Technical and cultural fit interviews with team members.' },
                { step: '4', title: 'Decision & Offer', description: 'Final decision and competitive offer within 2 weeks.' }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-sky text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
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
              Ready to Shape the Future of Industrial Technology?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join our team of passionate engineers and contribute to innovative projects 
              that make a real impact on manufacturing operations worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-primary-sky text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Apply Today
              </Link>
              <Link 
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-blue transition-all duration-300 transform hover:scale-105"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}