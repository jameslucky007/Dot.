"use client";

import Image from "next/image";
import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/* MENU CONFIG */
const MAIN_MENU = [
  { label: "Home", href: "/" },
  { label: "Support", href: "/support" },
  { label: "Donate ❤️", href: "/donate" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // AOS INIT
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  // Scroll blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      data-aos="fade-down"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center justify-between px-5 md:px-10 py-3 ${
        scrolled
          ? "backdrop-blur-xl bg-white/25 shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex gap-2 items-center font-semibold">
        <Image
          src="/logo.svg"
          alt="Task Vault logo"
          width={30}
          height={30}
        />
        <span className="text-lg">Task Vault</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-9 font-medium">
        {MAIN_MENU.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="hover:text-gray-600 transition"
          >
            {item.label}
          </Link>
        ))}

        {/* Auth Buttons */}
        <div className="flex gap-3">
          <Link
            href="/auth/signin"
            className="px-4 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            Log in
          </Link>

          <Link
            href="/auth/signup"
            className="flex items-center gap-2 px-4 py-1.5 bg-gray-900 text-white rounded-md hover:bg-black transition"
          >
            Sign up <TrendingUp size={16} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;