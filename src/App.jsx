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
import "./Media.css";

const App = () => {
  const { Newfileisopen } = useContext(Context);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-black h-screen w-screen relative overflow-hidden">
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setSidebarOpen((prev) => !prev)}
        className="fixed z-50 text-2xl top-3 left-3  rounded-full p-2 text-white"
      >
        <HiMenuAlt4 />
      </button>

      {/* Sidebar */}
      <Suspense fallback={<p>Loading Sidebar...</p>}>
        <SideNavigate isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      </Suspense>

      {/* Right section */}
      <div className="flex-1 flex flex-col w-full h-full">
        {/* Top Navbar */}
        <Suspense fallback={<p>Loading Navbar...</p>}>
          <TopNavbar />
        </Suspense>

        {/* Routes */}
        <div className="flex-1 overflow-y-auto">
          <Suspense fallback={<p>Loading Page...</p>}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/profile" element={<Mainprofile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Suspense>
        </div>
      </div>

      {/* New File Modal */}
      {Newfileisopen && <Newfile />}
    </div>
  );
};

export default App;
