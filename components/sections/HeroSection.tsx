// @ts-nocheck
"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import StarField from "@/components/ui/StarField";
import OrbitRings from "@/components/ui/OrbitRings";
import PlanetWithCanvas from "@/components/ui/PlanetWithCanvas";
import { ExploreButton } from "@/components/ui/Button";

// Hero section constants

const SLIDE_DURATION = 6000;
const TRANSITION_DURATION = 2500;

const TEXT_SLIDES = [
  { title: "IDEATE" },
  { title: "DIGITAL" },
  { title: "AGENCY" },
] as const;

const HERO_IMAGES = [
  "/images/hero/hero-female.png",
  "/images/hero/hero-male.png",
] as const;

// ANIMATION VARIANTS

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
  opacity: { duration: 1 },
};

const imageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

// Image remains snappy/fast
const imageTransition = {
  x: { type: "spring", stiffness: 120, damping: 20 },
  opacity: { duration: 0.2 },
};

// Sub-components

interface SlideTextProps {
  currentTextSlide: number;
  textDirection: number;
}

function SlideText({ currentTextSlide, textDirection }: SlideTextProps) {
  return (
    <div className="absolute inset-0 z-10 flex items-start justify-center pt-16 lg:pt-16 pointer-events-none overflow-hidden">
      <AnimatePresence mode="wait" custom={textDirection}>
        <motion.h1
          key={currentTextSlide}
          custom={textDirection}
          variants={textVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={textTransition}
          className="text-[8rem] md:text-[16rem] lg:text-[16rem] xl:text-[18rem] font-extralight tracking-tight text-[#d8d8d8]/70 select-none leading-none"
        >
          {TEXT_SLIDES[currentTextSlide].title}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}

interface HeroImageProps {
  currentSlide: number;
  direction: number;
}

function HeroImage({ currentSlide, direction }: HeroImageProps) {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center pt-40 overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.img
          key={currentSlide}
          custom={direction}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={imageTransition}
          src={HERO_IMAGES[currentSlide]}
          alt="Hero"
          className="max-h-screen w-auto object-contain"
        />
      </AnimatePresence>
    </div>
  );
}

// Tagline sub-component
function Tagline({ currentSlide }: { currentSlide: number }) {
  return (
    <div className="absolute bottom-40 left-0 z-30 px-8 lg:px-16">
      <AnimatePresence mode="wait">
        {currentSlide === 0 ? (
          <motion.div
            key="tagline-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <p className="text-lg md:text-xl lg:text-2xl font-light text-white/90 leading-relaxed max-w-md">
              We Bring Your <span className="font-normal text-white">Idea</span>
              , Your
              <br />
              <span className="font-normal text-white">Brand</span>, Your{" "}
              <span className="font-normal text-white">Product</span> To Life.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="tagline-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <p className="text-lg md:text-xl lg:text-2xl font-light text-white/90 leading-relaxed max-w-md">
              While you grow your business, leave design to us
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface NavigationControlsProps {
  onPrev: () => void;
  onNext: () => void;
  currentSlide: number;
  totalSlides: number;
  onSelectSlide: (index: number) => void;
  onExplore?: () => void;
}

function NavigationControls({
  onPrev,
  onNext,
  currentSlide,
  totalSlides,
  onSelectSlide,
  onExplore,
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
          <ExploreButton onClick={onExplore} />

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

interface HeroSectionProps {
  onExplore?: () => void;
}

export default function HeroSection({ onExplore }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [currentTextSlide, setCurrentTextSlide] = useState(0);
  const [textDirection, setTextDirection] = useState(1);

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
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setIsTransitioning(true);
    setCurrentSlide(
      (prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length
    );
  }, []);

  // Auto-slide text only
  useEffect(() => {
    const timer = setInterval(() => {
      setTextDirection(1);
      setCurrentTextSlide((prev) => (prev + 1) % TEXT_SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
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

  const glowIntensity = isTransitioning ? 0.3 : 1;

  return (
    <section
      id="hero"
      className="relative h-[120vh] w-full overflow-hidden bg-gradient-to-br from-[#1D2948] via-[#141D33] via-[#0F1628] to-[#050A16]"
    >
      <StarField className="z-0" />
      <OrbitRings isTransitioning={isTransitioning} className="z-[3]" />

      <PlanetWithCanvas position="left" glowIntensity={glowIntensity} />
      <PlanetWithCanvas position="right" glowIntensity={glowIntensity} />

      <Navigation />

      <SlideText
        currentTextSlide={currentTextSlide}
        textDirection={textDirection}
      />

      <HeroImage currentSlide={currentSlide} direction={direction} />

      <Tagline currentSlide={currentSlide} />

      <NavigationControls
        onPrev={prevSlide}
        onNext={nextSlide}
        currentSlide={currentSlide}
        totalSlides={HERO_IMAGES.length}
        onSelectSlide={goToSlide}
        onExplore={onExplore}
      />
    </section>
  );
}
