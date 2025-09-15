import React, { useContext, useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Context } from "../../context/context";

const CodefileCard = ({ title, code, extention, key }) => {
  return (
    <div
      key={key}
      className="bg-[#0d0d0f] p-5 border border-zinc-800 rounded-xl  
                 shadow-md hover:shadow-lg hover:border-zinc-600 
                 transition-all duration-200 w-full h-auto flex flex-col"
    >
      {/* File Info */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg text-white">{title}</h3>
          <p className="text-xs text-zinc-400">File</p>
        </div>
        <div className="flex gap-3 text-zinc-400">
          <button className="hover:text-green-400 transition"></button>
          <button className="hover:text-red-500 transition">
            <FaTrash />
          </button>
        </div>
      </div>

      {/* Code Preview */}
      <div className="bg-[#151516] codecard rounded-lg p-3 text-sm font-mono text-zinc-200">
        <pre className="whitespace-pre-wrap break-words">{code}</pre>
      </div>
    </div>
  );
};

export default CodefileCard;
