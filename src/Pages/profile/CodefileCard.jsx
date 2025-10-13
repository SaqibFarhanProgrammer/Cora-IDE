import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { VscOpenPreview } from "react-icons/vsc";
import { Context } from "../../context/context";
import { doc } from "firebase/firestore";
import { db } from "../../config/Firebase";
import { updateDoc, arrayRemove } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const CodefileCard = () => {
const navigate = useNavigate();
  const { files, filterdfiles, profiledata ,setcompiledCode } = useContext(Context);

  const listToRender =
    filterdfiles && filterdfiles.length > 0 ? filterdfiles : files;

  async function deletefile(file) {
    try {
      const userDoc = doc(db, "users", profiledata?.uid); 
      await updateDoc(userDoc, {
        files: arrayRemove(file),
      });
      console.log("File deleted successfully!");
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  }



  function viewincode(data) {
    console.log(data.code);
    setcompiledCode(data.code
    )
    navigate("/")
  }

  return (
    <>
      {listToRender?.map((data, i) => (
        <div
          key={i}
          className="bg-[#0d0d0f] p-5 border border-zinc-800 rounded-xl shadow-md hover:shadow-lg hover:border-zinc-600 transition-all duration-200 w-full h-auto flex flex-col"
        >
          {/* File Info */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-lg text-white">{data.title}</h3>
              <p className="text-xs text-zinc-400">File</p>
            </div>
            <div className="flex gap-3 text-zinc-400">
              <button onClick={()=>{
                viewincode(data)
              }} className="hover:text-green-400 transition flex gap-2 items-center">
                view in code
                <VscOpenPreview />
              </button>
              <button
                onClick={() => {
                  deletefile(data);
                  window.location.reload();
                }}
                className="hover:text-red-500 transition"
              >
                <FaTrash />
              </button>
            </div>
          </div>

          <div className="bg-[#151516] h-[20vh] overflow-y-scroll codecard rounded-lg p-3 text-sm font-mono text-zinc-200">
            <pre className="whitespace-pre-wrap break-words">{data.code}</pre>
          </div>
        </div>
      ))}
    </>
  );
};

export default CodefileCard;
