// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import { FormData } from "@/components/features/forms/MultiStepForm";
import FormInput from "@/components/features/forms/FormInput";
import FormSelect from "@/components/features/forms/FormSelect";
import FormButton from "@/components/features/forms/FormButton";

interface FormStep2Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const projectTypes = [
  { value: "website", label: "Website Development" },
  { value: "mobile-app", label: "Mobile Application" },
  { value: "web-app", label: "Web Application" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "blockchain", label: "Blockchain/Web3" },
  { value: "other", label: "Other" },
];

const budgetRanges = [
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-plus", label: "$50,000+" },
];

const timelines = [
  { value: "urgent", label: "Urgent (1-2 weeks)" },
  { value: "1-month", label: "1 Month" },
  { value: "2-3-months", label: "2-3 Months" },
  { value: "3-6-months", label: "3-6 Months" },
  { value: "6-months-plus", label: "6+ Months" },
  { value: "flexible", label: "Flexible" },
];

export default function FormStep2({
  formData,
  updateFormData,
  onNext,
  onBack,
}: FormStep2Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.projectType || !formData.budget || !formData.timeline) {
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

  return (
    <motion.form
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <FormSelect
        label="Project Type?"
        options={projectTypes}
        value={formData.projectType}
        onChange={(value) => updateFormData({ projectType: value })}
        placeholder="Select project type"
        required
      />

      <FormSelect
        label="Budget Range?"
        options={budgetRanges}
        value={formData.budget}
        onChange={(value) => updateFormData({ budget: value })}
        placeholder="Select budget range"
        required
      />

      <FormSelect
        label="Timeline?"
        options={timelines}
        value={formData.timeline}
        onChange={(value) => updateFormData({ timeline: value })}
        placeholder="Select timeline"
        required
      />

      <div className="flex gap-4">
        <FormButton type="button" onClick={onBack} variant="secondary">
          ← BACK
        </FormButton>
        <FormButton type="submit">NEXT STEP →</FormButton>
      </div>
    </motion.form>
  );
}