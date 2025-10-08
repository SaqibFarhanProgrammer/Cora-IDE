import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { htmlcode, csscode } from "./semplecode";

// Lazy load Monaco Editor
const Editor = lazy(() => import("@monaco-editor/react"));

export default function CodePenWithMonaco() {
  const [html, setHtml] = useState(htmlcode);
  const [css, setCss] = useState(csscode);
  const [js, setJs] = useState(`function showAlert() {
  alert("CORA IDE is your modern, web-based coding companion!");
}`);
  const [srcDoc, setSrcDoc] = useState("");
  const [activeTab, setActiveTab] = useState("html");
  const timeoutRef = useRef(null);

  const buildSrcDoc = (h, c, j) => `
    ${h}
    <style>${c}</style>
    <script>${j}</script>
  `;

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setSrcDoc(buildSrcDoc(html, css, js));
    }, 500);
    return () => clearTimeout(timeoutRef.current);
  }, [html, css, js]);

  function handleEditorWillMount(monaco) {
    monaco.editor.defineTheme("my-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#0a0b0d",
        "editor.foreground": "#f4f4f5",
        "editorCursor.foreground": "#22d3ee",
        "editor.lineHighlightBackground": "#27272a",
        "editorLineNumber.foreground": "#71717a",
        "editorLineNumber.activeForeground": "#f4f4f5",
      },
    });
  }

  return (
    <div className="flex flex-col w-full text-white bg-[#0B0B0C] min-h-screen p-2 sm:p-4">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-2 px-3 sm:px-6 md:px-10 mb-3">
        {["html", "css", "js"].map((lang) => (
          <button
            key={lang}
            onClick={() => setActiveTab(lang)}
            className={`flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md border text-sm font-medium transition-all duration-200 ${
              activeTab === lang
                ? "bg-[#18181B] border-[#3f3f46] text-zinc-400 shadow-md"
                : "bg-[#0A0A0A] border-[#27272A] text-zinc-300 hover:text-white hover:border-[#3f3f46]"
            }`}
          >
            <img
              src={
                lang === "html"
                  ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  : lang === "css"
                  ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              }
              alt={`${lang} icon`}
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
            <span className="uppercase hidden sm:inline">
              {lang === "js" ? "JavaScript" : lang}
            </span>
          </button>
        ))}
      </div>

      {/* Editor Section */}
      <div className="w-full flex flex-col md:flex-row gap-4 transition-all">
        <Suspense fallback={<div className="text-center w-full">Loading Editors...</div>}>
          {/* HTML */}
          <div
            className={`flex-1 rounded-md border border-[#27272A] overflow-hidden shadow-lg transition-all ${
              activeTab === "html" ? "block" : "hidden md:block"
            }`}
          >
            <Editor
              height="45vh"
              language="html"
              value={html}
              onChange={(v) => setHtml(v)}
              beforeMount={handleEditorWillMount}
              theme="my-dark"
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
              }}
            />
          </div>

          {/* CSS */}
          <div
            className={`flex-1 rounded-md border border-[#27272A] overflow-hidden shadow-lg transition-all ${
              activeTab === "css" ? "block" : "hidden md:block"
            }`}
          >
            <Editor
              height="45vh"
              language="css"
              value={css}
              onChange={(v) => setCss(v)}
              beforeMount={handleEditorWillMount}
              theme="my-dark"
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
              }}
            />
          </div>

          {/* JS */}
          <div
            className={`flex-1 rounded-md border border-[#27272A] overflow-hidden shadow-lg transition-all ${
              activeTab === "js" ? "block" : "hidden md:block"
            }`}
          >
            <Editor
              height="45vh"
              language="javascript"
              value={js}
              onChange={(v) => setJs(v)}
              beforeMount={handleEditorWillMount}
              theme="my-dark"
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
              }}
            />
          </div>
        </Suspense>
      </div>

      {/* Live Preview */}
      <div className="border  border-[#2b2b2b] rounded-lg mt-6 overflow-hidden bg-white shadow-lg">
        <div className="bg-[#18181B] text-zinc-300 text-sm px-4 py-2 border-b border-[#27272A] flex justify-between items-center">
          <span>Live Preview</span>
          <span className="text-[10px] sm:text-xs opacity-70">
            Auto-updates every 0.5s
          </span>
        </div>
        <iframe
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          title="live-preview"
          className="w-full h-[60vh] sm:h-[80vh] md:h-[100vh] bg-white"
        />
      </div>
    </div>
  );
}
