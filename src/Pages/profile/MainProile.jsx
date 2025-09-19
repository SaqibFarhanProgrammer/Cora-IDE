import React, { useEffect, useState } from "react";
import CodefileCard from "./CodefileCard";
import SearchBar from "../profile/Search";
import Profile from "../profile/Profile";
import { useContext } from "react";
import { Context } from "../../context/context";
import Loginscreen from "../../Auth/LoginScreen";
import { FiFile } from "react-icons/fi";

const Mainprofile = () => {
  const { isloginscreenopen, files } = useContext(Context);
  const [fileslist, setfileslist] = useState([]);
  useEffect(() => {
    setfileslist(files ? files : []);
  }, [files]);

  return (
    <div className="p-1 h-[100vh]  w-[100%] my-auto  m-0 flex flex-col pt-16 justify-between  items-start">
      {!isloginscreenopen ? (
        <>
          <div className="profile  mt-[-9vh]  w-[100%] h-[60vh] ">
            <Profile />
          </div>
          <div className="search mx-auto">
            <SearchBar />
          </div>
        </>
      ) : (
        <Loginscreen />
      )}
      {!isloginscreenopen ? (
        <div className="files">
          {FileList ? (
            <div
              className="codes mx-auto   w-[88vw] px-4 pb-6 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        gap-6 overflow-y-auto"
              style={{ maxHeight: "calc(100vh - 150px)" }}
            >
              {fileslist.map((data, index) => {
                return (
                  <CodefileCard
                    key={index}
                    title={data.title}
                    code={data.code}
                    extention={data.extention}
                  />
                );
              })}
            </div>
          ) : (
            <div className="div  w-[95vw] mx-auto">
              <div className="flex flex-col items-center justify-center py-20 text-center text-zinc-500">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-zinc-800 mb-4 shadow-md">
                  <FiFile size={28} />
                </div>
                <h2 className="text-lg font-medium tracking-wide">
                  No Saved Files Available
                </h2>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Mainprofile;
