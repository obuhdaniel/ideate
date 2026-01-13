// @ts-nocheck
"use client";

import * as motion from "framer-motion/client";
import { VisitButton } from "@/components/ui/Button";
import GlowingPlanet from "@/components/ui/GlowingPlanet";

interface ContactBannerProps {
  email?: string;
  onFillFormClick?: () => void;
}

export default function ContactBanner({
  email = "ideatedigitalagency@gmail.com",
  onFillFormClick,
}: ContactBannerProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#070d1f] py-16 lg:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />

      {/* Decorative star elements */}
      <div className="absolute top-[20%] left-[8%] w-3 h-3 pointer-events-none">
        <img
          src="/images/custom-images/space-star.png"
          alt=""
          className="w-full h-full object-contain animate-pulse"
        />
      </div>
      <div className="absolute bottom-[30%] right-[12%] w-4 h-4 pointer-events-none">
        <img
          src="/images/custom-images/space-star.png"
          alt=""
          className="w-full h-full object-contain animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>
      <div className="absolute top-[60%] left-[45%] w-2 h-2 pointer-events-none">
        <img
          src="/images/custom-images/space-star.png"
          alt=""
          className="w-full h-full object-contain animate-pulse"
          style={{ animationDelay: "0.8s" }}
        />
      </div>

      {/* Sun-like planet decoration */}
      <GlowingPlanet
        src="/images/custom-images/sun-like-planet.png"
        alt="Sun Planet"
        size={100}
        glowColor="rgba(251, 191, 36, 0.5)"
        position={{ bottom: "10%", right: "5%" }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          {/* Text Content */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
              Have an idea but having difficulties
              <br />
              implementing it?
            </h3>
            <p className="text-white/70 text-lg">
              Email us at{" "}
              <a
                href={`mailto:${email}`}
                className="text-white font-medium hover:text-purple-400 transition-colors"
              >
                {email}
              </a>
            </p>
          </div>

          {/* CTA Button */}
          <VisitButton
            onClick={onFillFormClick}
            variant="outline"
            size="md"
            className="whitespace-nowrap"
          >
            Fill the Form
          </VisitButton>
        </motion.div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
