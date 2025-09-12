import React, { useContext } from "react";
import { Context } from "../../context/context";
import icon6 from "../../assets/icons/profileicons (7).jpeg";

const Profile = () => {
  const { profiledata, signout } = useContext(Context);

  return (
    <div className="w-full h-[100%] flex flex-col justify-center items-center mx-auto text-white rounded-lg overflow-hidden">
      {/* Cover */}
      <div
        className="h-56 w-full bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/736x/7b/51/55/7b5155f9cbe20b84f0f4236cce3d78b4.jpg)",
        }}
      ></div>

      {/* Profile Info */}
      <div className="relative px-6 pb-6 flex flex-col justify-center items-center">
        <img
          src={profiledata?.profileIMG || icon6}
          alt="User Avatar"
          className="w-24 h-24 rounded-lg border-4 border-[#0d0d0f] shadow-md object-cover mt-[-2vw]"
        />
        <h2 className="text-2xl font-bold mt-3">{profiledata?.name}</h2>
        <p className="text-zinc-400">{profiledata?.email}</p>
        <p className="text-sm text-zinc-300 mt-2">{profiledata?.description}</p>
        <p className="text-sm text-zinc-500">{profiledata?.tagline}</p>

        {/* Logout */}
        <button
          onClick={signout}
          className="mt-6 flex bg-[#291D21] items-center gap-2 px-4 py-2 text-red-300 hover:text-[#e4767b]"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
