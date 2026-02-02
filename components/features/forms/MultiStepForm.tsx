// @ts-nocheck
"use client";

import { useState, useRef, useEffect } from "react";
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
  onStepChange?: (step: number) => void;
}

export default function MultiStepForm({ onSubmit, onStepChange }: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const totalSteps = 3;
  const formRef = useRef<HTMLDivElement>(null);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  useEffect(() => {
  onStepChange?.(currentStep);
}, [currentStep, onStepChange]);


  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Create FormData for Web3Forms
      const web3FormData = new FormData();
      
      // Add Web3Forms access key
      web3FormData.append("access_key", "a2dbe370-c458-4e5f-ab31-7199b752cad2");
      
      // Add form fields
      web3FormData.append("name", `${formData.firstName} ${formData.lastName}`);
      web3FormData.append("email", formData.email);
      web3FormData.append("phone", `${formData.countryCode}${formData.phoneNumber}`);
      web3FormData.append("project_type", formData.projectType);
      web3FormData.append("budget", `${formData.currency} ${formData.budget}`);
      web3FormData.append("message", formData.projectDetails);
      
      // Optional: Add custom subject
      web3FormData.append("subject", `New Project Inquiry - ${formData.projectType}`);

      // Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData,
      });

      const data = await response.json();

      if (data.success) {
        await fetch("/api/send-confirmation", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              firstName: formData.firstName,
              email: formData.email,
          }),
         });
        console.log("Form submitted successfully:", formData);
        
        // Call parent onSubmit to show success screen
        if (onSubmit) {
          onSubmit(formData);
        }
        
        // Reset form data for next submission
        setFormData(initialFormData);
        setCurrentStep(1);
      } else {
        console.error("Form submission failed:", data);
        setSubmitError("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Scroll form into view on step change
  useEffect(() => {
    if (currentStep > 1) {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentStep]);

  return (
    <div ref={formRef} className="w-full max-w-3xl mx-auto">
      {/* Progress Indicators */}
      <div className="flex gap-4 mb-12 px-12 lg:px-24">
        {[1, 2, 3].map((step) => {
          const isActive = step <= currentStep;

          return (
            <motion.div
              key={step}
              className="h-2 flex-1 rounded-full origin-left"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: 1,
                backgroundImage: isActive
                  ? "linear-gradient(90deg, #394CAD 0%, #967BC7 50%, #D8D8D8 100%)"
                  : "none",
                backgroundColor: isActive
                  ? "transparent"
                  : "rgba(255, 255, 255, 0.1)",
              }}
              transition={{ duration: 0.3, delay: step * 0.1 }}
            />
          );
        })}
      </div>

      {/* Error Message */}
      <AnimatePresence>
        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 mx-12 lg:mx-24 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-300 text-sm"
          >
            {submitError}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form Steps */}
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
            isSubmitting={isSubmitting}
          />
        )}
      </AnimatePresence>

      {/* Loading Overlay */}
      <AnimatePresence>
        {isSubmitting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <div className="bg-[#1a1f35] p-8 rounded-2xl shadow-2xl">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-white font-medium">Submitting your request...</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}