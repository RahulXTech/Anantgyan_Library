export default function Contact() {
  return (
    <section className="bg-gray-50 min-h-screen py-14 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Contact Anantgyan Library
          </h1>
          <p className="text-gray-600 mt-3">
            Reach out to us for admissions, membership, seat availability, or queries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Get In Touch */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Get in Touch
            </h2>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl text-xl">
                  📍
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Address
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    15-B Sachchidanand Nagar, <br />
                    Above Indian Bank Narela Shankari, Bhopal <br />
                    (Indrapuri – Ayodhya Bypass 80 Ft Road)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 text-green-600 flex items-center justify-center rounded-xl text-xl">
                  📞
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Contact Numbers
                  </h3>
                  <p className="text-gray-600">
                   +91 9826282020 <br />
                   +91 7999231253
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 text-orange-600 flex items-center justify-center rounded-xl text-xl">
                  🕒
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Working Hours
                  </h3>
                  <p className="text-gray-600">
                    24 Hours · 7 Days Open
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl text-blue-700 text-sm">
              We provide a peaceful, disciplined, and focused study environment.
              Your success is our priority.
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Send Us a Message
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-blue-300"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-blue-300"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-blue-300"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

        {/* Membership Fee Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Membership Fee Details
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="font-semibold text-gray-800 mb-2">7:00 AM – 3:00 PM</h3>
              <p className="text-blue-600 font-bold text-xl">₹500 / Month</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="font-semibold text-gray-800 mb-2">3:00 PM – 11:00 PM</h3>
              <p className="text-blue-600 font-bold text-xl">₹500 / Month</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="font-semibold text-gray-800 mb-2">7:00 AM – 11:00 PM</h3>
              <p className="text-blue-600 font-bold text-xl">₹800 / Month</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="font-semibold text-gray-800 mb-2">24 Hours</h3>
              <p className="text-blue-600 font-bold text-xl">₹1600 / Month</p>
            </div>
          </div>

          <p className="mt-4 text-gray-600">
            One-time Admission Fee: <strong>₹200</strong>
          </p>
        </div>

        {/* Map */}
        <div className="mt-14">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Find Us on Map
          </h2>

          <div className="w-full h-72 rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14083.31878191099!2d77.45490607150237!3d23.263185783801433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69feabf9c22f%3A0xffe5dca0642ccf3c!2sAnantgyan%20Library!5e0!3m2!1sen!2sin!4v1703511122333"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}