// @ts-nocheck
"use client";

import Image from "next/image";
import MultiStepForm from "@/components/features/forms/MultiStepForm";
import GlowingPlanet from "@/components/ui/GlowingPlanet";
import StarField from "@/components/ui/StarField";
import OrbitRings from "@/components/ui/OrbitRings";
import Navigation from "@/components/layout/Navigation";
export default function FormSection() {
  const handleFormSubmit = (data: any) => {
    console.log("Form submission:", data);
    // Handle form submission - send to API, show success message, etc.
    alert("Form submitted successfully! We'll be in touch soon.");
  };

  return (
    <section className="relative w-full overflow-hidden  bg-gradient-to-br from-[#1D2948] via-[#141D33] via-[#0F1628] to-[#050A16] min-h-screen flex flex-col justify-center py-16 md:py-32">

       <Navigation />
      {/* Star Field Background */}
      <StarField count={100} className="pointer-events-none" />
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orbit Rings - positioned at left side */}
        <OrbitRings
          sizes={[400, 550, 700, 850]}
          centerX="5%"
          centerY="40%"
          className="opacity-40 hidden md:block"
        />

        <OrbitRings
          sizes={[50, 100, 150, 200, 250, 300, 350]}
          centerX="50%"
          centerY="25%"
          className="opacity-30 md:hidden"
        />

        {/* Orbit Rings - positioned at right side */}
        <OrbitRings
          sizes={[300, 450, 600]}
          centerX="95%"
          centerY="20%"
          className="opacity-40 hidden md:block"
        />
      </div>

      {/* Purple Planet - Left side */}
      <GlowingPlanet
        src="/images/services/purple-planet.png"
        alt="Purple Planet"
        size={250}
        glowColor="rgba(147, 51, 234, 0.6)"
        position={{ top: "8%", left: "2%" }}
      />

      {/* Earth-like Planet - Right side */}
      <GlowingPlanet
        src="/images/services/globe.png"
        alt="Earth Planet"
        size={250}
        glowColor="rgba(59, 130, 246, 0.5)"
        position={{ top: "8%", right: "2%" }}
      />

      {/* Space Star Decorations */}
      <div className="absolute top-[8%] right-[12%] w-6 h-6 pointer-events-none">
        <Image
          src="/images/custom-images/space-star.png"
          alt=""
          fill
          className="object-contain animate-pulse"
        />
      </div>
      <div className="absolute top-[25%] right-[8%] w-4 h-4 pointer-events-none">
        <Image
          src="/images/custom-images/space-star.png"
          alt=""
          fill
          className="object-contain animate-pulse"
          style={{ animationDelay: "0.7s" }}
        />
      </div>

      {/* Content */}
      <div className="relative mt-20 z-20 max-w-5xl mx-auto  w-full">
        {/* Section Header */}
        <div className="mb-12 px-6 lg:px-20 text-left">
          <div className="flex items-center justify-start gap-1 md:gap-3 mb-4">
            <span className="text-purple-400 font-mono text-xs md:text-sm">
              //
            </span>
            <span className="text-purple-400 text-md md:text-2xl tracking-wide">
              Fill the Form
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#d8d8d8] mb-6">
            Your First Step Towards Building Something Great.
          </h2>
          <p className="text-lg md:text-xl text-[#d8d8d8]">
            We'll review your request and reach out shortly.
          </p>
        </div>

        {/* Multi-Step Form */}
        <MultiStepForm onSubmit={handleFormSubmit} />
      </div>
    </section>
  );
}