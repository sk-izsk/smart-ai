import React from "react";
import { AiTools } from "../components/Aitools";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";

const HomeScreen: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AiTools />
    </>
  );
};

export default HomeScreen;
