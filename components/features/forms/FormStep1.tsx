// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import FormInput from "@/components/features/forms/FormInput";
import PhoneInput from "@/components/features/forms/PhoneInput";
import FormButton from "@/components/features/forms/FormButton";


 interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  countryCode: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  projectDetails: string;
}


interface FormStep1Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
}

export default function FormStep1({
  formData,
  updateFormData,
  onNext,
}: FormStep1Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phoneNumber ||
      !formData.email
    ) {
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
      <FormInput
        label="First Name?"
        type="text"
        value={formData.firstName}
        onChange={(value) => updateFormData({ firstName: value })}
        placeholder=""
        required
      />

      <FormInput
        label="Last Name?"
        type="text"
        value={formData.lastName}
        onChange={(value) => updateFormData({ lastName: value })}
        placeholder=""
        required
      />

      <PhoneInput
        countryCode={formData.countryCode}
        phoneNumber={formData.phoneNumber}
        onCountryCodeChange={(code) => updateFormData({ countryCode: code })}
        onPhoneNumberChange={(number) =>
          updateFormData({ phoneNumber: number })
        }
      />

      <FormInput
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={(value) => updateFormData({ email: value })}
        placeholder=""
        required
      />

      <FormButton type="submit">NEXT STEP →</FormButton>
    </motion.form>
  );
}