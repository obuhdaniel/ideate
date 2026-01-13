// @ts-nocheck
"use client";

import { useState, useRef } from "react";
import * as motion from "framer-motion/client";

interface AnimatedRocketProps {
  className?: string;
}

export default function AnimatedRocket({
  className = "",
}: AnimatedRocketProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          y: isHovered ? -80 : 0,
          rotate: isHovered ? -5 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        className="cursor-pointer"
      >
        <img
          src="/images/custom-images/rocket.png"
          alt="Rocket"
          className="w-20 h-auto object-contain"
          style={{
            filter: isHovered
              ? "drop-shadow(0 0 20px rgba(147, 51, 234, 0.8))"
              : "drop-shadow(0 0 10px rgba(147, 51, 234, 0.4))",
            transition: "filter 0.3s ease",
          }}
        />

        {/* Rocket trail/exhaust effect */}
        <motion.div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-16 pointer-events-none"
          animate={{
            opacity: isHovered ? 1 : 0,
            scaleY: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-full bg-gradient-to-b from-orange-400 via-yellow-300 to-transparent rounded-b-full opacity-80 blur-sm" />
        </motion.div>
      </motion.div>
    </div>
  );
}
