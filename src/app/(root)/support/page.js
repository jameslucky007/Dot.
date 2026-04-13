"use client";
import React, { useState } from "react";

const Page = () => {
  const [form, setForm] = useState({
    email: "mark.johnson@gmail.com", // Pre-filled to match your reference
    password: "password123",
    rememberMe: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", form);
  };

  // Cube configurations: [left-pos, top-pos, size, animation-delay, duration]
  const cubes = [
    { l: "20%", t: "30%", s: "40px", d: "0s", dur: "4s" },
    { l: "60%", t: "15%", s: "55px", d: "1.5s", dur: "5s" },
    { l: "40%", t: "50%", s: "60px", d: "0.5s", dur: "4.5s" },
    { l: "75%", t: "60%", s: "35px", d: "2s", dur: "3.5s" },
    { l: "25%", t: "70%", s: "45px", d: "1s", dur: "6s" },
    { l: "50%", t: "20%", s: "30px", d: "3s", dur: "4s" },
  ];

  return (
    <div className="min-h-screen bg-white text-white flex items-center justify-center p-4 ">
      {/* CSS Animation for the Cubes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        .cube-float {
          animation: float infinite ease-in-out;
        }
      `}</style>

      <div className="w-full max-w-5xl h-[550px] rounded-[40px] overflow-hidden flex shadow-2xl border border-white/5 mt-20">
        
        {/* LEFT SIDE: ANIMATED CUBES */}
        <div className="w-1/2 bg-black relative flex items-center justify-center overflow-hidden">
          {/* Logo Brand Name */}
          <div className="absolute top-10 left-10 text-sm font-light tracking-widest uppercase">
            Task Vault
          </div>

          {/* Background Grid Lines */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-500"></div>
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gray-500"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[1px] h-full bg-gray-500 rotate-45"></div>
                <div className="w-[1px] h-full bg-gray-500 -rotate-45"></div>
            </div>
          </div>

          {/* Animated White Cubes */}
          <div className="relative w-full h-full">
            {cubes.map((cube, i) => (
              <div
                key={i}
                className="cube-float absolute bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                style={{
                  left: cube.l,
                  top: cube.t,
                  width: cube.s,
                  height: cube.s,
                  animationDelay: cube.d,
                  animationDuration: cube.dur,
                  opacity: 0.8,
                  borderRadius: '4px'
                }}
              />
            ))}
          </div>

          {/* Footer Copyright */}
          <div className="absolute bottom-8 left-10 text-[10px] text-gray-600">
            © Golden Suisse 2026. All rights reserved.
          </div>
        </div>

        {/* RIGHT SIDE: LOGIN FORM */}
        <div className="w-1/2 bg-[#0d0d0d] p-16 flex flex-col relative">
          <div className="text-right text-xs text-gray-500 mb-20 cursor-pointer hover:text-white transition">
            Create an account
          </div>

          <h1 className="text-6xl font-light mb-16">Login</h1>

          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Email */}
            <div className="relative group">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-800 group-hover:border-gray-500 focus:border-white outline-none py-2 transition-colors text-sm"
                required
              />
            </div>

            {/* Password */}
            <div className="relative group">
              <div className="flex justify-between items-end">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-1">Password</label>
              </div>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-800 group-hover:border-gray-500 focus:border-white outline-none py-2 transition-colors text-sm tracking-widest"
                required
              />
              <span className="absolute right-0 bottom-3 text-xs text-gray-600 cursor-pointer">👁</span>
            </div>

            <div className="flex justify-between items-center text-xs text-gray-500">
              <label className="flex items-center space-x-2 cursor-pointer hover:text-white transition">
                <input 
                    type="checkbox" 
                    name="rememberMe" 
                    checked={form.rememberMe} 
                    onChange={handleChange}
                    className="accent-white"
                />
                <span>Remember me</span>
              </label>
              <span className="cursor-pointer hover:text-white transition">Forgot?</span>
            </div>

            {/* Circular Submit Button */}
            <div className="absolute bottom-16 right-16">
              <button
                type="submit"
                className="w-24 h-24 bg-white text-black rounded-full font-bold text-[10px] uppercase tracking-tighter hover:scale-105 transition-transform flex items-center justify-center shadow-lg"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;