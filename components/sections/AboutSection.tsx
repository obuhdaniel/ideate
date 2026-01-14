// @ts-nocheck
"use client";

import * as motion from "framer-motion/client";
import { VisitButton } from "@/components/ui/Button";
import OrbitRings from "@/components/ui/OrbitRings";

// Reusable star component to keep code DRY
function DecorativeStar({
  top,
  left,
  right,
  bottom,
  size = 3,
  delay = 0,
}: {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size?: number;
  delay?: number;
}) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        right,
        bottom,
        width: `${size * 4}px`,
        height: `${size * 4}px`,
      }}
    >
      <img
        src="/images/custom-images/space-star.png"
        alt=""
        className="w-full h-full object-contain animate-pulse"
        style={{ animationDelay: `${delay}s` }}
      />
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#070d1f] py-20 lg:py-32"
    >
      {/* Left vertical line */}
      <div className="absolute left-[8%] md:left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      {/* Right vertical line */}
      <div className="absolute right-[8%] md:right-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      {/* Orbit Rings */}
      <div className="absolute inset-0 pointer-events-none">
        <OrbitRings
          sizes={[500, 700, 900]}
          centerX="85%"
          centerY="60%"
          className="opacity-15"
        />
      </div>

      {/* Decorative stars */}
      <DecorativeStar top="15%" right="12%" size={4} delay={0} />
      <DecorativeStar top="25%" right="8%" size={3} delay={0.4} />
      <DecorativeStar bottom="30%" left="20%" size={3} delay={0.8} />
      <DecorativeStar top="50%" left="35%" size={4} delay={1.2} />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-12 md:px-16 lg:px-20 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide">
            Why We Started Ideate
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 mb-10"
        >
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Lets talk about what Motivated us. We started this agency because we
            saw how often products are rushed, built without thought and without
            achieving the user requirements.
          </p>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            We realized people have strong ideas but have issues with
            implementation and We wanted to change that.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <VisitButton href="/about" variant="outline" size="lg">
            Read Why
          </VisitButton>
        </motion.div>
      </div>

      {/* Bottom horizontal line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
