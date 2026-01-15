// @ts-nocheck
"use client";

import { useState, useCallback, useEffect } from "react";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { VisitButton } from "@/components/ui/Button";

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

interface PortfolioCarouselProps {
  projects: PortfolioProject[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const contentVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

const imageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 200 : -200,
    opacity: 0,
    scale: 0.9,
  }),
};

const transition = {
  x: { type: "spring", stiffness: 300, damping: 30 },
  opacity: { duration: 0.3 },
  scale: { duration: 0.3 },
};

export default function PortfolioCarousel({
  projects,
  autoPlay = false,
  autoPlayInterval = 5000,
}: PortfolioCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, autoPlayInterval, nextSlide]);

  const currentProject = projects[currentIndex];

  return (
    <div className="relative w-full">
      {/* Decorative star elements */}
      <div className="absolute left-[20%] top-[20%] w-3 h-3">
        <img
          src="/images/custom-images/space-star.png"
          alt=""
          className="w-full h-full object-contain animate-pulse"
        />
      </div>
      <div className="absolute right-[15%] top-[10%] w-4 h-4">
        <img
          src="/images/custom-images/space-star.png"
          alt=""
          className="w-full h-full object-contain animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>
      <div className="absolute left-[35%] bottom-[30%] w-2 h-2">
        <img
          src="/images/custom-images/space-star.png"
          alt=""
          className="w-full h-full object-contain animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Left side - Project Info */}
        <div className="flex-1 relative min-h-[300px] flex flex-col justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentProject.id}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              className="space-y-6"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {currentProject.title}
              </h3>
              <p className="text-2xl text-white/80 leading-relaxed max-w-lg">
                {currentProject.description}
              </p>

              {/* Decorative sparkle */}
              <div className="absolute left-0 bottom-24 opacity-50">
                <img
                  src="/images/custom-images/space-star.png"
                  alt=""
                  className="w-8 h-8 animate-pulse"
                />
              </div>

              <VisitButton
                href={currentProject.url}
                variant="outline"
                size="lg"
              >
                VISIT
              </VisitButton>
            </motion.div>
          </AnimatePresence>

          {/* Navigation - Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 lg:left-auto lg:right-[calc(-20%+3rem)] top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border border-white/30 hover:border-white/60 hover:bg-white/5 flex items-center justify-center transition-all duration-300 group z-10"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Right side - Project Image */}
        <div className="flex-1 relative flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentProject.id + "-image"}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              className="relative w-full max-w-2xl"
            >
              {/* Image Container with simple border/shadow */}
              <img
                src={currentProject.image}
                alt={currentProject.title}
                // Changed to object-cover to fill the space nicely
                className="w-full h-auto object-cover"
              />

              {/* Glow effect behind image */}
              {/* <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600/20 via-transparent to-cyan-600/20 blur-3xl scale-105" /> */}
            </motion.div>
          </AnimatePresence>

          {/* Navigation - Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 lg:right-auto lg:left-[calc(100%+3rem)] top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border border-white/30 hover:border-white/60 hover:bg-white/5 flex items-center justify-center transition-all duration-300 group z-10"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="flex justify-center gap-2 mt-12">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-purple-500"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
