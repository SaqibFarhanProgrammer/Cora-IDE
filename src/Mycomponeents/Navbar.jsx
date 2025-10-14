import React, { useContext, useState, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Context } from "../context/context";
import { Link, useLocation } from "react-router-dom";
import profileIcon from "../assets/images/images (8).jpg";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const TopNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [buttonsLoaded, setButtonsLoaded] = useState(false);
  const { setswitchcompiler, signout, setisloginscreenopen, isloginscreenopen, profiledata } = useContext(Context);
  const location = useLocation();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const timer = setTimeout(() => setButtonsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-16 bg-[#0a0b0d] text-[#FAFAFA] border-b border-[#27272A] flex items-center justify-between px-3 sm:px-6">
      
      <div className="flex items-center max-[521px]:ml-10 ml-8 gap-2 sm:gap-3 flex-wrap">
        {!buttonsLoaded ? (
          <>
            <Skeleton baseColor="#2a2929" highlightColor="#3a3838" width={90} height={36} />
            <Skeleton baseColor="#2a2929" highlightColor="#3a3838" width={110} height={36} />
            <Skeleton baseColor="#2a2929" highlightColor="#3a3838" width={120} height={36} />
          </>
        ) : (
          <>
            <Link to="/">
              <button
                onClick={() => setswitchcompiler(true)}
                className={`flex items-center gap-2 bg-[#1f1e1e] border border-zinc-700 px-3 sm:px-4 py-2 rounded-md transition-all hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700`}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JS"
                  className="h-5 w-5 sm:h-5 sm:w-6"
                />
                <span className="hidden sm:inline text-xs sm:text-sm">Javascript</span>
              </button>
            </Link>

            <Link to="/">
              <button
                onClick={() => setswitchcompiler(false)}
                className="flex items-center gap-2 bg-[#1f1e1e] border border-zinc-700 px-3 sm:px-4 py-1.5 rounded-md transition-all hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700"
              >
                <div className="flex items-center gap-1">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="HTML"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="CSS"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JS"
                    className="h-5 w-5 sm:h-5 sm:w-6"
                  />
                </div>
                <span className="hidden sm:inline text-xs sm:text-sm">Web</span>
              </button>
            </Link>

            <Link
              to="/"
              className="hidden sm:flex py-2 items-center gap-2 bg-[#1f1e1e] border border-zinc-700 px-3 rounded-md text-sm hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 transition-all"
            >
              Back To Code
            </Link>
          </>
        )}
      </div>

      <div className="relative">
        {!buttonsLoaded ? (
          <Skeleton circle width={28} height={28} baseColor="#2a2929" highlightColor="#3a3838" />
        ) : (
          <>
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-md bg-[#1f1e1e] border border-zinc-700 text-zinc-300 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 transition-all"
            >
              <div className="w-7 h-7 rounded-full overflow-hidden border border-zinc-700">
                <img
                  className="w-full h-full object-cover"
                  src={profiledata?.profileIMG || profileIcon}
                  alt="Profile"
                />
              </div>
              <FaCaretDown
                className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`absolute right-0 mt-2 w-40 sm:w-48 backdrop-blur-2xl bg-zinc-900/80 border border-zinc-700 rounded-md shadow-lg py-1 z-20 transition-all duration-300 ${
                isDropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <Link
                onClick={() => setIsDropdownOpen(false)}
                to="/profile"
                className="block px-4 py-2 text-zinc-300 hover:bg-zinc-800 transition"
              >
                Profile
              </Link>
              <Link
                onClick={() => setIsDropdownOpen(false)}
                to="/settings"
                className="block px-4 py-2 text-zinc-300 hover:bg-zinc-800 transition"
              >
                Settings
              </Link>
              {!isloginscreenopen ? (
                <button
                  onClick={() => { setIsDropdownOpen(false); signout(); }}
                  className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-500/10 transition"
                >
                  Logout
                </button>
              ) : (
                <Link to="/profile">
                  <button className="w-full text-left px-4 py-2 text-purple-400 hover:bg-purple-500/10 transition">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TopNavbar;