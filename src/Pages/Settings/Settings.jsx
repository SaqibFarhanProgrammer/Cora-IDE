import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Switch } from "../../components/ui/switch";
import { Sun, Moon, LogOut, Trash2, User } from "lucide-react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div className="h-[100%] w-full bg-[#09090B] flex justify-center items-center text-white">
      <Card className="w-full h-[100%] border border-white/10 bg-[#000000] shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold flex items-center gap-2">
            <User className="w-6 h-6 text-white" /> Settings
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Profile */}
          <div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-[#111113]">
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/60"
                alt="Profile"
                className="w-12 h-12 rounded-full border border-white/20"
              />
              <div>
                <h3 className="font-medium text-white">John Doe</h3>
                <p className="text-sm text-gray-400">johndoe@email.com</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="border border-white text-white hover:bg-white hover:text-black"
            >
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </Button>
          </div>

          {/* Theme Control */}
          <div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-[#111113]">
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
          <div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-[#111113]">
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
