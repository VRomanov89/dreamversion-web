import Link from 'next/link'

export default function ProductsShowcase() {
  const products = [
    {
      name: 'AI Platform',
      title: 'Artificial Intelligence for Manufacturing',
      description: 'Advanced AI-driven insights that identify optimization opportunities and predict equipment performance across your manufacturing operations.',
      features: ['Predictive Analytics', 'Anomaly Detection', 'Performance Optimization', 'Real-time Insights'],
      href: '/products/ai',
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'PI Platform',
      title: 'Process Intelligence Solution',
      description: 'Comprehensive process monitoring and intelligence platform that transforms operational data into actionable business insights.',
      features: ['Process Monitoring', 'Data Visualization', 'Trend Analysis', 'Custom Dashboards'],
      href: '/products/pi',
      color: 'from-green-500 to-teal-600'
    },
    {
      name: 'CSI Platform',
      title: 'Connected Systems Intelligence',
      description: 'Unified connectivity solution that bridges plant floor systems with enterprise infrastructure for complete operational visibility.',
      features: ['System Integration', 'Data Connectivity', 'Protocol Translation', 'Unified Interface'],
      href: '/products/csi',
      color: 'from-orange-500 to-red-600'
    }
  ]

  return (
    <section className="py-20 bg-primary-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Software Products
          </h2>
          <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
            Proprietary platforms built from field experience to unlock business opportunities 
            through smarter use of operational and enterprise data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${product.color}`}></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center text-white font-bold text-lg mr-4`}>
                    {product.name.split(' ')[0]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-blue">
                      {product.name}
                    </h3>
                    <p className="text-sm text-secondary-slate">
                      {product.title}
                    </p>
                  </div>
                </div>
                
                <p className="text-secondary-slate mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-primary-blue mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-secondary-slate">
                        <svg className="h-4 w-4 text-secondary-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    href={product.href}
                    className="flex-1 bg-primary-sky text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-opacity-90 transition-colors"
                  >
                    Learn More
                  </Link>
                  <Link 
                    href="/contact"
                    className="flex-1 border border-primary-sky text-primary-sky px-4 py-2 rounded-lg font-medium text-center hover:bg-primary-sky hover:text-white transition-colors"
                  >
                    Book Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/contact"
            className="inline-flex items-center bg-primary-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Schedule a Platform Demo
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}