import React, { useContext } from "react";
import { Context } from "../context/context";

const Terminal = () => {
  const { output } = useContext(Context);

  return (
    <div className="w-full h-full bg-[#0a0b0d] flex flex-col border-t border-[#27272A]">
      {/* Header */}
      <div className="p-3 text-xs sm:text-sm text-zinc-400 font-mono flex items-center justify-between border-b border-[#27272A]">
        <span className="text-white ml-2">Output</span>
        <div className="flex gap-2 mr-2">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 text-sm sm:text-base lg:text-lg text-zinc-300 font-mono">
        {output.length === 0 ? (
          <div className="text-zinc-500 italic">No output yet...</div>
        ) : (
          output.map((line, index) => (
            <div
              key={index}
              className={`mb-1 sm:mb-2 ${
                line.toLowerCase().includes("error") ? "text-red-500 font-semibold" : ""
              }`}
            >
              {line}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Terminal;
