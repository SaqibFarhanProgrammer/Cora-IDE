import React, { useContext, useState } from "react";
import { Button } from "../components/ui/button";
import { CardHeader, CardTitle } from "../components/ui/card";
import { FcGoogle } from "react-icons/fc";
import "../App.css";
import { Context } from "../context/context";
import loginimg from "../assets/images/PinDown.io_@jenmaguiree_1758250487.jpg";

export default function Loginscreen() {
  const [isSignup, setIsSignup] = useState(true);

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
    profileimage,
    autherrormessage,
  } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      RegisterUser(email, password);
      setEmail("");
      setPassword("");
    } else {
      signUser(email, password);
      setEmail("");
      setPassword("");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = async () => {
      const sring = reader.result;
      setprofileimage(sring);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="h-[77%] mt-10 mx-auto  w-[70vw] flex items-center justify-center px-3">
      <div className="w-full bg-zinc-950 rounded-xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-zinc-800">
        <div className="loginform hidden relative md:flex items-center justify-center ">
          <img
            src={loginimg}
            alt="Background"
            className="w-full h-full object-cover absolute loginform"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 flex flex-col items-center justify-center p-8 text-center"></div>
        </div>

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
                  <div className="flex flex-col items-center mb-6">
                    {/* Profile Image Upload */}
                    <label className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-zinc-700 cursor-pointer hover:border-purple-400 transition group shadow-md">
                      {profileimage ? (
                        <img
                          src={profileimage}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-zinc-400 text-xs group-hover:text-zinc-400 transition">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mb-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                          Upload
                        </div>
                      )}

                      {profileimage && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition">
                          Change
                        </div>
                      )}

                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>

                    <p className="text-xs text-zinc-400 mt-2">
                      Profile Picture
                    </p>
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
                    maxLength={200}
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
              {autherrormessage ? (
                <p
                  className="text-center text-red-400 font-medium 
  text-[3vw] sm:text-[2vw] md:text-[1vw] lg:text-[0.9vw] 
  mt-1 leading-tight"
                >
                  {autherrormessage}
                </p>
              ) : null}
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-900 rounded-md text-sm outline-none border border-zinc-700"
              />

              <Button
                type="submit"
                className="w-full bg-purple-900 loginbtn text-white py-2 rounded-md font-medium transition text-sm"
              >
                {isSignup ? "Sign Up" : "Login"}
              </Button>
            </form>

            <div className="mt-4">
              <Button
                onClick={createwithgoogle}
                className="loginwithgoogle w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 rounded-md py-2 text-sm font-medium"
              >
                <FcGoogle size={18} /> Continue with Google
              </Button>
            </div>

            <p className="text-xs text-center text-zinc-400 mt-3">
              {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
              <span
                onClick={() => setIsSignup(!isSignup)}
                className="text-zinc-300 cursor-pointer hover:underline"
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
