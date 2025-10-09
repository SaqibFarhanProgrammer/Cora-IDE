import React, { useContext, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Context } from "../context/context";
import { Link } from "react-router-dom";
import profileIcon from "../assets/images/images (8).jpg";

const TopNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {
    setswitchcompiler,
    signout,
    setisloginscreenopen,
    isloginscreenopen,
    profiledata,
  } = useContext(Context);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="w-full h-16 bg-[#0a0b0d] text-[#FAFAFA] border-b border-[#27272A] flex items-center justify-between px-3 sm:px-6">
      {/* Left Buttons */}
      <div className="flex items-center max-[521px]:ml-10 ml-8 gap-2 sm:gap-3 flex-wrap">
        <Link to="/">
          <button
            onClick={() => setswitchcompiler(true)}
            className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-3 sm:px-4 py-1.5 rounded-md hover:bg-zinc-800 transition-all"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JS"
              className="h-5 w-5 sm:h-6 sm:w-6"
            />
            <span className="hidden sm:inline text-xs sm:text-sm">
              Javascript
            </span>
          </button>
        </Link>
        <Link to="/">
          <button
            onClick={() => setswitchcompiler(false)}
            className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-3 sm:px-4 py-1.5 rounded-md hover:bg-zinc-800 transition-all"
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
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
            </div>
            <span className="hidden sm:inline text-xs sm:text-sm">Web</span>
          </button>
        </Link>

        <Link
          to="/"
          className="hidden sm:flex py-2 items-center gap-2 bg-zinc-900 border border-zinc-700 px-3  rounded-md text-sm hover:bg-zinc-800 transition-all"
        >
          Back To Code
        </Link>
      </div>

      {/* Right Profile */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-md bg-zinc-900 border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition-all"
        >
          <div className="w-7 h-7 rounded-full overflow-hidden border border-zinc-700">
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
          <div className="absolute right-0 mt-2 w-40 sm:w-48 backdrop-blur-2xl bg-zinc-900/80 border border-zinc-700 rounded-md shadow-lg py-1 z-20">
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
                <button className="w-full text-left px-4 py-2 text-purple-400 hover:bg-purple-500/10 transition">
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
