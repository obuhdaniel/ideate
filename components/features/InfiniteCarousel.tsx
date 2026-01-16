// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import ToolCard from "@/components/features/ToolCard";

interface InfiniteCarouselProps {
  tools: { name: string; icon: string }[];
  direction: "left" | "right";
}

export default function InfiniteCarousel({
  tools,
  direction,
}: InfiniteCarouselProps) {
  // Duplicate tools for seamless loop
  const duplicatedTools = [...tools, ...tools, ...tools, ...tools];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "linear",
          },
        }}
      >
        {duplicatedTools.map((tool, index) => (
          <ToolCard key={`${tool.name}-${index}`} tool={tool} />
        ))}
      </motion.div>
    </div>
  );
}
