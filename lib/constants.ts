import type { PortfolioProject, Service, HeroSlide } from "@/types";

// lib/constants: application-wide constants used across sections

export const HERO_SLIDES: readonly HeroSlide[] = [
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

// Animation durations (ms)

export const ANIMATION = {
  SLIDE_INTERVAL: 5000,
  TRANSITION_DURATION: 1500,
} as const;

// Site metadata

export const SITE = {
  name: "Ideate",
  tagline: "Digital Agency",
  email: "ideatedigitalagency@gmail.com",
} as const;

// Navigation links

export const NAV_LINKS = [
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact us", href: "#contact" },
] as const;

// Portfolio projects

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "aces-uniben",
    title: "ACES UNIBEN",
    description:
      "Website for the Association of Computer Engineering Students, UNIBEN.",
    image: "/images/portfolio/aces-site.png",
    url: "https://aces-uniben.vercel.app",
  },
  {
    id: "spcc",
    title: "SPCC",
    description:
      "Official website of St. Peter Catholic Chaplaincy, Oleh Campus, Delta State University.",
    image: "/images/portfolio/spcc-site.png",
    url: "https://spcc-oleh.vercel.app",
  },
  {
    id: "adagba",
    title: "ADAGBA",
    description:
      "Portfolio website showcasing creative works and professional services.",
    image: "/images/portfolio/adagba-site.png",
    url: "https://adagba.vercel.app",
  },
  {
    id: "bullion",
    title: "BULLION",
    description:
      "Modern financial services platform with intuitive user experience.",
    image: "/images/portfolio/bullion-site.png",
    url: "https://bullion-site.vercel.app",
  },
];

// Services

export const SERVICES: Service[] = [
  {
    icon: "/images/services/ui-ux-icon.png",
    title: "UI/UX Design",
    description:
      "User-centered interfaces crafted for clarity, usability, and seamless experiences.",
  },
  {
    icon: "/images/services/web-dev-icon.png",
    title: "Web Applications",
    description:
      "Scalable and secure web applications designed to solve real business problems.",
  },
  {
    icon: "/images/services/web-des-icon.png",
    title: "Website Design",
    description:
      "Visually engaging, high-performance websites built to strengthen your online presence.",
  },
  {
    icon: "/images/services/app-icon.png",
    title: "Mobile Apps",
    description:
      "Intuitive mobile applications built for performance, engagement, and real users.",
  },
];
