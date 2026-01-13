// @ts-nocheck
"use client";

import PortfolioCarousel, {
  PortfolioProject,
} from "@/components/features/PortfolioCarousel";
import GlowingPlanet from "@/components/ui/GlowingPlanet";
import OrbitRings from "@/components/ui/OrbitRings";

const PORTFOLIO_PROJECTS: PortfolioProject[] = [
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

export default function ProjectSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#070d1f] py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orbit Rings - positioned at left side */}
        <OrbitRings
          sizes={[400, 550, 700, 850]}
          centerX="5%"
          centerY="40%"
          className="opacity-40"
        />

        {/* Orbit Rings - positioned at right side */}
        <OrbitRings
          sizes={[300, 450, 600]}
          centerX="95%"
          centerY="20%"
          className="opacity-30"
        />
      </div>

      {/* Purple Planet - Left side */}
      <GlowingPlanet
        src="/images/services/purple-planet.png"
        alt="Purple Planet"
        size={200}
        glowColor="rgba(147, 51, 234, 0.6)"
        position={{ top: "15%", left: "-50px" }}
      />

      {/* Earth-like Planet - Right side */}
      <GlowingPlanet
        src="/images/services/earth-like-planet.png"
        alt="Earth Planet"
        size={120}
        glowColor="rgba(59, 130, 246, 0.5)"
        position={{ top: "10%", right: "5%" }}
      />

      {/* Space Star Decorations */}
      <div className="absolute top-[8%] right-[12%] w-6 h-6 pointer-events-none">
        <img
          src="/images/custom-images/space-star.png"
          alt=""
          className="w-full h-full object-contain animate-pulse"
        />
      </div>
      <div className="absolute top-[25%] right-[8%] w-4 h-4 pointer-events-none">
        <img
          src="/images/custom-images/space-star.png"
          alt=""
          className="w-full h-full object-contain animate-pulse"
          style={{ animationDelay: "0.7s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-purple-400 font-mono text-sm">//</span>
            <span className="text-purple-400 font-medium tracking-wide">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Projects We Have Done And Completed.
          </h2>
          <p className="text-lg md:text-xl text-white/60">
            <span className="text-white font-medium">What We Offer.</span>{" "}
            Designed for people. Built for the future.
          </p>
        </div>

        {/* Portfolio Carousel */}
        <PortfolioCarousel projects={PORTFOLIO_PROJECTS} />
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070d1f] to-transparent pointer-events-none" />
    </section>
  );
}
