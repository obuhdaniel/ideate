// @ts-nocheck
"use client";

import { useState, useEffect } from "react";
import * as motion from "framer-motion/client";
import Image from "next/image";
import GlowingPlanet from "@/components/ui/GlowingPlanet";

interface SpacePreloaderProps {
  onLoadingComplete: () => void;
}

export default function SpacePreloader({ onLoadingComplete }: SpacePreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing");

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  useEffect(() => {
    // Update loading text based on progress
    if (progress < 30) {
      setLoadingText("Initializing");
    } else if (progress < 60) {
      setLoadingText("Loading Assets");
    } else if (progress < 90) {
      setLoadingText("Preparing Experience");
    } else {
      setLoadingText("Launch Ready");
    }
  }, [progress]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#1D2948] via-[#0A0C10] via-[#0F1628] via-[#141D33] to-[#050A16] overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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



      {/* Main Rocket Animation */}
      <motion.div
        className="absolute left-[5%] top-1/2 w-64 h-64 z-20"
        animate={{
          x: ["0%", "90vw"],
          y: [0, -50, 0, 50, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Rocket Glow Trail */}
        <motion.div
          className="absolute inset-0 blur-2xl opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(251,146,60,0.8) 0%, rgba(249,115,22,0.4) 50%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
          }}
        />
        {/* Rocket Shape */}

        <div className="w-full  rotate-90 object-contain">
          <img src="/images/custom-images/rocket.png" alt="" srcSet="" className="w-96s" />
        </div>

              
      </motion.div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
        {/* Animated Logo/Title */}
        <motion.div
          className="text-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Ideate
          </motion.h1>
        </motion.div>

        {/* Loading Text with Dots Animation */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-xl md:text-2xl text-gray-300 font-medium">
            {loadingText}
          </span>
          <motion.span
            className="text-xl md:text-2xl text-gray-300"
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            ...
          </motion.span>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-72 md:w-96 h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/30">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full relative"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </div>

        {/* Percentage */}
        <motion.div
          className="text-4xl md:text-5xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {progress}%
        </motion.div>

        {/* Orbit Ring Animation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="w-[500px] h-[500px] rounded-full border-2 border-purple-500/20"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        </div>
      </div>

   

     
    </motion.div>
  );
}