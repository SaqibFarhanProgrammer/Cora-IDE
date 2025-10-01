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
    <div className="flex flex-col w-full p-2 h-[145vh] text-white">
      {/* Top header with editor labels */}
      <div className="flex mb-2 gap-2 justify-between px-10 w-full webtopheader">
        <div className="html">
          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-3 py-[.2vw] rounded-md">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt=""
              className="h-3 w-3"
            />
            <span className="text-sm">HTML</span>
          </div>
        </div>
        <div className="css">
          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-3 py-[.2vw] rounded-md">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt=""
              className="h-3 w-3"
            />
            <span className="text-sm">CSS</span>
          </div>
        </div>
        <div className="js">
          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-3 py-[.2vw] rounded-md">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt=""
              className="h-3 w-3"
            />
            <span className="text-sm">JAVASCRIPT</span>
          </div>
        </div>
      </div>

      <div className="w-full h-[65vh] flex">
        <Suspense fallback={<div className="text-center w-full">Loading Editors...</div>}>
          <Editor
            height="100%"
            language="html"
            value={html}
            onChange={(v) => setHtml(v)}
            beforeMount={handleEditorWillMount}
            theme="my-dark"
            options={{ fontSize: 14, minimap: { enabled: false } }}
          />
          <Editor
            height="100%"
            language="css"
            value={css}
            onChange={(v) => setCss(v)}
            beforeMount={handleEditorWillMount}
            theme="my-dark"
            options={{ fontSize: 14, minimap: { enabled: false } }}
          />
          <Editor
            height="100%"
            language="javascript"
            value={js}
            onChange={(v) => setJs(v)}
            beforeMount={handleEditorWillMount}
            theme="my-dark"
            options={{ fontSize: 14, minimap: { enabled: false } }}
          />
        </Suspense>
      </div>

      {/* Live Preview */}
      <div className="border border-[#494949] preview resize overflow-hidden w-full h-[120vh] min-h-[200px] rounded bg-white">
        <iframe
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          title="live-preview"
          className="w-full h-full preview"
        />
      </div>
    </div>
  );
}
