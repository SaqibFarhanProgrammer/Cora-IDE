import React, { useContext } from "react";
import { Context } from "../../context/context";

const Profile = () => {
  const { profiledata, signout } = useContext(Context);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center mx-auto text-white rounded-lg overflow-hidden px-4 sm:px-6 md:px-8">
      {/* Profile Info */}
      <div className="relative px-4 sm:px-6 md:px-8 flex h-full mt-4 flex-col justify-center items-center rounded-xl shadow-xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <img
          src={profiledata?.profileIMG}
          alt="User Avatar"
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl border-4 border-[#0d0d0f] shadow-lg object-cover"
        />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 text-center">
          {profiledata?.name}
        </h2>
        <div className="flex flex-col items-center w-full sm:w-[70%] md:w-[60%] lg:w-[50%] mt-2">
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg break-words text-center">
            {profiledata?.email}
          </p>
          <p className="text-xs sm:text-sm md:text-base text-zinc-300 text-center mt-3 px-2 sm:px-3">
            {profiledata?.description}
          </p>
          <p className="text-xs sm:text-sm md:text-base text-zinc-500 italic mt-2 text-center">
            {profiledata?.tagline}
          </p>
        </div>

        {/* Logout */}
        <button
          onClick={signout}
          className="mt-6 flex items-center gap-2 px-4 sm:px-6 py-2 rounded-lg bg-[#291D21] text-red-300 hover:text-[#e4767b] hover:bg-[#35262a] transition-all duration-300 shadow-md text-sm sm:text-base md:text-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
s