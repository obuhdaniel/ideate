// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import { FormData } from "@/components/features/forms/MultiStepForm";
import FormTextarea from "@/components/features/forms/FormTextArea";
import FormButton from "@/components/features/forms/FormButton";

interface FormStep3Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onSubmit: () => void;
  onBack: () => void;
}

export default function FormStep3({
  formData,
  updateFormData,
  onSubmit,
  onBack,
}: FormStep3Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.projectDetails) {
      return;
    }
    onSubmit();
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

  return (
    <motion.form
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <FormTextarea
        label="Tell us about your project"
        value={formData.projectDetails}
        onChange={(value) => updateFormData({ projectDetails: value })}
        placeholder="Describe your project, goals, and any specific requirements..."
        required
        rows={6}
      />

      <div className="flex gap-4">
        <FormButton type="button" onClick={onBack} variant="secondary">
          ← BACK
        </FormButton>
        <FormButton type="submit">SUBMIT →</FormButton>
      </div>
    </motion.form>
  );
}