import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const Terminal = () => {
  const { output } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const skeletonColor = "#1f1e1e";

  return (
    <div className="w-full h-full flex flex-col border-t border-[#27272A] bg-[#0a0b0d]">
      
      <div className="p-3 flex items-center justify-between border-b border-[#27272A]">
        {loading ? (
          <Skeleton width={100} height={20} baseColor={skeletonColor} />
        ) : (
          <>
            <span className="text-white ml-2 text-xs sm:text-sm font-mono">Output</span>
            <div className="flex gap-2 mr-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            </div>
          </>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-3 sm:p-4 text-sm sm:text-base lg:text-lg font-mono text-zinc-300">
        {loading ? (
          Array.from({ length: 5 }).map((_, idx) => (
            <Skeleton
              key={idx}
              height={20}
              baseColor={skeletonColor}
              className="mb-2"
            />
          ))
        ) : output.length === 0 ? (
          <div className="text-zinc-500 italic">No output yet...</div>
        ) : (
          output.map((line, index) => (
            <div
              key={index}
              className={`mb-1 sm:mb-2 ${line.toLowerCase().includes("error") ? "text-red-500 font-semibold" : ""}`}
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
