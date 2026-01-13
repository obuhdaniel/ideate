"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import StarField from "@/components/ui/StarField";
import OrbitRings from "@/components/ui/OrbitRings";
import PlanetWithCanvas from "@/components/ui/PlanetWithCanvas";

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
      <StarField className="z-0" />
      <OrbitRings isTransitioning={isTransitioning} className="z-[3]" />

      <PlanetWithCanvas position="left" glowIntensity={glowIntensity} />
      <PlanetWithCanvas position="right" glowIntensity={glowIntensity} />

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
