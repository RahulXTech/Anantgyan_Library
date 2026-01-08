const testimonials = [
  {
    name: "Aman Sharma",
    exam: "UPSC Aspirant",
    feedback:
      "The calm and disciplined environment helped me maintain long, focused study hours every day.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Neha Verma",
    exam: "SSC Student",
    feedback:
      "Very peaceful library with comfortable seating. Perfect for serious preparation.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Singh",
    exam: "College Student",
    feedback:
      "Clean, quiet, and disciplined atmosphere. It really improves productivity.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];



export default function Testimonials() {
  return (
   <section className="py-14 bg-white px-6">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="mb-10 max-w-2xl">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        Student Testimonials
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        Honest feedback from students who experienced focused and disciplined study.
      </p>
    </div>

    {/* Testimonials */}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((item, index) => (
        <div
          key={index}
          className="group bg-gray-50 border border-gray-100 rounded-xl p-5
                     hover:bg-white hover:shadow-md transition-all duration-300"
        >
          {/* Feedback */}
          <p className="text-sm text-gray-700 leading-relaxed line-clamp-4">
            “{item.feedback}”
          </p>

          {/* Footer */}
          <div className="mt-5 flex items-center justify-between">
            {/* Student Info */}
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500">
                  {item.exam}
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex text-yellow-400 text-sm">
              {Array(item.rating)
                .fill()
                .map((_, i) => (
                  <span key={i}>★</span>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

  );
}
