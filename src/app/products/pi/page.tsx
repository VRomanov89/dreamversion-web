import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'PI Platform - Process Intelligence Solution | DreamVersion',
  description: 'DreamVersion\'s PI Platform transforms operational data into actionable business insights with comprehensive process monitoring and intelligence.',
}

export default function PIProductPage() {
  const features = [
    {
      title: 'Process Monitoring',
      description: 'Real-time monitoring of manufacturing processes with comprehensive data collection and analysis.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Data Visualization',
      description: 'Intuitive dashboards and reports that make complex process data easy to understand and act upon.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      )
    },
    {
      title: 'Trend Analysis',
      description: 'Advanced analytics to identify patterns, trends, and optimization opportunities in your processes.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Custom Dashboards',
      description: 'Personalized dashboards tailored to specific roles and responsibilities across your organization.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    }
  ]

  const benefits = [
    { title: 'Process Efficiency', value: 'Up to 20%' },
    { title: 'Decision Speed', value: '3x Faster' },
    { title: 'Data Accessibility', value: '24/7 Access' },
    { title: 'Cost Reduction', value: '15-25%' }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 via-teal-600 to-green-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-2xl mb-8">
                <span className="text-3xl font-bold">PI</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                PI Platform
                <span className="block text-green-200">Process Intelligence Solution</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Transform your operational data into actionable business insights with comprehensive 
                process monitoring, visualization, and intelligence capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  Book a Demo
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
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
                Measurable Impact
              </h2>
              <p className="text-xl text-secondary-slate">
                Real results from process intelligence implementation
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
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
                Platform Capabilities
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Comprehensive process intelligence tools designed for manufacturing environments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-green-600 mb-4">
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

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Common Use Cases
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Proven applications across manufacturing and process industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Production Monitoring',
                  description: 'Track OEE, throughput, and quality metrics across production lines with real-time alerts and reporting.',
                  benefits: ['Real-time visibility', 'Performance tracking', 'Quality monitoring']
                },
                {
                  title: 'Energy Management',
                  description: 'Monitor and optimize energy consumption patterns to reduce costs and improve sustainability.',
                  benefits: ['Cost reduction', 'Sustainability', 'Peak demand management']
                },
                {
                  title: 'Asset Performance',
                  description: 'Track equipment performance and maintenance needs to maximize uptime and extend asset life.',
                  benefits: ['Predictive maintenance', 'Uptime optimization', 'Cost control']
                }
              ].map((useCase, index) => (
                <div 
                  key={index}
                  className="bg-primary-gray p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-primary-blue mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-secondary-slate mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-secondary-slate">
                        <svg className="h-4 w-4 text-secondary-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {benefit}
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
              Transform Your Process Intelligence Today
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join manufacturing leaders who are using PI Platform to turn operational 
              data into competitive advantage and improved business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-primary-sky text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Schedule PI Demo
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-blue transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}