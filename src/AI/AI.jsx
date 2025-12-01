import React from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import AI_navbar from "./AI_components/AI_navbar";
import AI_BG from "../assets/images/AI_BG.png/";
import Input_bar from "./AI_components/Input_Bar";

function AI() {
  return (
    <div className="AI h-screen w-[40%] bg-[#0A0B0D]  fixed top-0 right-0 border-l border-gray-800 flex  flex-col justify-between">
      <AI_navbar />
      <img
        className="ai-image w-full h-screen absolute z-10"
        src={AI_BG}
        alt=""
      />
      <div className="text z-20 h-[20vh] ">
        <h1 className="mx-auto text-center text-7xl pl-4">
          Build Somthing With AI
        </h1>
      </div>
      <Input_bar />
    </div>
  );
}

export default AI;
