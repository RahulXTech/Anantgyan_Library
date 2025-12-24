import React from "react";

export default function Legend() {
  return (
    <div className="flex justify-center gap-6 mt-6 text-sm">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-green-500 rounded"></span>
        Occupied
      </div>
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-red-500 rounded"></span>
        Available
      </div>
    </div>
  );
}
