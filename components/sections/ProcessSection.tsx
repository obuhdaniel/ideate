// @ts-nocheck
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarField from "@/components/ui/StarField";
import { VisitButton } from "@/components/ui/Button";

const PROCESS_STEPS = [
  {
    id: "design",
    number: "01",
    title: "Design",
    description: "Shaping ideas into clear, meaningful digital experiences.",
    image: "/images/process/photo-with-design-on focus.png",
  },
  {
    id: "build",
    number: "02",
    title: "Build",
    description: "Turning designs into scalable, dependable products.",
    image: "/images/process/photo-with-build-on-focus.png",
  },
  {
    id: "launch",
    number: "03",
    title: "Launch",
    description: "Releasing the product with confidence, clarity, and purpose.",
    image: "/images/process/photo-with-launch-on-focus.png",
  },
];

const ANIMATED_WORDS = ["Precise.", "Strategic.", "Intentional."];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Animate cycling words
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % ANIMATED_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

  const handleFindOut = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#070d1f] py-20 lg:py-32">
      {/* Star Field Background */}
      <StarField count={80} className="pointer-events-none" />

      {/* Planet with bodies - Top Left */}
      <div className="absolute top-[5%] left-[2%] w-16 h-16 md:w-24 md:h-24 pointer-events-none">
        <img
          src="/images/process/planet-with-bodies-around.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Planet with bodies - Bottom Right */}
      <div className="absolute bottom-[15%] right-[5%] w-20 h-20 md:w-28 md:h-28 pointer-events-none opacity-70">
        <img
          src="/images/process/planet-with-bodies-around.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="flex items-center gap-3">
              <span className="text-purple-400 font-mono text-sm">//</span>
              <span className="text-purple-400 font-medium tracking-wide">
                The Process
              </span>
            </div>

            {/* Animated Title */}
            <div className="h-32 md:h-40 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentWordIndex}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                >
                  {ANIMATED_WORDS[currentWordIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* Mission Text */}
            <p className="text-gray-300 text-lg max-w-md">
              <span className="text-white font-medium">Our mission</span> when
              you trust us to bring your product to life.
            </p>

            {/* Find Out Button */}
            <VisitButton
              onClick={handleFindOut}
              variant="primary"
              size="lg"
              showArrow={true}
            >
              Find Out
            </VisitButton>
          </div>

          {/* Right Content - Image and Steps */}
          <div className="relative flex items-center gap-6 lg:gap-10">
            {/* Process Image */}
            <div className="relative flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative aspect-[3/4] w-full max-w-md mx-auto"
                >
                  <img
                    src={PROCESS_STEPS[activeStep].image}
                    alt={PROCESS_STEPS[activeStep].title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Process Steps */}
            <div className="flex flex-col gap-6 lg:gap-8">
              {PROCESS_STEPS.map((step, index) => (
                <ProcessStep
                  key={step.id}
                  step={step}
                  isActive={activeStep === index}
                  onClick={() => handleStepClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProcessStepProps {
  step: (typeof PROCESS_STEPS)[0];
  isActive: boolean;
  onClick: () => void;
}

function ProcessStep({ step, isActive, onClick }: ProcessStepProps) {
  return (
    <button
      onClick={onClick}
      className="text-left group cursor-pointer transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        {/* Step Number */}
        <span
          className={`text-sm font-mono transition-colors duration-300 ${
            isActive ? "text-purple-400" : "text-gray-600"
          }`}
        >
          {step.number}
        </span>

        {/* Step Content */}
        <div className="space-y-2">
          <h3
            className={`text-xl md:text-2xl font-semibold transition-colors duration-300 ${
              isActive
                ? "text-white"
                : "text-gray-500 group-hover:text-gray-400"
            }`}
          >
            {step.title}
          </h3>

          {/* Description - Only visible when active */}
          <AnimatePresence>
            {isActive && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-gray-400 text-sm md:text-base max-w-xs"
              >
                {step.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Active Indicator Line */}
      <motion.div
        className="mt-3 ml-8 h-[1px] bg-purple-500/50"
        initial={{ width: 0 }}
        animate={{ width: isActive ? "100%" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </button>
  );
}
