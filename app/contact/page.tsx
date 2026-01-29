"use client";

import { useRef } from "react";
import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ToolsSection from "@/components/sections/ToolsSection";
import Footer from "@/components/layout/Footer";
import FormSection from "@/components/sections/form/FormSection";

export default function HomePage() {
  const portfolioRef = useRef<HTMLDivElement>(null);

 


  return (
    <main className="relative w-full overflow-x-hidden bg-[#070d1f]">


      {/* Portfolio Section */}
      <div ref={portfolioRef} id="portfolio">
        <FormSection />
      </div>

     

      <div className="bg-gradient-to-br from-[#1D2948] via-[#141D33] via-[#0F1628] to-[#050A16]">
      

        {/* Footer */}
        <div id="contact">
          <Footer />
        </div>
      </div>
    </main>
  );
}
