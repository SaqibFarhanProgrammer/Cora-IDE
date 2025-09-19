import React, { useContext, useState } from "react";
import { Button } from "../components/ui/button";
import { CardHeader, CardTitle } from "../components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { Context } from "../context/context";
import loginimg from "../assets/images/WhatsApp Image 2025-09-10 at 7.59.48 PM.jpeg";

export default function Loginscreen() {
  const [isSignup, setIsSignup] = useState(true);
  const [profileImage, setProfileImage] = useState(null);

  const {
    RegisterUser,
    signUser,
    createwithgoogle,
    name,
    setName,
    description,
    setDescription,
    tagline,
    setTagline,
    email,
    setEmail,
    password,
    setprofileimage,
    setPassword,
  } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      RegisterUser(email, password);
    } else {
      signUser(email, password);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = async () => {
      const sring = reader.result;
      setProfileImage(sring);
      setprofileimage(sring);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="h-[75%] mt-10 mx-auto w-[70vw] flex items-center justify-center px-3">
      <div className="w-full bg-zinc-950 rounded-xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-zinc-800">
        {/* Left */}
        <div className="hidden relative md:flex items-center justify-center bg-zinc-900">
          <img
            src={loginimg}
            alt="Background"
            className="w-full h-full object-cover absolute opacity-60"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
            <h2 className="text-2xl font-semibold text-white">
              {isSignup ? "Welcome to Our App" : "Welcome Back"}
            </h2>
            <p className="text-zinc-300 mt-2 text-sm max-w-xs">
              {isSignup
                ? "Sign up today and explore new possibilities."
                : "Login to continue to your dashboard."}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="p-6 md:p-8 text-white flex items-center justify-center">
          <div className="max-w-sm w-full">
            <CardHeader className="px-0 py-0 mb-4 text-center">
              <CardTitle className="text-2xl font-bold text-white">
                {isSignup ? "Create Account" : "Login"}
              </CardTitle>
              <p className="text-xs text-zinc-400 mt-1">
                {isSignup
                  ? "Fill in your details to get started."
                  : "Enter your credentials to access your account."}
              </p>
            </CardHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignup && (
                <>
                  {/* Profile Image Upload */}
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-zinc-700 cursor-pointer">
                      {profileImage ? (
                        <img
                          src={profileImage}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-zinc-400">
                          No Image
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="mt-2 text-xs text-zinc-400"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 bg-zinc-900 rounded-md text-sm outline-none border border-zinc-700"
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-3 py-2 bg-zinc-900 rounded-md text-sm outline-none border border-zinc-700"
                  />
                  <input
                    type="text"
                    placeholder="Tagline"
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                    className="w-full px-3 py-2 bg-zinc-900 rounded-md text-sm outline-none border border-zinc-700"
                  />
                </>
              )}

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-900 rounded-md text-sm outline-none border border-zinc-700"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-900 rounded-md text-sm outline-none border border-zinc-700"
              />

              <Button
                type="submit"
                className="w-full bg-zinc-900 loginbtn text-white py-2 rounded-md font-medium transition text-sm"
              >
                {isSignup ? "Sign Up" : "Login"}
              </Button>
            </form>

            {/* Continue with Google */}
            <div className="mt-4">
              <Button
                onClick={createwithgoogle}
                className="loginwithgoogle w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 rounded-md py-2 text-sm font-medium"
              >
                <FcGoogle size={18} /> Continue with Google
              </Button>
            </div>

            {/* Toggle Signup / Login */}
            <p className="text-xs text-center text-zinc-400 mt-3">
              {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
              <span
                onClick={() => setIsSignup(!isSignup)}
                className="text-zinc-200 cursor-pointer hover:underline"
              >
                {isSignup ? "Login here" : "Sign up"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
