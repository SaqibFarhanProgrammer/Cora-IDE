import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import profileicon from "../../assets/images/images (7).jpg";
const Profile = () => {
  const { profiledata, signout } = useContext(Context);
  const [profileimage, setprofileimage] = useState("");

  return (
    <div className="w-full flex justify-center items-center py-10 text-white">
      <div className=" rounded-2xl  p-8 w-[90%] max-w-2xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-zinc-900/50">
        <div className="relative">
          <img
            src={profiledata?.profileIMG || profileicon}
            alt="User Avatar"
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl border-4 border-[#19191c] shadow-lg object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Name */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-5 text-white tracking-wide">
          {profiledata?.name || "User Name"}
        </h2>

        {/* Email + Description */}
        <div className="mt-3 w-full px-4 sm:px-6">
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg">
            {profiledata?.email || "user@example.com"}
          </p>
          {profiledata?.description && (
            <p className="text-zinc-300 text-sm sm:text-base mt-3 leading-relaxed">
              {profiledata?.description}
            </p>
          )}
          {profiledata?.tagline && (
            <p className="text-zinc-500 italic mt-2">
              “{profiledata?.tagline}”
            </p>
          )}
        </div>

        {/* Logout Button */}
        <button
          onClick={signout}
          className="mt-6 px-6 py-2.5 bg-gradient-to-r from-[#24191c] to-[#2e2024] text-red-300 
          hover:from-[#3b282c] hover:to-[#4a3136] hover:text-[#f88a8f] 
          rounded-xl transition-all duration-300 text-sm sm:text-base font-medium shadow-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
