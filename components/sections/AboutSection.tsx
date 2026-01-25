// @ts-nocheck
"use client";

import { useState } from "react";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion"; // Import AnimatePresence
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
      <Image
        src="/images/custom-images/space-star.png"
        alt=""
        fill
        className="object-contain animate-pulse"
        style={{ animationDelay: `${delay}s` }}
      />
    </div>
  );
}

export default function AboutSection() {
  // State to track if the full text is shown
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden py-20 lg:py-32 bg-transparent"
    >
      {/* --- DECORATIVE LINES & BOX --- */}

      {/* Left vertical line */}
      <div className="absolute left-[0%] md:left-[18%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      {/* Right vertical line */}
      <div className="absolute right-[0%] md:right-[18%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      {/* Top decorative line */}
      <div className="absolute top-[10%] md:top-[18%] left-0 md:left-[10%] right-0 md:right-[10%] h-px bg-white/10" />

      {/* Bottom decorative line */}
      <div className="absolute bottom-[0%] md:bottom-[18%] left-1/2 -translate-x-1/2 w-full md:w-[90%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* THE ENCLOSED BOX FILL */}
      <div className="absolute top-[10%] md:top-[18%] bottom-[0%] md:bottom-[18%] left-[0%] right-[0%] md:left-[18%] md:right-[18%] bg-white/[0.03] pointer-events-none" />

      {/* --- BACKGROUND ELEMENTS --- */}

      {/* Orbit Rings */}
      <div className="absolute inset-0 pointer-events-none">
        <OrbitRings
          sizes={[500, 700, 900]}
          centerX="85%"
          centerY="60%"
          className="opacity-15 hidden md:block"
        />

        <OrbitRings
          sizes={[250, 300, 350, 400, 450, 500]}
          centerX="50%"
          centerY="50%"
          className="opacity-65 md:hidden"
        />
      </div>

      {/* Space Star 1 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-[50%] left-[60%] w-16 h-16 md:w-20 md:h-20 lg:w-64 lg:h-64 pointer-events-none"
      >
        <Image
          src="/images/custom-images/space-star.png"
          alt="Space Star"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Space Star 2 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-[15%] left-[3%] w-16 h-16 md:w-20 md:h-20 lg:w-64 lg:h-64 pointer-events-none"
      >
        <Image
          src="/images/custom-images/space-star.png"
          alt="Space Star"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Decorative stars */}
      <DecorativeStar top="15%" right="12%" size={4} delay={0} />
      <DecorativeStar top="25%" right="8%" size={3} delay={0.4} />
      <DecorativeStar bottom="30%" left="20%" size={3} delay={0.8} />
      <DecorativeStar top="50%" left="35%" size={4} delay={1.2} />

      {/* --- CONTENT --- */}
      <div className="relative z-20 md:max-w-5xl mx-auto px-12 md:px-16 lg:px-45 py-15 text-left">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white uppercase tracking-wide text-center">
            Why We Started Ideate
          </h2>
        </motion.div>

        {/* Description Container */}
        <div className="space-y-6 mb-10">
          {/* Initial Paragraphs (Always Visible) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Lets talk about what Motivated us. We started this agency because
              we saw how often products are rushed, built without thought and
              without achieving the user requirements.
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              We realized people have strong ideas but have issues with
              implementation and We wanted to change that.
            </p>
          </motion.div>

          {/* Expanded Text (Visible only after click) */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-6 overflow-hidden"
              >
                <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                  We believe good design is not about noise or trends. It is
                  about clarity, understanding real needs, and building products
                  that feel simple, useful, and lasting. That belief led us to
                  creating this space where ideas becomes reality.
                </p>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                  This agency exists to help ideas grow thoughtfully,
                  deliberately, and with intention.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA Button (Disappears after click) */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <VisitButton
                onClick={() => setIsExpanded(true)}
                variant="outline"
                size="lg"
              >
                Read Why
              </VisitButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
