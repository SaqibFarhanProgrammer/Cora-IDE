import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { IoMdClose } from "react-icons/io";
import { Context } from "../context/context";
import { Link, Links } from "react-router-dom";

const Newfile = () => {
  const {
    setfilename,
    filename,
    setNewfileisopen,
    putdatainnewfiledata,
    isloginscreenopen,
  } = useContext(Context);

  const monacoLanguages = {
    name: "JavaScript",
    id: "javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  };

  return (
    <div className="h-screen w-full   backdrop-blur-[10px] fixed inset-0 z-20 flex justify-center items-center">
      {!isloginscreenopen ? (
        // ✅ Agar login screen open hai → New File Card
        <Card className="w-[40vw] max-[520px]:w-[90%] max-[750px]:w-[60%] bg-[#0A0A0A]  border border-zinc-800 shadow-xl">
          <CardHeader className="flex justify-between">
            <CardTitle className="text-white text-2xl font-bold">
              Create New File
            </CardTitle>
            <IoMdClose
              onClick={() => setNewfileisopen(false)}
              className="text-white text-2xl cursor-pointer"
            />
          </CardHeader>

          <form>
            <CardContent>
              <div className="flex flex-col gap-4">
                {/* File Name Input */}
                <div>
                  <label className="text-sm text-zinc-300 mb-1 block">
                    File Name
                  </label>
                  <Input
                    onChange={(e) => setfilename(e.target.value)}
                    placeholder="Enter file name..."
                    className="bg-[#09090B] border-zinc-700 text-white"
                    value={filename}
                  />
                </div>

                {/* Dropdown for file extension */}
                <div>
                  <label className="text-sm text-zinc-300 mb-2 block">
                    Extension
                  </label>
                  <div className="dropdown w-full">
                    <label
                      tabIndex={0}
                      className="btn btn-sm w-full flex justify-between bg-[#09090B] border border-zinc-600 text-zinc-200 hover:bg-zinc-700 hover:border-zinc-500 hover:text-white transition-all"
                    >
                      <span className="flex items-center gap-2">
                        <img
                          className="h-[2vh]"
                          src={monacoLanguages.icon}
                          alt=""
                        />
                        {monacoLanguages.name}
                      </span>
                      {monacoLanguages.id}
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-end">
              <Button
                type="button"
                onClick={putdatainnewfiledata}
                className="bg-[#dedede] text-black mt-7"
              >
                Create File
              </Button>
            </CardFooter>
          </form>
        </Card>
      ) : (
        <Card className="w-[28vw] bg-black border border-zinc-800 shadow-2xl rounded-2xl p-6 relative">
          {/* Close Button */}
          <IoMdClose
            onClick={() => setNewfileisopen(false)}
            className="absolute top-4 right-4 text-zinc-400 hover:text-white text-xl cursor-pointer transition-colors"
          />

          {/* Header */}
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-white text-2xl font-semibold">
              Login Required
            </CardTitle>
            <p className="text-zinc-400 text-sm">
              Please log in to continue creating a new file.
            </p>
          </CardHeader>

          {/* Content */}
          <CardContent className="mt-6 flex flex-col items-center gap-4">
            <Link
              onClick={() => setNewfileisopen(false)}
              to="/profile"
              className="group relative w-full text-center bg-white text-black 
                 font-medium px-6 py-3 rounded-xl shadow-md
                 transition-all hover:bg-[#cdcdcd] duration-300 h hover:text-[#000000]"
            >
              <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">
                Login Now
              </span>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Newfile;
