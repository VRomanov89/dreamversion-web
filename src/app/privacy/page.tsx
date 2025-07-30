import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Privacy Policy | DreamVersion',
  description: 'DreamVersion\'s Privacy Policy outlining how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary-blue text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-200">
                Last updated: January 1, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="text-secondary-slate space-y-8">
                
                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">1. Introduction</h2>
                  <p className="leading-relaxed">
                    DreamVersion (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">2. Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold text-primary-blue mb-3">Personal Information</h3>
                  <p className="leading-relaxed mb-4">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Contact us through our website forms</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Request information about our services</li>
                    <li>Apply for employment opportunities</li>
                    <li>Participate in surveys or feedback</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-primary-blue mb-3">Automatically Collected Information</h3>
                  <p className="leading-relaxed mb-4">
                    We may automatically collect certain information about your device and usage, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>IP address and location information</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website addresses</li>
                    <li>Device information and operating system</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">3. How We Use Your Information</h2>
                  <p className="leading-relaxed mb-4">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Providing and maintaining our services</li>
                    <li>Responding to your inquiries and requests</li>
                    <li>Sending you technical notices and support messages</li>
                    <li>Communicating with you about our services and updates</li>
                    <li>Improving our website and services</li>
                    <li>Analyzing usage patterns and trends</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">4. Information Sharing and Disclosure</h2>
                  <p className="leading-relaxed mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>With your explicit consent</li>
                    <li>To trusted service providers who assist us in operating our website and conducting our business</li>
                    <li>To comply with legal obligations or respond to lawful requests</li>
                    <li>To protect our rights, property, or safety, or that of others</li>
                    <li>In connection with a business transfer or merger</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">5. Data Security</h2>
                  <p className="leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">6. Cookies and Tracking Technologies</h2>
                  <p className="leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-primary-blue mb-3">Types of Cookies We Use:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">7. Your Rights and Choices</h2>
                  <p className="leading-relaxed mb-4">
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>The right to access your personal information</li>
                    <li>The right to correct inaccurate information</li>
                    <li>The right to delete your personal information</li>
                    <li>The right to restrict processing</li>
                    <li>The right to data portability</li>
                    <li>The right to withdraw consent</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">8. Third-Party Links</h2>
                  <p className="leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">9. Children&apos;s Privacy</h2>
                  <p className="leading-relaxed">
                    Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">10. Changes to This Privacy Policy</h2>
                  <p className="leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">11. Contact Us</h2>
                  <p className="leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="bg-primary-gray p-6 rounded-lg">
                    <p className="mb-2"><strong>Email:</strong> privacy@dreamversion.com</p>
                    <p className="mb-2"><strong>Address:</strong> DreamVersion, LLC</p>
                    <p className="mb-2">Industrial Technology Solutions</p>
                    <p>North America</p>
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