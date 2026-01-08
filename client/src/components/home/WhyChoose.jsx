const reasons = [
  {
    title: "Peaceful Study Environment",
    desc: "A silent and disciplined atmosphere that helps students maintain deep focus for long study hours.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
  {
    title: "Comfortable Seating & Lighting",
    desc: "Ergonomic seating and proper lighting ensure comfort and reduce fatigue during extended study sessions.",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
  },
  {
    title: "Dedicated Study Space",
    desc: "Individual desks and organized seating provide a personal and distraction-free study experience.",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
  },
];


export default function WhyChoose() {
  return (
    <section className="py-16 bg-gray-50 px-6">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Why Choose <span className="text-blue-600">Anantgyan Library</span>
      </h2>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
        A focused and disciplined study environment designed for serious learners.
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {reasons.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition"
        >
          {/* Image */}
          <div className="h-40 overflow-hidden rounded-t-xl">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Compact Stats Section */}
    <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-xl border border-gray-100 p-6 text-center shadow-sm">
      {[
        { value: "12+", label: "Hours Daily" },
        { value: "100+", label: "Students" },
        { value: "Silent", label: "Ambience" },
        { value: "High", label: "Focus Level" },
      ].map((stat, i) => (
        <div key={i}>
          <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
          <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-10 text-center">
      <button className="px-8 py-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
        Visit the Library
      </button>
    </div>

  </div>
</section>


  );
}
