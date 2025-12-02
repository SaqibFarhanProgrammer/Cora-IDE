import React, { useContext } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import AI_navbar from "./AI_components/AI_navbar";
import AI_BG from "../assets/images/AI_BG.png/";
import Input_bar from "./AI_components/Input_Bar";
import { Context } from "./context_AI/Ai_Context";

function AI() {
  const { expand, messages } = useContext(Context);
  return (
    <div
      className={`AI h-screen ${
        expand ? "w-[40%]" : "w-[60%]"
      }  bg-[#0A0B0D]  fixed top-0 right-0 border-l border-gray-800 flex  flex-col justify-between`}
    >
      <AI_navbar />
      {messages.length === 0 ? (
        <>
          <img
            className="ai-image w-full h-screen absolute   z-10"
            src={AI_BG}
            alt=""
          />
          <div className="text z-20 h-[20vh] ">
            <h1 className="mx-auto text-center text-7xl pl-4">
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
              <p className="">

              {msg}
              </p>
            </div>
          ))}
        </div>
      )}
      <Input_bar />
    </div>
  );
}

export default AI;
