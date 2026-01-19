// @ts-nocheck
"use client";

import ServiceCard from "@/components/features/ServiceCard";
import GlowingPlanet from "@/components/ui/GlowingPlanet";
import OrbitRings from "@/components/ui/OrbitRings";
import ContactBanner from "@/components/sections/ContactBanner";
import AboutSection from "@/components/sections/AboutSection";
import Image from "next/image";
import {
  motion,
  useAnimation,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef } from "react";

const SERVICES = [
  {
    icon: "/images/services/ui-ux-icon.png",
    title: "UI/UX Design",
    description:
      "User-centered interfaces crafted for clarity, usability, and seamless experiences.",
    position: "top-left",
  },
  {
    icon: "/images/services/web-dev-icon.png",
    title: "Web Applications",
    description:
      "Scalable and secure web applications designed to solve real business problems.",
    position: "top-right",
  },
  {
    icon: "/images/services/web-des-icon.png",
    title: "Website Design",
    description:
      "Visually engaging, high-performance websites built to strengthen your online presence.",
    position: "bottom-left",
  },
  {
    icon: "/images/services/app-icon.png",
    title: "Mobile Apps",
    description:
      "Intuitive mobile applications built for performance, engagement, and real users.",
    position: "bottom-right",
  },
];

interface ServicesSectionProps {
  onFillFormClick?: () => void;
}

export default function ServicesSection({
  onFillFormClick,
}: ServicesSectionProps) {
  const handleFillForm = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();

  const hasLaunched = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLaunched.current) {
          hasLaunched.current = true;
          controls.start("launch");
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-100% 0px 0px 0px", // trigger earlier (mobile-safe)
      }
    );

      observer.observe(el);
      return () => observer.disconnect();
    }, [controls]);

  return (
    <>
      <div ref={containerRef} className="relative w-full bg-gradient-to-br from-[#1D2948] via-[#0A0C10] via-[#0F1628] via-[#141D33] to-[#050A16]">
        <section className="relative w-full overflow-visible bg-transparent py-10 md:py-32">
          {/* --- DECORATIVE LINES --- */}

          
          {/* Desktop: Left vertical line */}
          <div className="absolute hidden md:block left-[8%] md:left-[18%] top-[25%] bottom-[8%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          {/* Desktop: Right vertical line */}
          <div className="absolute hidden md:block right-[8%] md:right-[18%] top-[25%] bottom-[8%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          {/* Desktop: Top decorative line */}
          <div className="absolute hidden md:block top-[33.5%] left-[10%] right-[10%] h-px bg-white/10" />

          {/* Desktop: Bottom decorative line */}
          <div className="absolute hidden md:block bottom-[14.5%] left-[10%] right-[10%] h-px bg-white/10" />

          {/* Desktop: Horizontal Middle Line - Stretches fully between vertical poles */}
          <div className="absolute hidden md:block top-[59.5%] left-[8%] right-[8%] md:left-[18%] md:right-[18%] h-px bg-white/10 z-0" />

          {/* Desktop: Vertical Center Line - Stretches between Top and Bottom lines */}
          <div className="absolute hidden md:block left-1/2 -translate-x-1/2 top-[33.5%] bottom-[14.5%] w-px bg-white/10 z-0" />

          {/* Desktop: ENCLOSED BOX FILL --- */}
          <div className="absolute hidden md:block top-[33.5%] bottom-[14.5%] left-[8%] right-[8%] md:left-[18%] md:right-[18%] bg-white/[0.03] pointer-events-none" />

          {/* --- BACKGROUND ELEMENTS --- */}

          {/* Multiple Orbit Rings */}
          <div className="absolute inset-0 pointer-events-none">
            <OrbitRings
              sizes={[200, 300, 400]}
              centerX="5%"
              centerY="15%"
              className="opacity-20"
            />
            <OrbitRings
              sizes={[300, 450, 600]}
              centerX="95%"
              centerY="40%"
              className="opacity-15"
            />
            <OrbitRings
              sizes={[250, 400, 550]}
              centerX="10%"
              centerY="85%"
              className="opacity-20"
            />
          </div>

          {/* Floating Planets */}
          <GlowingPlanet
            src="/images/services/purple-planet.png"
            alt="Purple Planet"
            size={250}
            glowColor="rgba(147, 51, 234, 0.5)"
            position={{ top: "8%", left: "2%" }}
          />


          <GlowingPlanet
            src="/images/services/globe.png"
            alt="Globe"
            size={250}
            glowColor="rgba(100, 200, 255, 0.4)"
            position={{ top: "8%", right: "2%" }}
            className="hidden md:block"
          />


          {/* Content */}
          <div className="relative z-20 max-w-5xl mx-auto md:px-16 lg:px-20">
            {/* Section Header */}
            <div className="mb-10 md:mb-20 px-12 relative">
              <div className="flex items-center gap-1 md:gap-3 mb-4">
                <span className="text-purple-400 font-mono text-xs md:text-sm">//</span>
                <span className="text-purple-400 text-lg md:text-2xl tracking-wide">
                  Our Services
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white ">
                What We Do, Done with intention
              </h2>
              {/* Rocket (mobile only) */}
              <motion.div
                className="md:hidden absolute -bottom-20 -right-35"
                variants={{
                  hidden: {
                    y: "100vh",
                    opacity: 0,
                  },
                  launch: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 5, // fast but visible
                      ease: [0.22, 0.75, 0.36, 0.9],
                    },
                  },
                  wiggle: {
                    rotate: [-4, -4, -4],
                    y: [0, -10, 0],
                    transition: {
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Infinity,
                    },
                  },
                }}
                initial="hidden"
                animate={controls}
                onAnimationComplete={(variant) => {
                  if (variant === "launch") {
                    controls.start("wiggle");
                  }
                }}
                style={{
                  willChange: "transform",
                  transformOrigin: "center",
                }}
              >
                <Image
                  src="/images/custom-images/rocket.png"
                  alt="Rocket"
                  width={379}
                  height={200}
                  priority
                />
              </motion.div>
            </div>

            {/* Services Grid */}
            <div className="">
              <div className="grid grid-cols-1 w-screen md:w-auto md:grid-cols-2 relative md:border md:border-white/10">
                {SERVICES.map((service, index) => (
                  <ServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    position={service.position}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Planets */}
          <GlowingPlanet
            src="/images/services/globe.png"
            alt="Globe"
            size={250}
            glowColor="rgba(100, 200, 255, 0.4)"
            position={{ bottom: "2%", left: "2%" }}
            className="hidden md:block"
          />

            <GlowingPlanet
            src="/images/services/globe.png"
            alt="Globe"
            size={150}
            glowColor="rgba(100, 200, 255, 0.4)"
            position={{ bottom: "-8%", left: "-8%" }}
            className="md:hidden"
          />

          <GlowingPlanet
            src="/images/services/earth-like-planet.png"
            alt="Earth Planet"
            size={250}
            glowColor="rgba(100, 180, 255, 0.4)"
            position={{ bottom: "2%", right: "2%" }}
            className="hidden md:block"
          />

          <GlowingPlanet
            src="/images/services/earth-like-planet.png"
            alt="Earth Planet"
            size={150}
            glowColor="rgba(100, 180, 255, 0.4)"
            position={{ bottom: "-8%", right: "-8%" }}
            className="md:hidden"
          />
        </section>

        {/* Contact Banner */}
        <ContactBanner onFillFormClick={onFillFormClick || handleFillForm} />

        {/* About Section */}
        <AboutSection />
      </div>
    </>
  );
}
