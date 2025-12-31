import { Clock, MapPin, Phone, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white min-h-screen">

      {/* HERO */}
      {/* HERO SECTION */}
<section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />

  <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
    <span className="inline-block mb-5 px-4 py-1 rounded-full text-sm bg-white/10 backdrop-blur">
      24×7 Peaceful Study Library
    </span>

    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
      A Perfect Place for <br />
      <span className="text-blue-300">Focused & Disciplined Study</span>
    </h1>

    <p className="max-w-3xl mx-auto text-lg text-slate-200 mb-10">
      Anantgyan Library provides a calm, structured, and student-friendly
      environment designed for long study hours and serious preparation.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="/contact"
        className="px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg"
      >
        Join Now
      </a>

      <a
        href="#pricing"
        className="px-10 py-4 rounded-full border border-white/30 hover:bg-white/10 transition font-semibold"
      >
        View Plans
      </a>
    </div>
  </div>
</section>


      {/* INFO CARDS */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <InfoCard
          icon={<MapPin />}
          title="Our Location"
          text="15-B Sachchidanand Nagar, Above Indian Bank, Narela Shankari, Bhopal (Indrapuri–Ayodhya Bypass)"
        />
        <InfoCard
          icon={<Clock />}
          title="Working Hours"
          text="Open 24 Hours × 7 Days"
        />
        <InfoCard
          icon={<Phone />}
          title="Contact"
          text="9826282020 / 7999231253"
        />
      </div>

      {/* ABOUT */}
      <div className="max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About the Library
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Anantgyan Library is designed for students who need complete focus,
            discipline, and long study hours. Our calm environment helps aspirants
            prepare for competitive exams without distractions.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            We offer flexible time slots, reserved seating, and affordable plans
            so every student can study comfortably according to their schedule.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Why Choose Us
          </h3>
          <ul className="space-y-3 text-gray-700">
            {[
              "Peaceful & disciplined atmosphere",
              "Flexible time slots",
              "Reserved seating option",
              "Affordable monthly fees",
              "Ideal for long study hours",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle className="text-blue-600 mt-1" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* PRICING */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Membership Plans
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <PriceCard title="8 Hours (Morning)" price="₹500 / month" desc="7:00 AM – 3:00 PM" />
            <PriceCard title="8 Hours (Evening)" price="₹500 / month" desc="3:00 PM – 11:00 PM" />
            <PriceCard title="16 Hours" price="₹800 / month" desc="7:00 AM – 11:00 PM" />
            <PriceCard title="24 Hours" price="₹1600 / month" desc="Full Day Access" />
          </div>

          <p className="text-center text-gray-600 mt-8">
            One-time Registration Fee: <b>₹200</b>
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Start Your Focused Study Journey
        </h2>
        <p className="text-gray-600 mb-6">
          Join Anantgyan Library and experience a truly disciplined study environment.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
        >
          Contact Now
        </a>
      </div>

    </section>
  );
}

/* Reusable Components */

function InfoCard({ icon, title, text }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 text-center hover:-translate-y-1 transition">
      <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-lg text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}

function PriceCard({ title, price, desc }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-blue-600 font-bold text-2xl mb-1">{price}</p>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  );
}
