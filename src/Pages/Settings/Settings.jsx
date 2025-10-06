import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Switch } from "../../components/ui/switch";
import { Context } from "../../context/context";
import profileIcon from "../../assets/images/images (8).jpg";
import { User, Moon, Sun, Trash2, Github, Linkedin } from "lucide-react";

export default function SettingsPage() {
  console.log("renderprofile");

  const [darkMode, setDarkMode] = React.useState(false);
  const { profiledata, signout } = useContext(Context);

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#0a0b0d] text-white p-4">
      <Card className="w-full   border border-white/10 bg-[#0a0b0d] shadow-xl rounded-2xl flex flex-col">
        <CardHeader className="border-b border-white/10 pb-4">
          <CardTitle className="text-2xl font-semibold flex items-center gap-2">
            <User className="w-6 h-6 text-white" /> Settings
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 pt-6 flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-white/20">
                <img
                  src={
                    profiledata?.profileIMG
                      ? profiledata?.profileIMG
                      : profileIcon
                  }
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-medium text-white">
                  {profiledata?.name || "John Doe"}
                </h3>
                <p className="text-sm text-gray-400">
                  {profiledata?.email || "johndoe@email.com"}
                </p>
              </div>
            </div>
            <button
              onClick={signout}
              className="flex items-center justify-center gap-2 px-3 py-2 rounded-md text-red-300 hover:text-[#cf444b] transition"
            >
              Logout
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 rounded-xl border border-white/10">
            <span className="flex items-center gap-2 font-medium text-white">
              {darkMode ? (
                <Moon className="w-5 h-5 text-white" />
              ) : (
                <Sun className="w-5 h-5 text-white via-gray-950" />
              )}
              Theme Mode
            </span>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 rounded-xl border border-white/10">
            <span className="flex items-center gap-2 font-medium text-white">
              <Trash2 className="w-5 h-5 text-white" /> Clear Files
            </span>
            <Button className="border border-purple-500 text-white bg-transparent hover:bg-purple-500 hover:text-black transition">
              Clear
            </Button>
          </div>
        </CardContent>

        <div className="mt-auto border-t border-white/10 p-6 rounded-b-2xl text-center">
          <h3 className="text-lg font-semibold text-white mb-2">Cora IDE</h3>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xl mx-auto mb-4">
            Cora IDE is a modern, web-based code editor built for simplicity and
            speed. It supports JavaScript programming with an integrated HTML,
            CSS, and JS compiler. Featuring authentication, profile system, and
            a minimal UI, Cora IDE is completely free to use.
          </p>

          <span className="block text-xs mb-2 text-gray-500 pt-8">
            Developed by{" "}
            <span className="font-medium text-white">Saqib Farhan</span>
          </span>

          <div className="flex flex-wrap justify-center gap-6">
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
