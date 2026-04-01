import React from "react";
import { assets } from "../../assets/assets";

export const FooterDescription: React.FC = () => {
  return (
    <div className="md:max-w-96">
      <img className="h-9" src={assets.logo} alt="logo" />
      <p className="mt-6 text-sm">
        Experience the power of AI with Smart AI. <br /> Transform your content creation with our
        suite of premium AI tools. Write articles, generate images, and enhance your workflow.
      </p>
    </div>
  );
};
