const info = [
  "🕒 24×7 Study Environment",
  "❄️ AC & Non-AC Seating",
  "📶 High-Speed WiFi",
  "🔌 Power Backup",
  "🔇 Silent Study Zone",
];

export default function InfoBar() {
  return (
    <section className="bg-white shadow-sm py-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-700">
        {info.map((item, i) => (
          <span key={i} className="px-4 py-2 bg-gray-100 rounded-full">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
