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
      className="space-y-8 flex flex-col"
    >
    <div className="relative mb-10">
   {/* Extension lines layer - sits above but pointer-events-none */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute h-px bg-gradient-to-r from-[#E5E5E560] via-transparent to-[#E5E5E560] top-0 left-[-4rem] right-[-4rem]" />
          <div className="absolute h-px bg-gradient-to-r from-[#E5E5E560] via-transparent to-[#E5E5E560] bottom-0 left-[-4rem] right-[-4rem]" />
 

          {/* Vertical extensions */}
          <div className="absolute w-px bg-gradient-to-b from-[#E5E5E560] via-transparent to-[#E5E5E560] left-0 top-[-4rem] bottom-[-4rem]" />
          <div className="absolute w-px bg-gradient-to-b from-[#E5E5E560] via-transparent to-[#E5E5E560] right-0 top-[-4rem] bottom-[-4rem]" />
      
  
    </div>


  {/* Main container with dividers */}
  <div className="relative grid grid-cols-1 md:grid-cols-2 bg-[#E5E5E508] p-8 gap-y-8 gap-x-6 border border-[#424345]/10">
    
    {/* Vertical divider - hidden on mobile, visible on md+ */}
    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#E5E5E560] to-transparent"></div>
    
    {/* Horizontal divider - visible on mobile, hidden on md+ */}
    <div className=" absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#E5E5E560] to-transparent"></div>
    

     {/* Horizontal divider - visible on mobile, hidden on md+ */}
    <div className=" md:hidden absolute left-0 right-0 top-1/4 h-px bg-gradient-to-r from-transparent via-[#E5E5E560] to-transparent"></div>

        <div className=" md:hidden absolute left-0 right-0 top-3/4 h-px bg-gradient-to-r from-transparent via-[#E5E5E560] to-transparent"></div>



    {/* Decorative center dot where dividers meet */}
    
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
  </div>
</div>

<div className="text-right mr-10 mt-10">
  <FormButton type="submit" disabled={!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.email}>NEXT STEP →</FormButton>
</div>
    </motion.form>
  );
}
