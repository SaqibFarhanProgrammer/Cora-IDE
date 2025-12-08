import React, { useContext } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaExpand } from "react-icons/fa";
import { BiExpandAlt } from "react-icons/bi";
import { AIContext } from "../context_AI/Ai_Context";

function AI_navbar() {
  const { expand, setexpand, isAIOpen, setisAIOpen } = useContext(AIContext);

  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="flex items-center space-x-4">
        <RiCloseLargeFill
          onClick={() => setisAIOpen(!isAIOpen)}
          className="text-white text-2xl cursor-pointer hover:text-white/70 transition"
        />

        {window.innerWidth > 600 ? (
          expand ? (
            <FaExpand
              onClick={() => setexpand(!expand)}
              className="text-white text-[22px] cursor-pointer hover:text-white/70 transition"
            />
          ) : (
            <BiExpandAlt
              onClick={() => setexpand(!expand)}
              className="text-white text-[22px] cursor-pointer hover:text-white/70 transition"
            />
          )
        ) : null}
      </div>

      <h2 className="text-white text-lg font-semibold tracking-wide">AI</h2>
    </div>
  );
}

export default AI_navbar;
