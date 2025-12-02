import { createContext, useState } from "react";

export const Context = createContext();

export const AI_Context_provider = ({ children }) => {
  const [expand, setexpand] = useState(false);
  const [close, setclose] = useState(false);
    const [messages, setmessages] = useState([]);
  

  const value = {
    expand,
    setexpand,
    close,
    setclose,
    messages,
    setmessages,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
