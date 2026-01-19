// @ts-nocheck
"use client";

import Image from "next/image";
import { useState } from "react";
import * as motion from "framer-motion/client";

interface GlowingPlanetProps {
  src: string;
  alt?: string;
  size?: number;
  glowColor?: string;
  className?: string;
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

export default function GlowingPlanet({
  src,
  alt = "Planet",
  size = 150,
  glowColor = "rgba(147, 51, 234, 1)",
  className = "",
  position,
}: GlowingPlanetProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`absolute pointer-events-auto cursor-pointer z-10 flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
        ...position,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-full blur-xl"
        style={{
          background: glowColor,
        }}
        animate={{
          opacity: isHovered ? 0.2 : 0,
          scale: isHovered ? 1.2 : 0.8,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* PLANET IMAGE - Replaced motion.img with motion.div wrapper + Next Image */}
      <motion.div
        className="relative w-full h-full z-10"
        animate={{
          filter: isHovered ? "brightness(1.1)" : "brightness(1)",
        }}
        transition={{ duration: 0.5 }}
      >
        <Image src={src} alt={alt} fill className="object-contain" />
      </motion.div>

      <motion.div
        className="absolute inset-0 rounded-full z-20 pointer-events-none"
        style={{
          mixBlendMode: "screen",
        }}
        animate={{
          boxShadow: isHovered
            ? `inset 0 0 40px 10px ${glowColor}, 0 0 20px 5px ${glowColor}` // Strong inner + subtle outer rim
            : `inset 0 0 0px 0px transparent`,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}
