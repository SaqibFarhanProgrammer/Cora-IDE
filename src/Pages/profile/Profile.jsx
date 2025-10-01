import React, { useContext } from "react";
import { Context } from "../../context/context";

const Profile = () => {
  const { profiledata, signout } = useContext(Context);

  return (
    <div className="w-full h-[100%]  flex flex-col justify-center items-center mx-auto text-white rounded-lg overflow-hidden">
      {/* Cover */}
    
      {/* Profile Info */}
      <div className="relative px-8  flex   h-[100%] mt-[] flex-col justify-center items-center rounded-xl shadow-xl  w-[100%] ">
        <img
          src={profiledata?.profileIMG}
          alt="User Avatar"
          className="w-28 h-28 rounded-xl border-4 border-[#0d0d0f] shadow-lg object-cover"
        />
        <h2 className="text-2xl font-bold mt-4">{profiledata?.name}</h2>
        <div className="flex flex-col b items-center w-[50%] mt-2">
          <p className="text-zinc-400">{profiledata?.email}</p>
          <p className="text-sm text-zinc-300 text-center mt-3 px-3">
            {profiledata?.description}
          </p>
          <p className="text-sm text-zinc-500 italic mt-2">
            {profiledata?.tagline}
          </p>
        </div>

        {/* Logout */}
        <button
          onClick={signout}
          className="mt-6 flex items-center gap-2 px-6 py-2 rounded-lg bg-[#291D21] text-red-300 hover:text-[#e4767b] hover:bg-[#35262a] transition-all duration-300 shadow-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
