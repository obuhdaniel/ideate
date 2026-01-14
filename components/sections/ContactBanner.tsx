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
    <section className="relative w-full overflow-hidden bg-[#070d1f] py-16 lg:py-24">
      {/* Left vertical line */}
      <div className="absolute left-[8%] md:left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      {/* Right vertical line */}
      <div className="absolute right-[8%] md:right-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      {/* Top decorative line */}
      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-white/10" />

      {/* Orbit Rings Background */}
      <div className="absolute inset-0 pointer-events-none">
        <OrbitRings
          sizes={[400, 600, 800]}
          centerX="80%"
          centerY="50%"
          className="opacity-15"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-12 md:px-16 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white uppercase tracking-wide leading-tight">
                Have an idea but having difficulties
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

          {/* Large Rocket Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <motion.img
              src="/images/custom-images/rocket.png"
              alt="Rocket"
              className="w-32 h-32 lg:w-40 lg:h-40 object-contain"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-white/10" />
    </section>
  );
}
