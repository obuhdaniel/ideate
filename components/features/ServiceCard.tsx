// @ts-nocheck
"use client";

import * as motion from "framer-motion/client";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 transition-all duration-500" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 mb-4">
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/60 leading-relaxed">{description}</p>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full" />
      </div>
    </motion.div>
  );
}
