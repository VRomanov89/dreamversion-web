import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'About DreamVersion - Industrial Technology Leaders',
  description: 'Learn about DreamVersion\'s mission, team, and approach to industrial automation and digital transformation across North America.',
}

export default function AboutPage() {
  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Industrial Clients' },
    { number: '8', label: 'Industry Sectors' }
  ]

  const values = [
    {
      title: 'Technical Excellence',
      description: 'We bring deep expertise across leading industrial platforms and maintain the highest standards of engineering discipline.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Reliable Execution',
      description: 'Every project is delivered with a focus on reliability, maintainability, and long-term business value.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Strategic Partnership',
      description: 'We build long-term relationships through ongoing support, continuous improvement, and strategic consultation.',
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
                Engineering the Future of
                <span className="block text-primary-sky">Industrial Technology</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                DreamVersion combines deep industrial expertise with innovative software solutions 
                to transform manufacturing operations across North America.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-secondary-slate font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-primary-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-secondary-slate leading-relaxed">
                  To bridge the gap between real-world execution and long-term strategy by delivering 
                  automation solutions and software tools that unlock operational excellence for 
                  manufacturing companies across diverse industries.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-primary-blue mb-4">
                    Built from Experience
                  </h3>
                  <p className="text-secondary-slate mb-6 leading-relaxed">
                    Our software platforms—AI, PI, and CSI—are developed from direct field experience, 
                    not theoretical concepts. Every feature addresses real operational challenges our 
                    engineers have encountered in manufacturing environments.
                  </p>
                  <p className="text-secondary-slate leading-relaxed">
                    This practical foundation ensures our solutions deliver measurable value from day one, 
                    helping manufacturing decision-makers close the gap between insight and action.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h4 className="text-xl font-semibold text-primary-blue mb-4">
                    Platform Expertise
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary-sky rounded-full mr-3"></div>
                      <span className="text-secondary-slate">Rockwell Automation (PlantPAx, FactoryTalk)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary-sky rounded-full mr-3"></div>
                      <span className="text-secondary-slate">Siemens (TIA Portal, WinCC)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary-sky rounded-full mr-3"></div>
                      <span className="text-secondary-slate">Inductive Automation (Ignition)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary-sky rounded-full mr-3"></div>
                      <span className="text-secondary-slate">Cognex Machine Vision</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                The principles that guide our approach to every project and client relationship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="text-center p-8 rounded-xl border border-gray-200 hover:border-primary-sky hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-primary-sky mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-4">
                    {value.title}
                  </h3>
                  <p className="text-secondary-slate leading-relaxed">
                    {value.description}
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
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join manufacturing leaders who trust DreamVersion for their most critical 
              automation and digital transformation initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-primary-sky text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </Link>
              <Link 
                href="/careers"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-blue transition-all duration-300 transform hover:scale-105"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}