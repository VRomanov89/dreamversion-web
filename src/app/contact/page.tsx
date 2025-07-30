'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    message: '',
    budget: '',
    timeline: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here - would typically send to API endpoint
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We&apos;ll be in touch within 24 hours.')
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-blue to-secondary-slate text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your
                <span className="block text-primary-sky">Digital Transformation?</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Let&apos;s discuss how DreamVersion can help optimize your manufacturing operations 
                and unlock new opportunities for growth.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-primary-blue mb-8">
                  Schedule a Consultation
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-slate mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-sky focus:border-transparent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-slate mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-sky focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-secondary-slate mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-sky focus:border-transparent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-slate mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-sky focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-secondary-slate mb-2">
                      Project Interest *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-sky focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="control-systems">Control Systems</option>
                      <option value="scada-mes">SCADA and MES</option>
                      <option value="panel-design">Panel Design & Commissioning</option>
                      <option value="data-integration">Data Integration & IIoT</option>
                      <option value="it-ot-architecture">IT/OT Architecture</option>
                      <option value="ai-platform">AI Platform Demo</option>
                      <option value="pi-platform">PI Platform Demo</option>
                      <option value="csi-platform">CSI Platform Demo</option>
                      <option value="general-inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-secondary-slate mb-2">
                        Project Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-sky focus:border-transparent transition-colors"
                      >
                        <option value="">Select budget range...</option>
                        <option value="under-50k">Under $50K</option>
                        <option value="50k-100k">$50K - $100K</option>
                        <option value="100k-250k">$100K - $250K</option>
                        <option value="250k-500k">$250K - $500K</option>
                        <option value="over-500k">Over $500K</option>
                        <option value="not-sure">Not Sure</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-secondary-slate mb-2">
                        Desired Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-sky focus:border-transparent transition-colors"
                      >
                        <option value="">Select timeline...</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3-months">1-3 Months</option>
                        <option value="3-6-months">3-6 Months</option>
                        <option value="6-12-months">6-12 Months</option>
                        <option value="planning-phase">Planning Phase</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-slate mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, current challenges, and goals..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-sky focus:border-transparent transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-sky text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-primary-blue mb-8">
                  Get in Touch
                </h2>
                
                <div className="space-y-8">
                  <div className="bg-primary-gray p-8 rounded-xl">
                    <h3 className="text-xl font-semibold text-primary-blue mb-4">
                      Quick Response Guarantee
                    </h3>
                    <p className="text-secondary-slate mb-4">
                      We respond to all inquiries within 24 hours during business days. 
                      For urgent matters, please call us directly.
                    </p>
                    <div className="text-primary-sky font-semibold">
                      Emergency Support: Available 24/7
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="text-primary-sky mr-4 mt-1">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-blue mb-1">Service Areas</h4>
                        <p className="text-secondary-slate">
                          Serving manufacturing companies across North America<br />
                          On-site services available throughout the US and Canada
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-primary-sky mr-4 mt-1">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-blue mb-1">Email</h4>
                        <p className="text-secondary-slate">
                          General Inquiries: info@dreamversion.com<br />
                          Technical Support: support@dreamversion.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-primary-sky mr-4 mt-1">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-blue mb-1">Business Hours</h4>
                        <p className="text-secondary-slate">
                          Monday - Friday: 8:00 AM - 6:00 PM EST<br />
                          Weekend Support: By appointment
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary-blue text-white p-8 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4">
                      Prefer to Schedule Directly?
                    </h3>
                    <p className="mb-6">
                      Book a 30-minute consultation to discuss your project requirements 
                      and explore how DreamVersion can help.
                    </p>
                    <button className="bg-primary-sky text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                      Schedule Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}