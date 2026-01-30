// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import { FormData } from "./MultiStepForm";
import FormButton from "./FormButton";
import { useState } from "react";

interface FormStep2Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

interface ServiceOption {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
}

const services: ServiceOption[] = [
  {
    id: "ui-ux",
    icon: (
      <img
        src="/images/services/ui-ux-icon.png"
        alt="UI/UX Design"
        className="w-5 h-5"
      />
    ),
    title: "UI/UX DESIGN",
    description:
      "User-centered interfaces crafted for clarity, usability, and seamless experiences.",
    value: "ui-ux-design",
  },
  {
    id: "website",
    icon: (
      <img
        src="/images/services/web-des-icon.png"
        alt="UI/UX Design"
        className="w-5 h-5"
      />
    ),
    title: "WEBSITE DESIGN",
    description:
      "Visually engaging, high-performance websites built to strengthen your online presence.",
    value: "website-design",
  },
  {
    id: "web-app",
    icon: (
      <img
        src="/images/services/web-dev-icon.png"
        alt="UI/UX Design"
        className="w-5 h-5"
      />
    ),
    title: "WEB APPLICATIONS",
    description:
      "Scalable and secure web applications designed to solve real business problems.",
    value: "web-application",
  },
  {
    id: "mobile-app",
    icon: (
      <img
        src="/images/services/app-icon.png"
        alt="UI/UX Design"
        className="w-5 h-5"
      />
    ),
    title: "MOBILE APPS",
    description:
      "Intuitive mobile applications built for performance, engagement, and real users.",
    value: "mobile-app",
  },
];

export default function FormStep2({
  formData,
  updateFormData,
  onNext,
  onBack,
}: FormStep2Props) {
  const [selectedService, setSelectedService] = useState<string>(
    formData.projectType || "",
  );

  const handleServiceSelect = (value: string) => {
    setSelectedService(value);
    updateFormData({ projectType: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) {
      return;
    }
    onNext();
  };

  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.1,
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

        {/* Heading */}
        <motion.div variants={itemVariants} className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#D8D8D8] leading-tight">
            What Do You Want Us To Help You With?
          </h2>
        </motion.div>
      </div>

      {/* Service Cards */}
      {/* Mobile layout */}
      <div className="block md:hidden">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isSelected={selectedService === service.value}
            onSelect={handleServiceSelect}
            variants={itemVariants}
          />
        ))}
      </div>
      {/* Desktop layout */}
      <div className="hidden md:block my-15 relative">
        {/* Extension lines */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Horizontal extensions */}
          <div className="absolute h-px bg-gradient-to-r from-[#E5E5E560] via-transparent to-[#E5E5E560] top-0 left-[-4rem] right-[-4rem]" />
          <div className="absolute h-px bg-gradient-to-r from-[#E5E5E560] via-transparent to-[#E5E5E560] bottom-0 left-[-4rem] right-[-4rem]" />
 

          {/* Vertical extensions */}
          <div className="absolute w-px bg-gradient-to-b from-[#E5E5E560] via-transparent to-[#E5E5E560] left-0 top-[-4rem] bottom-[-4rem]" />
          <div className="absolute w-px bg-gradient-to-b from-[#E5E5E560] via-transparent to-[#E5E5E560] left-1/2 top-[-4rem] bottom-[-4rem]" />
          <div className="absolute w-px bg-gradient-to-b from-[#E5E5E560] via-transparent to-[#E5E5E560] right-0 top-[-4rem] bottom-[-4rem]" />
        </div>

        {/* Main grid container */}
        <div className="relative grid grid-cols-2 bg-[#E5E5E508]  border border-[#424345]/10">
          {/* Vertical divider */}


          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={selectedService === service.value}
              onSelect={handleServiceSelect}
              variants={itemVariants}
            />
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <motion.div className="text-right md:text-center" variants={itemVariants}>
        <FormButton type="submit" variant="primary"  disabled={!selectedService}>
          LAST STEP →
        </FormButton>
       
      </motion.div>
    </motion.form>
  );
}

const ServiceCard = ({ service, isSelected, onSelect, variants }) => (
  <motion.button
    type="button"
    onClick={() => onSelect(service.value)}
    variants={variants}
    className={`
      w-full text-left p-6 border transition-all duration-300
      ${
        isSelected
          ? "bg-purple-600/20 border-purple-500/50"
          : "bg-white/5 border-white/10 hover:bg-white/10"
      }
    `}
    whileHover={{ scale: 1.02, y: -4 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex items-start gap-6">
      <div className="flex flex-col gap-4">
        <div>{service.icon}</div>

        <div className="flex-1 min-w-0">
          <h3
            className={`
              text-lg font-bold mb-2 tracking-wide
              ${isSelected ? "text-white" : "text-gray-200"}
            `}
          >
            {service.title}
          </h3>
          <p
            className={`
              text-sm leading-relaxed
              ${isSelected ? "text-gray-300" : "text-gray-400"}
            `}
          >
            {service.description}
          </p>
        </div>
      </div>

      <div
        className={`
          flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center
          ${isSelected ? "border-purple-500 bg-purple-500" : "border-gray-500"}
        `}
      >
        {isSelected && (
          <motion.svg
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </motion.svg>
        )}
      </div>
    </div>
  </motion.button>
);
