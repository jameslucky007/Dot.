"use client";
import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

// Testimonials data
const testimonials = [
  {
    text: "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.",
    name: "Isabella Rodriguez",
    role: "CEO and Co-founder of ABC Company",
    avatar: "/prof.jpg",
  },
  {
    text: "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.",
    name: "Gabrielle Williams",
    role: "CEO and Co-founder of ABC Company",
    avatar: "/prof.jpg",
  },
  {
    text: "Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable creative agency.",
    name: "Samantha Johnson",
    role: "CEO and Co-founder of ABC Company",
    avatar: "/prof.jpg",
  },
  {
    text: "From concept to execution, their creativity knows no bounds - a game-changer for our brand’s success.",
    name: "Daniel Reed",
    role: "Creative Director",
    avatar: "/prof.jpg",
  },
  {
    text: "A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.",
    name: "Michael Tran",
    role: "Marketing Lead",
    avatar: "/prof.jpg",
  },
];

const TestimonialCard = ({ t }) => (
  <div className="bg-white w-[280px] md:w-[360px] shrink-0 rounded-2xl p-6 shadow-sm border border-gray-200">
    <FaQuoteLeft className="text-blue-500 mb-4 text-xl md:text-2xl" />
    <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
      {t.text}
    </p>

    <div className="flex items-center gap-3">
      <Image
        src={t.avatar}
        width={44}
        height={44}
        alt={t.name}
        className="rounded-full object-cover shadow-sm"
      />
      <div>
        <p className="font-semibold text-gray-900 text-sm md:text-base leading-tight">
          {t.name}
        </p>
        <p className="text-xs md:text-sm text-gray-500">{t.role}</p>
      </div>
    </div>
  </div>
);

const Testimonial = () => {
  const rowStyles = "flex gap-6 group-hover:[animation-play-state:paused]";
  return (
    <section className="w-full bg-gray-200 py-12 md:py-20 overflow-hidden">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10 md:mb-16 px-4 text-gray-900">
        Words of praise from others <br className="hidden md:block" /> about our
        presence.
      </h2>

      {/* ROW 1 — Left to Right */}
      <div className="group overflow-hidden w-full mb-6 md:mb-10">
        <div className={`${rowStyles} animate-scroll-right`}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`right-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* ROW 2 — Right to Left */}
      <div className="group overflow-hidden w-full">
        <div className={`${rowStyles} animate-scroll-left`}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`left-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
