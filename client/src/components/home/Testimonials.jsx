const testimonials = [
  {
    name: "Rakesh Verma",
    exam: "MPPSC Aspirant",
    feedback:
      "Anantgyan Library helped me stay consistent and focused. The silent environment and long study hours made a huge difference.",
    rating: 5,
  },
  {
    name: "Pooja Sharma",
    exam: "SSC CGL Aspirant",
    feedback:
      "Best library in Bhopal for serious students. Clean desks, disciplined atmosphere, and supportive management.",
    rating: 5,
  },
  {
    name: "Ankit Jain",
    exam: "Banking Aspirant",
    feedback:
      "Peaceful environment with uninterrupted power and WiFi. Highly recommended for competitive exam preparation.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Students Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Honest feedback from students who experienced focused and disciplined study at Anantgyan Library.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="text-blue-600 text-4xl mb-4">“</div>

              {/* Feedback */}
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {item.feedback}
              </p>

              {/* Rating */}
              <div className="mt-4 flex text-yellow-400">
                {Array(item.rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
              </div>
              {/* Student Info */}
              <div className="mt-6 flex items-center gap-3 border-t pt-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {item.exam}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
