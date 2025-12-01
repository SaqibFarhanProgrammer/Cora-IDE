import { createContext } from "react";

const context = createContext();

const AI_Context_provider = ({ children }) => {

    
  return <context.Provider>{children}</context.Provider>;
};

export default context;
