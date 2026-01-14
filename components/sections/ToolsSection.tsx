// @ts-nocheck
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import StarField from "@/components/ui/StarField";
import GlowingPlanet from "@/components/ui/GlowingPlanet";
import InfiniteCarousel from "@/components/features/InfiniteCarousel";

// Tools for carousel
const TOP_CAROUSEL_TOOLS = [
  { name: "GitHub", icon: "/images/tools/github-icon.png" },
  { name: "Figma", icon: "/images/tools/figma-icon.png" },
  { name: "Flutter", icon: "/images/tools/flutter-icon.png" },
  { name: "Rust", icon: "/images/tools/rust-icon.png" },
  { name: "JavaScript", icon: "/images/tools/javascript-icon.png" },
];

const BOTTOM_CAROUSEL_TOOLS = [
  { name: "CSS", icon: "/images/tools/css-icon.png" },
  { name: "React", icon: "/images/tools/react-icon.png" },
  { name: "Node.js", icon: "/images/tools/nodejs-icon.png" },
  { name: "Python", icon: "/images/tools/python-icon.png" },
  { name: "TypeScript", icon: "/images/tools/typescript-icon.png" },
];

export default function ToolsSection() {
  const [isEarthHovered, setIsEarthHovered] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-[#070d1f] py-20 lg:py-32">
      {/* Star Field Background */}
      <StarField count={100} className="pointer-events-none" />

      {/* Planet with bodies - Top Left */}
      <div className="absolute top-[3%] left-[2%] w-20 h-20 md:w-28 md:h-28 pointer-events-none z-10">
        <img
          src="/images/tools/planet-with-bodies-around.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Sun-like Planet - Top Right with glow */}
      <GlowingPlanet
        src="/images/custom-images/sun-like-planet.png"
        alt="Sun Planet"
        size={100}
        glowColor="rgba(255, 180, 50, 0.6)"
        position={{ top: "5%", right: "8%" }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Text */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="text-gray-400">DIGITAL PRESENCE</span> TURNS
            VISIBILITY INTO OPPORTUNITY.
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Your website is your business, working 24/7. At Ideate Digital
            Agency we are interested in bringing digital presence to your
            business because a website doesn&apos;t just show your business, it
            scales it.
          </p>
        </div>
      </div>

      {/* Spiral Image - Full Width */}
      <div className="relative w-full">
        <img
          src="/images/tools/spiral.png"
          alt="Spiral"
          className="w-full h-auto object-cover"
        />

        {/* Earth-like Planet with Rocket */}
        <div
          className="absolute right-[15%] top-[10%] md:top-[15%] z-20"
          onMouseEnter={() => setIsEarthHovered(true)}
          onMouseLeave={() => setIsEarthHovered(false)}
        >
          {/* Earth Planet */}
          <motion.div
            className="relative cursor-pointer"
            animate={{
              filter: isEarthHovered
                ? "drop-shadow(0 0 30px rgba(100, 200, 255, 0.7))"
                : "drop-shadow(0 0 10px rgba(100, 200, 255, 0.3))",
            }}
            transition={{ duration: 0.4 }}
          >
            <img
              src="/images/custom-images/earth-like-planet.png"
              alt="Earth"
              className="w-16 h-16 md:w-24 md:h-24 object-contain"
            />
          </motion.div>

          {/* Rocket */}
          <motion.div
            className="absolute -top-8 -right-4 md:-top-12 md:-right-6"
            animate={{
              y: isEarthHovered ? -10 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <img
              src="/images/custom-images/rocket.png"
              alt="Rocket"
              className="w-8 h-8 md:w-12 md:h-12 object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* Scattered Planets Section */}
      <div className="relative py-20 lg:py-32">
        {/* Purple Planet - Left */}
        <GlowingPlanet
          src="/images/custom-images/purple-planet.png"
          alt="Purple Planet"
          size={60}
          glowColor="rgba(147, 51, 234, 0.6)"
          position={{ top: "20%", left: "10%" }}
        />

        {/* Planet with bodies - Center */}
        <div className="absolute top-[40%] left-[45%] w-14 h-14 pointer-events-none">
          <img
            src="/images/tools/planet-with-bodies-around.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Sun-like Planet - Right */}
        <GlowingPlanet
          src="/images/custom-images/sun-like-planet.png"
          alt="Sun Planet"
          size={50}
          glowColor="rgba(255, 180, 50, 0.5)"
          position={{ top: "60%", right: "15%" }}
        />

        {/* Built with Tools Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mt-20">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            BUILT WITH TOOLS WE TRUST
          </h3>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mb-12">
            The right tools are used to build your product based on the
            requirements
          </p>
        </div>

        {/* Tool Carousels */}
        <div className="relative z-10 space-y-6 mt-8">
          {/* Top Carousel - Sliding Left */}
          <InfiniteCarousel tools={TOP_CAROUSEL_TOOLS} direction="left" />

          {/* Bottom Carousel - Sliding Right */}
          <InfiniteCarousel tools={BOTTOM_CAROUSEL_TOOLS} direction="right" />
        </div>

        {/* Purple Planet - Bottom Left with glow */}
        <GlowingPlanet
          src="/images/custom-images/purple-planet.png"
          alt="Purple Planet"
          size={80}
          glowColor="rgba(147, 51, 234, 0.6)"
          position={{ bottom: "-5%", left: "5%" }}
        />
      </div>
    </section>
  );
}
