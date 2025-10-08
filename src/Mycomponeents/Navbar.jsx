import React, { useContext, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Context } from "../context/context";
import { Link } from "react-router-dom";
import profileIcon from "../assets/images/images (8).jpg";

const TopNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {
    profiledata,
    setswitchcompiler,
    signout,
    setisloginscreenopen,
    isloginscreenopen,
  } = useContext(Context);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full h-16 bg-[#0a0b0d] text-[#FAFAFA] border-b border-[#27272A] flex items-center justify-between px-4 sm:px-6">
      <div className="flex items-center max-[521px]:hidden px-8 gap-2 sm:gap-3 flex-wrap">
        <button
          onClick={() => setswitchcompiler(true)}
          className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-3 py-1.5 rounded-md text-xs sm:text-sm hover:bg-zinc-800 transition"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JS"
            className="h-4 w-4"
          />
          <span>Javascript</span>
        </button>

        <button
          onClick={() => setswitchcompiler(false)}
          className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-3 py-1.5 rounded-md text-xs sm:text-sm hover:bg-zinc-800 transition"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML"
            className="h-4 w-4"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS"
            className="h-4 w-4"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JS"
            className="h-4 w-4"
          />
          <span>Web</span>
        </button>

        <Link
          to="/"
          className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-3 py-1.5 rounded-md text-xs sm:text-sm hover:bg-zinc-800 transition"
        >
          Back To Code
        </Link>
      </div>

      <div className="absolute right-2 ">
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-2 px-1 sm:px-3 py-2 rounded-md bg-zinc-900 border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition"
        >
          <div className="w-7 h-7 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={profiledata?.profileIMG || profileIcon}
              alt="Profile"
            />
          </div>
          <FaCaretDown
            className={`transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-44 sm:w-48 backdrop-blur-2xl border border-zinc-700 rounded-md shadow-lg py-1 z-20">
            <Link
              to="/profile"
              className="block px-4 py-2 text-zinc-300 hover:bg-zinc-800 transition"
            >
              Profile
            </Link>
            <Link
              to="/settings"
              className="block px-4 py-2 text-zinc-300 hover:bg-zinc-800 transition"
            >
              Settings
            </Link>
            {!isloginscreenopen ? (
              <button
                onClick={signout}
                className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-500/10 transition"
              >
                Logout
              </button>
            ) : (
              <Link to="/profile">
                <button
                  onClick={() => {
                    signout();
                    }}
                  className="w-full text-left px-4 py-2 text-purple-400 hover:bg-purple-500/10 transition"
                >
                  Login
                </button>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNavbar;
