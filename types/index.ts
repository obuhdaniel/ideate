// ============================================
// PORTFOLIO PROJECT TYPES
// ============================================

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

// ============================================
// SERVICE TYPES
// ============================================

export interface Service {
  icon: string;
  title: string;
  description: string;
}

// ============================================
// NAVIGATION TYPES
// ============================================

export interface NavLink {
  label: string;
  href: string;
}

// ============================================
// HERO SLIDE TYPES
// ============================================

export interface HeroSlide {
  title: string;
}

// ============================================
// BUTTON TYPES
// ============================================

export type ButtonVariant = "primary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";
