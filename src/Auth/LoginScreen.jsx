import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardHeader, CardTitle } from "../components/ui/card";
import bg from "../../public/5d935ea5beb675da21f42ee58cd33454.jpg";

export default function Loginscreen() {
  const [issignup, setissignup] = useState(false);

  return (
    <div className="h-screen w-full flex items-center justify-center px-4">
      <div className="w-[75%] h-[85%] mb-10 border border-[#141414] rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left - Image with Gradient + Text */}
        <div className="hidden relative md:flex items-center justify-center bg-zinc-900">
          <img
            src={bg}
            alt="Background"
            className="w-full h-full object-cover absolute"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-[#000000]"></div>

          <div className="relative z-10 px-6 flex flex-col justify-center h-full">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              CORA IDE
            </h1>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-6">
              A modern{" "}
              <span className="text-white font-semibold">
                web-based code editor
              </span>{" "}
              built for developers.
              <br />
              <br />
              Enjoy a{" "}
              <span className="text-white font-semibold">clean interface</span>,
              <span className="text-white font-semibold">
                {" "}
                real-time collaboration
              </span>
              , and powerful editing tools to{" "}
              <span className="text-white font-semibold">
                boost your productivity
              </span>
              .
            </p>
            <p className="text-sm md:text-base text-zinc-400">
              Build, edit, and run your code directly in the browser — seamless
              and efficient.
            </p>
          </div>
        </div>

        {/* Right - Form */}
        <div className="p-8 md:p-10 text-white flex items-center justify-center">
          <div className="max-w-md w-full">
            <div className="transition-all duration-500 ease-in-out">
              <CardHeader className="px-0 py-0 mb-6">
                <CardTitle className="text-3xl font-bold text-white">
                  <span
                    className="inline-block transition-opacity duration-500"
                    key={issignup ? "login" : "signup"}
                  >
                    {!issignup ? "Create With Sign Up" : "Login"}
                  </span>
                </CardTitle>
                <p className="text-sm text-zinc-400 mt-2">
                  Join now and get access to your dashboard.
                </p>
              </CardHeader>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-zinc-900 border-zinc-700 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-300 mb-1">
                    Password
                  </label>
                  <Input
                    type="password"
                    placeholder="At least 8 characters"
                    className="w-full bg-zinc-900 border-zinc-700 text-white"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-white text-black py-2 rounded-md font-medium hover:opacity-90 transition-all duration-300"
                  >
                    {!issignup ? "Create Account" : "Log in"}
                  </Button>
                </div>

                <div className="text-center text-sm text-zinc-400">
                  Already have an account?{" "}
                  <button
                    onClick={() => setissignup(!issignup)}
                    className="underline cursor-pointer"
                  >
                    {issignup ? "Create Account" : "Log in"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
