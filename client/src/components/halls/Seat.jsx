export default function Seat({ number, occupied }) {
  return (
    <div
      title={`Seat ${number}`}
      className={`w-9 h-9 md:w-10 md:h-10 rounded-md
        flex items-center justify-center text-[10px] font-semibold
        cursor-pointer transition transform hover:scale-110
        ${
          occupied
            ? "bg-green-500 text-white"
            : "bg-red-500 text-white"
        }`}
    >
      {number}
    </div>
  );
}