"use client";

import { useRef, useState, useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ToolsSection from "@/components/sections/ToolsSection";
import Footer from "@/components/layout/Footer";
import SpacePreloader from "@/components/features/loader/Preloader";

export default function HomePage() {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializePage = async () => {
      await new Promise((resolve) => setTimeout(resolve, 10000));
      
      setIsInitialized(true);
    };

    initializePage();
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

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
    <>
      {/* Space Preloader */}
      {isLoading && <SpacePreloader onLoadingComplete={handleLoadingComplete} />}

      {/* Main Content */}
      <main
        className={`relative w-full overflow-x-hidden bg-[#070d1f] transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
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

        <div className="bg-gradient-to-br from-[#1D2948] via-[#141D33] via-[#0F1628] to-[#050A16]">
          {/* Tools Section */}
          <div id="tools">
            <ToolsSection />
          </div>

          {/* Footer */}
          <div id="contact">
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}