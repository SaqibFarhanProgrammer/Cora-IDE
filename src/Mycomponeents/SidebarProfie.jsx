import React, { useContext } from "react";
import profileIcon from "../assets/images/images (8).jpg";
import { Context } from "../context/context";

const SidebarProfie = () => {
  const { profiledata } = useContext(Context);

  return (
    <div className="p-4 border-b border-[#27272A]">
      <div className="flex  flex-col justify-between items-center cursor-pointer">
        <div className="profile-cion  h-[10vh] w-[5vw] flex items-center justify-center rounded-full ">
          <img
            src={profiledata?.profileIMG ? profiledata?.profileIMG : profileIcon}
            className="  h-[100%] w-[100%] object-cover  rounded-full "
          />
        </div>
        <span className="font-semibold  text-lg">{profiledata?.name}</span>
      </div>
    </div>
  );
};

export default SidebarProfie;
