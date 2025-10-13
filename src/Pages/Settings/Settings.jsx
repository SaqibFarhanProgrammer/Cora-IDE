import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import { FiWifiOff } from "react-icons/fi";
import { Button } from "../../components/ui/button";
import { Context } from "../../context/context";
import profileIcon from "../../assets/images/images (8).jpg";
import { User, Trash2, Github, Linkedin } from "lucide-react";

export default function SettingsPage() {
  const { profiledata, signout } = useContext(Context);

  if (navigator.onLine) {
    return (
      <div className="h-screen w-[100%] flex justify-center items-center bg-[#0a0b0d] text-white px-3 py-6 sm:px-6">
        <Card className="w-[100%] border border-white/10 bg-[#0a0b0d] shadow-xl rounded-2xl flex flex-col">
          <CardHeader className="border-b border-white/10 pb-4 px-4 sm:px-6">
            <CardTitle className="text-xl sm:text-2xl text-white font-semibold flex items-center gap-2">
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> Settings
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6 pt-6 px-4 sm:px-6 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 rounded-xl border border-white/10">
              <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-white/20">
                  <img
                    src={profiledata?.profileIMG || profileIcon}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-medium text-white text-base sm:text-lg">
                    {profiledata?.name || "John Doe"}
                  </h3>
                  <p className="text-sm text-gray-400 break-words">
                    {profiledata?.email || "johndoe@email.com"}
                  </p>
                </div>
              </div>
              <button
                onClick={signout}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-md text-red-300 hover:text-[#cf444b] transition text-sm sm:text-base"
              >
                Logout
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 rounded-xl border border-white/10">
              <span className="flex items-center gap-2 font-medium text-white text-sm sm:text-base">
                <Trash2 className="w-5 h-5 text-white" /> Clear Files
              </span>
              <Button className="border border-zinc-500 text-white bg-transparent hover:bg-zinc-500 transition text-sm sm:text-base">
                Clear
              </Button>
            </div>
          </CardContent>

         <div className="mt-auto border-t border-white/10 px-6 py-10 rounded-b-2xl bg-[#0b0c0e]/60 backdrop-blur-md">
  <div className="max-w-3xl mx-auto text-center space-y-6">
    <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
      Cora IDE
    </h3>

    <p className="text-[14px] sm:text-[15px] leading-relaxed text-gray-400 font-light tracking-wide">
      <span className="text-gray-300 font-medium">Cora IDE</span> is a modern
      web-based code editor designed with simplicity and speed in mind.  
      Built to enhance your workflow, it integrates{" "}
      <span className="text-white/90">HTML, CSS</span> and{" "}
      <span className="text-white/90">JavaScript</span> compilation directly in
      your browser — providing an elegant environment for writing, testing, and
      sharing your code.  
      With its clean interface, authentication system, and profile support,
      <span className="text-white/90 font-medium"> Cora IDE</span> is built for
      creators who value design and performance.
    </p>
  </div>

  <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-10 border-t border-white/10 pt-5 text-center sm:text-left">
    <span className="text-xs sm:text-sm text-gray-500">
      © {new Date().getFullYear()}{" "}
      <span className="font-medium text-white">Cora IDE</span>. All rights
      reserved.
    </span>

    <div className="flex justify-center sm:justify-end gap-5">
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
      >
        <Github className="w-4 h-4" /> GitHub
      </a>
      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
      >
        <Linkedin className="w-4 h-4" /> LinkedIn
      </a>
    </div>
  </div>

  <div className="mt-5 text-center">
    <span className="block text-xs text-gray-500">
      Developed by{" "}
      <span className="font-medium text-white hover:text-gray-300 transition-colors">
        Saqib Farhan
      </span>
    </span>
  </div>
</div>
      
        </Card>
      </div>
    );
  } else {
    return (
      <div className="w-full h-[100%] bg-[#0a0b0d] flex flex-col items-center justify-center text-zinc-400 px-4 py-10">
        <div className="flex flex-col items-center gap-3 text-center max-w-xs sm:max-w-sm md:max-w-md">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-zinc-900 flex items-center justify-center shadow-lg border border-zinc-800">
            <FiWifiOff size={38} className="text-red-400 animate-pulse" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
            You’re Offline
          </h1>
          <p className="text-sm sm:text-base text-zinc-500 leading-relaxed px-2">
            Please check your internet connection and try again.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="w-full mt-3 sm:w-auto px-6 py-2.5 rounded-xl bg-zinc-700 text-white font-semibold hover:bg-zinc-600 active:scale-95 transition-all duration-300 shadow-md text-sm sm:text-base"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
}
