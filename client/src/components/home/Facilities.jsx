const facilities = [
  {
    title: "Silent Study Zone",
    desc: "Noise-free environment for deep focus.",
    img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
  },
  {
    title: "Comfortable Seating",
    desc: "Ergonomic chairs and spacious desks.",
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
  },
  {
    title: "Proper Lighting",
    desc: "Eye-friendly lighting for long hours.",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
  {
    title: "Clean & Hygienic",
    desc: "Well-maintained and sanitized space.",
    img: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6",
  },
];


export default function Facilities() {
  return (
   <section className="py-14 bg-white px-6">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Library Facilities
        </h2>
        <p className="mt-2 text-gray-600 text-sm max-w-xl">
          Carefully designed facilities to support long, focused study sessions.
        </p>
      </div>
    </div>

    {/* Facilities Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {facilities.map((item, i) => (
        <div
          key={i}
          className="group flex items-center gap-4 p-4 rounded-xl border border-gray-100
                     bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300"
        >
          {/* Image */}
          <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

  );
}
