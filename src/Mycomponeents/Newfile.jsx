import React, { useContext, useState } from "react";
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

const Newfile = () => {
  const { setfilename, filename, setNewfileisopen, putdatainnewfiledata } =
    useContext(Context);
  const monacoLanguages = {
    name: "JavaScript",
    id: "javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  };

  return (
    <div className="h-screen w-full backdrop-blur-[10px] fixed inset-0 z-20 flex justify-center items-center">
      <Card className="w-[40vw] bg-[#0A0A0A] border border-zinc-800 shadow-xl">
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
    </div>
  );
};

export default Newfile;
