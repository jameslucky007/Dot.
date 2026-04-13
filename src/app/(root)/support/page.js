"use client";
import React, { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);

    // reset (optional)
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white text-white flex items-center justify-center">
      <div className="w-full max-w-6xl h-[500px] rounded-3xl overflow-hidden flex border border-gray-800 mt-30 mb-20">

        {/* LEFT SIDE (LOGO AREA) */}
        <div className="w-1/2 bg-black relative flex items-center justify-center border-r border-gray-800">
          
          {/* grid lines effect */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full border border-gray-700"></div>
          </div>

          {/* your logo */}
          <Image
            src="/logo-2.svg"  
            alt="logo"
            className="w-32 opacity-90"
          />
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="w-1/2 bg-[#0d0d0d] p-10 flex flex-col justify-center">

          <h1 className="text-4xl font-semibold mb-8">Support</h1>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2"
              required
            />

            {/* Subject */}
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 resize-none"
              required
            />

            {/* Submit */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition"
              >
                Send
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;