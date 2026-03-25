import React from "react";
import { AiTools } from "../components/Aitools";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { Plan } from "../components/Plan";
import { Testimonial } from "../components/Testimonial";

const HomeScreen: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AiTools />
      <Testimonial />
      <Plan />
      <Footer />
    </>
  );
};

export default HomeScreen;
