import React, { useEffect, useState, useContext } from "react";
import CodefileCard from "./CodefileCard";
import SearchBar from "../profile/Search";
import Profile from "../profile/Profile";
import { Context } from "../../context/context";
import Loginscreen from "../../Auth/LoginScreen";
import { FiFile, FiWifiOff } from "react-icons/fi";
import { Button } from "../../components/ui/button";

const Mainprofile = () => {
  const { isloginscreenopen, files } = useContext(Context);
  const [fileslist, setfileslist] = useState([]);

  useEffect(() => {
    setfileslist(files ? files : []);
  }, [files]);

  if (navigator.onLine) {
    return (
      <div
        className={`w-full ] flex flex-col items-center transition-all duration-300 ${
          !isloginscreenopen ? "h-screen pt-16" : "h-[90vh]"
        }`}
      >
        {isloginscreenopen && (
          <div className="w-full h-full flex items-center justify-center">
            <Loginscreen />
          </div>
        )}

        {!isloginscreenopen && (
          <>
            <div className="w-full max-w-5xl mb-8 px-4">
              <Profile />
            </div>

            <div className="w-full max-w-3xl mb-10 px-4">
              <SearchBar />
            </div>
          </>
        )}

        {!isloginscreenopen && (
          <div className="w-full max-w-6xl px-4 pb-16">
            {fileslist && fileslist.length > 0 ? (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-y-auto
                scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900"
                style={{ maxHeight: "calc(100vh - 220px)" }}
              >
                <CodefileCard />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center text-zinc-500">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-zinc-800 mb-4 shadow-md">
                  <FiFile size={28} />
                </div>
                <h2 className="text-lg font-medium tracking-wide">
                  No Saved Files Available
                </h2>
                  <Button className="mt-2 bg-white text-black" onClick={()=>{
                    window.location.reload()
                  }}> Please Refresh To See Saved Files</Button>
              
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full h-[100%] bg-[#0a0b0d] flex flex-col items-center justify-center text-zinc-400 px-4 py-10">
      <div className="flex flex-col items-center gap-2 text-center max-w-xs sm:max-w-sm md:max-w-md">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-zinc-900 flex items-center justify-center shadow-lg border border-zinc-800">
          <FiWifiOff size={38} className="text-red-400 animate-pulse" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-wide ">
          You’re Offline
        </h1>

        <p className="text-sm sm:text-base text-zinc-500 leading-relaxed px-2">
          Please check your internet connection and try again.
        </p>

        <button
          onClick={() => window.location.reload()}
          className=" w-full mt-2 sm:w-auto px-6 py-2.5 rounded-xl bg-zinc-700 text-white font-semibold 
                 hover:bg-zinc-600 active:scale-95 transition-all duration-300 shadow-md"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default Mainprofile;
