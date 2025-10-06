import React from "react";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import SidebarProfie from "./SidebarProfie";
import { Link } from "react-router-dom";

const SideNavigate = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen backdrop-blur-2xl text-white border-r border-zinc-800 
      transition-transform duration-300 z-30
      ${isOpen ? "translate-x-0" : "-translate-x-full"} 
      w-[75vw] sm:w-[55vw] md:w-[30vw] lg:w-[18vw] xl:w-[15vw]`}
    >
      <SidebarProfie />

      <div className="p-3 overflow-y-auto flex flex-col gap-1">
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 p-3 rounded-lg text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors"
        >
          <IoCodeSlashOutline className="text-lg" />
          <p className="text-sm md:text-base font-medium">Home</p>
        </Link>

        <Link
          to="/profile"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 p-3 rounded-lg text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors"
        >
          <IoCodeSlashOutline className="text-lg" />
          <p className="text-sm md:text-base font-medium">Profile</p>
        </Link>

        <Link
          to="/documentation"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 p-3 rounded-lg text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors"
        >
          <IoCodeSlashOutline className="text-lg" />
          <p className="text-sm md:text-base font-medium">Learn</p>
        </Link>
      </div>

      <div className="p-3 border-t border-zinc-800 absolute bottom-0 w-full">
        <Link
          to="/settings"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 p-3 rounded-lg text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors"
        >
          <FaCog className="text-lg" />
          <span className="text-sm md:text-base font-medium">Settings</span>
        </Link>

        <button
          onClick={() => console.log("Logout clicked")}
          className="flex items-center gap-3 p-3 rounded-lg text-red-500 hover:bg-red-500/10 transition-colors w-full"
        >
          <FaSignOutAlt className="text-lg" />
          <span className="text-sm md:text-base font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default SideNavigate;
