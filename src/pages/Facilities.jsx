export default function Facilities() {
  const facilities = [
    {
      icon: "⏰",
      title: "24x7 Open Library",
      desc: "Study anytime with complete flexibility, whether early morning or late night.",
    },
    {
      icon: "❄️",
      title: "AC & Non-AC Halls",
      desc: "Multiple study halls designed for comfort, including air-conditioned seating.",
    },
    {
      icon: "🪑",
      title: "Ergonomic Seating",
      desc: "Spacious desks and comfortable seating designed for long study hours.",
    },
    {
      icon: "📶",
      title: "High-Speed WiFi",
      desc: "Uninterrupted internet access for online learning and digital resources.",
    },
    {
      icon: "🔌",
      title: "Full Power Backup",
      desc: "Zero interruption study environment even during power cuts.",
    },
    {
      icon: "🔇",
      title: "Silent & Peaceful Space",
      desc: "Strict discipline rules to ensure calm and focused surroundings.",
    },
    {
      icon: "🎥",
      title: "Cinema Style Seat Monitoring",
      desc: "Seat availability visualized in attractive cinema-style arrangement.",
    },
    {
      icon: "👮",
      title: "Secure & Managed",
      desc: "Well-managed and disciplined environment for students’ safety and comfort.",
    },
  ];

  const plans = [
    { time: "7:00 AM – 3:00 PM (8 Hrs)", price: "₹500 / Month" },
    { time: "3:00 PM – 11:00 PM (8 Hrs)", price: "₹500 / Month" },
    { time: "7:00 AM – 11:00 PM (16 Hrs)", price: "₹800 / Month" },
    { time: "24 Hours", price: "₹1600 / Month" },
  ];

  return (
    <section className="bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <div className="py-16 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h1 className="text-4xl font-bold mb-3">Library Facilities</h1>
        <p className="max-w-3xl mx-auto text-gray-100 text-lg">
          Anantgyan Library provides a disciplined and comfortable study environment
          designed especially for students and competitive exam aspirants.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Facilities Grid */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          What We Offer
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((f, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {f.title}
              </h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Membership Plans */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Membership Plans
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {plans.map((p, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-all text-center border-t-4 border-blue-600"
              >
                <h3 className="font-semibold text-gray-800 mb-2">
                  {p.time}
                </h3>
                <p className="text-blue-600 font-bold text-xl">{p.price}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-4 text-gray-700">
            One-time Admission Fee: <strong>₹200</strong>
          </p>
        </div>

        {/* Environment Section */}
        <div className="mt-16 bg-white shadow rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Study Environment
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            We ensure a disciplined, noise-free, and focused study environment. Students
            must follow rules like timely fee submission, prior intimation for break or discontinuation,
            and seat reservation guidelines to maintain fairness and discipline.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Visit Anantgyan Library Today
          </h2>
          <p className="text-gray-600 mb-5">
            Your journey to success begins in a focused and inspiring study space.
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