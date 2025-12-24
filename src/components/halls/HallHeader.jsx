import React from "react";

export default function HallHeader({ title }) {
  return (
    <>
      <h2 className="text-xl font-semibold text-center text-gray-800">
        {title}
      </h2>

      <div className="relative mt-4 mb-8">
        <div className="bg-gray-800 text-white text-center py-1 text-sm rounded-md tracking-widest">
          STUDY DESK
        </div>
        <div className="absolute left-1/2 -bottom-2 w-40 h-2 bg-gray-300 rounded-full -translate-x-1/2 blur-sm"></div>
      </div>
    </>
  );
}