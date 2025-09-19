import React, { useContext, useState } from "react";
import { FaCaretDown, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Context } from "../context/context";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { profiledata } = useContext(Context);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full h-16 text-[#FAFAFA] bg-[#0a0b0d] flex items-center justify-between px-6 border-b border-[#27272A]">
      {/* Left side: placeholder for logo or nav items */}
      <div className="flex items-center gap-6"></div>

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
                src={profiledata?.photoURL || "/default-avatar.png"}
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
                to="/logout"
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
