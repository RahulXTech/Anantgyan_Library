export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1682284548106-3e589faff54f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            // "url('https://media.istockphoto.com/id/949118068/photo/books.jpg?s=1024x1024&w=is&k=20&c=CDrLRc8X_JrFr-uDbNKrOKrmfIV_M2Af7z1Hb3cYEvY=')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center text-white">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold border border-blue-400/40 backdrop-blur">
            Where Focus Meets Knowledge
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Anantgyan Library
            <span className="block text-blue-400 mt-2">
              Your Perfect Study Space in Bhopal
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-xl">
            A peaceful, disciplined, and distraction-free environment designed
            for students, competitive exam aspirants, and serious learners.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="px-7 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 hover:scale-105 transition"
            >
              📍 Find Us on Map
            </a>

            <a
              href="/facilities"
              className="px-7 py-3 border border-blue-400 text-blue-300 rounded-lg font-semibold hover:bg-blue-400/20 transition"
            >
              📚 View Facilities
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-300">
            📍 15-B, Sachchidanand Nagar, Bhopal (M.P.)
          </p>
        </div>

        {/* RIGHT GLASS CARD */}
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Why Students Choose Us
            </h3>

            <ul className="space-y-4 text-gray-200">
              <li className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✔</span>
                24×7 Silent Study Environment
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✔</span>
                AC & Non-AC Comfortable Seating
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✔</span>
                High-Speed WiFi & Power Backup
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✔</span>
                Trusted by Competitive Exam Aspirants
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
