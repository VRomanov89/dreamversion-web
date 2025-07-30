export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "DreamVersion transformed our manufacturing operations with their SCADA implementation. The reliability and support have been exceptional.",
      author: "Sarah Chen",
      title: "Director of Operations",
      company: "Advanced Manufacturing Co.",
      industry: "Automotive"
    },
    {
      quote: "Their AI platform identified optimization opportunities we never knew existed. ROI was realized within the first quarter.",
      author: "Michael Rodriguez",
      title: "Plant Manager",
      company: "Pacific Food Systems",
      industry: "Food & Beverage"
    },
    {
      quote: "The integration expertise and project execution were flawless. DreamVersion delivers on their promises.",
      author: "Jennifer Walsh",
      title: "Engineering Manager",
      company: "BioTech Solutions",
      industry: "Life Sciences"
    }
  ]

  const industries = [
    "Food & Beverage",
    "Life Sciences",
    "Consumer Goods",
    "Automotive",
    "Energy",
    "Packaging",
    "Chemicals",
    "Manufacturing"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-secondary-slate max-w-3xl mx-auto">
            Manufacturing companies across North America trust DreamVersion for their most critical automation and digital transformation projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-primary-gray p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-primary-sky mb-4">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <blockquote className="text-secondary-slate mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-primary-blue">
                  {testimonial.author}
                </div>
                <div className="text-sm text-secondary-slate">
                  {testimonial.title}
                </div>
                <div className="text-sm text-secondary-slate">
                  {testimonial.company}
                </div>
                <div className="text-xs text-primary-sky font-medium mt-1">
                  {testimonial.industry}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industries Served */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary-blue mb-8">
            Industries We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <span 
                key={index}
                className="bg-primary-sky bg-opacity-10 text-primary-blue px-4 py-2 rounded-full text-sm font-medium border border-primary-sky border-opacity-20"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}