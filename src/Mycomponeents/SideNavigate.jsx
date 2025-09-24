import React, { useContext } from "react";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import SidebarProfie from "./SidebarProfie";
import { Link } from "react-router-dom";
import { Context } from "../context/context";

const SideNavigate = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen backdrop-blur-[50px] text-white border-d4d4d4order-zinc-800 transition-transform duration-300 z-30
      ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } w-[60vw] sm:w-[40vw] md:w-[20vw] lg:w-[15vw]`}
    >
      <SidebarProfie />
      <div className="p-3 overflow-y-auto flex flex-col gap-2">
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 p-3 rounded-md hover:text-white text-[#d4d4d4] transition-colors"
        >
          <IoCodeSlashOutline className="text-lg" />
          <p>Home</p>
        </Link>
        <Link
          to="/profile"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 p-3 rounded-md hover:text-white text-[#d4d4d4] transition-colors"
        >
          <IoCodeSlashOutline className="text-lg" />
          <p>Profile</p>
        </Link>
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-zinc-800 absolute bottom-0 w-full">
        <Link
          to="/settings"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 p-3 rounded-md hover:text-white text-[#d4d4d44d4] transition-colors"
        >
          <FaCog className="text-xl" />
          <span>Settings</span>
        </Link>

        <a
          href="#"
          className="flex items-center gap-3 p-3 rounded-md hover:text-white transitd4d4d4-colors text-red-400"
        >
          <FaSignOutAlt className="text-xl" />
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default SideNavigate;
