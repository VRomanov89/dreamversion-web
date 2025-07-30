import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Resources - Industrial Automation Insights | DreamVersion',
  description: 'Access expert insights on industrial automation, digital transformation, and manufacturing technology from DreamVersion\'s engineering team.',
}

export default function ResourcesPage() {
  const featuredArticles = [
    {
      title: 'The Future of Industrial Automation: AI and Machine Learning Integration',
      excerpt: 'Explore how artificial intelligence is transforming manufacturing operations and what it means for your facility.',
      date: '2024-01-15',
      category: 'Technology Trends',
      readTime: '8 min read',
      image: '/images/ai-automation.jpg'
    },
    {
      title: 'Implementing SCADA Systems: Best Practices for Manufacturing',
      excerpt: 'A comprehensive guide to SCADA system implementation, from planning to deployment and maintenance.',
      date: '2024-01-10',
      category: 'Implementation Guide',
      readTime: '12 min read',
      image: '/images/scada-implementation.jpg'
    },
    {
      title: 'Digital Transformation ROI: Measuring Success in Industrial Settings',
      excerpt: 'Learn how to quantify the return on investment for your digital transformation initiatives.',
      date: '2024-01-05',
      category: 'Business Strategy',
      readTime: '6 min read',
      image: '/images/digital-transformation.jpg'
    }
  ]

  const caseStudies = [
    {
      title: 'Food Processing Plant Automation Success',
      company: 'Pacific Food Systems',
      industry: 'Food & Beverage',
      challenge: 'Reduce production downtime and improve quality control',
      result: '35% reduction in downtime, 20% improvement in quality metrics',
      technologies: ['Rockwell PlantPAx', 'Ignition SCADA', 'AI Platform']
    },
    {
      title: 'Pharmaceutical Manufacturing Compliance',
      company: 'BioTech Solutions',
      industry: 'Life Sciences',
      challenge: 'Achieve FDA compliance while maintaining production efficiency',
      result: 'Full compliance achieved, 15% increase in throughput',
      technologies: ['Siemens TIA Portal', 'Batch Control Systems', 'Data Integrity']
    },
    {
      title: 'Automotive Parts Manufacturing Optimization',
      company: 'Advanced Manufacturing Co.',
      industry: 'Automotive',
      challenge: 'Integrate legacy systems with modern production lines',
      result: '25% improvement in OEE, seamless system integration',
      technologies: ['CSI Platform', 'OPC UA', 'Industrial IoT']
    }
  ]

  const whitepapers = [
    {
      title: 'Industrial IoT Implementation Framework',
      description: 'A comprehensive framework for implementing Industrial IoT solutions in manufacturing environments.',
      pages: '24 pages',
      format: 'PDF'
    },
    {
      title: 'SCADA Security Best Practices',
      description: 'Essential security considerations and best practices for SCADA system deployment and maintenance.',
      pages: '18 pages',
      format: 'PDF'
    },
    {
      title: 'ROI Calculator for Automation Projects',
      description: 'Interactive calculator and methodology for determining automation project ROI and payback periods.',
      pages: '12 pages',
      format: 'PDF + Excel'
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
                Resources & Insights
                <span className="block text-primary-sky">Expert Knowledge for Industrial Excellence</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Access practical insights, case studies, and expert guidance on industrial automation, 
                digital transformation, and manufacturing technology from our engineering team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#articles"
                  className="bg-primary-sky text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  Browse Articles
                </Link>
                <Link 
                  href="#case-studies"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-blue transition-all duration-300 transform hover:scale-105"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section id="articles" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Latest Articles
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Stay informed with the latest trends, technologies, and best practices in industrial automation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <article 
                  key={index}
                  className="bg-primary-gray rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-primary-sky to-primary-blue"></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-primary-sky bg-primary-sky bg-opacity-10 px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <span className="text-xs text-secondary-slate">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary-blue mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-secondary-slate mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-secondary-slate">
                        {new Date(article.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                      <Link 
                        href="/contact"
                        className="text-primary-sky font-medium hover:text-primary-blue transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="case-studies" className="py-20 bg-primary-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                Real-world implementations showcasing measurable results and business impact.
              </p>
            </div>

            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-4">
                        <h3 className="text-2xl font-semibold text-primary-blue mr-4">
                          {study.title}
                        </h3>
                        <span className="text-sm text-primary-sky bg-primary-sky bg-opacity-10 px-3 py-1 rounded-full">
                          {study.industry}
                        </span>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-medium text-secondary-slate mb-2">Challenge:</h4>
                        <p className="text-secondary-slate">{study.challenge}</p>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-medium text-secondary-green mb-2">Result:</h4>
                        <p className="text-secondary-slate font-medium">{study.result}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary-blue mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="text-sm bg-primary-gray px-3 py-1 rounded-full text-primary-blue"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-1 flex items-center justify-center">
                      <Link 
                        href="/contact"
                        className="bg-primary-sky text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                      >
                        View Full Case Study
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* White Papers */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                White Papers & Guides
              </h2>
              <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
                In-depth technical resources and implementation guides for industrial automation projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whitepapers.map((paper, index) => (
                <div 
                  key={index}
                  className="bg-primary-gray p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-primary-sky mb-4">
                    <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-3">
                    {paper.title}
                  </h3>
                  <p className="text-secondary-slate mb-6 leading-relaxed">
                    {paper.description}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-secondary-slate">
                      {paper.pages}
                    </span>
                    <span className="text-sm font-medium text-primary-sky">
                      {paper.format}
                    </span>
                  </div>
                  <Link 
                    href="/contact"
                    className="block w-full text-center bg-primary-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                  >
                    Download Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-primary-blue text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Industrial Insights
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest trends, case studies, and expert insights 
              on industrial automation and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-black placeholder-gray-500"
              />
              <button className="bg-primary-sky text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}