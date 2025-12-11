import { createContext, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const AIContext = createContext();

export const AI_Context_provider = ({ children }) => {
  const [expand, setexpand] = useState(true);
  const [close, setclose] = useState(false);
  const [messages, setmessages] = useState([]);
  const [isAIOpen, setisAIOpen] = useState(true);

  const ai = new GoogleGenerativeAI(import.meta.env.VITE_AI_KEY);

  async function run() {
    const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(
      "Explain js"
    );

    console.log(result.response.text());
  }

  run();

  const value = {
    expand,
    setexpand,
    close,
    setclose,
    messages,
    setmessages,
    isAIOpen,
    setisAIOpen,
  };

  return <AIContext.Provider value={value}>{children}</AIContext.Provider>;
};
