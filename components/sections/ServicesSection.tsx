// @ts-nocheck
"use client";

import ServiceCard from "@/components/features/ServiceCard";
import GlowingPlanet from "@/components/ui/GlowingPlanet";
import OrbitRings from "@/components/ui/OrbitRings";
import AnimatedRocket from "@/components/ui/AnimatedRocket";
import ContactBanner from "@/components/sections/ContactBanner";
import AboutSection from "@/components/sections/AboutSection";

const SERVICES = [
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

interface ServicesSectionProps {
  onFillFormClick?: () => void;
}

export default function ServicesSection({
  onFillFormClick,
}: ServicesSectionProps) {
  const handleFillForm = () => {
    // Scroll to contact section or open contact form modal
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden bg-[#070d1f] py-20 lg:py-32">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Central Orbit Rings */}
          <OrbitRings
            sizes={[500, 700, 900, 1100]}
            centerX="50%"
            centerY="60%"
            className="opacity-30"
          />
        </div>

        {/* Decorative star elements scattered around */}
        <div className="absolute top-[10%] left-[5%] w-3 h-3 pointer-events-none">
          <img
            src="/images/custom-images/space-star.png"
            alt=""
            className="w-full h-full object-contain animate-pulse"
          />
        </div>
        <div className="absolute top-[30%] right-[10%] w-4 h-4 pointer-events-none">
          <img
            src="/images/custom-images/space-star.png"
            alt=""
            className="w-full h-full object-contain animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
        </div>
        <div className="absolute bottom-[40%] left-[15%] w-2 h-2 pointer-events-none">
          <img
            src="/images/custom-images/space-star.png"
            alt=""
            className="w-full h-full object-contain animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="absolute bottom-[20%] right-[20%] w-3 h-3 pointer-events-none">
          <img
            src="/images/custom-images/space-star.png"
            alt=""
            className="w-full h-full object-contain animate-pulse"
            style={{ animationDelay: "0.3s" }}
          />
        </div>

        {/* Small planet decoration - top right */}
        <GlowingPlanet
          src="/images/services/purple-planet.png"
          alt="Small Planet"
          size={80}
          glowColor="rgba(147, 51, 234, 0.5)"
          position={{ top: "5%", right: "10%" }}
        />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-purple-400 font-mono text-sm">//</span>
                <span className="text-purple-400 font-medium tracking-wide">
                  Our Services
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                What We Do, Done with intention
              </h2>
            </div>

            {/* Animated Rocket - positioned near the title */}
            <div className="hidden lg:block relative mt-4">
              <AnimatedRocket className="transform translate-x-4" />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto lg:mx-0">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070d1f] to-transparent pointer-events-none" />
      </section>

      {/* Contact Banner */}
      <ContactBanner onFillFormClick={onFillFormClick || handleFillForm} />

      {/* About/Why We Started Section */}
      <AboutSection />
    </>
  );
}
