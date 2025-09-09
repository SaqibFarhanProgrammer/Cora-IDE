import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardHeader, CardTitle } from "../components/ui/card";

export default function Loginscreen() {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="h-[80vh] mx-auto w-[80vw] flex items-center justify-center px-4">
      <div className="w-full bg-zinc-950 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left - Image */}
        <div className="hidden relative md:flex items-center justify-center bg-zinc-900">
          <img
            src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1200"
            alt="Background"
            className="w-full h-full object-cover absolute"
          />
        </div>

        {/* Right - Form */}
        <div className="p-8 md:p-10 text-white flex items-center justify-center">
          <div className="max-w-md w-full">
            <CardHeader className="px-0 py-0 mb-6">
              <CardTitle className="text-3xl font-bold text-white">
                {isSignup ? "Create an Account" : "Login"}
              </CardTitle>
              <p className="text-sm text-zinc-400 mt-2">
                {isSignup
                  ? "Join now and get access to your dashboard."
                  : "Welcome back! Please login to continue."}
              </p>
            </CardHeader>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {isSignup && <InputField label="Name" placeholder="Full name" />}

              <InputField
                label="Email"
                type="email"
                placeholder="you@example.com"
              />

              <InputField
                label="Password"
                type="password"
                placeholder="At least 8 characters"
              />

              {isSignup && (
                <>
                  <InputField
                    label="Tagline"
                    placeholder="Short tagline (eg. Frontend dev)"
                  />
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
                </>
              )}

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-white text-black py-2 rounded-md font-medium hover:opacity-90"
                >
                  {isSignup ? "Create Account" : "Login"}
                </Button>
              </div>

              <div className="text-center text-sm text-zinc-400">
                {isSignup ? (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsSignup(false)}
                      className="underline"
                    >
                      Sign in
                    </button>
                  </>
                ) : (
                  <>
                    Don’t have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsSignup(true)}
                      className="underline"
                    >
                      Sign up
                    </button>
                  </>
                )}
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
