import React, { Suspense, useContext } from "react";
import { Context } from "../context/context";
const Code = React.lazy(() => import("../Mycomponeents/Code"));
const Terminal = React.lazy(() => import("../Mycomponeents/Terminal"));
import { FiFile, FiWifiOff } from "react-icons/fi";

import Web from "./Web";

const Main = () => {
  const { switchcompiler } = useContext(Context);
  if (navigator.onLine) {
    return (
      <div className="w-full h-full">
        {switchcompiler ? (
          <Suspense
            fallback={
              <div className="flex w-[100%] h-[100%] justify-center text-center text-2xl items-center  text-zinc-400">
                <h1>Loading Code Editor...</h1>
              </div>
            }
          >
            <div className="flex flex-col md:flex-row w-full h-full">
              <div className="flex-1 min-h-[50%] md:min-h-0 border-r border-[#27272A]">
                <Code />
              </div>
              <div className="h-[40vh] md:h-auto md:w-[40%] lg:w-[30%] border-t md:border-t-0 md:border-l border-[#27272A]">
                <Terminal />
              </div>
            </div>
          </Suspense>
        ) : (
          <Web />
        )}
      </div>
    );
  } else {
    return (
         <div className="w-full h-[100%] bg-[#0a0b0d] flex flex-col items-center justify-center text-zinc-400 px-4 py-10">
           <div className="flex flex-col items-center gap-2 text-center max-w-xs sm:max-w-sm md:max-w-md">
             {/* Icon Container */}
             <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-zinc-900 flex items-center justify-center shadow-lg border border-zinc-800">
               <FiWifiOff size={38} className="text-red-400 animate-pulse" />
             </div>
     
             {/* Heading */}
             <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-wide ">
               You’re Offline
             </h1>
     
             {/* Subtext */}
             <p className="text-sm sm:text-base text-zinc-500 leading-relaxed px-2">
               Please check your internet connection and try again.
             </p>
     
             {/* Retry Button */}
             <button
               onClick={() => window.location.reload()}
               className=" w-full mt-2 sm:w-auto px-6 py-2.5 rounded-xl bg-zinc-700 text-white font-semibold 
                      hover:bg-zinc-600 active:scale-95 transition-all duration-300 shadow-md"
             >
               Retry
             </button>
           </div>
         </div>
    );
  }
};

export default Main;
