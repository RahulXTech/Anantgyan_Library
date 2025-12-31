const facilities = [
  {
    title: "AC / Non-AC Study Rooms",
    desc: "Well-ventilated, calm, and comfortable study halls for long focused hours.",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
  {
    title: "Individual Study Desks",
    desc: "Dedicated desks designed for serious and distraction-free preparation.",
    img: "https://images.unsplash.com/photo-1584697964154-0d5c0b2e69b1",
  },
  {
    title: "CCTV Security",
    desc: "24×7 CCTV surveillance ensuring safety and discipline inside the library.",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
  },
  {
    title: "Clean Drinking Water",
    desc: "Purified drinking water available for all students throughout the day.",
    img: "https://images.unsplash.com/photo-1558640479-8237e2a07f5c",
  },
  {
    title: "Washroom Facilities",
    desc: "Clean and hygienic washrooms maintained regularly for students.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
  },
  {
    title: "eBook & Digital Resources",
    desc: "Access to useful eBooks, PDFs, and digital study materials for exams.",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
];

export default function Facilities() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Library Facilities
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Everything you need for a disciplined, comfortable, and productive study experience.
          </p>
        </div>

        {/* Facility Cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {facilities.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600">
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
