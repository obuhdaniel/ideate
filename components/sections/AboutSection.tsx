// @ts-nocheck
"use client";

import * as motion from "framer-motion/client";
import { VisitButton } from "@/components/ui/Button";
import OrbitRings from "@/components/ui/OrbitRings";

export default function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070d1f] py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle orbit rings */}
        <OrbitRings
          sizes={[600, 800, 1000]}
          centerX="80%"
          centerY="50%"
          className="opacity-20"
        />
      </div>

      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#070d1f] to-transparent pointer-events-none" />

      {/* Decorative star elements */}
      <div className="absolute top-[15%] left-[10%] w-3 h-3 pointer-events-none">
        <img
          src="/images/custom-images/space-star.png"
          alt=""
          className="w-full h-full object-contain animate-pulse"
        />
      </div>
      <div className="absolute top-[40%] right-[15%] w-4 h-4 pointer-events-none">
        <img
          src="/images/custom-images/space-star.png"
          alt=""
          className="w-full h-full object-contain animate-pulse"
          style={{ animationDelay: "0.6s" }}
        />
      </div>
      <div className="absolute bottom-[25%] left-[25%] w-2 h-2 pointer-events-none">
        <img
          src="/images/custom-images/space-star.png"
          alt=""
          className="w-full h-full object-contain animate-pulse"
          style={{ animationDelay: "1.2s" }}
        />
      </div>
      <div className="absolute bottom-[35%] right-[30%] w-3 h-3 pointer-events-none">
        <img
          src="/images/custom-images/space-star.png"
          alt=""
          className="w-full h-full object-contain animate-pulse"
          style={{ animationDelay: "0.3s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 lg:px-8 text-center">
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
          <p className="text-lg text-white/70 leading-relaxed">
            Lets talk about what Motivated us. We started this agency because we
            saw how often products are rushed, built without thought and without
            achieving the user requirements.
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
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
          <VisitButton href="/about" variant="outline" size="md">
            Read Why
          </VisitButton>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070d1f] to-transparent pointer-events-none" />
    </section>
  );
}
