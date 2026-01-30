// @ts-nocheck
"use client";

import Image from "next/image";
import { useState } from "react";
import * as motion from "framer-motion/client";

interface PlanetWithRocketProps {
  planetSrc: string;
  rocketSrc: string;
  planetAlt?: string;
  rocketAlt?: string;
  planetSize?: number;
  rocketSize?: number;
  glowColor?: string;
  className?: string;
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

export default function PlanetWithRocket({
  planetSrc,
  rocketSrc,
  planetAlt = "Planet",
  rocketAlt = "Rocket",
  planetSize = 120,
  rocketSize = 60,
  glowColor = "rgba(147, 51, 234, 1)",
  className = "",
  position,
}: PlanetWithRocketProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate the container size to fit both planet and rocket orbit
  const containerSize = planetSize * 2;
  const orbitRadius = planetSize * 0.6;

  return (
    <motion.div
      className={`absolute pointer-events-auto cursor-pointer z-10 flex items-center justify-center ${className}`}
      style={{
        width: containerSize,
        height: containerSize,
        ...position,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* CENTER CONTAINER for planet */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* PLANET GLOW */}
        <motion.div
          className="absolute rounded-full blur-xl"
          style={{
            width: planetSize,
            height: planetSize,
            background: glowColor,
          }}
          animate={{
            opacity: isHovered ? 0.2 : 0,
            scale: isHovered ? 1.2 : 0.8,
          }}
          transition={{ duration: 0.5 }}
        />

        {/* PLANET IMAGE */}
        <motion.div
          className="relative z-10"
          style={{
            width: planetSize,
            height: planetSize,
          }}
          animate={{
            scale: isHovered ? 1.05 : 1,
            filter: isHovered ? "brightness(1.1)" : "brightness(1)",
          }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={planetSrc}
            alt={planetAlt}
            fill
            className="object-contain"
          />
        </motion.div>

        {/* PLANET RIM GLOW */}
        <motion.div
          className="absolute rounded-full z-20 pointer-events-none"
          style={{
            width: planetSize,
            height: planetSize,
            mixBlendMode: "screen",
          }}
          animate={{
            boxShadow: isHovered
              ? `inset 0 0 40px 10px ${glowColor}, 0 0 20px 5px ${glowColor}`
              : `inset 0 0 0px 0px transparent`,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* ROCKET - orbiting around the planet */}
<motion.div
  className="absolute z-30"
  style={{
    width: rocketSize,
    height: rocketSize,
    left: "70%",
    top: "50%",
  }}
  animate={
    isHovered
      ? {
          x: [
            -rocketSize / 2,
            -orbitRadius * 0.6,
            -orbitRadius,
            -orbitRadius * 0.4,
            -rocketSize / 2,
          ],
          y: [
            -rocketSize / 2,
            orbitRadius * 0.4,
            orbitRadius,
            orbitRadius * 0.2,
            -rocketSize / 2,
          ],
          rotate: [
            180, // pointing down
            210, // slight left turn
            240, // deeper turn
            200, // correcting
            180, // back to start orientation
          ],
          scale: [1, 1.05, 1.1, 1.05, 1],
        }
      : {
          x: -rocketSize / 1,
          y: rocketSize / 8,
          rotate: 27.5,
        }
  }
  transition={{
    duration: 3.5,
    ease: "easeInOut",
    repeat: isHovered ? Infinity : 0,
    repeatDelay: 0.2,
  }}
>
        {/* ROCKET GLOW/TRAIL */}
        <motion.div
          className="absolute inset-0 rounded-full blur-lg"
          style={{
            background: "rgba(255, 100, 50, 0.6)",
          }}
          animate={{
            opacity: isHovered ? 0.8 : 0,
            scale: isHovered ? [1, 1.5, 1] : 1,
          }}
          transition={{
            duration: 0.5,
            repeat: isHovered ? Infinity : 0,
          }}
        />

        {/* ROCKET IMAGE */}
        <div className="relative w-full h-full rotate-180">
          <Image
            src={rocketSrc}
            alt={rocketAlt}
            fill
            className="object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}