import React, { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import { htmlcode , csscode } from "./semplecode";

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
    <div className="flex flex-col w-full  p-2 h-[145vh] b text-white">
      {/* Editors row */}
      <div className="w-full h-[65vh] flex ">
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
      </div>

      {/* Live Preview */}
      <div className="border preview  resize overflow-hidden w-full h-[120vh] min-h-[200px] rounded bg-white">
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
