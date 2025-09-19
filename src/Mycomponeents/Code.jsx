import React, { useContext, useEffect } from "react";
import Topbar from "./Topbar";
import Editor, { useMonaco } from "@monaco-editor/react";
import { Context } from "../context/context";

const Code = () => {
  const monaco = useMonaco();
  const { zoomin, compiledCode, setcompiledCode } = useContext(Context);

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
    }
  }, [monaco]);

  return (
    <div className="w-[100%] h-[100%] flex flex-col ">
      <Topbar />

      <Editor
        onChange={(value) => setcompiledCode(value)}
        language="javascript"
        defaultValue={compiledCode}
        theme="zincDark"
        height="100%"
        className="pt-[2px] mt-1"
        options={{
          fontSize: zoomin,
          minimap: { enabled: false }, // optional: minimap off
        }}
      />
    </div>
  );
};

export default Code;
