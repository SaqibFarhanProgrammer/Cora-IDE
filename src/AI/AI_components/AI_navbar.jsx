import React, { useContext } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaExpand } from "react-icons/fa";
import { BiExpandAlt } from "react-icons/bi";
import { Context } from "../context_AI/Ai_Context";

function AI_navbar() {
  const { expand, setexpand } = useContext(Context);

  return (
    <div className=" flex justify-between items-center z-20 p-4 border-b border-gray-800">
      <div className="flex">
        <RiCloseLargeFill className="text-2xl text-white cursor-pointer" />
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
