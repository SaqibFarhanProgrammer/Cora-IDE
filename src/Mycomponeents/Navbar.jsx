import React, { useContext, useState } from "react";
import { FaCaretDown, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Context } from "../context/context";
import { Link } from "react-router-dom";
import profileIcon from "../assets/images/images (8).jpg";

const TopNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { profiledata, setswitchcompiler, signout } = useContext(Context);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full h-16 text-[#FAFAFA] bg-[#0a0b0d] pl-15 flex items-center justify-between px-6 border-b border-[#27272A]">
      {/* Left side: placeholder for logo or nav items */}
      <div className=" options  flex gap-2">
        <div
          onClick={() => setswitchcompiler(true)}
          className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-3 py-[.2vw] rounded-md"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt=""
            className="h-3 w-3"
          />
          <span className="text-sm">Javascript</span>
        </div>
        <div
          onClick={() => setswitchcompiler(false)}
          className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-3 py-[.2vw] rounded-md"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt=""
            className="h-3 w-3"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt=""
            className="h-3 w-3"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt=""
            className="h-3 w-3"
          />
          <span className="text-sm">Web</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-6"></div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-zinc-900 text-zinc-300 hover:bg-zinc-800 transition-colors border border-[#27272A]"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={
                  profiledata?.profileIMG
                    ? profiledata?.profileIMG
                    : profileIcon
                }
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
            <div className="absolute right-0 mt-2 w-48 bg-zinc-900 rounded-md shadow-lg py-1 z-10">
              <Link
                to="/profile"
                className="flex items-center gap-2 px-4 py-2 text-zinc-300 hover:bg-zinc-800"
              >
                Profile
              </Link>
              <Link
                to="/settings"
                className="flex items-center gap-2 px-4 py-2 text-zinc-300 hover:bg-zinc-800"
              >
                Settings
              </Link>
              <Link
                to=""
                onClick={signout}
                className="flex items-center gap-2 px-4 py-2 text-red-300 hover:text-[#cf444b]"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
