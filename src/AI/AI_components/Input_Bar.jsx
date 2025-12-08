import React, { useContext, useState } from "react";
import { AIContext } from "../context_AI/Ai_Context";

export default function Input_bar() {
  const { setmessages } = useContext(AIContext);
  const [prompt, setprompt] = useState("");

  const sendMessage = () => {
    if (!prompt.trim()) return;
    setmessages((prev) => [...prev, prompt]);
    setprompt("");
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-3 py-3">
      <div className="flex items-center bg-black/40 border border-white/10 backdrop-blur-xl rounded-xl p-3 shadow-lg">
        <input
           onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          value={prompt}
          onChange={(e) => setprompt(e.target.value)}
          placeholder="Write a message..."
          className="flex-1 bg-transparent text-white text-sm outline-none placeholder-white/40 py-2"
        />

        <button
       
          onClick={sendMessage}
          className="p-2 rounded-lg hover:bg-white/10 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
