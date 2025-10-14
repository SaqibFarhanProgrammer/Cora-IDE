import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import profileicon from "../../assets/images/images (7).jpg";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const Profile = () => {
  const { profiledata, signout } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const skeletonColor = "#1f1e1e";

  return (
    <div className="w-full flex justify-center items-center py-10 text-white">
      <div className="rounded-2xl p-8 w-[90%] max-w-2xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-zinc-900/50">
        
        <div className="relative">
          {loading ? (
            <Skeleton circle width={144} height={144} baseColor={skeletonColor} />
          ) : (
            <img
              src={profiledata?.profileIMG || profileicon}
              alt="User Avatar"
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl border-4 border-[#19191c] shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          )}
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-5 text-white tracking-wide">
          {loading ? <Skeleton width={160} height={24} baseColor={skeletonColor} /> : profiledata?.name || "User Name"}
        </h2>

        <div className="mt-3 w-full px-4 sm:px-6">
          {loading ? (
            <>
              <Skeleton width="80%" height={20} className="mb-2" baseColor={skeletonColor} />
              <Skeleton width="90%" height={20} className="mb-2" baseColor={skeletonColor} />
              <Skeleton width="60%" height={18} baseColor={skeletonColor} />
            </>
          ) : (
            <>
              <p className="text-zinc-400 text-sm sm:text-base md:text-lg">{profiledata?.email || "user@example.com"}</p>
              {profiledata?.description && (
                <p className="text-zinc-300 text-sm sm:text-base mt-3 leading-relaxed">{profiledata?.description}</p>
              )}
              {profiledata?.tagline && (
                <p className="text-zinc-500 italic mt-2">“{profiledata?.tagline}”</p>
              )}
            </>
          )}
        </div>

        {loading ? (
          <Skeleton width={120} height={36} className="mt-6" baseColor={skeletonColor} />
        ) : (
          <button
            onClick={signout}
            className="mt-6 px-6 py-2.5 bg-gradient-to-r from-[#24191c] to-[#2e2024] text-red-300 
            hover:from-[#3b282c] hover:to-[#4a3136] hover:text-[#f88a8f] 
            rounded-xl transition-all duration-300 text-sm sm:text-base font-medium shadow-md"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;