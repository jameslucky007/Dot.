import React from "react";

const features = [
  {
    icon: "★",
    label: "TRACK",
    title: "Anything and everything.",
    desc: "Simple by design. Habits. Goals. Moods. Side projects. If it matters to you, it belongs here. One tap marks the day as done.",
  },
  {
    icon: "●",
    label: "VISUALIZE",
    title: "Patterns emerge.",
    desc: "Consistency builds naturally. Over time, your effort turns into something you can actually see and understand.",
  },
  {
    icon: "■",
    label: "FOCUS",
    title: "Stay consistent.",
    desc: "Remove noise. Focus on what matters. Build habits without overcomplicating your workflow.",
  },
  {
    icon: "▲",
    label: "PRIVATE",
    title: "Private by default.",
    desc: "Your data stays yours. Clean exports and simple control without unnecessary complexity.",
  },
];

const Work = () => {
  return (
    <div className="w-full bg-[#f5f5f5] py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {features.map((item, index) => (
          <div key={index} className="flex flex-col gap-4">

            {/* Icon */}
            <div className="w-8 h-8 flex items-center justify-center text-black text-lg font-bold">
              {item.icon}
            </div>

            {/* Label */}
            <p className="text-xs tracking-[0.2em] text-gray-400 font-semibold">
              {item.label}
            </p>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold leading-snug">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {item.desc}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Work;