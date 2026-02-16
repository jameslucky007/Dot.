"use client";
import React, { useEffect, useState } from "react";

const projects = [
  { title: "Portfolio Website", desc: "Modern responsive portfolio using Next.js" },
  { title: "AI Todo App", desc: "Smart productivity app with AI task generation" },
  { title: "E-commerce Platform", desc: "Full MERN stack scalable store system" },
];

const Page = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(slider);
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16 flex justify-center">
      <div className="max-w-6xl w-full space-y-12">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-800">
          About
        </h1>

        {/* Top Boxes */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Project */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4">About Project</h2>
            <p className="text-gray-600 leading-relaxed">
              This project is built using modern full-stack technologies focusing
              on performance, scalability, and user experience. It demonstrates
              clean architecture, responsive design, and production-level
              engineering practices.
            </p>
          </div>

          {/* Developer */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4">About Developer</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Full-stack developer specializing in MERN stack, modern UI/UX,
              scalable backend systems, and high-performance web applications.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="px-4 py-2 bg-black text-white rounded-lg">GitHub</a>
              <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-lg">LinkedIn</a>
              <a href="#" className="px-4 py-2 bg-gray-800 text-white rounded-lg">Portfolio</a>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-6">Other Projects</h2>

          <div className="relative overflow-hidden h-28">
            <div
              className="transition-all duration-700"
              style={{ transform: `translateY(-${index * 100}%)` }}
            >
              {projects.map((proj, i) => (
                <div key={i} className="h-28 flex flex-col justify-center">
                  <h3 className="text-xl font-bold">{proj.title}</h3>
                  <p className="text-gray-600">{proj.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Page;
