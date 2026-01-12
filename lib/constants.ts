// ============================================
// HERO SECTION CONSTANTS
// ============================================

export const HERO_SLIDES = [
  { title: "IDEATE" },
  { title: "DIGITAL" },
  { title: "AGENCY" },
] as const;

export const HERO_IMAGE = "/images/hero/2.png";

export const HERO_TAGLINE = {
  line1: "We Bring Your",
  highlights: ["Idea", "Brand", "Product"],
  line2: "To Life.",
};

// ============================================
// ANIMATION DURATIONS (ms)
// ============================================

export const ANIMATION = {
  SLIDE_INTERVAL: 5000,
  TRANSITION_DURATION: 1500,
} as const;

// ============================================
// SITE METADATA
// ============================================

export const SITE = {
  name: "Ideate",
  tagline: "Digital Agency",
} as const;

// ============================================
// NAVIGATION LINKS
// ============================================

export const NAV_LINKS = [
  { label: "Process", href: "#process" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/projects" },
  { label: "Contact us", href: "#contact" },
] as const;
