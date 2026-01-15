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
    <section className="relative w-full min-h-screen overflow-hidden bg-[#070d1f] py-20 lg:py-32 flex items-center">
      {/* --- BACKGROUND ELEMENTS --- */}

      {/* Star Field */}
      <StarField count={80} className="pointer-events-none opacity-60" />

      {/* Planet with bodies - Top Left */}
      <div className="absolute top-[-5%] left-[-5%] w-32 h-32 md:w-64 md:h-64 pointer-events-none">
        <img
          src="/images/process/planet-with-bodies-around.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Planet with bodies - Bottom Right */}
      <div className="absolute bottom-[35%] left-[10%] w-40 h-40 md:w-80 md:h-80 pointer-events-none opacity-70">
        <img
          src="/images/process/planet-with-bodies-around.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-5xl h-full flex items-end justify-center"
          >
            <img
              src={PROCESS_STEPS[activeStep].image}
              alt="Process"
              className="w-full h-[75%] object-contain object-bottom"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* LEFT COLUMN: Headings & Mission */}
          <div className="lg:pr-10">
            {/* Tagline */}
            <div className="flex items-center gap-3">
              <span className="text-purple-500 font-mono text-sm">//</span>
              <span className="text-purple-400 text-2xl tracking-wide uppercase">
                The Process
              </span>
            </div>

            {/* Cycling Big Text */}
            <div className="h-32 lg:h-40 flex flex-col justify-start mb-30">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentWordIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-4xl lg:text-4xl font-bold text-white leading-tight"
                >
                  {ANIMATED_WORDS[currentWordIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* Mission Statement */}
            <div className="max-w-[50%] space-y-5">
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                <span className="text-white font-medium">Our mission</span> when
                you trust us to bring your product to life.
              </p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <VisitButton href="/about" variant="outline" size="lg">
                  Find Out
                </VisitButton>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Timeline List */}
          <div className="relative pl-4 lg:pl-70 py-10">
            <div className="flex flex-col">
              {PROCESS_STEPS.map((step, index) => {
                const isLast = index === PROCESS_STEPS.length - 1;
                const isActive = activeStep === index;

                return (
                  <div
                    key={step.id}
                    className={`relative group cursor-pointer flex flex-col ${
                      // Add padding to create vertical space, except for the last item
                      !isLast ? "pb-20" : ""
                    }`}
                    onClick={() => handleStepClick(index)}
                  >
                    {/* --- THE CONNECTOR LINE --- */}
                    {/* Logic: Show line ONLY if step is NOT active and NOT last. 
                        This creates the "alternating" effect where the active step 
                        breaks the line to show the Glow Indicator instead. */}
                    {!isLast && !isActive && (
                      <div className="absolute left-[3px] lg:left-[3px] top-[2.5rem] bottom-0 w-px bg-white/10" />
                    )}

                    <div className="flex items-start gap-8 lg:gap-12 relative z-10">
                      {/* Number Column */}
                      <div className="flex flex-col items-center w-[7px]">
                        <span
                          className={`text-sm font-mono mt-1 transition-colors duration-300 ${
                            isActive ? "text-purple-400" : "text-gray-600"
                          }`}
                        >
                          {step.number}
                        </span>
                      </div>

                      {/* Text Content */}
                      <div className="flex-1 space-y-3 pt-0">
                        <h3
                          className={`text-3xl font-bold transition-colors duration-300 ${
                            isActive
                              ? "text-white"
                              : "text-gray-600 group-hover:text-gray-400"
                          }`}
                        >
                          {step.title}
                        </h3>

                        <p
                          className={`text-base max-w-xs transition-colors duration-300 ${
                            isActive ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* --- THE ACTIVE GLOW INDICATOR --- */}
                    {/* This replaces the connector line when the step is active */}
                    {isActive && (
                      <motion.div
                        layoutId="activeGlow"
                        className="absolute left-[3px] lg:left-[3px] top-2 h-12 w-[2px] bg-white -translate-x-1/2 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
