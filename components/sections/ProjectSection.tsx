// @ts-nocheck
"use client";

import PortfolioCarousel, {
  PortfolioProject,
} from "@/components/features/PortfolioCarousel";
import GlowingPlanet from "@/components/ui/GlowingPlanet";
import StarField from "@/components/ui/StarField";
import OrbitRings from "@/components/ui/OrbitRings";

const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "aces-uniben",
    title: "ACES UNIBEN",
    description:
      "Website for the Association of Computer Engineering Students, UNIBEN.",
    image: "/images/portfolio/aces-site.png",
    url: "https://acesuniben.org",
  },
  {
    id: "spcc",
    title: "SPCC",
    description:
      "Official website of St. Peter Catholic Chaplaincy, Oleh Campus, Delta State University.",
    image: "/images/portfolio/spcc-site.png",
    url: "https://spccoleh.com.ng",
  },
  {
    id: "bullion",
    title: "BULLION (WEB 3)",
    description:
      "Modern financial services platform with intuitive user experience.",
    image: "/images/portfolio/bullion-site.png",
    url: "https://bullonsol19.com",
  },
  {
    id: "goldenmedia",
    title: "GOLDEN MEDIA",
    description:
      "A website for an advertising agency in Delta State, that showcases their previous works.",
    image: "/images/portfolio/goldenmedia-site.png",
    url: "https://goldenmedia-site.vercel.app",
  },
  {
    id: "adagba",
    title: "ADAGBA",
    description:
      "A News Publication website for a student body that shows their current news and updates.",
    image: "/images/portfolio/adagba-site.png",
    url: "https://adagba.vercel.app",
  },
  {
    id: "acesmobileapp",
    title: "ACES MOBILE APP",
    description:
      "A mobile application for the Association of Computer Engineering Students, UNIBEN.",
    image: "/images/portfolio/aces-app.png",
    url: "https://acesmobileapp.vercel.app",
  },
  {
    id: "acesdashboard",
    title: "ACES DASHBOARD",
    description:
      "An admin portal for ACES UNIBEN used to register students and post information on the website and app.",
    image: "/images/portfolio/aces-dashboard.png",
    url: "https://acesdashboard.vercel.app",
  },
  {
    id: "passpaymobileapp",
    title: "PASSPAY MOBILE APP",
    description:
      "A mobile app that integrates LazorKit's SDK for passkey-powered Solana wallets with gasless transactions.",
    image: "/images/portfolio/passpay-app.png",
    url: "https://passpaymobileapp.vercel.app",
  },
];

export default function ProjectSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#2F327D] via-[#0A0C10] via-[#0F1628] via-[#141D33] to-[#6E499F] py-10 md:py-32">
      {/* Star Field Background */}
      <StarField count={100} className="pointer-events-none" />
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orbit Rings - positioned at left side */}
        <OrbitRings
          sizes={[400, 550, 700, 850]}
          centerX="5%"
          centerY="40%"
          className="opacity-40 hidden md:block"
        />

        <OrbitRings
          sizes={[50, 100, 150, 200, 250, 300, 350]}
          centerX="50%"
          centerY="25%"
          className="opacity-30 md:hidden"
        />

        {/* Orbit Rings - positioned at right side */}
        <OrbitRings
          sizes={[300, 450, 600]}
          centerX="95%"
          centerY="20%"
          className="opacity-40 hidden md:block"
        />

        
      </div>

      {/* Purple Planet - Left side */}
      <GlowingPlanet
        src="/images/services/purple-planet.png"
        alt="Purple Planet"
        size={250}
        glowColor="rgba(147, 51, 234, 0.6)"
        position={{ top: "8%", left: "2%" }}
      />

      {/* Earth-like Planet - Right side */}
      <GlowingPlanet
        src="/images/services/globe.png"
        alt="Earth Planet"
        size={250}
        glowColor="rgba(59, 130, 246, 0.5)"
        position={{ top: "8%", right: "2%" }}
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
      <div className="relative z-20 max-w-5xl mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-1 md:gap-3 mb-4">
            <span className="text-purple-400 font-mono text-xs md:text-sm">//</span>
            <span className="text-purple-400 text-md md:text-2xl tracking-wide">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Projects We Have Done And Completed.
          </h2>
          <p className="text-lg md:text-xl text-white/60">
            <span className="text-white text-xl md:text-2xl">What We Offer.</span> Designed
            for people. Built for the future.
          </p>
        </div>

        {/* Portfolio Carousel */}
        <OrbitRings
          sizes={[50, 100, 150, 200, 250, 300, 350]}
          centerX="50%"
          centerY="75%"
          className="opacity-30 md:hidden"
        />
        <PortfolioCarousel projects={PORTFOLIO_PROJECTS} />
        
      </div>

      {/* Bottom gradient */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070d1f] to-transparent pointer-events-none" /> */}
    </section>
  );
}
