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
import { Link } from "react-router-dom";

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
    <div className="fixed inset-0 z-20 flex justify-center items-center bg-black/50 backdrop-blur-[10px] p-4">
      {!isloginscreenopen ? (
        <Card className="w-[40vw] max-xl:w-[50vw] max-lg:w-[60vw] max-md:w-[80vw] max-sm:w-[95vw] bg-[#0A0A0A] border border-zinc-800 shadow-xl rounded-2xl transition-all duration-300">
          {/* Header */}
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-white text-xl sm:text-2xl font-bold">
              Create New File
            </CardTitle>
            <IoMdClose
              onClick={() => setNewfileisopen(false)}
              className="text-white text-2xl cursor-pointer hover:text-zinc-400 transition-colors"
            />
          </CardHeader>

          {/* Form */}
          <form>
            <CardContent className="flex flex-col gap-5">
              {/* File Name */}
              <div>
                <label className="text-sm text-zinc-300 mb-1 block">
                  File Name
                </label>
                <Input
                  onChange={(e) => setfilename(e.target.value)}
                  placeholder="Enter file name..."
                  className="bg-[#09090B] border-zinc-700 text-white placeholder:text-zinc-500"
                  value={filename}
                />
              </div>

              {/* File Extension */}
              <div>
                <label className="text-sm text-zinc-300 mb-2 block">
                  Extension
                </label>
                <div className="dropdown w-full">
                  <label
                    tabIndex={0}
                    className="btn btn-sm w-full flex justify-between bg-[#09090B] border border-zinc-600 text-zinc-200 hover:bg-zinc-700 hover:border-zinc-500 hover:text-white transition-all"
                  >
                    <span className="flex items-center gap-2 text-sm sm:text-base">
                      <img
                        className="h-[2vh] w-[2vh] object-contain"
                        src={monacoLanguages.icon}
                        alt="lang"
                      />
                      {monacoLanguages.name}
                    </span>
                    <span className="text-xs sm:text-sm">
                      {monacoLanguages.id}
                    </span>
                  </label>
                </div>
              </div>
            </CardContent>

            {/* Footer */}
            <CardFooter className="flex justify-end">
              <Button
                type="button"
                onClick={putdatainnewfiledata}
                className="bg-[#dedede] text-black mt-6 hover:bg-[#cfcfcf] transition-all"
              >
                Create File
              </Button>
            </CardFooter>
          </form>
        </Card>
      ) : (
        // LOGIN REQUIRED CARD
        <Card className="w-[30vw] max-xl:w-[40vw] max-lg:w-[50vw] max-md:w-[70vw] max-sm:w-[90vw] bg-black border border-zinc-800 shadow-2xl rounded-2xl p-6 relative transition-all duration-300">
          <IoMdClose
            onClick={() => setNewfileisopen(false)}
            className="absolute top-4 right-4 text-zinc-400 hover:text-white text-xl cursor-pointer transition-colors"
          />

          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-white text-xl sm:text-2xl font-semibold">
              Login Required
            </CardTitle>
            <p className="text-zinc-400 text-sm sm:text-base">
              Please log in to continue creating a new file.
            </p>
          </CardHeader>

          <CardContent className="mt-6 flex flex-col items-center gap-4">
            <Link
              onClick={() => setNewfileisopen(false)}
              to="/profile"
              className="group relative w-full text-center bg-white text-black 
                 font-medium px-6 py-3 rounded-xl shadow-md
                 transition-all hover:bg-[#cdcdcd] duration-300 hover:text-[#000000]"
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
