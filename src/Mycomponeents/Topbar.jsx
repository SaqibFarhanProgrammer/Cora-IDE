import React, { useContext, useState } from "react";
import { FaPlay, FaSave } from "react-icons/fa";
import { MdContentCopy, MdOutlineFileDownload, MdOutlineClose } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Context } from "../context/context";
import { Input } from "@base-ui-components/react";

const Topbar = () => {
  const [selectfilename, setselectfilename] = useState("Untitled.js");
  const [selectfileisopen, setselectfileisopen] = useState(false);
  const { funczoomin, funczoomout, outputformconsole, Copy, copied, Copiednotification, setNewfileisopen, compiledCode } = useContext(Context);
  const [msg] = useState("");

  function download(filename) {
    const blob = new Blob([compiledCode], { type: "text/javascript;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.js`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <header className="w-full z-20 bg-[#0a0b0d] border-b border-[#27272A] shadow-sm text-white px-2 sm:px-4">
      {selectfileisopen && (
        <div className="fixed inset-0 z-20 flex justify-center items-center backdrop-blur-[20px] p-4">
          <MdOutlineClose
            onClick={() => setselectfileisopen(false)}
            className="absolute top-4 right-4 text-white text-3xl max-[521px]: cursor-pointer"
          />
          {compiledCode === "" ? (
            <p className="text-gray-500 italic text-center">No code available at the moment.</p>
          ) : (
            <div className="bg-black p-6 rounded-2xl shadow-xl w-full max-w-sm flex flex-col gap-4 text-white">
              <Input
                className="p-2 w-full"
                placeholder="Enter filename"
                value={selectfilename}
                onChange={(e) => setselectfilename(e.target.value)}
              />
              <button
                onClick={() => download(selectfilename)}
                className="bg-white text-black py-2 rounded hover:bg-gray-200 transition"
              >
                Download
              </button>
            </div>
          )}
        </div>
      )}

      <div className={`fixed left-1/2 -translate-x-1/2 flex items-center gap-2 py-2 px-4 bg-zinc-800 rounded-md transition-all duration-300 z-10 ${Copiednotification ? "top-2" : "-top-10"}`}>
        Copied <IoCheckmarkDoneCircle />
      </div>

      <div className="h-12 flex items-center justify-between flex-wrap gap-2">
        <div className="flex gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        <nav className="flex flex-wrap gap-2">
          <button onClick={funczoomout} className="flex items-center gap-1 sm:gap-2 bg-zinc-900 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white px-2 py-1 rounded text-xs sm:text-sm">
            <span className="hidden sm:inline">Zoom-Out</span>
            <FiMinus size={14} />
          </button>

          <button onClick={funczoomin} className="flex items-center gap-1 sm:gap-2 bg-zinc-900 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white px-2 py-1 rounded text-xs sm:text-sm">
            <span className="hidden sm:inline">Zoom-In</span>
            <FiPlus size={14} />
          </button>

          <button onClick={Copy} className="flex items-center gap-1 sm:gap-2 bg-zinc-900 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white px-2 py-1 rounded text-xs sm:text-sm">
            <MdContentCopy size={14} />
            <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
          </button>

          <button onClick={() => setselectfileisopen(true)} className="flex items-center gap-1 sm:gap-2 bg-zinc-900 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white px-2 py-1 rounded text-xs sm:text-sm">
            <MdOutlineFileDownload size={14} />
            <span className="hidden sm:inline">Download File</span>
          </button>

          <button onClick={() => setNewfileisopen(true)} className="flex items-center gap-1 sm:gap-2 bg-zinc-900 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white px-2 py-1 rounded text-xs sm:text-sm">
            <FaSave size={14} />
            <span className="hidden sm:inline">Save</span>
          </button>

          <button onClick={outputformconsole} className="flex items-center gap-1 sm:gap-2 bg-purple-600 text-white hover:bg-purple-500 px-2 py-1 rounded text-xs sm:text-sm">
            <FaPlay size={14} />
            <span className="hidden sm:inline">Run</span>
          </button>
        </nav>
      </div>

      {msg && <p className="text-xs text-zinc-400 px-4 py-1">{msg}</p>}
    </header>
  );
};

export default Topbar;
