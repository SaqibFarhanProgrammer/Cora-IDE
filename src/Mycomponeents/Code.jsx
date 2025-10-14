import React, { useContext, useEffect, useState } from "react";
import Topbar from "./Topbar";
import Editor, { useMonaco } from "@monaco-editor/react";
import { Context } from "../context/context";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Code = () => {
  const monaco = useMonaco();
  const { zoomin, compiledCode, setcompiledCode } = useContext(Context);
  const [editorReady, setEditorReady] = useState(false);

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme("zincDark", {
        base: "vs-dark",
        inherit: true,
        rules: [
          { token: "comment", foreground: "5c6370", fontStyle: "italic" },
          { token: "keyword", foreground: "c678dd" },
          { token: "string", foreground: "98c379" },
          { token: "number", foreground: "d19a66" },
          { token: "regexp", foreground: "98c379" },
          { token: "operator", foreground: "56b6c2" },
          { token: "variable", foreground: "e06c75" },
          { token: "function", foreground: "61afef" },
          { token: "type", foreground: "e5c07b" },
          { token: "class", foreground: "e5c07b", fontStyle: "bold" },
          { token: "property", foreground: "61afef" },
        ],
        colors: {
          "editor.background": "#0a0b0d",
          "editor.foreground": "#f4f4f5",
          "editorCursor.foreground": "#22d3ee",
          "editor.lineHighlightBackground": "#27272a",
          "editorLineNumber.foreground": "#71717a",
          "editorLineNumber.activeForeground": "#f4f4f5",
        },
      });

      monaco.editor.setTheme("zincDark");
      setEditorReady(true);
    }
  }, [monaco]);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="shrink-0">
        <Topbar />
      </div>

      <div className="flex-1 min-h-0 relative">
        {!editorReady && (
          <div className="absolute inset-0 p-4">
            <Skeleton
              count={10}
              height={24}
              baseColor="#1f1e1e"
              highlightColor="##1f1e1e"
              className="rounded"
            />
          </div>
        )}

        <Editor
          onChange={(value) => setcompiledCode(value)}
          language="javascript"
          value={compiledCode}
          theme="zincDark"
          options={{
            fontSize: zoomin,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
          className="w-full h-full relative"
        />
      </div>
    </div>
  );
};

export default Code;