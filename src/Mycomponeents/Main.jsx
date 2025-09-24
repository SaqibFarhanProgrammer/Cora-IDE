import React, { Suspense, useContext } from "react";
import Topbar from "./Topbar";
import TopNavbar from "./Navbar";
import { Context } from "../context/context";
const Code = React.lazy(() => import("../Mycomponeents/Code"));
const Terminal = React.lazy(() => import("../Mycomponeents/Terminal"));
import Web from "./Web";
const Main = () => {
  const { switchcompiler } = useContext(Context);
  return (
    <div className="flex w-[100%]  h-[100%]  ">
      {switchcompiler ? (
        <Suspense fallback={<p>Loading Code Editor...</p>}>
          <Code />
          <Terminal />
        </Suspense>
      ) : (
        <Web />
      )}
    </div>
  );
};

export default Main;
