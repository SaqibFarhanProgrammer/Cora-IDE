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
      className={`AI h-screen ${
        expand ? "w-[40%]" : "w-[60%]"
      }  bg-[#0A0B0D]  fixed top-0 right-0 border-l border-gray-800 flex  flex-col justify-between`}
    >
      <div className="z-40"> 

      <AI_navbar />
      </div>
      {messages.length === 0 ? (
        <>
          <div className="text z-20 h-[20vh] relative ">
            <h1 className="mx-auto text-center relative text-7xl pl-4">
              Build Somthing With AI
            </h1>
            <h1 className="mx-auto blur-[20px] opacity-20 absolute top-0 left-0 text-center text-7xl pl-4">
              Build Somthing With AI
            </h1>
          </div>
        </>
      ) : (
        <div className="chating h-[80vh] overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className=" py-2 px-4 bg-zinc-900 text-gray-200 rounded-xl shadow-sm  leading-relaxed"
            >
              <p className="">{msg}</p>
            </div>
          ))}
        </div>
      )}
      <Input_bar />
    </div>
  );
}

export default AI;
