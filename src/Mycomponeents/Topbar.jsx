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
    Copiednotificatio,
    setNewfileisopen,
  } = useContext(Context);

  const [msg, setMsg] = useState("");

  return (
    <div className="w-[55vw] text-white border-b bg-[#0a0b0d] border-[#27272A] shadow-sm px-4">
      <div
        className={`copied-notigication left-[45%] ${
          Copiednotificatio ? "top-[2%]" : "top-[-10%]"
        } flex items-center fixed py-2 px-7 gap-2 bg-zinc-800 z-10 justify-between rounded-md transition-all duration-300`}
      >
        Copied <IoCheckmarkDoneCircle />
      </div>
      <div className="h-12 px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="options flex gap-2">

          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-3 py-[.2vw] rounded-md">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt=""
              className="h-3 w-3"
            />
            <span className="text-sm">Javascript</span>
          </div>
            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-3 py-[.2vw] rounded-md">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt=""
                className="h-3 w-3"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt=""
                className="h-3 w-3"
              />
                     <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt=""
              className="h-3 w-3"
            />
              <span className="text-sm">Web</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={funczoomout}
            className="topbarbtns btn btn-xs bg-zinc-900 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white gap-2"
          >
            Zoom-Out <FiMinus size={14} />
          </button>
          <button
            onClick={funczoomin}
            className="btn btn-xs topbarbtns bg-zinc-900 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white gap-2"
          >
            Zoom-In <FiPlus size={14} />
          </button>
          <button
            onClick={Copy}
            className="btn btn-xs topbarbtns bg-zinc-900 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white gap-2"
          >
            <MdContentCopy size={14} />
            {copied ? "Copied" : "Copy"}
          </button>
          <button
            onClick={() => setNewfileisopen(true)}
            className="btn btn-xs topbarbtns bg-zinc-900 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white gap-2"
          >
            <FaSave size={14} /> Save
          </button>
          <button
            onClick={outputformconsole}
            className="btn btn-xs topbarbtns bg-green-600 border-none text-white hover:bg-green-500 shadow-md gap-2"
          >
            <FaPlay size={14} /> Run
          </button>
        </div>
      </div>
      {msg && <div className="text-xs text-zinc-400 px-4 py-1">{msg}</div>}
    </div>
  );
};

export default Topbar;
