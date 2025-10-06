import React, { Suspense, useContext } from "react";
import { Context } from "../context/context";
const Code = React.lazy(() => import("../Mycomponeents/Code"));
const Terminal = React.lazy(() => import("../Mycomponeents/Terminal"));
import Web from "./Web";

const Main = () => {
  const { switchcompiler } = useContext(Context);

  return (
    <div className="w-full h-full">
      {switchcompiler ? (
        <Suspense
          fallback={
            <div className="flex w-[100%] h-[100%] justify-center text-center text-2xl items-center  text-zinc-400">
            <h1>
                Loading Code Editor...
            </h1>
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
};

export default Main;
