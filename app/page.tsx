"use client";

import { useRef } from "react";
import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";

export default function HomePage() {
  const portfolioRef = useRef<HTMLDivElement>(null);

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFillForm = () => {
    // Scroll to contact section or open contact form modal
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative w-full overflow-x-hidden bg-[#070d1f]">
      {/* Hero Section */}
      <HeroSection onExplore={scrollToPortfolio} />

      {/* Portfolio Section */}
      <div ref={portfolioRef} id="portfolio">
        <ProjectSection />
      </div>

      {/* Services Section */}
      <div id="services">
        <ServicesSection onFillFormClick={handleFillForm} />
      </div>

      {/* Process Section */}
      <div id="process">
        <ProcessSection />
      </div>
    </main>
  );
}
