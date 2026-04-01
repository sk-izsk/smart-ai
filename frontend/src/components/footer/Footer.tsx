import React from "react";
import { FooterCompany } from "./FooterCompany";
import { FooterDescription } from "./FooterDescription";

export const Footer: React.FC = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 mt-20">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <FooterDescription />
        <FooterCompany />
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2026 ©{" "}
        <a href="https://izsk.netlify.app" target="_blank" rel="noopener noreferrer">
          iZsk
        </a>
        . All Right Reserved.
      </p>
    </footer>
  );
};
