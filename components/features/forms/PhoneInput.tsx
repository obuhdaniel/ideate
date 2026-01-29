// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface PhoneInputProps {
  countryCode: string;
  phoneNumber: string;
  onCountryCodeChange: (code: string) => void;
  onPhoneNumberChange: (number: string) => void;
}

const countryCodes = [
  { code: "+234", flag: "🇳🇬", country: "Nigeria" },
  { code: "+1", flag: "🇺🇸", country: "USA" },
  { code: "+44", flag: "🇬🇧", country: "UK" },
  { code: "+91", flag: "🇮🇳", country: "India" },
  { code: "+86", flag: "🇨🇳", country: "China" },
  { code: "+81", flag: "🇯🇵", country: "Japan" },
  { code: "+49", flag: "🇩🇪", country: "Germany" },
  { code: "+33", flag: "🇫🇷", country: "France" },
];

export default function PhoneInput({
  countryCode,
  phoneNumber,
  onCountryCodeChange,
  onPhoneNumberChange,
}: PhoneInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const selectedCountry = countryCodes.find((c) => c.code === countryCode);

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
        Phone Number?
      </label>
      <div className="flex gap-2">
        {/* Country Code Selector */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="h-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/[0.07] focus:outline-none focus:border-purple-500/50 transition-all duration-300 flex items-center gap-2 min-w-[90px]"
          >
            <span className="text-xl">{selectedCountry?.flag}</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 mt-2 w-64 bg-[#1a1f35] border border-white/10 rounded-xl shadow-2xl z-50 max-h-64 overflow-y-auto"
            >
              {countryCodes.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => {
                    onCountryCodeChange(country.code);
                    setIsOpen(false);
                  }}
                  className="w-full px-4 py-3 text-left hover:bg-white/5 transition-colors flex items-center gap-3 text-white"
                >
                  <span className="text-xl">{country.flag}</span>
                  <span className="flex-1">{country.country}</span>
                  <span className="text-gray-400">{country.code}</span>
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Phone Number Input */}
        <motion.input
          type="tel"
          value={phoneNumber}
          onChange={(e) => onPhoneNumberChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="8012345678"
          required
          className="flex-1 px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07] transition-all duration-300"
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </motion.div>
  );
}