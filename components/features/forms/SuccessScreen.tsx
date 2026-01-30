// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface SuccessScreenProps {
  onGoHome?: () => void;
}

export default function SuccessScreen({ onGoHome }: SuccessScreenProps) {
  const router = useRouter();

  const handleGoHome = () => {
    if (onGoHome) {
      onGoHome();
    } else {
      router.push("/");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  const checkmarkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 0.5, delay: 0.8 },
        opacity: { duration: 0.3, delay: 0.8 },
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-md md:max-w-2xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[60vh]"
    >
      {/* Heading */}
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-2xl md:text-4xl text-left font-bold text-white mb-4 leading-tight">
          Congratulations, You have Submitted Successfully...
        </h1>
        <p className="text-lg md:text-xl text-left text-gray-300">
          We'll review your request and reach out shortly.
        </p>
      </motion.div>

      {/* Success Badge */}
      <motion.div
        variants={badgeVariants}
        className="relative w-48 h-48 mb-12"
      >
        {/* Outer Badge Circle with Scalloped Edge */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            style={{ filter: "drop-shadow(0 10px 30px rgba(139, 92, 246, 0.3))" }}
          >
            {/* Scalloped Badge Background */}
           
            {/* Gradient Definition */}
            <defs>
              <linearGradient id="badgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4C1D95" />
                <stop offset="100%" stopColor="#5B21B6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Inner Circle Ring */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img
            src="/images/custom-images/success.png"
            alt="Success Badge"
            className="w-32 h-32 object-contain"
          />
        </motion.div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              top: "50%",
              left: "50%",
            }}
            animate={{
              x: Math.cos((i / 6) * Math.PI * 2) * 80,
              y: Math.sin((i / 6) * Math.PI * 2) * 80,
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: 1 + i * 0.1,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        ))}
      </motion.div>

      {/* Go to Home Button */}
      <motion.button
        variants={itemVariants}
        onClick={handleGoHome}
        className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm tracking-wide rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        GO TO HOME →
      </motion.button>
    </motion.div>
  );
}