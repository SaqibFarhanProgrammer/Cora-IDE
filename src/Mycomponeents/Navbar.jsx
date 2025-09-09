import React, { useContext, useState } from "react";
import {
  FaPlay,
  FaSave,
  FaUserCircle,
  FaCaretDown,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { RiCodeSSlashFill } from "react-icons/ri";
import logo from "../assets/images/WhatsApp Image 2025-09-02 at 8.24.25 AM.jpeg";
import { Context } from "../context/context";

const TopNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-[100%] h-16  text-[#FAFAFA] flex items-center justify-between px-6 border-b border-[#27272A]">
      {/* Left side: Logo and file details */}
      <div className="flex items-center gap-6"></div>

      {/* Right side: Action buttons and profile dropdown */}
      <div className="flex items-center gap-4">
        {/* Action Buttons */}

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center border-1 border-[#27272A] gap-2 px-3 py-2 rounded-md bg-zinc-900 text-zinc-300 hover:bg-zinc-800 transition-colors"
          >
            <FaUserCircle className="text-xl" />
            <FaCaretDown
              className={`transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute overflow-hidden right-0 mt-2 w-48 bg-zinc-900 rounded-md shadow-lg py-1 z-10">
              <li
                href="#"
                className="flex items-center gap-2 px-4 py-2 text-zinc-300 hover:bg-zinc-800"
              >
                <FaUserCircle />
                Profile
              </li>
              <li
                href="#"
                className="flex items-center gap-2 px-4 py-2 text-zinc-300 hover:bg-zinc-800"
              >
                <RiCodeSSlashFill />
                Codes
              </li>
              <li
                href="#"
                className="flex items-center gap-2 px-4 py-2 text-zinc-300 hover:bg-zinc-800"
              >
                <FaCog />
                Settings
              </li>
              <li
                href="#"
                className="flex bg-[#291D21] items-center gap-2 px-4 py-2 text-red-300 hover:text-[#cf444b] "
              >
                <FaSignOutAlt />
                Logout
              </li>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
