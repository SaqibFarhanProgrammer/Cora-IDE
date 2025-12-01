import React from "react";

export default function Input_bar() {
  return (
    <div className="w-full max-w-3xl mx-auto px-3 py-3 z-20">
      <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-[10px] shadow-lg p-3 flex items-center">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Write a message..."
            className="w-full bg-transparent text-white text-sm outline-none placeholder-white/50 py-3"
          />
        </div>

        <button className="p-2 rounded-xl hover:bg-white/10 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
