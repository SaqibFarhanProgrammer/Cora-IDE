import React, { Suspense, useContext, useState } from "react";
import "./App.css";
import { Context } from "./context/context";
import Newfile from "./Mycomponeents/Newfile";
import { Route, Routes } from "react-router-dom";
import Main from "./Mycomponeents/Main";
import Settings from "./Pages/Settings/Settings";
const SideNavigate = React.lazy(() => import("./Mycomponeents/SideNavigate"));
const TopNavbar = React.lazy(() => import("./Mycomponeents/Navbar"));
const Mainprofile = React.lazy(() => import("./Pages/profile/MainProile"));
import { HiMenuAlt4 } from "react-icons/hi";
import Learn from "./Pages/Learn/Learn";
import Notfound from "./Notfound";
import AI from "./AI/AI";
import { AIContext } from "./AI/context_AI/Ai_Context";
import { BiMessageAdd } from "react-icons/bi";

const App = () => {
  const { Newfileisopen } = useContext(Context);
  const { isAIOpen, setisAIOpen } = useContext(AIContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ai

  return (
    <div className="flex bg-black h-screen w-screen relative">
      <button
        onClick={() => setSidebarOpen((prev) => !prev)}
        className="fixed z-50 text-2xl top-3 left-3 rounded-full p-2 text-white"
      >
        <HiMenuAlt4 />
      </button>

      <Suspense fallback={<p>Loading Sidebar...</p>}>
        <SideNavigate isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      </Suspense>

      <div className="flex-1 flex flex-col w-full h-full">
        <Suspense fallback={<p>Loading Navbar...</p>}>
          <TopNavbar />
        </Suspense>

        <div className="flex-1 overflow-y-auto">
          <Suspense fallback={<p>Loading Page...</p>}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/profile" element={<Mainprofile />} />
              <Route path="/documentation" element={<Learn />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </Suspense>
        </div>
      </div>
      <BiMessageAdd
        onClick={() => setisAIOpen(!isAIOpen)}
        className="
    fixed 
    z-50
    bottom-5 
    right-5 
    h-12 
    w-12 
    p-3
    rounded-full 
    cursor-pointer

    bg-gradient-to-br from-[#4C6FFF] to-[#A56BFF] 
    text-white

    shadow-[0_0_18px_rgba(120,90,255,0.6)]
    hover:shadow-[0_0_25px_rgba(160,120,255,0.8)]

    transition-transform duration-300 
    hover:scale-110
  "
      />

      {Newfileisopen && <Newfile />}
      {isAIOpen ? <AI /> : null}
    </div>
  );
};

export default App;
