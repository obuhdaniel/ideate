// Type definitions for the application
// Portfolio project types

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

// Service types

export interface Service {
  icon: string;
  title: string;
  description: string;
}

// Navigation types

export interface NavLink {
  label: string;
  href: string;
}

// Hero slide types

export interface HeroSlide {
  title: string;
}

// Button types

export type ButtonVariant = "primary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";
