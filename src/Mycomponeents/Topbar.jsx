import React, { useContext, useState } from "react";
import { FaPlay, FaSave } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Context } from "../context/context";

// ✅ Common function to download file (browser-based)
function downloadFile(filename, content, mime = "text/plain") {
  const blob = new Blob([content], { type: `${mime};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

const Topbar = () => {
  const {
    funczoomin,
    funczoomout,
    outputformconsole,
    Copy,
    copied,
    Copiednotificatio,
  } = useContext(Context);

  // ✅ States
  const [fileName, setFileName] = useState("untitled.js");
  const [code, setCode] = useState("// your code will come here...");
  const [msg, setMsg] = useState("");

  // ✅ Save function
  const handleSave = () => {
    if (!fileName) {
      setMsg("⚠️ Please enter a filename");
      return;
    }

    // MIME type guess based on extension
    const ext = fileName.split(".").pop().toLowerCase();
    const mime =
      ext === "json"
        ? "application/json"
        : ext === "html"
        ? "text/html"
        : ext === "css"
        ? "text/css"
        : ext === "js"
        ? "text/javascript"
        : "text/plain";

    downloadFile(fileName, code, mime);
    setMsg("✅ File download started — check your Downloads folder.");
  };

  return (
    <div className="w-[55vw] text-white border-b border-[#27272A] shadow-sm px-4">
      {/* ✅ Copy notification */}
      <div
        className={`copied-notigication left-[45%] ${
          Copiednotificatio ? "top-[2%]" : "top-[-10%]"
        } flex items-center fixed py-2 px-7 gap-2 bg-zinc-800 z-10 justify-between rounded-md transition-all duration-300`}
      >
        Copied <IoCheckmarkDoneCircle />
      </div>

      {/* ✅ Topbar Row */}
      <div className="h-12 px-4 flex items-center justify-between">
        {/* ---------------- Left Side ---------------- */}
        <div className="flex items-center gap-4">
          {/* Mac-style dots */}
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          {/* ✅ Language */}
          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-3 py-1.5 rounded-md">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt=""
              className="h-4 w-4"
            />
            <span className="text-sm">Javascript</span>
          </div>

          {/* ✅ Filename input */}
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="bg-zinc-900 border border-zinc-700 px-3 py-1.5 rounded-md text-sm outline-none"
          />
        </div>

        {/* ---------------- Right Side ---------------- */}
        <div className="flex items-center gap-2">
          <button
            onClick={funczoomout}
            className="btn btn-xs bg-zinc-900 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white gap-2"
          >
            Zoom-Out <FiMinus size={14} />
          </button>

          <button
            onClick={funczoomin}
            className="btn btn-xs bg-zinc-900 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white gap-2"
          >
            Zoom-In <FiPlus size={14} />
          </button>

          <button
            onClick={Copy}
            className="btn btn-xs bg-zinc-900 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white gap-2"
          >
            <MdContentCopy size={14} />
            {copied ? "Copied" : "Copy"}
          </button>

          {/* ✅ Save Button */}
          <button
            onClick={handleSave}
            className="btn btn-xs bg-zinc-900 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white gap-2"
          >
            <FaSave size={14} /> Save
          </button>

          <button
            onClick={outputformconsole}
            className="btn btn-xs bg-green-600 border-none text-white hover:bg-green-500 shadow-md gap-2"
          >
            <FaPlay size={14} /> Run
          </button>
        </div>
      </div>

      {/* ✅ Show save message */}
      {msg && <div className="text-xs text-zinc-400 px-4 py-1">{msg}</div>}
    </div>
  );
};

export default Topbar;
