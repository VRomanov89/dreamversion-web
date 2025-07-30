import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Terms of Service | DreamVersion',
  description: 'DreamVersion\'s Terms of Service outlining the terms and conditions for using our website and services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary-blue text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Terms of Service
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
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">1. Acceptance of Terms</h2>
                  <p className="leading-relaxed">
                    By accessing and using the DreamVersion website (&ldquo;Service&rdquo;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">2. Description of Service</h2>
                  <p className="leading-relaxed">
                    DreamVersion provides industrial automation consulting, systems integration, software development, and related technical services. Our website serves as an information portal and communication platform for our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">3. Use License</h2>
                  <p className="leading-relaxed mb-4">
                    Permission is granted to temporarily download one copy of the materials on DreamVersion&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>modify or copy the materials</li>
                    <li>use the materials for any commercial purpose or for any public display</li>
                    <li>attempt to reverse engineer any software contained on the website</li>
                    <li>remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    This license shall automatically terminate if you violate any of these restrictions and may be terminated by DreamVersion at any time.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">4. User Account and Registration</h2>
                  <p className="leading-relaxed mb-4">
                    To access certain features of our Service, you may be required to create an account. When you create an account, you agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">5. Prohibited Uses</h2>
                  <p className="leading-relaxed mb-4">
                    You may not use our Service:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                    <li>To upload or transmit viruses or any other type of malicious code</li>
                    <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                    <li>For any obscene or immoral purpose</li>
                    <li>To interfere with or circumvent the security features of the Service</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">6. Intellectual Property Rights</h2>
                  <p className="leading-relaxed">
                    The Service and its original content, features, and functionality are and will remain the exclusive property of DreamVersion and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">7. User Content</h2>
                  <p className="leading-relaxed mb-4">
                    Our Service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material (&ldquo;Content&rdquo;). You are responsible for Content that you post to the Service, including its legality, reliability, and appropriateness.
                  </p>
                  <p className="leading-relaxed">
                    By posting Content to the Service, You grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">8. Privacy Policy</h2>
                  <p className="leading-relaxed">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">9. Disclaimer</h2>
                  <p className="leading-relaxed">
                    The information on this website is provided on an &ldquo;as is&rdquo; basis. To the fullest extent permitted by law, DreamVersion excludes all representations, warranties, conditions and terms related to our website and the use of this website (including any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-private-blue mb-4">10. Limitation of Liability</h2>
                  <p className="leading-relaxed">
                    In no event shall DreamVersion, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">11. Indemnification</h2>
                  <p className="leading-relaxed">
                    You agree to defend, indemnify, and hold harmless DreamVersion and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney&apos;s fees).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">12. Termination</h2>
                  <p className="leading-relaxed">
                    We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">13. Governing Law</h2>
                  <p className="leading-relaxed">
                    These Terms shall be interpreted and governed by the laws of the jurisdiction in which DreamVersion operates, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">14. Changes to Terms</h2>
                  <p className="leading-relaxed">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary-blue mb-4">15. Contact Information</h2>
                  <p className="leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-primary-gray p-6 rounded-lg">
                    <p className="mb-2"><strong>Email:</strong> legal@dreamversion.com</p>
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