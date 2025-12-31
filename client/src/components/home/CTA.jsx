export default function CTA() {
  return (
    <section className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Start Your Focused Study Journey
          <span className="block mt-2 text-blue-600">
            at Anantgyan Library
          </span>
        </h2>
        
        {/* Subheading */}
        <p className="mt-5 max-w-2xl mx-auto text-gray-600 text-lg">
          A calm, disciplined, and distraction-free environment designed for 
          serious students and competitive exam aspirants in Bhopal.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">
            📍 Visit Library Today
          </button>

          <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
            📞 Contact Us
          </button>

        </div>

        {/* Trust line */}
        <p className="mt-8 text-sm text-gray-500">
          📍 15-B, Sachchidanand Nagar, Bhopal (M.P.) • 24×7 Study Environment
        </p>

      </div>
    </section>
  );
}
