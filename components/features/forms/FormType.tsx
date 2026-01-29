// @ts-nocheck
/**
 * Shared TypeScript types for the Multi-Step Form
 */

export interface FormData {
  // Step 1: Personal Information
  firstName: string;
  lastName: string;
  phoneNumber: string;
  countryCode: string;
  email: string;
  
  // Step 2: Project Details
  projectType: string;
  budget: string;
  timeline: string;
  
  // Step 3: Project Description
  projectDetails: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface CountryCode {
  code: string;
  flag: string;
  country: string;
}

export interface FormStepProps<T = FormData> {
  formData: T;
  updateFormData: (data: Partial<T>) => void;
  onNext?: () => void;
  onBack?: () => void;
  onSubmit?: () => void;
}

// Project Type Options
export const PROJECT_TYPES: SelectOption[] = [
  { value: "website", label: "Website Development" },
  { value: "mobile-app", label: "Mobile Application" },
  { value: "web-app", label: "Web Application" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "blockchain", label: "Blockchain/Web3" },
  { value: "other", label: "Other" },
];

// Budget Range Options
export const BUDGET_RANGES: SelectOption[] = [
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-plus", label: "$50,000+" },
];

// Timeline Options
export const TIMELINES: SelectOption[] = [
  { value: "urgent", label: "Urgent (1-2 weeks)" },
  { value: "1-month", label: "1 Month" },
  { value: "2-3-months", label: "2-3 Months" },
  { value: "3-6-months", label: "3-6 Months" },
  { value: "6-months-plus", label: "6+ Months" },
  { value: "flexible", label: "Flexible" },
];

// Country Codes
export const COUNTRY_CODES: CountryCode[] = [
  { code: "+234", flag: "🇳🇬", country: "Nigeria" },
  { code: "+1", flag: "🇺🇸", country: "USA" },
  { code: "+44", flag: "🇬🇧", country: "UK" },
  { code: "+91", flag: "🇮🇳", country: "India" },
  { code: "+86", flag: "🇨🇳", country: "China" },
  { code: "+81", flag: "🇯🇵", country: "Japan" },
  { code: "+49", flag: "🇩🇪", country: "Germany" },
  { code: "+33", flag: "🇫🇷", country: "France" },
  { code: "+39", flag: "🇮🇹", country: "Italy" },
  { code: "+34", flag: "🇪🇸", country: "Spain" },
  { code: "+7", flag: "🇷🇺", country: "Russia" },
  { code: "+55", flag: "🇧🇷", country: "Brazil" },
  { code: "+52", flag: "🇲🇽", country: "Mexico" },
  { code: "+27", flag: "🇿🇦", country: "South Africa" },
  { code: "+61", flag: "🇦🇺", country: "Australia" },
  { code: "+64", flag: "🇳🇿", country: "New Zealand" },
  { code: "+82", flag: "🇰🇷", country: "South Korea" },
  { code: "+65", flag: "🇸🇬", country: "Singapore" },
];

// Form Validation Helper
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phone: string): boolean => {
  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, '');
  // Check if it's between 7 and 15 digits
  return digitsOnly.length >= 7 && digitsOnly.length <= 15;
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};