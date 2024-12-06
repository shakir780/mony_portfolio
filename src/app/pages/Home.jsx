import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Expertise from "../components/Expertise";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <Expertise />
      <Testimonials />
    </div>
  );
};

export default Home;
