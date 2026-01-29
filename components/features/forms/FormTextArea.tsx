// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface FormTextareaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}

export default function FormTextarea({
  label,
  value,
  onChange,
  placeholder = "",
  required = false,
  rows = 4,
}: FormTextareaProps) {
  const [isFocused, setIsFocused] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div variants={itemVariants} className="space-y-3">
      <label className="block text-gray-300 text-base font-medium">
        {label}
      </label>
      <motion.textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07] transition-all duration-300 resize-none"
        whileFocus={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}