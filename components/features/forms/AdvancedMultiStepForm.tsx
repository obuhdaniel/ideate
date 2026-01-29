// @ts-nocheck
"use client";

/**
 * ADVANCED MULTI-STEP FORM
 * 
 * This version includes:
 * - Form validation with error messages
 * - Draft saving to localStorage
 * - Analytics tracking
 * - Loading states
 * - Success/Error handling
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import {
  validateStep1,
  validateStep2,
  validateStep3,
  saveFormDraft,
  loadFormDraft,
  clearFormDraft,
  trackFormStep,
  trackFormSubmission,
  submitFormData,
} from "./utils";
import { FormData } from "./types";

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
};

interface AdvancedMultiStepFormProps {
  onSubmit?: (data: FormData) => Promise<void>;
  enableDraftSaving?: boolean;
  enableAnalytics?: boolean;
}

export default function AdvancedMultiStepForm({
  onSubmit,
  enableDraftSaving = true,
  enableAnalytics = true,
}: AdvancedMultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const totalSteps = 3;

  // Load draft on mount
  useEffect(() => {
    if (enableDraftSaving) {
      const draft = loadFormDraft();
      if (draft) {
        setFormData(draft);
      }
    }
  }, [enableDraftSaving]);

  // Save draft when data changes
  useEffect(() => {
    if (enableDraftSaving && !isSuccess) {
      saveFormDraft(formData);
    }
  }, [formData, enableDraftSaving, isSuccess]);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setError(null);
  };

  const nextStep = () => {
    // Validate current step
    let validationError: string | null = null;

    if (currentStep === 1) {
      validationError = validateStep1(formData);
    } else if (currentStep === 2) {
      validationError = validateStep2(formData);
    }

    if (validationError) {
      setError(validationError);
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
      setError(null);

      // Track step completion
      if (enableAnalytics) {
        const stepNames = [
          "Personal Information",
          "Project Details",
          "Project Description",
        ];
        trackFormStep(currentStep, stepNames[currentStep - 1]);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      setError(null);
    }
  };

  const handleSubmit = async () => {
    // Validate final step
    const validationError = validateStep3(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Submit to API
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        await submitFormData(formData);
      }

      // Track submission
      if (enableAnalytics) {
        trackFormSubmission(formData);
      }

      // Clear draft
      if (enableDraftSaving) {
        clearFormDraft();
      }

      // Show success
      setIsSuccess(true);
    } catch (err) {
      setError(
        "Failed to submit form. Please try again or contact us directly."
      );
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success Screen
  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <svg
            className="w-10 h-10 text-white"
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
          </svg>
        </motion.div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Thank You!
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          We've received your message and will get back to you within 24 hours.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsSuccess(false);
            setCurrentStep(1);
            setFormData(initialFormData);
          }}
          className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold"
        >
          Submit Another Form
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto px-6">
      {/* Progress Indicators */}
      <div className="flex gap-4 mb-12">
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

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-300 text-sm"
          >
            {error}
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
                <p className="text-white font-medium">Submitting...</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}