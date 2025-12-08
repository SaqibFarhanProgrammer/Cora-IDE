import React, { useContext } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import AI_navbar from "./AI_components/AI_navbar";
import AI_BG from "../assets/images/AI_BG.png/";
import Input_bar from "./AI_components/Input_Bar";
import { AIContext } from "./context_AI/Ai_Context";

function AI() {
  const { expand, messages } = useContext(AIContext);

  return (
    <div
      className={`AI h-screen z-50 bg-[#0A0B0D] fixed top-0 right-0 border-l border-gray-800 
      flex flex-col justify-between

      ${
        expand
          ? "w-full sm:w-[90%] md:w-[60%] lg:w-[40%] xl:w-[35%]"
          : "w-full sm:w-[95%] md:w-[80%] lg:w-[60%] xl:w-[55%]"
      }
      `}
    >
      <div className="z-40">
        <AI_navbar />
      </div>

      {messages.length === 0 ? (
        <>
          <div
            className="
              text z-20 h-[20vh] relative 
              px-4 
              sm:h-[25vh]
            "
          >
            <h1
              className="
                mx-auto text-center relative 
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                pl-2 sm:pl-4
              "
            >
              Build Somthing With AI
            </h1>

            <h1
              className="
                mx-auto blur-[20px] opacity-20 absolute top-0 left-0 
                text-center 
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                pl-2 sm:pl-4
              "
            >
              Build Somthing With AI
            </h1>
          </div>
        </>
      ) : (
        <div
          className="
            chating 
            h-[70vh] sm:h-[75vh] md:h-[80vh] 
            overflow-y-auto 
            p-2 sm:p-4 
            space-y-3 sm:space-y-4
          "
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className="
                py-2 px-3 sm:px-4 
                bg-zinc-900 text-gray-200 
                rounded-xl shadow-sm leading-relaxed
              "
            >
              <p>{msg}</p>
            </div>
          ))}
        </div>
      )}

      <div className="w-full px-2 sm:px-4">
        <Input_bar />
      </div>
    </div>
  );
}

export default AI;
