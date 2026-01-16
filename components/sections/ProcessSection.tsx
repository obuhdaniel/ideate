// @ts-nocheck
"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
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

  // Ref for the scroll container
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 2. PHYSICS ENGINE:
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 5,
    damping: 15,
    mass: 1,
    restDelta: 0.001,
  });

  // 3. Update step based on SMOOTHED progress
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (latest < 0.2) {
      if (activeStep !== 0) setActiveStep(0);
    } else if (latest < 0.65) {
      if (activeStep !== 1) setActiveStep(1);
    } else {
      if (activeStep !== 2) setActiveStep(2);
    }
  });

  // Animate cycling words
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % ANIMATED_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleFindOut = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // 4. CONTAINER HEIGHT: 110vh
    <div
      ref={containerRef}
      id="process"
      className="relative h-[100vh] w-full bg-gradient-to-br from-[#1D2948] via-[#141D33] via-[#0F1628] to-[#050A16]"
    >
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        <section className="relative w-full h-full flex items-center">
          {/* --- BACKGROUND ELEMENTS --- */}

          <StarField count={80} className="pointer-events-none opacity-60" />

          {/* Planet Top Left */}
          <div className="absolute top-[-5%] left-[-5%] w-32 h-32 md:w-64 md:h-64 pointer-events-none">
            <img
              src="/images/process/planet-with-bodies-around.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          {/* Planet Bottom Right */}
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
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute bottom-0 w-full flex items-end justify-center"
              >
                <img
                  src={PROCESS_STEPS[activeStep].image}
                  alt="Process"
                  className="block w-auto h-auto max-w-full max-h-[85dvh] object-contain object-bottom"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* --- CONTENT CONTAINER --- */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
              {/* LEFT COLUMN */}
              <div className="lg:pr-10">
                <div className="flex items-center gap-3">
                  <span className="text-purple-500 font-mono text-sm">//</span>
                  <span className="text-purple-400 text-2xl tracking-wide uppercase">
                    The Process
                  </span>
                </div>

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

                <div className="max-w-[50%] space-y-5">
                  <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                    <span className="text-white font-medium">Our mission</span>{" "}
                    when you trust us to bring your product to life.
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <VisitButton
                      onClick={handleFindOut}
                      variant="outline"
                      size="lg"
                    >
                      Find Out
                    </VisitButton>
                  </motion.div>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="relative pl-4 lg:pl-70 py-10">
                <div className="flex flex-col">
                  {PROCESS_STEPS.map((step, index) => {
                    const isLast = index === PROCESS_STEPS.length - 1;
                    const isActive = activeStep === index;

                    return (
                      <div
                        key={step.id}
                        className={`relative group flex flex-col transition-opacity duration-700 ${
                          !isLast ? "pb-20" : ""
                        } ${isActive ? "opacity-100" : "opacity-30"}`}
                      >
                        {!isLast && !isActive && (
                          <div className="absolute left-[3px] lg:left-[3px] top-[2.5rem] bottom-0 w-px bg-white/10" />
                        )}

                        <div className="flex items-start gap-8 lg:gap-12 relative z-10">
                          <div className="flex flex-col items-center w-[7px]">
                            <span
                              className={`text-sm font-mono mt-1 transition-colors duration-500 ${
                                isActive ? "text-purple-400" : "text-gray-600"
                              }`}
                            >
                              {step.number}
                            </span>
                          </div>

                          <div className="flex-1 space-y-3 pt-0">
                            <h3
                              className={`text-3xl font-bold transition-colors duration-500 ${
                                isActive
                                  ? "text-white"
                                  : "text-gray-600 group-hover:text-gray-400"
                              }`}
                            >
                              {step.title}
                            </h3>

                            <p
                              className={`text-base max-w-xs transition-colors duration-500 ${
                                isActive ? "text-gray-300" : "text-gray-700"
                              }`}
                            >
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {isActive && (
                          <motion.div
                            layoutId="activeGlow"
                            className="absolute left-[3px] lg:left-[3px] top-2 h-12 w-[2px] bg-white -translate-x-1/2 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
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
      </div>
    </div>
  );
}
