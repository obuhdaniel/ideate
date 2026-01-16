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
        size={250}
        glowColor="rgba(255, 180, 50, 0.6)"
        position={{ top: "5%", right: "2%" }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-left">
        <div className="max-w-6xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            DIGITAL PRESENCE <span className="text-gray-400">TURNS </span>
            VISIBILITY INTO OPPORTUNITY.
          </h2>

          <p className="text-gray-400 text-base lg:text-3xl leading-relaxed">
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

        {/* Earth Planet */}
        <GlowingPlanet
          src="/images/services/earth-like-planet.png"
          alt="Earth Planet"
          size={250}
          glowColor="rgba(100, 200, 255, 0.4)"
          position={{ top: "40%", right: "1%" }}
        />

        {/* Rocket Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden z-[9999] lg:block absolute right-[2%] top-[35%] -translate-y-1/2"
        >
          {/* Interaction Wrapper */}
          <motion.div
            // UPDATED: Move Diagonal (Up and Left) to match the -45deg rotation
            whileHover={{ x: -700, y: -600 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 15,
              mass: 1.2,
            }}
            // Added padding (p-10) to increase hit area so it triggers when "close"
            className="cursor-pointer p-5 -m-5"
          >
            <motion.img
              src="/images/custom-images/rocket.png"
              alt="Rocket"
              style={{ rotate: -45 }}
              className="w-32 h-32 lg:w-200 lg:h-200 object-contain"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scattered Planets Section */}
      <div className="relative py-20 lg:py-32">
        {/* Purple Planet - Left */}
        <GlowingPlanet
          src="/images/custom-images/purple-planet.png"
          alt="Purple Planet"
          size={200}
          glowColor="rgba(147, 51, 234, 0.6)"
          position={{ top: "-7%", left: "3%" }}
        />

        {/* Planet with bodies - Center */}
        <GlowingPlanet
          src="/images/custom-images/planet-with-bodies-around.png"
          alt="Planet with bodies"
          size={200}
          glowColor="rgba(147, 51, 234, 0.6)"
          position={{ top: "-30%", left: "50%" }}
        />

        {/* Planet with bodies - Right */}
        <GlowingPlanet
          src="/images/custom-images/planet-with-bodies-around.png"
          alt="Planet with bodies"
          size={250}
          glowColor="rgba(147, 51, 234, 0.6)"
          position={{ top: "-20%", left: "80%" }}
        />

        {/* Build with tools we trust */}

        {/* Sun-like Planet - Right */}
        <GlowingPlanet
          src="/images/custom-images/sun-like-planet.png"
          alt="Sun Planet"
          size={250}
          glowColor="rgba(255, 180, 50, 0.5)"
          position={{ top: "20%", right: "1%" }}
        />

        {/* Planet with bodies - Right */}
        <GlowingPlanet
          src="/images/custom-images/planet-with-bodies-around.png"
          alt="Planet with bodies"
          size={250}
          glowColor="rgba(147, 51, 234, 0.6)"
          position={{ top: "10%", left: "-5%" }}
        />

        {/* Built with Tools Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mt-20 flex flex-col mt-50">
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4">
            BUILT WITH TOOLS WE TRUST
          </h3>
          <p className=" text-base md:text-3xl mb-12">
            The right tools are used to build your product based on the
            requirements
          </p>
        </div>

        {/* Tool Carousels */}
        <div className="relative z-10 space-y-6 mt-8">
          <InfiniteCarousel tools={TOP_CAROUSEL_TOOLS} direction="left" />
          <InfiniteCarousel tools={BOTTOM_CAROUSEL_TOOLS} direction="right" />
        </div>

        {/* Purple Planet - Bottom Left with glow */}
        <GlowingPlanet
          src="/images/custom-images/purple-planet.png"
          alt="Purple Planet"
          size={200}
          glowColor="rgba(147, 51, 234, 0.6)"
          position={{ bottom: "-10%", left: "5%" }}
        />
      </div>
    </section>
  );
}
