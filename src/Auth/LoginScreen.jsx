import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { CardHeader, CardTitle } from "../components/ui/card";
import { Context } from "../context/context";
import { FcGoogle } from "react-icons/fc";

export default function Loginscreen() {
  const [isSignup, setIsSignup] = useState(true);
  const { RegisterUser, signUser, createwithgoogle } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (isSignup) {
      RegisterUser(data.email, data.password);
    } else {
      signUser(data.email, data.password);
    }
  };

  return (
    <div className="h-[90%] mx-auto w-[80vw] flex items-center justify-center px-4">
      <div className="w-full bg-zinc-950 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-zinc-800">
        {/* Left - Image */}
        <div className="hidden relative md:flex items-center justify-center bg-zinc-900">
          <img
            src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1200"
            alt="Background"
            className="w-full h-full object-cover absolute opacity-70"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-8 text-center">
            <h2 className="text-3xl font-bold text-white">
              {isSignup ? "Welcome to Our App" : "Welcome Back"}
            </h2>
            <p className="text-zinc-300 mt-3 max-w-xs">
              {isSignup
                ? "Sign up today and explore new possibilities."
                : "Login to continue to your dashboard."}
            </p>
          </div>
        </div>

        {/* Right - Form */}
        <div className="p-8 md:p-12 text-white flex items-center justify-center">
          <div className="max-w-md w-full">
            <CardHeader className="px-0 py-0 mb-6 text-center">
              <CardTitle className="text-3xl font-bold text-white">
                {isSignup ? "Create Account" : "Login"}
              </CardTitle>
              <p className="text-sm text-zinc-400 mt-2">
                {isSignup
                  ? "Fill in your details to get started."
                  : "Enter your credentials to access your account."}
              </p>
            </CardHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <InputField
                label="Email"
                type="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
                error={errors.email?.message}
              />

              <InputField
                label="Password"
                type="password"
                placeholder="At least 8 characters"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                error={errors.password?.message}
              />

              <Button
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg font-semibold transition"
              >
                {isSignup ? "Sign Up" : "Login"}
              </Button>

              {/* Divider */}
              <div className="flex items-center gap-2 my-4">
                <span className="flex-grow h-px bg-zinc-700"></span>
                <span className="text-sm text-zinc-400">OR</span>
                <span className="flex-grow h-px bg-zinc-700"></span>
              </div>

              {/* Google Login */}
              <button
                onClick={createwithgoogle}
                type="button"
                className="w-full flex items-center justify-center gap-2 py-2 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition"
              >
                <FcGoogle className="w-5 h-5" />
                <span>Continue with Google</span>
              </button>

              {/* Toggle Login/Signup */}
              <div className="text-center text-sm text-zinc-400 mt-6">
                {isSignup ? (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsSignup(false)}
                      className="underline text-white"
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
                      className="underline text-white"
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

// ✅ Reusable Input Component
const InputField = React.forwardRef(({ label, error, ...props }, ref) => (
  <div>
    <label className="block text-sm text-zinc-300 mb-1">{label}</label>
    <Input
      ref={ref}
      {...props}
      className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500"
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
));
