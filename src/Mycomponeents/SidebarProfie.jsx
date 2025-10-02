import React, { useContext } from "react";
import profileIcon from "../assets/images/images (8).jpg";
import { Context } from "../context/context";
import { Link } from "react-router-dom";

const SidebarProfie = () => {
  const { profiledata } = useContext(Context);

  return (
    <div className="p-4 border-b border-[#27272A]">
      <div className="flex flex-col justify-between items-center cursor-pointer">
        <Link
          to="/profile"
          className="
            profile-cion 
            w-20 h-20            /* default (mobile) */
            sm:w-24 sm:h-24      /* tablets */
            md:w-28 md:h-28      /* medium screens */
            lg:w-32 lg:h-32      /* large screens */
            flex items-center justify-center rounded-full
          "
        >
          <img
            src={profiledata?.profileIMG ? profiledata?.profileIMG : profileIcon}
            className="w-full h-full object-cover rounded-full"
            alt="Profile"
          />
        </Link>
        <h4
          className="
            font-semibold pt-3 
            text-base        /* mobile */
            sm:text-lg       /* tablet */
            md:text-xl       /* desktop */
            text-center
          "
        >
          {profiledata?.name}
        </h4>
      </div>
    </div>
  );
};

export default SidebarProfie;
