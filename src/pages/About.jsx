export default function About() {
  return (
    <section className="bg-gray-50 min-h-screen">
      
      {/* Hero */}
      <div className="py-16 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6">
        <h1 className="text-4xl font-bold mb-3">About Anantgyan Library</h1>
        <p className="max-w-3xl mx-auto text-gray-100 text-lg">
          A disciplined, peaceful, and student-focused study environment
          where dedication meets knowledge.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Anantgyan Library is located at 15-B Sachchidanand Nagar, Above Indian Bank
              Narela Shankari, Bhopal. The library is built specially for students,
              competitive exam aspirants, and knowledge seekers who need a peaceful
              and disciplined place to study.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              With 24×7 availability, comfortable seating, multiple halls, high-speed WiFi,
              and a distraction-free environment, we ensure that every student gets the best
              atmosphere to stay focused and achieve success in their academic journey.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Students Love Us
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Peaceful & Disciplined Study Environment</li>
              <li>✔ AC & Non-AC Study Halls</li>
              <li>✔ High-Speed WiFi & Power Backup</li>
              <li>✔ Comfortable Seating for Long Study Hours</li>
              <li>✔ Affordable & Flexible Membership Plans</li>
            </ul>
          </div>
        </div>

        {/* Mission Vision */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          
          <div className="bg-white shadow rounded-2xl p-8 text-center hover:-translate-y-1 transition">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Mission</h2>
            <p className="text-gray-600">
              To provide a disciplined, comfortable, and productive study space
              that helps students stay focused and achieve their goals.
            </p>
          </div>

          <div className="bg-white shadow rounded-2xl p-8 text-center hover:-translate-y-1 transition">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Vision</h2>
            <p className="text-gray-600">
              To become the most trusted and preferred study library for students
              in Bhopal by delivering the best learning environment.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-blue-600">24×7</h3>
            <p className="text-gray-700 mt-1">Open Library</p>
          </div>
          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-blue-600">4+</h3>
            <p className="text-gray-700 mt-1">Study Halls</p>
          </div>
          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-blue-600">High</h3>
            <p className="text-gray-700 mt-1">Student Satisfaction</p>
          </div>
          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-blue-600">Affordable</h3>
            <p className="text-gray-700 mt-1">Membership Plans</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Visit Anantgyan Library Today
          </h2>
          <p className="text-gray-600 mb-5">
            Experience the most peaceful and disciplined study environment.
          </p>

          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
}