const reasons = [
  {
    icon: "📚",
    title: "Disciplined Study Environment",
    desc: "Strict silence and focused atmosphere designed for serious exam aspirants and long study hours.",
  },
  {
    icon: "🪑",
    title: "Ergonomic Seating",
    desc: "Comfortable chairs and spacious desks to reduce fatigue during extended study sessions.",
  },
  {
    icon: "📶",
    title: "Uninterrupted WiFi & Power",
    desc: "High-speed internet with full power backup ensures zero interruptions while studying.",
  },
  {
    icon: "❄️",
    title: "AC & Non-AC Halls",
    desc: "Multiple halls with AC and Non-AC options so students can choose what suits them best.",
  },
  {
    icon: "🔇",
    title: "Silent & Peaceful Space",
    desc: "Noise-free environment that helps improve concentration, consistency, and productivity.",
  },
  {
    icon: "💰",
    title: "Affordable Study Plans",
    desc: "Flexible monthly plans designed especially for students and competitive exam aspirants.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose Anantgyan Library?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A thoughtfully designed study environment in Bhopal that supports
            focus, discipline, and academic success.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-2">
            A Trusted Study Space in Bhopal
          </h3>
          <p className="text-sm md:text-base opacity-90">
            Located at <strong>15-B, Sachchidanand Nagar, Bhopal (M.P.)</strong>,
            Anantgyan Library is built for students who value focus, discipline,
            and results.
          </p>
        </div>

      </div>
    </section>
  );
}
