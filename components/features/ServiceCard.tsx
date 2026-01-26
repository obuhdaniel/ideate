// @ts-nocheck
"use client";

import Image from "next/image";
import * as motion from "framer-motion/client";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export default function ServiceCard({
  icon,
  title,
  description,
  delay = 0,
  position = "top-left",
}: ServiceCardProps) {
  
  const borderClasses = {
    "top-left": "md:border-r md:border-b border-white/10",
    "top-right": "md:border-b border-white/10",
    "bottom-left": "md:border-r border-white/10",
    "bottom-right": "",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`group relative p-6 md:p-8 lg:p-10 ${borderClasses[position]} border md:border-0 border-white/10 rounded-lg md:rounded-none md:mb-0 hover:bg-white/[0.02] transition-all duration-300`}
    >
      <div className="relative z-10">
        {/* Icon */}
        <div className="relative w-8 h-8 mb-5">
          <Image src={icon} alt={title} fill className="object-contain" />
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 uppercase tracking-wide">
          {title}
        </h3>

        {/* Description */}
        <p className="text-base text-white/60 leading-relaxed max-w-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
