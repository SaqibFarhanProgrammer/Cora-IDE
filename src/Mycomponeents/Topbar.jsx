import React, { useContext, useState, useEffect } from "react";
import { FaPlay, FaSave } from "react-icons/fa";
import { MdContentCopy, MdOutlineFileDownload, MdOutlineClose } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Context } from "../context/context";
import { Input } from "@base-ui-components/react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const Topbar = () => {
  const [selectfilename, setselectfilename] = useState("Untitled.js");
  const [selectfileisopen, setselectfileisopen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { funczoomin, funczoomout, outputformconsole, Copy, copied, Copiednotification, setNewfileisopen, compiledCode } = useContext(Context);
  const [msg] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

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

  const buttons = [
    { label: "Zoom-Out", icon: <FiMinus size={14} />, action: funczoomout },
    { label: "Zoom-In", icon: <FiPlus size={14} />, action: funczoomin },
    { label: copied ? "Copied" : "Copy", icon: <MdContentCopy size={14} />, action: Copy },
    { label: "Download File", icon: <MdOutlineFileDownload size={14} />, action: () => setselectfileisopen(true) },
    { label: "Save", icon: <FaSave size={14} />, action: () => setNewfileisopen(true) },
    { label: "Run", icon: <FaPlay size={14} />, action: outputformconsole, gradient: true },
  ];

  return (
    <header className="w-full z-20 bg-[#0a0b0d] border-b border-[#27272A] shadow-sm text-white px-2 sm:px-4">
      {selectfileisopen && (
        <div className="fixed inset-0 z-20 flex justify-center items-center backdrop-blur-[20px] p-4">
          <MdOutlineClose
            onClick={() => setselectfileisopen(false)}
            className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
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
          {loading
            ? buttons.map((_, index) => (
                <Skeleton
                  key={index}
                  width={90}
                  height={32}
                  baseColor="#27272A"
                  highlightColor="#3f3f46"
                  className="rounded"
                />
              ))
            : buttons.map((btn, index) => (
                <button
                  key={index}
                  onClick={btn.action}
                  className={`flex items-center gap-1 sm:gap-2 px-2 py-1 rounded text-xs sm:text-sm transition-all duration-300 border border-zinc-600 ${
                    btn.gradient
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500"
                      : "bg-zinc-900 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                  }`}
                >
                  {btn.icon}
                  <span className="hidden sm:inline">{btn.label}</span>
                </button>
              ))}
        </nav>
      </div>

      {msg && <p className="text-xs text-zinc-400 px-4 py-1">{msg}</p>}
    </header>
  );
};

export default Topbar;