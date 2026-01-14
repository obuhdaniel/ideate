// @ts-nocheck
"use client";

import { VisitButton } from "@/components/ui/Button";

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    icon: "/images/footer/facebook-icon.png",
    url: "https://facebook.com",
  },
  {
    name: "WhatsApp",
    icon: "/images/footer/whatsapp-icon.png",
    url: "https://whatsapp.com",
  },
  {
    name: "X",
    icon: "/images/footer/x-icon.png",
    url: "https://x.com",
  },
  {
    name: "GitHub",
    icon: "/images/custom-images/space-star.png", // Using star as placeholder for GitHub
    url: "https://github.com",
  },
  {
    name: "Gmail",
    icon: "/images/footer/gmail-icon.png",
    url: "mailto:contact@ideate.com.ng",
  },
  {
    name: "TikTok",
    icon: "/images/footer/tiktok-icon.png",
    url: "https://tiktok.com",
  },
  {
    name: "LinkedIn",
    icon: "/images/footer/linkedin-icon.png",
    url: "https://linkedin.com",
  },
];

export default function Footer() {
  const handleMessageUs = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full bg-[#070d1f] py-12 lg:py-16">
      {/* Separator Line */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="w-full md:w-[80%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-12" />
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left - Brand Name */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">
              <span className="text-purple-400">IDEATE</span>{" "}
              <span className="text-white">DIGITAL</span>
              <br />
              <span className="text-white">AGENCY</span>
            </h3>
            <p className="text-gray-400 text-sm mt-4">
              All Rights Reserved © 2026
            </p>
          </div>

          {/* Center - Social Icons */}
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-purple-600/20 hover:bg-purple-600/40 transition-all duration-300 group"
                aria-label={social.name}
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-5 h-5 md:w-6 md:h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            ))}
          </div>

          {/* Right - Website & CTA */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            <p className="text-gray-300 text-base md:text-lg font-medium">
              www.ideate.com.ng
            </p>
            <VisitButton
              onClick={handleMessageUs}
              variant="primary"
              size="md"
              showArrow={true}
            >
              Message Us
            </VisitButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
