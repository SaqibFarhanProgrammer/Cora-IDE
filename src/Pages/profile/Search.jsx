import React, { useContext } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Search } from "lucide-react";
import { Context } from "../../context/context";

const SearchBar = () => {
  const { searchfilter, setsearchfilter, files, setfiles, setfilterdfiles } =
    useContext(Context);

  const filter = () => {
    if (files) {
      const filterdfile = files.filter((file) => {
        return searchfilter === file.title;
      });
      setfilterdfiles(filterdfile);
    } else {
      console.log("No files found");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-2xl mx-auto mt-20 mb-8">
      {/* Input Field */}
      <div className="relative w-full sm:flex-1">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
        <Input
          onChange={(e) => {
            setsearchfilter(e.target.value);
          }}
          value={searchfilter}
          id="search-input"
          type="text"
          placeholder="Search files..."
          className="pl-9 pr-10 bg-[#151516] border border-zinc-700 text-white placeholder:text-zinc-500 w-full"
        />
      </div>

      {/* Button */}
      <Button
        onClick={filter}
        className="bg-white hover:bg-zinc-300 text-black w-full sm:w-auto px-6"
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
