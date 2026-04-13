import CalltoAction from "@/components/LandingPage/CalltoAction";
import BentoGrid from "@/components/LandingPage/BentoGrid";
import Home from "@/components/LandingPage/Home";
import Testimonial from "@/components/LandingPage/Testimonial";
import Work from "@/components/LandingPage/Work";
import React from "react";
import About from "@/components/LandingPage/About";


const page = () => {
  return (
    <>
      <Home />
      <Work />
      <BentoGrid />
      <Testimonial/>
      <CalltoAction/>
      <About/>
    </>
  );
};

export default page;
