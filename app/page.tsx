"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Navigation from "@/components/layout/Navigation";
import WireframePlanet from "@/components/ui/Planet3D";

// ============================================
// CONSTANTS
// ============================================

const SLIDE_DURATION = 6000;
const TRANSITION_DURATION = 2500;

const SLIDES = [
  { title: "IDEATE" },
  { title: "DIGITAL" },
  { title: "AGENCY" },
] as const;

const HERO_IMAGE = "/images/hero/2.png";

// ============================================
// ANIMATION VARIANTS
// ============================================

const textVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1200 : -1200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1200 : -1200,
    opacity: 0,
  }),
};

const textTransition = {
  x: { type: "spring", stiffness: 40, damping: 20 },
  opacity: { duration: 2 },
};

// ============================================
// SUB-COMPONENTS
// ============================================

function StarField() {
  return (
    <div className="absolute inset-0 z-0">
      {[...Array(60)].map((_, i) => (
        <span
          key={i}
          className="absolute h-[2px] w-[2px] rounded-full bg-white/70 animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

interface PlanetContainerProps {
  position: "left" | "right";
  glowIntensity: number;
}

function PlanetContainer({ position, glowIntensity }: PlanetContainerProps) {
  const positionClasses =
    position === "left" ? "top-[30%] left-[8%]" : "bottom-[15%] right-[8%]";

  return (
    <div
      className={`absolute ${positionClasses} w-[180px] h-[180px] z-[5] pointer-events-none`}
    >
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <WireframePlanet glowIntensity={glowIntensity} />
      </Canvas>
    </div>
  );
}

interface OrbitRingsProps {
  isTransitioning: boolean;
}

function OrbitRings({ isTransitioning }: OrbitRingsProps) {
  const rings = [700, 900, 1100, 1300, 1500, 1700];

  return (
    <div className="absolute inset-0 z-[3] pointer-events-none flex items-center justify-center">
      <div className="relative">
        {rings.map((size, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#272731]"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              borderWidth: `${1.5 + i * 0.3}px`,
            }}
            animate={{
              opacity: isTransitioning ? 0.15 : 0.5 - i * 0.06,
              borderColor: isTransitioning ? "#12121a" : "#272731",
            }}
            transition={{
              duration: 2.5,
              ease: [0.4, 0, 0.2, 1],
              delay: i * 0.05,
            }}
          />
        ))}
      </div>
    </div>
  );
}

interface SlideTextProps {
  currentSlide: number;
  direction: number;
}

function SlideText({ currentSlide, direction }: SlideTextProps) {
  return (
    <div className="absolute inset-0 z-10 flex items-start justify-center pt-16 lg:pt-16 pointer-events-none overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.h1
          key={currentSlide}
          custom={direction}
          variants={textVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={textTransition}
          className="text-[10rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] font-extralight tracking-tight text-[#d8d8d8]/70 select-none leading-none"
        >
          {SLIDES[currentSlide].title}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center pt-20">
      <img
        src={HERO_IMAGE}
        alt="Hero"
        className="h-auto max-h-[85vh] object-contain"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070d1f] via-transparent to-transparent" />
    </div>
  );
}

function Tagline() {
  return (
    <div className="absolute bottom-40 left-0 z-30 px-8 lg:px-16">
      <p className="text-lg md:text-xl lg:text-2xl font-light text-white/90 leading-relaxed max-w-md">
        We Bring Your <span className="font-normal text-white">Idea</span>, Your
        <br />
        <span className="font-normal text-white">Brand</span>, Your{" "}
        <span className="font-normal text-white">Product</span> To Life.
      </p>
    </div>
  );
}

interface NavigationControlsProps {
  onPrev: () => void;
  onNext: () => void;
  currentSlide: number;
  totalSlides: number;
  onSelectSlide: (index: number) => void;
}

function NavigationControls({
  onPrev,
  onNext,
  currentSlide,
  totalSlides,
  onSelectSlide,
}: NavigationControlsProps) {
  return (
    <div className="absolute bottom-8 left-0 right-0 z-30 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={onPrev}
          className="h-14 w-14 rounded-full border border-white/30 hover:border-white/60 hover:bg-white/5 flex items-center justify-center transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
        </button>

        <div className="flex flex-col items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-12 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full transition-colors duration-300 font-medium text-sm tracking-wider shadow-lg shadow-purple-600/30"
          >
            EXPLORE <span className="ml-2">→</span>
          </motion.button>

          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => onSelectSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-white"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={onNext}
          className="h-14 w-14 rounded-full border border-white/30 hover:border-white/60 hover:bg-white/5 flex items-center justify-center transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
        </button>
      </div>
    </div>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > currentSlide ? 1 : -1);
      setIsTransitioning(true);
      setCurrentSlide(index);
    },
    [currentSlide]
  );

  const nextSlide = useCallback(() => {
    setDirection(1);
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(
        () => setIsTransitioning(false),
        TRANSITION_DURATION
      );
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const glowIntensity = isTransitioning ? 0.3 : 1;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#070d1f]">
      <StarField />
      <OrbitRings isTransitioning={isTransitioning} />

      <PlanetContainer position="left" glowIntensity={glowIntensity} />
      <PlanetContainer position="right" glowIntensity={glowIntensity} />

      <Navigation />

      <SlideText currentSlide={currentSlide} direction={direction} />

      <HeroImage />

      <Tagline />

      <NavigationControls
        onPrev={prevSlide}
        onNext={nextSlide}
        currentSlide={currentSlide}
        totalSlides={SLIDES.length}
        onSelectSlide={goToSlide}
      />
    </section>
  );
}
