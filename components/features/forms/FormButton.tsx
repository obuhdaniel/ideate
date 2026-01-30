// @ts-nocheck
"use client";

import { motion } from "framer-motion";

interface FormButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export default function FormButton({
  type = "button",
  onClick,
  children,
  variant = "primary",
  disabled = false,
}: FormButtonProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const isPrimary = variant === "primary";

  return (
    <motion.button
      variants={itemVariants}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        flex-1 px-8 py-2 rounded-2xl font-semibold text-sm tracking-wide
        transition-all duration-300
        ${
          !disabled
            ? "bg-[#58019680] text-white "
            : "bg-white/5 hover:bg-white/10 text-white border cursor-not-allowed border-white/10"
        }
      `}
      whileHover={disabled ? {} : { scale: 1.02, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
}