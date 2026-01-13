// @ts-nocheck
"use client";

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
  glowColor = "rgba(147, 51, 234, 0.6)", // Purple glow by default
  className = "",
  position,
}: GlowingPlanetProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`absolute pointer-events-auto cursor-pointer z-10 ${className}`}
      style={{
        width: size,
        height: size,
        ...position,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        scale: isHovered ? 1.1 : 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
        }}
        animate={{
          opacity: isHovered ? 1 : 0.3,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      />

      {/* Planet image */}
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-contain relative z-10"
        style={{
          filter: isHovered
            ? `drop-shadow(0 0 30px ${glowColor})`
            : `drop-shadow(0 0 10px ${glowColor.replace("0.6", "0.3")})`,
        }}
        animate={{
          filter: isHovered
            ? `drop-shadow(0 0 40px ${glowColor})`
            : `drop-shadow(0 0 15px ${glowColor.replace("0.6", "0.3")})`,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      />
    </motion.div>
  );
}
