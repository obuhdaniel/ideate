// @ts-nocheck
"use client";

import ServiceCard from "@/components/features/ServiceCard";
import GlowingPlanet from "@/components/ui/GlowingPlanet";
import OrbitRings from "@/components/ui/OrbitRings";
import ContactBanner from "@/components/sections/ContactBanner";
import AboutSection from "@/components/sections/AboutSection";

const SERVICES = [
  {
    icon: "/images/services/ui-ux-icon.png",
    title: "UI/UX Design",
    description:
      "User-centered interfaces crafted for clarity, usability, and seamless experiences.",
    position: "top-left" as const,
  },
  {
    icon: "/images/services/web-dev-icon.png",
    title: "Web Applications",
    description:
      "Scalable and secure web applications designed to solve real business problems.",
    position: "top-right" as const,
  },
  {
    icon: "/images/services/web-des-icon.png",
    title: "Website Design",
    description:
      "Visually engaging, high-performance websites built to strengthen your online presence.",
    position: "bottom-left" as const,
  },
  {
    icon: "/images/services/app-icon.png",
    title: "Mobile Apps",
    description:
      "Intuitive mobile applications built for performance, engagement, and real users.",
    position: "bottom-right" as const,
  },
];

interface ServicesSectionProps {
  onFillFormClick?: () => void;
}

export default function ServicesSection({
  onFillFormClick,
}: ServicesSectionProps) {
  const handleFillForm = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative w-full overflow-visible bg-[#070d1f] py-20 lg:py-32">
        {/* --- DECORATIVE LINES --- */}

        {/* Left vertical line */}
        <div className="absolute left-[8%] md:left-[18%] top-[25%] bottom-[8%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        {/* Right vertical line */}
        <div className="absolute right-[8%] md:right-[18%] top-[25%] bottom-[8%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        {/* Top decorative line */}
        <div className="absolute top-[33.5%] left-[10%] right-[10%] h-px bg-white/10" />

        {/* Bottom decorative line */}
        <div className="absolute bottom-[14.5%] left-[10%] right-[10%] h-px bg-white/10" />

        {/* --- NEW: THE ENCLOSED BOX FILL --- 
            Top: 33.5% (Matches top line)
            Bottom: 14.5% (Matches bottom line)
            Left/Right: 8% -> 18% (Matches vertical lines)
        */}
        <div className="absolute top-[33.5%] bottom-[14.5%] left-[8%] right-[8%] md:left-[18%] md:right-[18%] bg-white/[0.03] pointer-events-none" />

        {/* --- BACKGROUND ELEMENTS --- */}

        {/* Multiple Orbit Rings at different positions */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top-left orbit rings */}
          <OrbitRings
            sizes={[200, 300, 400]}
            centerX="5%"
            centerY="15%"
            className="opacity-20"
          />
          {/* Center-right orbit rings */}
          <OrbitRings
            sizes={[300, 450, 600]}
            centerX="95%"
            centerY="40%"
            className="opacity-15"
          />
          {/* Bottom-left orbit rings */}
          <OrbitRings
            sizes={[250, 400, 550]}
            centerX="10%"
            centerY="85%"
            className="opacity-20"
          />
        </div>

        {/* Purple Planet - Top Left */}
        <GlowingPlanet
          src="/images/services/purple-planet.png"
          alt="Purple Planet"
          size={250}
          glowColor="rgba(147, 51, 234, 0.5)"
          position={{ top: "8%", left: "2%" }}
        />

        {/* Globe - Top Right */}
        <GlowingPlanet
          src="/images/services/globe.png"
          alt="Globe"
          size={250}
          glowColor="rgba(100, 200, 255, 0.4)"
          position={{ top: "8%", right: "2%" }}
        />

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-12 md:px-16 lg:px-20">
          {/* Section Header */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-purple-400 font-mono text-sm">//</span>
              <span className="text-purple-400 text-2xl tracking-wide">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white ">
              What We Do, Done with intention
            </h2>
          </div>

          {/* Services Grid with border structure */}
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {SERVICES.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  position={service.position}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Planets below the services grid */}
        {/* Globe - Left side */}
        <GlowingPlanet
          src="/images/services/globe.png"
          alt="Globe"
          size={250}
          glowColor="rgba(100, 200, 255, 0.4)"
          position={{ bottom: "2%", left: "2%" }}
        />

        {/* Earth-like Planet - Right side */}
        <GlowingPlanet
          src="/images/services/earth-like-planet.png"
          alt="Earth Planet"
          size={250}
          glowColor="rgba(100, 180, 255, 0.4)"
          position={{ bottom: "2%", right: "2%" }}
        />
      </section>

      {/* Contact Banner */}
      <ContactBanner onFillFormClick={onFillFormClick || handleFillForm} />

      {/* About/Why We Started Section */}
      <AboutSection />
    </>
  );
}
