import React, { useContext, useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { VscOpenPreview } from "react-icons/vsc";
import { Context } from "../../context/context";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/Firebase";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CodefileCard = () => {
  const navigate = useNavigate();
  const { files,  setfiles, filterdfiles, profiledata, setcompiledCode } =
    useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const listToRender =
    filterdfiles && filterdfiles.length > 0 ? filterdfiles : files;
  const skeletonColor = "#1f1e1e";

  async function deletefile(file) {
    try {
      const userDoc = doc(db, "users", profiledata?.uid);

      // Get the latest files from Firestore first (optional)
      const updatedFiles = files.filter((f) => f.title !== file.title);

      await updateDoc(userDoc, { files: updatedFiles });
      console.log("File deleted successfully!");
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  }

  function viewincode(data) {
    setcompiledCode(data.code);
    navigate("/");
  }

  return (
    <>
      {listToRender?.map((data, i) => (
        <div
          key={i}
          className="bg-[#0d0d0f] p-5 border border-zinc-800 rounded-xl shadow-md hover:shadow-lg hover:border-zinc-600 transition-all duration-200 w-full h-auto flex flex-col"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              {loading ? (
                <Skeleton width={120} height={20} baseColor={skeletonColor} />
              ) : (
                <h3 className="font-semibold text-lg text-white">
                  {data.title}
                </h3>
              )}
              {loading ? (
                <Skeleton width={50} height={14} baseColor={skeletonColor} />
              ) : (
                <p className="text-xs text-zinc-400">File</p>
              )}
            </div>
            <div className="flex gap-3 text-zinc-400">
              {loading ? (
                <Skeleton width={90} height={24} baseColor={skeletonColor} />
              ) : (
                <>
                  <button
                    onClick={() => viewincode(data)}
                    className="hover:text-green-400 transition flex gap-2 items-center"
                  >
                    view in code <VscOpenPreview />
                  </button>
                  <button
                    onClick={() => {
                      deletefile(data);
                      setfiles((prev) =>
                        prev.filter((f) => f.title !== data.title)
                      );
                    }}
                    className="hover:text-red-500 transition"
                  >
                    <FaTrash />
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="bg-[#151516] h-[20vh] overflow-y-scroll codecard rounded-lg p-3 text-sm font-mono text-zinc-200">
            {loading ? (
              <Skeleton count={5} height={16} baseColor={skeletonColor} />
            ) : (
              <pre className="whitespace-pre-wrap break-words">{data.code}</pre>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default CodefileCard;
