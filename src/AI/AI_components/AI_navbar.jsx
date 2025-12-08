import React, { useContext } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaExpand } from "react-icons/fa";
import { BiExpandAlt } from "react-icons/bi";
import { AIContext } from "../context_AI/Ai_Context";

function AI_navbar() {
  const {
    expand,
    setexpand,
    setisAIOpen,

    isAIOpen,
  } = useContext(AIContext);

  return (
    <div className=" flex justify-between items-center z-50 p-4 border-b border-gray-800">
      <div className="flex z-40">
        <RiCloseLargeFill
          onClick={() => setisAIOpen(!isAIOpen)}
          className="text-2xl text-white z-40  cursor-pointer"
        />
        {expand ? (
          <FaExpand
            onClick={() => setexpand(!expand)}
            className="text-[23px] text-white cursor-pointer ml-4"
          />
        ) : (
          <BiExpandAlt
            onClick={() => setexpand(!expand)}
            className="text-[23px] text-white cursor-pointer ml-4"
          />
        )}
      </div>
      <h2 className='text-white text-lg font-semibold font:["Inter"] '>AI</h2>
    </div>
  );
}

export default AI_navbar;
