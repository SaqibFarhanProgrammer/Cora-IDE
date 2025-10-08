import React, { useContext } from "react";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";
import SidebarProfie from "./SidebarProfie";
import { Context } from "../context/context";

const SideNavigate = ({ isOpen, setIsOpen }) => {
  const { signout, isloginscreenopen } = useContext(Context);

  return (
    <div
      className={`fixed top-0 left-0 h-screen backdrop-blur-[80px] text-white border-r border-zinc-800 transition-transform duration-300 z-50 
      ${isOpen ? "translate-x-0" : "-translate-x-full"} 
      w-[80vw] sm:w-[60vw] md:w-[30vw] lg:w-[20vw] xl:w-[15vw] flex flex-col justify-between`}
    >
      <div className="flex-1 overflow-y-auto">
        <SidebarProfie />

        <div className="p-4 flex flex-col gap-2">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all"
          >
            <IoCodeSlashOutline className="text-xl" />
            <p className="text-sm sm:text-base font-medium">Home</p>
          </Link>

          <Link
            to="/profile"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all"
          >
            <IoCodeSlashOutline className="text-xl" />
            <p className="text-sm sm:text-base font-medium">Profile</p>
          </Link>

          <Link
            to="/documentation"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all"
          >
            <IoCodeSlashOutline className="text-xl" />
            <p className="text-sm sm:text-base font-medium">Learn</p>
          </Link>
        </div>
      </div>

      <div className="p-4 border-t border-zinc-800 bg-black/30">
        <Link
          to="/settings"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 p-3 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all"
        >
          <FaCog className="text-xl" />
          <span className="text-sm sm:text-base font-medium">Settings</span>
        </Link>

        {!isloginscreenopen ? (
          <button
            onClick={signout}
            className="flex items-center gap-3 p-3 w-full rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all"
          >
            <FaSignOutAlt className="text-xl" />
            <span className="text-sm sm:text-base font-medium">Logout</span>
          </button>
        ) : (
          <Link
            to="/profile"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 w-full rounded-xl text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 transition-all"
          >
            <CiLogin className="text-xl" />
            <span className="text-sm sm:text-base font-medium">Login</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SideNavigate;
