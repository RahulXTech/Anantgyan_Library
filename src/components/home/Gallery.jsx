const galleryImages = [
  {
    name: "Amit Sharma",
    exam: "SBI Clerk – 2023",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
  {
    name: "Neha Patel",
    exam: "SSC CGL – 2022",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
  },
  {
    name: "Rahul Singh",
    exam: "MP Govt Job – 2023",
    img: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9",
  },
  {
    name: "Pooja Verma",
    exam: "Banking PO – 2023",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    name: "Ankit Jain",
    exam: "SSC CHSL – 2022",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    name: "Sneha Gupta",
    exam: "MPPSC – 2023",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
  },
];

export default function Gallery() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Success Gallery 🎉
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Proud moments of our students who achieved their dreams while studying
            at Anantgyan Library.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-gray-50"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm">{item.exam}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="mt-10 text-center text-sm text-gray-500">
          📸 Every success is celebrated at Anantgyan Library — your success could be next.
        </p>

      </div>
    </section>
  );
}
