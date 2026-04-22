"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const Page = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center px-4">

      {/* Background Blur */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-gray-300/60 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-gray-400/40 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-gray-300/50 rounded-full blur-[120px]" />
      </div>

      {/* Back */}
      <Link
        href="/"
        className="absolute top-5 left-5 z-20 flex items-center gap-2 text-sm text-gray-500 hover:text-black transition"
      >
        <ArrowLeft size={16} />
        Back
      </Link>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-xl shadow-md">
            D
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold mb-2 text-black">
            Welcome back
          </h1>

          <p className="text-sm text-gray-500">
            Sign in to continue
          </p>
        </div>

        {/* Form */}
        <div className="space-y-3">
          <input
            name="email"
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            className="w-full h-12 rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none focus:border-black transition"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full h-12 rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none focus:border-black transition"
          />

          {/* Main Button */}
          <button className="w-full h-12 rounded-xl bg-black text-white text-sm font-medium hover:scale-[1.02] active:scale-[0.98] transition-all">
            Sign In
          </button>

          {/* Secondary Button */}
          <Link
            href="/auth/signup"
            className="w-full h-12 rounded-xl border border-gray-200 flex items-center justify-center text-sm hover:bg-gray-50 transition"
          >
            Create Account
          </Link>

          <div className="flex items-center gap-3 py-1">
            <div className="h-px bg-gray-200 flex-1" />
            <span className="text-xs text-gray-400">or</span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <button className="w-full h-12 rounded-xl border border-gray-200 bg-white text-sm hover:bg-gray-50 transition">
            Continue with Google
          </button>
        </div>

        <p className="text-[11px] text-gray-400 text-center mt-8 leading-relaxed">
          By continuing, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Page;