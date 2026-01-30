// @ts-nocheck
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FormStep1 from "@/components/features/forms/FormStep1";
import FormStep2 from "@/components/features/forms/FormStep2";
import FormStep3 from "@/components/features/forms/FormStep3";

export interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  countryCode: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  projectDetails: string;
  currency: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  countryCode: "+234",
  email: "",
  projectType: "",
  budget: "",
  timeline: "",
  projectDetails: "",
  currency: "NGN",
};

interface MultiStepFormProps {
  onSubmit?: (data: FormData) => void;
}

export default function MultiStepForm({ onSubmit }: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const totalSteps = 3;

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto ">
      {/* Progress Indicators */}
      <div className="flex gap-4 mb-12 px-12 lg:px-24">
        {[1, 2, 3].map((step) => (
          <motion.div
            key={step}
            className="h-1 flex-1 rounded-full bg-white/10"
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: 1,
              backgroundColor:
                step <= currentStep
                  ? "rgba(168, 85, 247, 0.8)"
                  : "rgba(255, 255, 255, 0.1)",
            }}
            transition={{ duration: 0.3, delay: step * 0.1 }}
          />
        ))}
      </div>

      {/* Form Steps with Animation */}
      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <FormStep1
            key="step1"
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
          />
        )}
        {currentStep === 2 && (
          <FormStep2
            key="step2"
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}
        {currentStep === 3 && (
          <FormStep3
            key="step3"
            formData={formData}
            updateFormData={updateFormData}
            onSubmit={handleSubmit}
            onBack={prevStep}
          />
        )}
      </AnimatePresence>
    </div>
  );
}