export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      
      {/* Decorative background elements */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-40 -right-20 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Tagline badge */}
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
            Where Focus Meets Knowledge
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Anantgyan Library  
            <span className="block text-blue-600 mt-2">
              Your Perfect Study Space in Bhopal
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            A calm, disciplined, and distraction-free environment designed for 
            serious students preparing for competitive exams and academic success.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-7 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 hover:scale-105 transition">
              📍 Find Us on Map
            </button>
            <button className="px-7 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
              📚 View Facilities
            </button>
          </div>

          {/* Location */}
          <p className="mt-6 text-sm text-gray-500">
            📍 15-B, Sachchidanand Nagar, Bhopal (M.P.)
          </p>
        </div>

        {/* RIGHT SIDE – Visual Card */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 border">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Why Students Choose Us
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="text-green-600">✔</span>
                24×7 Silent Study Environment
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600">✔</span>
                AC & Non-AC Comfortable Seating
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600">✔</span>
                High-Speed WiFi & Power Backup
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600">✔</span>
                Trusted by Competitive Exam Aspirants
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
