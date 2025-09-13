import React from "react";
import CodefileCard from "./CodefileCard";
import SearchBar from "../profile/Search";
import Profile from "../profile/Profile";
import { useContext } from "react";
import { Context } from "../../context/context";
import Loginscreen from "../../Auth/LoginScreen";

const Mainprofile = () => {
  const { SavefileData, isloginscreenopen, newfiledata } = useContext(Context);

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
      <div className="files">
        <div
          className="codes mx-auto   w-[88vw] px-4 pb-6 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        gap-6 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 150px)" }}
        >
          {newfiledata.map((data, index) => {
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
      </div>
    </div>
  );
};

export default Mainprofile;
