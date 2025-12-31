const students = [
  {
    name: "Amit Sharma",
    exam: "SBI Clerk",
    year: "2023",
    background: "Banking Aspirant",
    message:
      "Anantgyan Library provided the discipline and calm environment I needed to stay consistent.",
  },
  {
    name: "Neha Patel",
    exam: "SSC CGL",
    year: "2022",
    background: "Graduate Student",
    message:
      "The silent atmosphere and long study hours helped me crack SSC in my first attempt.",
  },
  {
    name: "Rahul Singh",
    exam: "MP Govt Job",
    year: "2023",
    background: "MPPSC Aspirant",
    message:
      "Best place in Bhopal for serious preparation. Clean, peaceful, and motivating.",
  },
];

export default function SuccessStories() {
  return (
    <section className="bg-green-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Students, Our Pride 🎓
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Real success stories from students who studied consistently at 
            Anantgyan Library and achieved their career goals.
          </p>
        </div>

        {/* Student Cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {students.map((student, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col"
            >
              {/* Profile Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                  {student.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {student.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {student.background}
                  </p>
                </div>
              </div>

              {/* Success Info */}
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  Selected in
                </p>
                <p className="font-semibold text-green-700">
                  {student.exam} ({student.year})
                </p>
              </div>

              {/* Message */}
              <p className="text-gray-600 text-sm italic flex-grow">
                “{student.message}”
              </p>

              {/* Badge */}
              <div className="mt-6">
                <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                  ✔ Verified Student
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
