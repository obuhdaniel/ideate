"use client";

import * as motion from "framer-motion/client";

interface OrbitRingsProps {
  isTransitioning?: boolean;
  sizes?: number[];
  className?: string;
  centerX?: string;
  centerY?: string;
}

export default function OrbitRings({
  isTransitioning = false,
  sizes = [700, 900, 1100, 1300, 1500, 1700],
  className = "",
  centerX = "50%",
  centerY = "50%",
}: OrbitRingsProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none flex items-center justify-center ${className}`}
    >
      <div className="relative">
        {sizes.map((size, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-[#272731]"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              borderWidth: `${1.5 + i * 0.3}px`,
              top: centerY,
              left: centerX,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              opacity: isTransitioning ? 0.15 : 0.5 - i * 0.06,
              borderColor: isTransitioning ? "#12121a" : "#272731",
            }}
            transition={{
              duration: 2.5,
              ease: [0.4, 0, 0.2, 1],
              delay: i * 0.05,
            }}
          />
        ))}
      </div>
    </div>
  );
}
