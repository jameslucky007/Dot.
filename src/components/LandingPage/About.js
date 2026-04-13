import React from 'react'

const About = () => {
  return (
    <>
        <div className="w-full flex justify-center px-4 py-16 md:py-24 bg-black text-white">
  <div className="max-w-4xl w-full text-center">

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-bold mb-10 animate-fade-up">
      Why I built this
    </h2>

    {/* Image */}
    <div className="flex justify-center mb-8">
      <img
        src="/Profile.png"
        alt="Founder"
        className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-2xl border border-white/20 shadow-lg animate-fade-up delay-100"
      />
    </div>

    {/* Text */}
    <h2 className="text-bold text-white text-4xl mb-5"> - Lucky </h2>
    <p className="text-base md:text-lg  text-gray-300 animate-fade-up delay-200">
  I kept running into the same problem—I couldn’t stay focused on one thing.
  I’d start something, lose consistency, and waste days without real progress.
  <br /><br />
  The bigger issue was this: I had no clear way to track my habits daily or
  actually *see* my consistency. Everything felt abstract, and that made it
  easy to quit.
  <br /><br />
  What changed my perspective was simple—visual progress. When you can see
  your consistency, like a chain or a pattern, it becomes harder to break.
  Missing a day creates a visible gap. Staying consistent builds momentum.
  <br /><br />
  That’s why I built this.
  <br /><br />
  A system that doesn’t just store tasks, but helps you stay consistent,
  track habits visually, and turn goals into daily execution.
</p>
  </div>
</div>
    </>
  )
}

export default About