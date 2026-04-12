import React from "react";
import Image from "next/image";

const CalltoAction = () => {
  return (
    <>
      {/* QR SECTION */}
      <div className="w-full flex flex-col items-center py-12 md:py-10 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-20 mt-5 text-center">
          Download for free
        </h2>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          {/* iOS */}
          <div className="bg-gradient-to-br from-gray-700 to-black rounded-2xl w-72 h-80 flex flex-col items-center justify-center border border-white/10">
            <Image
              src="/ios-qr.png"
              alt="Download on iOS"
              width={200}
              height={200}
              className="w-48 h-48"
            />
            <p className="text-white mt-4 text-sm font-medium">Scan for iOS</p>
          </div>

          {/* Android */}
          <div className="bg-gradient-to-br from-gray-700 to-black rounded-2xl w-72 h-80 flex flex-col items-center justify-center border border-white/10">
            <Image
              src="/android-qr.png"
              alt="Download on Android"
              width={200}
              height={200}
              className="w-48 h-48"
            />
            <p className="text-white mt-4 text-sm font-medium">
              Scan for Android
            </p>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <section className="w-full flex justify-center py-20 px-4">
        <div className="relative w-full max-w-7xl rounded-[32px] overflow-hidden p-16 text-center bg-gray-900">
          {/* Mesh Gradient Layers */}

          <div className="absolute inset-0">
            {/* Soft glow 1 */}

            <div className="absolute w-[600px] h-[600px] rounded-full bg-black  blur-[120px] animate-mesh-1"></div>

            {/* Soft glow 2 */}

            <div className="absolute w-[500px] h-[500px] rounded-full bg-gray-100  blur-[150px] animate-mesh-2"></div>

            {/* Soft glow 3 */}

            <div className="absolute w-[700px] h-[700px] rounded-full bg-black  blur-[150px] animate-mesh-3"></div>
          </div>

          {/* MAIN CONTENT */}

          <div className="relative z-10 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Turn your goals into daily execution
            </h2>

            <p className="text-lg mb-8 opacity-95">
              Plan tasks, track habits, and stay focused—all in one system.
            </p>

            <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-medium shadow transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CalltoAction;
