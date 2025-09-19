import React, { useContext } from "react";
import { Context } from "../context/context";

const Terminal = () => {
  const { output } = useContext(Context);

  return (
    <div className="w-[100%] bg-[#0a0b0d] h-[100%] flex flex-col  border-[#27272A]">
      <div className=" p-3.5 text-sm text-zinc-400 font-mono flex items-center justify-between border-b border-[#27272A]">
        <span className="text-white ml-2">Output</span>
        <div className="flex gap-2 mr-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      <div className=" p-4 text-2xl overflow-y-auto text-zinc-300 font-mono ">
        {output.map((line, index) => (
          <div
            key={index}
            className={`mb-2 ${line.includes("Error") ? "text-red-600" : ""}`}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
