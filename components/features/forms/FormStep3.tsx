// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import { FormData } from "./MultiStepForm";
import FormButton from "./FormButton";
import { useState } from "react";

interface FormStep3Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onSubmit: () => void;
  onBack: () => void;
}

interface Currency {
  code: string;
  symbol: string;
  name: string;
}

const currencies: Currency[] = [
  { code: "NGN", symbol: "₦", name: "Nigerian Naira" },
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" },
];

export default function FormStep3({
  formData,
  updateFormData,
  onSubmit,
  onBack,
}: FormStep3Props) {
  const [currency, setCurrency] = useState("NGN");
  const [budgetAmount, setBudgetAmount] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.projectDetails || !budgetAmount) {
      return;
    }
    // Combine currency and amount for budget field
    updateFormData({ budget: `${currency} ${budgetAmount}` });
    onSubmit();
  };

  const selectedCurrency = currencies.find((c) => c.code === currency);

  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.form
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      {/* Back Button */}

      <div className="space-y-8 px-6 md:px-0">
        <motion.button
          type="button"
          onClick={onBack}
          variants={itemVariants}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
          whileHover={{ scale: 1.05, x: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </motion.button>
      </div>

      <div className="block md:hidden ">
        <motion.div variants={itemVariants} className="space-y-4 px-6 md:px-0">
          <h2 className="text-2xl md:text-3xl font-light text-white leading-tight">
            A Brief Description Of What You Would Love To Achieve
          </h2>

          <motion.textarea
            value={formData.projectDetails}
            onChange={(e) => updateFormData({ projectDetails: e.target.value })}
            placeholder="Mobile app for Taxi where people will be able to send and recieve goods  within a City"
            required
            rows={8}
            className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07] transition-all duration-300 resize-none leading-relaxed"
            whileFocus={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </div>

      <h2 className="hidden md:block text-xl md:text-2xl font-light text-center text-white leading-tight">
        A Brief Description Of What You Would Love To Achieve
      </h2>

      <div className="hidden md:block relative">
        {/* Extension lines */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Horizontal extensions */}
          <div className="absolute h-px bg-gradient-to-r from-transparent via-[#E5E5E560] to-transparent top-0 left-[-4rem] right-[-4rem]" />
          <div className="absolute h-px bg-gradient-to-r from-transparent via-[#E5E5E560] to-transparent bottom-0 left-[-4rem] right-[-4rem]" />

          {/* Vertical extensions */}
          <div className="absolute w-px bg-gradient-to-b from-transparent via-[#E5E5E560] to-transparent left-0 top-[-4rem] bottom-[-4rem]" />
          <div className="absolute w-px bg-gradient-to-b from-transparent via-[#E5E5E560] to-transparent right-0 top-[-4rem] bottom-[-4rem]" />
        </div>

        {/* Main grid container */}
        <div className="relative grid grid-cols-1 bg-[#E5E5E508]  border border-[#424345]/10">
          {/* Project Description Section */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 px-6 md:p-12"
          >
            <motion.textarea
              value={formData.projectDetails}
              onChange={(e) =>
                updateFormData({ projectDetails: e.target.value })
              }
              placeholder="Mobile app for Taxi where people will be able to send and recieve goods  within a City"
              required
              rows={8}
              className="w-full px-6 py-5 bg-[#D8D8D814] border border-[#A566E2] rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07] transition-all duration-300 resize-none leading-relaxed"
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Budget Section MOBILE*/}
      <div className="block md:hidden mb-20">
        <motion.div
          variants={itemVariants}
          className="space-y-4 mt-20 px-6 md:px-0"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-white leading-tight">
            What Is Your Budget For The Entire Project?
          </h2>

          <div className="flex gap-0 bg-white/5 border border-white/10 rounded-2xl ">
            {/* Currency Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="h-full px-5 py-5 bg-transparent border-r border-white/10 text-white hover:bg-white/[0.05] focus:outline-none transition-all duration-300 flex items-center gap-2 min-w-[110px]"
              >
                <span className="font-medium">{formData.currency}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
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

              {/* Currency Dropdown */}
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-[#1a1f35] border border-white/10 rounded-xl shadow-2xl z-50 max-h-64 overflow-y-auto"
                >
                  {currencies.map((curr) => (
                    <button
                      key={curr.code}
                      type="button"
                      onClick={() => {
                        setCurrency(curr.code);
                         updateFormData({ currency: curr.code });
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-4 py-3 text-left hover:bg-white/5 transition-colors flex items-center justify-between text-white group"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-lg font-semibold group-hover:text-purple-400 transition-colors">
                          {curr.symbol}
                        </span>
                        <span className="text-sm">{curr.name}</span>
                      </span>
                      <span className="text-xs text-gray-400">{curr.code}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Budget Amount Input */}
            <motion.input
              type="number"
              value={formData.budget}
               onChange={(e) => updateFormData({ budget: e.target.value })}
              placeholder="500,000"
              required
              min="0"
              step="1000"
              className="flex-1 px-6 py-5 bg-transparent text-white text-lg placeholder:text-gray-500 focus:outline-none"
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Budget Section DESKTOP */}

      <h2 className="hidden md:block text-xl md:text-2xl font-light text-center text-white leading-tight">
        What Is Your Budget For The Entire Project?
      </h2>

      <div className="hidden md:block relative">
        {/* Extension lines */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Horizontal extensions */}
          <div className="absolute h-px bg-gradient-to-r from-transparent via-[#E5E5E560] to-transparent top-0 left-[-4rem] right-[-4rem]" />
          <div className="absolute h-px bg-gradient-to-r from-transparent via-[#E5E5E560] to-transparent bottom-0 left-[-4rem] right-[-4rem]" />

          {/* Vertical extensions */}
          <div className="absolute w-px bg-gradient-to-b from-transparent via-[#E5E5E560] to-transparent left-0 top-[-4rem] bottom-[-4rem]" />
          <div className="absolute w-px bg-gradient-to-b from-transparent via-[#E5E5E560] to-transparent right-0 top-[-4rem] bottom-[-4rem]" />
        </div>

        {/* Main grid container */}
        <div className="relative grid grid-cols-1 bg-[#E5E5E508]  border border-[#424345]/10">
          {/* Project Description Section */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center px-6 md:py-16 md:px-20"
          >
            <div className="inline-flex gap-0 bg-white/5 border border-[#A566E2] py-4 rounded-xl ">
              {/* Currency Selector */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="h-full px-3 py-2 bg-transparent border-r border-white/10 text-white hover:bg-white/[0.05] focus:outline-none transition-all duration-300 flex items-center gap-1 text-sm"
                >
                  <span className="font-medium text-xl">{formData.currency}</span>
                  <svg
                    className={`w-3 h-3 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
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

                {/* Currency Dropdown */}
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-[#1a1f35] border border-white/10 rounded-xl shadow-2xl z-50 max-h-64 overflow-y-auto"
                  >
                    {currencies.map((curr) => (
                      <button
                        key={curr.code}
                        type="button"
                        onClick={() => {
                          setCurrency(curr.code);
                          updateFormData({currency: curr.code})
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-white/5 transition-colors flex items-center justify-between text-white group"
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-lg font-semibold group-hover:text-purple-400 transition-colors">
                            {curr.symbol}
                          </span>
                          <span className="text-sm">{curr.name}</span>
                        </span>
                        <span className="text-xs text-gray-400">
                          {curr.code}
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>

              <motion.input
                type="number"
                value={formData.budget}
                 onChange={(e) => updateFormData({ budget: e.target.value })}
                placeholder="500,000"
                required
                min="0"
                step="1000"
                className="px-3 py-2 w-28 bg-transparent text-white text-xl text-center placeholder:text-gray-500 focus:outline-none"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Submit Button */}
      <motion.div
        variants={itemVariants}
        className="pt-4 text-right md:text-center px-6 md:px-0"
      >
        <FormButton
          type="submit"
          variant="primary"
          disabled={!formData.projectDetails || !budgetAmount}
        >
          SUBMIT →
        </FormButton>
      </motion.div>
    </motion.form>
  );
}
