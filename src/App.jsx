import React, { Suspense, useContext } from "react";
import "./App.css";
import { Context } from "./context/context";
import Newfile from "./Mycomponeents/Newfile";
import { Route, Routes } from "react-router-dom"; // <-- Router hata diya
import Main from "./Mycomponeents/Main";

const SideNavigate = React.lazy(() => import("./Mycomponeents/SideNavigate"));
const TopNavbar = React.lazy(() => import("./Mycomponeents/Navbar"));
const Mainprofile = React.lazy(() => import("./Pages/profile/MainProile"));

const App = () => {
  const { Newfileisopen } = useContext(Context);

  return (
    <div className="flex bg-[#09090B] h-screen w-full">
      {/* Sidebar */}
      <div className="left  w-[10%]">
        <Suspense fallback={<p>Loading Sidebar...</p>}>
          <SideNavigate />
        </Suspense>
      </div>

      {/* Right section */}
      <div className="right flex-1 flex flex-col">
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
