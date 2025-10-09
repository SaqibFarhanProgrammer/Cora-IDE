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
    compiledCode,
    isloginscreenopen,
  } = useContext(Context);

  const monacoLanguages = {
    name: "JavaScript",
    id: "javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  };

  return (
    <div className="fixed inset-0 z-20 flex justify-center items-center bg-black/50 backdrop-blur-md p-3">
      {!isloginscreenopen ? (
        <Card className="w-[28vw] max-xl:w-[35vw] max-lg:w-[45vw] max-md:w-[60vw] max-sm:w-[90vw] bg-[#0B0B0B] border border-zinc-800 shadow-2xl rounded-2xl transition-all duration-300 p-4">
          <CardHeader className="flex justify-between items-center pb-2">
            <CardTitle className="text-white text-lg sm:text-xl font-semibold tracking-tight">
              Create New File
            </CardTitle>
            <IoMdClose
              onClick={() => setNewfileisopen(false)}
              className="text-zinc-300 text-lg sm:text-xl cursor-pointer hover:text-white transition-colors"
            />
          </CardHeader>

          <form>
            <CardContent className="flex flex-col gap-4 sm:gap-5">
              <div>
                <label className="text-xs text-zinc-400 mb-1 block">
                  File Name
                </label>
                <Input
                  onChange={(e) => setfilename(e.target.value)}
                  placeholder="Enter file name..."
                  className="bg-[#09090B] border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:border-zinc-500 transition-all"
                  value={filename}
                />
              </div>

              {compiledCode === "" && (
                <p className="text-[3.5vw] sm:text-[0.8vw] text-red-500 font-medium">
                  Code Editor Is Empty
                </p>
              )}

              <div>
                <label className="text-xs text-zinc-400 mb-2 block">
                  Extension
                </label>
                <div className="w-full">
                  <div className="flex justify-between items-center bg-[#09090B] border border-zinc-700 text-zinc-300 hover:border-zinc-500 transition-all rounded-lg px-3 py-2 text-xs sm:text-sm">
                    <span className="flex items-center gap-2">
                      <img
                        className="h-4 w-4 object-contain"
                        src={monacoLanguages.icon}
                        alt="lang"
                      />
                      {monacoLanguages.name}
                    </span>
                    <span className="text-zinc-500 text-xs">
                      {monacoLanguages.id}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-end pt-2">
              <Button
                type="button"
                onClick={() => {
                  if (compiledCode === "") return;
                  putdatainnewfiledata();
                }}
                className={`text-black text-xs sm:text-sm font-medium rounded-lg px-4 py-2 transition-all shadow-md
    ${
      compiledCode === ""
        ? "bg-[#bfbfbf] hover:bg-[#a8a8a8]"
        : "bg-[#e5e5e5] hover:bg-[#cfcfcf]"
    }`}
              >
                Create File
              </Button>
            </CardFooter>
          </form>
        </Card>
      ) : (
        <Card className="w-[28vw] max-xl:w-[35vw] max-lg:w-[45vw] max-md:w-[60vw] max-sm:w-[90vw] bg-[#0B0B0B] border border-zinc-800 shadow-2xl rounded-2xl transition-all duration-300 p-5">
          <CardHeader className="flex justify-between items-center pb-2">
            <CardTitle className="text-white text-lg sm:text-xl font-semibold tracking-tight">
              Login Required
            </CardTitle>
            <IoMdClose
              onClick={() => setNewfileisopen(false)}
              className="text-zinc-300 text-lg sm:text-xl cursor-pointer hover:text-white transition-colors"
            />
          </CardHeader>

          <CardContent className="flex flex-col items-center gap-3 text-center">
            <p className="text-zinc-400 text-xs sm:text-sm">
              Please log in to continue creating a new file.
            </p>
          </CardContent>

          <CardFooter className="flex justify-center pt-2">
            <Link
              onClick={() => setNewfileisopen(false)}
              to="/profile"
              className="w-full text-center bg-[#e5e5e5] text-black text-xs sm:text-sm font-medium px-4 py-2 rounded-lg shadow-md hover:bg-[#cfcfcf] transition-all"
            >
              Login Now
            </Link>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default Newfile;
