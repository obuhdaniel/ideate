// @ts-nocheck
"use client";

import * as motion from "framer-motion/client";
import { VisitButton } from "@/components/ui/Button";
import OrbitRings from "@/components/ui/OrbitRings";

interface ContactBannerProps {
  email?: string;
  onFillFormClick?: () => void;
}

export default function ContactBanner({
  email = "ideatedigitalagency@gmail.com",
  onFillFormClick,
}: ContactBannerProps) {
  return (
    <section className="relative w-full overflow-visible py-20 lg:py-32 bg-transparent">
      {/* --- DECORATIVE LINES --- */}

      {/* Left vertical line */}
      <div className="absolute left-[8%] md:left-[18%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      {/* Right vertical line */}
      <div className="absolute right-[8%] md:right-[18%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      {/* Top decorative line */}
      <div className="absolute top-[15%] left-[10%] right-[10%] h-px bg-white/10" />

      {/* Bottom decorative line */}
      <div className="absolute bottom-[15%] left-[10%] right-[10%] h-px bg-white/10" />

      {/* Enclosed Box Fill */}
      <div className="absolute top-[15%] bottom-[15%] left-[8%] right-[8%] md:left-[18%] md:right-[18%] bg-white/[0.03] pointer-events-none" />

      {/* Orbit Rings Background */}
      <div className="absolute inset-0 pointer-events-none">
        <OrbitRings
          sizes={[400, 600, 800]}
          centerX="80%"
          centerY="50%"
          className="opacity-15"
        />
      </div>

      {/* Space Star */}
      <motion.img
        src="/images/custom-images/space-star.png"
        alt="Space Star"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-[60%] left-[70%] w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-12 md:px-16 lg:px-25 ">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-xl md:text-2xl lg:text-2xl font-bold text-white uppercase tracking-wide leading-tight">
                Got an idea but having difficulties
                <br />
                implementing it?
              </h3>
              <p className="text-white/70 text-base md:text-lg">
                Email us at{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-white font-semibold hover:text-purple-400 transition-colors"
                >
                  {email}
                </a>
              </p>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-30"
          >
            <VisitButton
              onClick={onFillFormClick}
              variant="outline"
              size="lg"
              className="whitespace-nowrap"
            >
              Fill the Form
            </VisitButton>
          </motion.div>

          {/* Rocket Image Wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, delay: 0.9 }}
            className="hidden z-[9999] lg:block absolute right-[-33%] top-[-35%] -translate-y-1/2 pointer-events-none"
          >
            {/* INTERACTION WRAPPER */}
            <motion.div
              variants={{
                rest: {
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 50,
                    damping: 15,
                    mass: 1.2,
                    delay: 3,
                  },
                },
                hover: {
                  y: -500,
                  transition: {
                    type: "spring",
                    stiffness: 50,
                    damping: 15,
                    mass: 1.2,
                    delay: 0,
                  },
                },
              }}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="cursor-pointer pointer-events-auto"
            >
              <motion.img
                src="/images/custom-images/rocket.png"
                alt="Rocket"
                className="w-32 h-32 lg:w-200 lg:h-200 object-contain"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
