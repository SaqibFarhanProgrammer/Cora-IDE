import React, { useContext, useState } from "react";
import { FaPlay, FaSave } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Context } from "../context/context";

const Topbar = () => {
  const {
    funczoomin,
    funczoomout,
    outputformconsole,
    Copy,
    copied,
    Copiednotification,
    setNewfileisopen,
  } = useContext(Context);

  const [msg] = useState("");

  return (
    <header className="w-full w-[55vw] bg-[#0a0b0d] border-b border-[#27272A] shadow-sm text-white px-2 sm:px-4">
      {/* ✅ Copy notification */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 py-2 px-4 sm:px-7 
          bg-zinc-800 rounded-md transition-all duration-300 
          ${Copiednotification ? "top-[2%]" : "top-[-10%]"}`}
      >
        Copied <IoCheckmarkDoneCircle />
      </div>

      {/* ✅ Toolbar */}
      <div className="h-12 flex items-center justify-between flex-wrap gap-2 px-2 sm:px-4">
        
        {/* 🔴🟡🟢 Mac-style traffic lights */}
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="flex gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </span>
        </div>

        {/* ✅ Action Buttons */}
        <nav className="flex flex-wrap items-center gap-2">
          <button
            onClick={funczoomout}
            className="topbarbtns btn btn-xs flex items-center gap-1 sm:gap-2 
              bg-zinc-900 border border-zinc-600 text-zinc-300 
              hover:bg-zinc-700 hover:text-white"
          >
            <span className="hidden sm:inline">Zoom-Out</span>
            <FiMinus size={14} />
          </button>

          <button
            onClick={funczoomin}
            className="topbarbtns btn btn-xs flex items-center gap-1 sm:gap-2 
              bg-zinc-900 border border-zinc-600 text-zinc-300 
              hover:bg-zinc-700 hover:text-white"
          >
            <span className="hidden sm:inline">Zoom-In</span>
            <FiPlus size={14} />
          </button>

          <button
            onClick={Copy}
            className="topbarbtns btn btn-xs flex items-center gap-1 sm:gap-2 
              bg-zinc-900 border border-zinc-600 text-zinc-300 
              hover:bg-zinc-700 hover:text-white"
          >
            <MdContentCopy size={14} />
            <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
          </button>

          <button
            onClick={() => setNewfileisopen(true)}
            className="topbarbtns btn btn-xs flex items-center gap-1 sm:gap-2 
              bg-zinc-900 border border-zinc-600 text-zinc-300 
              hover:bg-zinc-700 hover:text-white"
          >
            <FaSave size={14} />
            <span className="hidden sm:inline">Save</span>
          </button>

          <button
            onClick={outputformconsole}
            className="topbarbtns btn btn-xs flex items-center gap-1 sm:gap-2 
              bg-green-600 text-white hover:bg-green-500 border-none shadow-md"
          >
            <FaPlay size={14} />
            <span className="hidden sm:inline">Run</span>
          </button>
        </nav>
      </div>

      {/* ✅ Optional bottom message */}
      {msg && <p className="text-xs text-zinc-400 px-4 py-1">{msg}</p>}
    </header>
  );
};

export default Topbar;
