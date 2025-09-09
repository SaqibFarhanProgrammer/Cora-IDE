import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardHeader, CardTitle } from "../components/ui/card";

export default function Loginscreen() {
  return (
    <div className="h-[80vh] mx-auto w-[80vw] flex items-center justify-center px-4">
      <div className="w-full bg-zinc-950 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left - MagnetLines instead of image */}
        <div className="hidden relative md:flex items-center justify-center bg-zinc-900">
          <img
            src="https://www.pinterest.com/pin/5981412001285118/"
            alt="Background"
            className="w-[100%] h-[100%] object-cover absolute"
          />{" "}
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
                <label className="block text-sm text-zinc-300 mb-1">Name</label>
                <Input
                  placeholder="Full name"
                  className="w-full bg-zinc-900 border-zinc-700 text-white"
                />
              </div>

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

              <div>
                <label className="block text-sm text-zinc-300 mb-1">
                  Tagline
                </label>
                <Input
                  placeholder="Short tagline (eg. Frontend dev)"
                  className="w-full bg-zinc-900 border-zinc-700 text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-zinc-300 mb-1">
                  Description
                </label>
                <textarea
                  rows={4}
                  placeholder="A short bio or description"
                  className="w-full rounded-md border border-zinc-700 bg-zinc-900 p-2 text-sm text-white resize-none focus:outline-none focus:ring-1 focus:ring-zinc-600"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-white text-black py-2 rounded-md font-medium hover:opacity-90"
                >
                  Create account
                </Button>
              </div>

              <div className="text-center text-sm text-zinc-400">
                Already have an account?{" "}
                <button className="underline">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ Reusable input component
function InputField({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm text-zinc-300 mb-1">{label}</label>
      <Input
        {...props}
        className="w-full bg-zinc-900 border-zinc-700 text-white"
      />
    </div>
  );
}
