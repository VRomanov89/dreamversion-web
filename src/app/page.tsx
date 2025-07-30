export default function Home() {
  return (
    <main className="min-h-screen bg-primary-gray">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-blue mb-6">
            DreamVersion
          </h1>
          <p className="text-xl text-secondary-slate mb-8 max-w-2xl mx-auto">
            Industrial systems integration and proprietary software products for manufacturing excellence.
          </p>
          <div className="space-x-4">
            <button className="bg-primary-sky text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
              Book a Demo
            </button>
            <button className="border border-primary-blue text-primary-blue px-6 py-3 rounded-lg font-medium hover:bg-primary-blue hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}