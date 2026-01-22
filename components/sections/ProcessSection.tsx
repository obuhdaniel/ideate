// @ts-nocheck
"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useTransform,
  useMotionValue,
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
  const [isProcessLocked, setIsProcessLocked] = useState(false);
  const [lockDirection, setLockDirection] = useState<
    "forward" | "backward" | null
  >(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollStartRef = useRef<number>(0);
  const containerTopRef = useRef<number>(0);
  const lastScrollYRef = useRef(0);
  const scrollDirectionRef = useRef<"up" | "down" | null>(null);
  const scrollIntentRef = useRef<"up" | "down" | null>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const mobileX = useMotionValue(0);
  const mobileItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Motion values for parallax effects
  const parallaxY = useMotionValue(0);

  // Track scroll position to detect when process section comes into view
  const { scrollY } = useScroll();

  // Handle body scroll lock/unlock
  useEffect(() => {
    // No need to lock body overflow - let natural scrolling work through 300vh space
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        scrollIntentRef.current = "down";
      } else if (e.deltaY < 0) {
        scrollIntentRef.current = "up";
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);


  // Translate vertical scroll to horizontal scroll
  const updateMobilePosition = (
    stepIndex: number,
    stepProgress: number,
    direction: "forward" | "backward" | null
  ) => {
    const track = mobileTrackRef.current;
    const item = mobileItemRefs.current[stepIndex];

    if (!track || !item) return;

    const viewportWidth = window.innerWidth;
    const viewportCenter = viewportWidth / 2;

    // Get the current item's position and dimensions
    const itemWidth = item.offsetWidth;
    const itemLeftInTrack = item.offsetLeft; // Position relative to track

    // Calculate where the item's center is in the track
    const itemCenterInTrack = itemLeftInTrack + itemWidth / 2;

    // Calculate base X to center the current item
    let targetX = -(itemCenterInTrack - viewportCenter);

    // Interpolate to next/previous item based on progress and direction
    if (stepProgress > 0) {
      let adjacentItem: HTMLDivElement | null = null;

      if (direction === "forward" && stepIndex < PROCESS_STEPS.length - 1) {
        // Moving forward: interpolate towards next item
        adjacentItem = mobileItemRefs.current[stepIndex + 1];
      } else if (direction === "backward" && stepIndex > 0) {
        // Moving backward: interpolate towards previous item
        adjacentItem = mobileItemRefs.current[stepIndex - 1];
      }

      if (adjacentItem) {
        const adjacentItemWidth = adjacentItem.offsetWidth;
        const adjacentItemLeftInTrack = adjacentItem.offsetLeft;
        const adjacentItemCenterInTrack =
          adjacentItemLeftInTrack + adjacentItemWidth / 2;

        // Calculate X to center the adjacent item
        const adjacentTargetX = -(adjacentItemCenterInTrack - viewportCenter);

        // Interpolate between current and adjacent based on progress
        targetX = targetX + (adjacentTargetX - targetX) * stepProgress;
      }
    }

    // Add extra padding to ensure last item can be fully centered
    // Without this, the last item can't scroll to center because track ends
    const contentWidth = track.scrollWidth;
    const lastItemPadding = viewportWidth * 0.5; // Add 50% viewport width as buffer
    const maxTranslateX = Math.max(
      contentWidth - viewportWidth + lastItemPadding,
      0
    );

    // Clamp to valid scroll range
    const clampedX = Math.max(-maxTranslateX, Math.min(0, targetX));

    mobileX.set(clampedX);
  };


  // Update locked state and active step based on user scroll
  useMotionValueEvent(scrollY, "change", (currentScrollY) => {
    if (currentScrollY > lastScrollYRef.current) {
      scrollDirectionRef.current = "down";
    } else if (currentScrollY < lastScrollYRef.current) {
      scrollDirectionRef.current = "up";
    }

    lastScrollYRef.current = currentScrollY;

    if (!containerRef.current) return;

    const intent = scrollIntentRef.current;
    const rect = containerRef.current.getBoundingClientRect();
    const containerTop = currentScrollY + rect.top;

    // Only check lock conditions when NOT already locked
    if (!isProcessLocked) {
      // Forward lock: when container's top reaches viewport top
      const shouldLockForward =
        (intent === "down" || scrollDirectionRef.current === "down") &&
        rect.top >= -15 &&
        rect.top <= 15;

      // Backward lock: when container's bottom reaches viewport bottom
      const shouldLockBackward =
        (intent === "up" || scrollDirectionRef.current === "up") &&
        rect.bottom >= window.innerHeight - 15 &&
        rect.bottom <= window.innerHeight + 15;

      if (shouldLockForward) {
        setIsProcessLocked(true);
        setLockDirection("forward");
        scrollStartRef.current = currentScrollY;
        containerTopRef.current = containerTop;
        setActiveStep(0);
        setScrollProgress(0);
        return;
      }

      if (shouldLockBackward) {
        setIsProcessLocked(true);
        setLockDirection("backward");
        scrollStartRef.current = currentScrollY;
        containerTopRef.current = containerTop;
        setActiveStep(PROCESS_STEPS.length - 1); // Start from Launch phase
        setScrollProgress(1);
        return;
      }
    }

    // Handle step updates while locked
    if (isProcessLocked && lockDirection) {
      const stepHeight = window.innerHeight / PROCESS_STEPS.length;

      // Calculate scroll distance from when we locked
      let scrollDistanceSinceLock = currentScrollY - scrollStartRef.current;

      

      // For backward lock, reverse the direction (scrolling up = positive progress)
      if (lockDirection === "backward") {
        scrollDistanceSinceLock = -scrollDistanceSinceLock;
      }

      // Calculate step index and progress
      const stepIndexRaw = scrollDistanceSinceLock / stepHeight;
      let clampedStep: number;
      let clampedProgress: number;
      let totalProgress: number;

      if (lockDirection === "backward") {
        // BACKWARD: Count DOWN from step 2 (Launch) to 0 (Design)
        const stepsDownFromLaunch = Math.trunc(stepIndexRaw);
        clampedStep = Math.max(0, Math.min(2 - stepsDownFromLaunch, 2));

        // Progress within step (0 to 1)
        let stepProgress = stepIndexRaw - Math.trunc(stepIndexRaw);
        if (stepProgress < 0) {
          stepProgress *= -1;
        }
        clampedProgress = Math.max(0, Math.min(stepProgress, 1));

        // Progress bar: 100% at Launch (step 2), 0% at Design (step 0)
        // Goes from 100% → 0% as we scroll backward
        totalProgress =
          (clampedStep + clampedProgress + 1) / PROCESS_STEPS.length;
      } else {
        // FORWARD: Count UP from step 0 (Design) to 2 (Launch)
        clampedStep = Math.max(0, Math.min(Math.trunc(stepIndexRaw), 2));

        // Progress within step (0 to 1)
        let stepProgress = stepIndexRaw - Math.trunc(stepIndexRaw);
        if (stepProgress < 0) {
          stepProgress *= -1;
        }
        clampedProgress = Math.max(0, Math.min(stepProgress, 1));

        // Progress bar: 0% at Design (step 0), 100% at Launch (step 2)
        // Goes from 0% → 100% as we scroll forward
        totalProgress = (clampedStep + clampedProgress) / PROCESS_STEPS.length;
      }

      setScrollProgress(clampedProgress);

      // Update active step
      if (clampedStep !== activeStep) {
        setActiveStep(clampedStep);
      }

      // Update mobile horizontal position - ONE CALL HANDLES EVERYTHING
      updateMobilePosition(clampedStep, clampedProgress, lockDirection);

      // Sync word index based on total progress through all steps
      const wordIdx = Math.floor(
        (totalProgress * ANIMATED_WORDS.length) % ANIMATED_WORDS.length,
      );
      if (wordIdx !== currentWordIndex) {
        setCurrentWordIndex(wordIdx);
      }

      // Update parallax (works in both directions)
      parallaxY.set(scrollDistanceSinceLock * 0.5);

      // Unlock logic with direction awareness
      if (lockDirection === "forward") {
        // Forward: unlock when scrolled far enough past the section
        if (scrollDistanceSinceLock >= window.innerHeight) {
          setIsProcessLocked(false);
          setLockDirection(null);
        }
      }

      if (lockDirection === "backward") {
        // Backward: unlock when scrolled far enough back past the section
        if (scrollDistanceSinceLock >= window.innerHeight) {
          setIsProcessLocked(false);
          setLockDirection(null);
        }
      }
    }
  });

  const handleFindOut = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Calculate opacity based on scroll progress for step indicator
  const getStepOpacity = (index: number) => {
    if (index === activeStep) return 1;
    if (index < activeStep) return 0.5;
    return 0.2;
  };

  return (
    <>
      <div
        ref={containerRef}
        id="process"
        className="relative w-full"
        style={{
          height: isProcessLocked ? "100vh" : "auto",
          minHeight: "auto",
          backgroundColor: "transparent",
          zIndex: isProcessLocked ? 40 : "auto",
        }}
      >
        <div
          className={`${
            isProcessLocked ? "fixed" : "relative"
          } top-0 left-0 right-0 w-full overflow-hidden`}
          style={{
            height: "100vh",
            zIndex: isProcessLocked ? 30 : "auto",
          }}
        >
          <section className="relative w-full h-full flex flex-col md:flex-row items-center bg-gradient-to-br from-[#1D2948] via-[#141D33] via-[#0F1628] to-[#050A16]">
            {/* --- BACKGROUND ELEMENTS WITH PARALLAX --- */}

            <StarField count={80} className="pointer-events-none opacity-60" />

            {/* Planet Top Left - Parallax Effect */}
            <motion.div
              className="absolute top-[-5%] left-[-5%] w-32 h-32 md:w-64 md:h-64 pointer-events-none"
              style={{ y: parallaxY }}
            >
              <Image
                src="/images/process/planet-with-bodies-around.png"
                alt="Planet Decor"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Planet Bottom Right - Counter Parallax */}
            <motion.div
              className="absolute bottom-[35%] left-[10%] w-40 h-40 md:w-80 md:h-80 pointer-events-none opacity-70"
              style={{ y: parallaxY }}
            >
              <Image
                src="/images/process/planet-with-bodies-around.png"
                alt="Planet Decor"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Dynamic Background Image with Scale Animation */}
            <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute bottom-0 w-full flex items-end justify-center"
                >
                  {PROCESS_STEPS[activeStep] && (
                    <Image
                      src={PROCESS_STEPS[activeStep].image}
                      alt="Process"
                      width={1200}
                      height={800}
                      className="block w-auto h-auto max-w-full max-h-[85dvh] object-contain object-bottom"
                      priority
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Scroll Progress Indicator Overlay */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-50">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-400 to-purple-600"
                initial={{ width: "33%" }}
                animate={{
                  width: `${((activeStep + scrollProgress) / PROCESS_STEPS.length) * 100}%`,
                }}
                transition={{ type: "spring", damping: 20, stiffness: 50 }}
              />
            </div>

            {/* --- CONTENT CONTAINER --- */}
            <div className="relative z-10 w-full md:max-w-7xl mx-auto px-4 py-5 md:py-0 md:px-12 h-auto">
              <div className="flex flex-col justify-between md:flex-row gap-2 md:gap-6 items-center md:items-start h-auto md:py-20">
                {/* LEFT COLUMN */}
                <div className="md:pr-10">
                  <motion.div
                    className="flex items-center gap-1 md:gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isProcessLocked
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <span className="text-purple-500 font-mono text-xs md:text-sm">
                      //
                    </span>
                    <span className="text-purple-400 text-md md:text-2xl tracking-wide">
                      The Process
                    </span>
                  </motion.div>

                  <div className="h-auto flex flex-row md:flex-col justify-start md:justify-between mb-6 md:mb-30 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.h2
                        key={currentWordIndex}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -40, opacity: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-2xl md:text-4xl lg:text-4xl font-bold text-white leading-tight"
                      >
                        {ANIMATED_WORDS[currentWordIndex]}
                      </motion.h2>
                    </AnimatePresence>
                  </div>

                  <div className="md:max-w-[50%] space-y-5">

                    <p className="text-xl md:text-2xl mb-4 md:mb-8 text-gray-300 font-light leading-relaxed">
                      <span className="text-white font-medium">
                        Our mission
                      </span>{" "}
                      when you trust us to bring your product to life.
                    </p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="hidden md:block">
                        <VisitButton
                          onClick={handleFindOut}
                          variant="outline"
                          size="lg"
                          className="relative z-50"
                        >
                          Find Out
                        </VisitButton>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* RIGHT COLUMN - Desktop Vertical Layout */}
                <div className="hidden md:block relative pl-4 lg:pl-70 py-10">
                  <div className="flex flex-col">
                    {PROCESS_STEPS.map((step, index) => {
                      const isLast = index === PROCESS_STEPS.length - 1;
                      const isActive = activeStep === index;
                      const isPast = index < activeStep;

                      return (
                        <motion.div
                          key={step.id}
                          className={`relative group flex flex-col transition-all duration-500 ${
                            !isLast ? "pb-20" : ""
                          }`}
                          animate={{
                            opacity: getStepOpacity(index),
                          }}
                          transition={{
                            type: "spring",
                            damping: 20,
                            stiffness: 50,
                          }}
                        >
                          {!isLast && (
                            <div
                              className={`absolute left-[3px] lg:left-[3px] top-[2.5rem] bottom-0 w-px transition-all duration-500 ${
                                isPast ? "bg-purple-400/50" : "bg-white/10"
                              }`}
                            />
                          )}

                          <div className="flex items-start gap-8 lg:gap-12 relative z-10">
                            <motion.div
                              className="flex flex-col items-center w-[7px]"
                              animate={{
                                scale: isActive ? 1.2 : 1,
                              }}
                              transition={{
                                type: "spring",
                                damping: 15,
                                stiffness: 200,
                              }}
                            >
                              <motion.span
                                className={`text-sm font-mono mt-1 transition-colors duration-500 font-bold ${
                                  isActive
                                    ? "text-purple-400"
                                    : isPast
                                      ? "text-purple-300"
                                      : "text-gray-600"
                                }`}
                              >
                                {step.number}
                              </motion.span>
                            </motion.div>

                            <div className="flex-1 space-y-3 pt-0">
                              <motion.h3
                                className={`text-3xl font-bold transition-colors duration-700 ${
                                  isActive
                                    ? "text-white"
                                    : isPast
                                      ? "text-gray-400"
                                      : "text-gray-600 group-hover:text-gray-400"
                                }`}
                                animate={{
                                  letterSpacing: isActive ? "0.05em" : "0em",
                                }}
                                transition={{
                                  type: "spring",
                                  damping: 15,
                                  stiffness: 150,
                                }}
                              >
                                {step.title}
                              </motion.h3>

                              <motion.p
                                className={`text-base max-w-xs transition-colors duration-700 ${
                                  isActive
                                    ? "text-gray-300"
                                    : isPast
                                      ? "text-gray-600"
                                      : "text-gray-700"
                                }`}
                                animate={{
                                  height: isActive ? "auto" : "0",
                                  opacity: isActive ? 1 : 0,
                                  marginTop: isActive ? "0.75rem" : "0",
                                }}
                                transition={{
                                  type: "spring",
                                  damping: 18,
                                  stiffness: 100,
                                }}
                              >
                                {step.description}
                              </motion.p>
                            </div>
                          </div>

                          {isActive && (
                            <motion.div
                              layoutId="activeGlow"
                              className="absolute left-[3px] lg:left-[3px] top-2 h-12 w-[2px] bg-white -translate-x-1/2 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                              transition={{
                                type: "spring",
                                damping: 20,
                                stiffness: 100,
                              }}
                            />
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile: Horizontal Layout at Top */}
                <div className="md:hidden w-full mt-10 -mx-6 px-4">
                  <div className="flex flex-col gap-6">
                    {/* Horizontal Process Cards */}
                    <div className="md:hidden w-full overflow-hidden">
                      <motion.div
                        ref={mobileTrackRef}
                        className="flex flex-row gap-4 pb-2 will-change-transform"
                        style={{ x: mobileX }}
                        transition={{
                          type: "spring",
                          damping: 20,
                          stiffness: 120,
                        }}
                      >
                        {PROCESS_STEPS.map((step, index) => {
                          const isActive = activeStep === index;
                          const isPast = index < activeStep;

                          return (
                            <motion.div
                              ref={(el) => (mobileItemRefs.current[index] = el)}
                              key={step.id}
                              className={`relative group flex flex-col min-w-[70%] h-1/3 transition-all duration-500 p-4 rounded-lg border ${
                                isActive
                                  ? "opacity-100 border-purple-400/50 bg-white/5"
                                  : isPast
                                    ? "opacity-60 border-purple-300/30"
                                    : "opacity-40 border-gray-700/30"
                              }`}
                              animate={{
                                scale: isActive ? 1.05 : 1,
                              }}
                              transition={{
                                type: "spring",
                                damping: 15,
                                stiffness: 200,
                              }}
                            >
                              <div className="flex flex-col gap-3">
                                <span
                                  className={`text-sm font-mono transition-colors duration-500 font-bold ${
                                    isActive
                                      ? "text-purple-400"
                                      : isPast
                                        ? "text-purple-300"
                                        : "text-gray-600"
                                  }`}
                                >
                                  {step.number}
                                </span>

                                <h3
                                  className={`text-xl font-bold transition-colors duration-500 ${
                                    isActive
                                      ? "text-white"
                                      : isPast
                                        ? "text-gray-400"
                                        : "text-gray-600 group-hover:text-gray-400"
                                  }`}
                                >
                                  {step.title}
                                </h3>

                                <p
                                  className={`text-md transition-colors duration-500 ${
                                    isActive
                                      ? "text-gray-300"
                                      : isPast
                                        ? "text-gray-600"
                                        : "text-gray-700"
                                  }`}
                                >
                                  {step.description}
                                </p>
                              </div>

                              {isActive && (
                                <motion.div
                                  layoutId="activeMobileGlow"
                                  className="absolute inset-0 rounded-lg border-2 border-purple-400 shadow-[0_0_20px_rgba(192,132,250,0.3)]"
                                  transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                  }}
                                />
                              )}
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
