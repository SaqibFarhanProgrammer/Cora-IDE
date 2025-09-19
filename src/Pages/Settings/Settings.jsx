import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Switch } from "../../components/ui/switch";
import { Sun, Moon, LogOut, Trash2, User } from "lucide-react";
import { Context } from "../../context/context";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = React.useState(false);
  const { profiledata } = useContext(Context);

  return (
    <div className="h-[100%] w-full flex justify-center items-center bg-[#0a0b0d] text-white">
      <Card className="w-full h-[100%] border border-white/10 bg-[#0a0b0d] shadow-xl rounded-2xl">
        <CardHeader className="border-b border-white/10 pb-4">
          <CardTitle className="text-2xl font-semibold flex items-center gap-2">
            <User className="w-6 h-6 text-white" /> Settings
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 pt-6">
          {/* Profile */}
          <div className="flex items-center justify-between p-4 rounded-xl border border-white/10 ]">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-white/20">
                <img
                  src={profiledata?.photoURL}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-white">
                  {profiledata?.name || "John Doe"}
                </h3>
                <p className="text-sm text-gray-400">
                  {profiledata?.email || "johndoe@email.com"}
                </p>
              </div>
            </div>
            <button
              to="/logout"
              className="flex items-center gap-2 px-4 py-2 text-red-300 hover:text-[#cf444b]"
            >
              Logout
            </button>
          </div>

          {/* Theme Control */}
          <div className="flex items-center justify-between p-4 rounded-xl border border-white/10 ">
            <span className="flex items-center gap-2 font-medium text-white">
              {darkMode ? (
                <Moon className="w-5 h-5 text-white" />
              ) : (
                <Sun className="w-5 h-5 text-white" />
              )}
              Theme Mode
            </span>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          </div>

          {/* Clear Files */}
          <div className="flex items-center justify-between p-4 rounded-xl border border-white/10 ">
            <span className="flex items-center gap-2 font-medium text-white">
              <Trash2 className="w-5 h-5 text-white" /> Clear Files
            </span>
            <Button className="border border-white text-white bg-transparent hover:bg-white hover:text-black">
              Clear
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
