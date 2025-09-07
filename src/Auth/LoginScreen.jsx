import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { CardHeader, CardTitle } from "../components/ui/card";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../config/Firebase";

export default function Loginscreen() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    tagline: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  async function signupUser({ name, email, password, description, tagline }) {
    try {
      setLoading(true);
      setErrorMsg("");
      setSuccessMsg("");

      // Firebase Auth create user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Firestore user profile
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        description,
        tagline,
        files: [],
        createdAt: new Date(),
      });

      setSuccessMsg("Account created successfully ✅");
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser(formData);
  };

  return (
    <div className="h-[80vh] mx-auto w-[80vw] flex items-center justify-center px-4">
      <div className="w-full bg-zinc-950 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left - Background Image */}
        <div className="hidden relative md:flex items-center justify-center bg-zinc-900">
          <img
            src="https://via.placeholder.com/600x800"
            alt="Background"
            className="w-[100%] h-[100%] object-cover absolute"
          />
        </div>

        {/* Right - Form */}
        <div className="p-8 md:p-10 text-white">
          <div className="max-w-md mx-auto">
            <CardHeader className="px-0 py-0 mb-6">
              <CardTitle className="text-3xl font-bold text-white">
                Create your account
              </CardTitle>
              <p className="text-sm text-zinc-400 mt-2">
                Join now and get access to your dashboard.
              </p>
            </CardHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
              />
              <InputField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
              <InputField
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="At least 8 characters"
              />
              <InputField
                label="Tagline"
                name="tagline"
                value={formData.tagline}
                onChange={handleChange}
                placeholder="Short tagline (eg. Frontend dev)"
              />
              <div>
                <label className="block text-sm text-zinc-300 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="A short bio or description"
                  className="w-full rounded-md border border-zinc-700 bg-zinc-900 p-2 text-sm text-white resize-none focus:outline-none focus:ring-1 focus:ring-zinc-600"
                />
              </div>

              {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
              {successMsg && <p className="text-green-500 text-sm">{successMsg}</p>}

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white text-black py-2 rounded-md font-medium hover:opacity-90"
                >
                  {loading ? "Creating..." : "Create account"}
                </Button>
              </div>

              <div className="text-center text-sm text-zinc-400">
                Already have an account?{" "}
                <button type="button" className="underline">
                  Sign in
                </button>
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
