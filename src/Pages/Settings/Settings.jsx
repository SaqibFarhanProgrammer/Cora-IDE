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
import { User, Moon, Sun, Trash2, Github, Linkedin } from "lucide-react";

export default function SettingsPage() {
  const { profiledata, signout, Theme, setTheme } = useContext(Context);

  // -------------------- ONLINE VIEW --------------------
  if (navigator.onLine) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center bg-[#0a0b0d] text-white p-3 sm:p-6">
        <Card className="w-full max-w-3xl border border-white/10 bg-[#0a0b0d] shadow-xl rounded-2xl flex flex-col">
          {/* Header */}
          <CardHeader className="border-b border-white/10 pb-4 flex items-center justify-between">
            <CardTitle className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> Settings
            </CardTitle>
          </CardHeader>

          {/* Content */}
          <CardContent className="space-y-5 sm:space-y-6 pt-6 flex-1">
            {/* Profile Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-4 sm:p-5 rounded-xl border border-white/10 bg-[#111214]">
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-white/20 shadow-md">
                  <img
                    src={profiledata?.profileIMG || profileIcon}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-medium text-base sm:text-lg text-white truncate">
                    {profiledata?.name || "John Doe"}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 truncate">
                    {profiledata?.email || "johndoe@email.com"}
                  </p>
                </div>
              </div>

              <Button
                onClick={signout}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition w-full sm:w-auto"
              >
                Logout
              </Button>
            </div>

            {/* Theme Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 sm:p-5 rounded-xl border border-white/10 bg-[#111214]">
              <span className="flex items-center gap-2 font-medium text-base text-white">
                {Theme ? (
                  <Moon className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Sun className="w-5 h-5 text-yellow-300" />
                )}
                Theme Mode
              </span>
              <Button
                onClick={() => setTheme(!Theme)}
                className="px-4 py-2 rounded-lg bg-transparent border border-white/20 text-white hover:bg-white/10 transition w-full sm:w-auto"
              >
                {Theme ? "Dark" : "Light"}
              </Button>
            </div>

            {/* Clear Files Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 sm:p-5 rounded-xl border border-white/10 bg-[#111214]">
              <span className="flex items-center gap-2 font-medium text-base text-white">
                <Trash2 className="w-5 h-5 text-purple-400" /> Clear Files
              </span>
              <Button className="px-4 py-2 border border-purple-500 text-white bg-transparent hover:bg-purple-500 hover:text-black transition rounded-lg w-full sm:w-auto">
                Clear
              </Button>
            </div>
          </CardContent>

          {/* Footer */}
          <div className="mt-auto border-t border-white/10 p-6 text-center bg-[#0c0d0f] rounded-b-2xl">
            <h3 className="text-lg font-semibold text-white mb-2">
              Cora IDE
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xl mx-auto mb-4">
              Cora IDE is a modern, web-based code editor built for simplicity
              and speed. It supports JavaScript programming with an integrated
              HTML, CSS, and JS compiler. Featuring authentication, profile
              system, and a minimal UI, Cora IDE is completely free to use.
            </p>

            <span className="block text-xs mb-3 text-gray-500">
              Developed by{" "}
              <span className="font-medium text-white">Saqib Farhan</span>
            </span>

            <div className="flex flex-wrap justify-center gap-5 sm:gap-8">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-400 hover:text-white text-sm"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-400 hover:text-white text-sm"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  // -------------------- OFFLINE VIEW --------------------
  else {
    return (
      <div className="w-full min-h-screen bg-[#0a0b0d] flex flex-col items-center justify-center text-zinc-400 p-6 text-center">
        <div className="flex flex-col items-center gap-4 max-w-sm">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-zinc-900 flex items-center justify-center shadow-lg border border-zinc-800">
            <FiWifiOff size={38} className="text-red-400 animate-pulse" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            You’re Offline
          </h1>

          <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
            Please check your internet connection and try again.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-3 px-6 py-2.5 rounded-xl bg-zinc-700 text-white font-semibold 
                       hover:bg-zinc-600 active:scale-95 transition-all duration-300 shadow-md w-full sm:w-auto"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
}
