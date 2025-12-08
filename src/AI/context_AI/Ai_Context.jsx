import { createContext, useState } from "react";

export const AIContext = createContext();

export const AI_Context_provider = ({ children }) => {
  const [expand, setexpand] = useState(true);
  const [close, setclose] = useState(false);
  const [messages, setmessages] = useState([]);
  const [isAIOpen, setisAIOpen] = useState(true)

  const value = {
    expand,
    setexpand,
    close,
    setclose,
    messages,
    setmessages,
    isAIOpen,
    setisAIOpen
  };

  return <AIContext.Provider value={value}>{children}</AIContext.Provider>;
};
