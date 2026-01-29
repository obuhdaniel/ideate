// @ts-nocheck
/**
 * Form Utilities and Helpers
 */

import { FormData } from "./types";

// Validation Functions
export const validateStep1 = (data: FormData): string | null => {
  if (!data.firstName.trim()) {
    return "First name is required";
  }
  if (!data.lastName.trim()) {
    return "Last name is required";
  }
  if (!validateEmail(data.email)) {
    return "Please enter a valid email address";
  }
  if (!validatePhoneNumber(data.phoneNumber)) {
    return "Please enter a valid phone number";
  }
  return null;
};

export const validateStep2 = (data: FormData): string | null => {
  if (!data.projectType) {
    return "Please select a project type";
  }
  if (!data.budget) {
    return "Please select a budget range";
  }
  if (!data.timeline) {
    return "Please select a timeline";
  }
  return null;
};

export const validateStep3 = (data: FormData): string | null => {
  if (!data.projectDetails.trim()) {
    return "Please provide project details";
  }
  if (data.projectDetails.trim().length < 20) {
    return "Please provide more details (at least 20 characters)";
  }
  return null;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phone: string): boolean => {
  const digitsOnly = phone.replace(/\D/g, "");
  return digitsOnly.length >= 7 && digitsOnly.length <= 15;
};

// Format phone number for display
export const formatPhoneNumber = (countryCode: string, phone: string): string => {
  return `${countryCode} ${phone}`;
};

// API Submission Function
export const submitFormData = async (data: FormData): Promise<boolean> => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    return true;
  } catch (error) {
    console.error("Form submission error:", error);
    return false;
  }
};

// Send email notification (example using SendGrid)
export const sendEmailNotification = async (data: FormData) => {
  const emailContent = `
    New Contact Form Submission
    
    Personal Information:
    - Name: ${data.firstName} ${data.lastName}
    - Email: ${data.email}
    - Phone: ${data.countryCode} ${data.phoneNumber}
    
    Project Details:
    - Type: ${data.projectType}
    - Budget: ${data.budget}
    - Timeline: ${data.timeline}
    
    Project Description:
    ${data.projectDetails}
  `;

  // Implement your email service here
  console.log("Email notification:", emailContent);
};

// Format form data for display
export const formatFormDataForDisplay = (data: FormData) => {
  return {
    "Personal Information": {
      "Full Name": `${data.firstName} ${data.lastName}`,
      Email: data.email,
      Phone: formatPhoneNumber(data.countryCode, data.phoneNumber),
    },
    "Project Details": {
      "Project Type": data.projectType,
      Budget: data.budget,
      Timeline: data.timeline,
    },
    "Project Description": data.projectDetails,
  };
};

// Local Storage Helpers (for draft saving)
const STORAGE_KEY = "contact_form_draft";

export const saveFormDraft = (data: FormData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Failed to save form draft:", error);
  }
};

export const loadFormDraft = (): FormData | null => {
  try {
    const draft = localStorage.getItem(STORAGE_KEY);
    return draft ? JSON.parse(draft) : null;
  } catch (error) {
    console.error("Failed to load form draft:", error);
    return null;
  }
};

export const clearFormDraft = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear form draft:", error);
  }
};

// Convert form data to URL search params (for analytics)
export const formDataToSearchParams = (data: FormData): URLSearchParams => {
  const params = new URLSearchParams();
  Object.entries(data).forEach(([key, value]) => {
    if (value) {
      params.append(key, value);
    }
  });
  return params;
};

// Analytics event tracking
export const trackFormStep = (step: number, stepName: string): void => {
  // Implement your analytics tracking here
  console.log(`Form Step ${step}: ${stepName}`);
  
  // Example: Google Analytics
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "form_step_completed", {
      step_number: step,
      step_name: stepName,
    });
  }
};

export const trackFormSubmission = (data: FormData): void => {
  console.log("Form submitted successfully");
  
  // Example: Google Analytics
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "form_submission", {
      project_type: data.projectType,
      budget: data.budget,
      timeline: data.timeline,
    });
  }
};