// @ts-nocheck
"use client";

import * as motion from "framer-motion/client";
import { ArrowRight } from "lucide-react";

interface VisitButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  showArrow?: boolean;
}

export function VisitButton({
  href,
  onClick,
  children,
  variant = "outline",
  size = "md",
  className = "",
  showArrow = true,
}: VisitButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "bg-[#580196] hover:bg-[#6a02b3] text-white border-[#580196] shadow-lg shadow-[#580196]/30",
    outline:
      "bg-transparent hover:bg-white/5 text-white border-purple-500/50 hover:border-purple-400",
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    rounded-full border transition-all duration-300
    font-medium tracking-wider uppercase
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <motion.span
          className="inline-flex"
          whileHover={{ x: 4, rotate: -45 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={baseClasses}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={baseClasses}
    >
      {content}
    </motion.button>
  );
}

// Explore button for hero section
interface ExploreButtonProps {
  onClick?: () => void;
  className?: string;
}

export function ExploreButton({ onClick, className = "" }: ExploreButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`px-12 py-4 bg-[#580196] hover:bg-[#6a02b3] text-white rounded-full transition-colors duration-300 font-medium text-lg tracking-wider shadow-lg shadow-[#580196]/30 ${className}`}
    >
      <h2 className="flex items-center">
      EXPLORE{" "}
      <motion.span
        className="inline-flex ml-2"
        whileHover={{ rotate: -45, x: 4 }}
        transition={{ duration: 0.2 }}
      >
        →
      </motion.span>
      </h2>
    </motion.button>
  );
}

export default VisitButton;
