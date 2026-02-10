// @ts-nocheck
"use client";

import { VisitButton } from "@/components/ui/Button";
import * as motion from "framer-motion/client";

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
    url: "https://x.com/ideate_ng",
  },
  {
    name: "Gmail",
    icon: "/images/footer/gmail-icon.png",
    url: "mailto:contact@ideate.com.ng",
  },
  {
    name: "TikTok",
    icon: "/images/footer/tiktok-icon.png",
    url: "https://tiktok.com/@ideate_ng",
  },
  {
    name: "LinkedIn",
    icon: "/images/footer/linkedin-icon.png",
    url: "https://www.linkedin.com/company/ideate-digital-agency",
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
    <footer className="relative w-full bg-transparent py-12 lg:py-20">
      {/* UPDATED CONTAINER WIDTH: 
          Changed from 'max-w-7xl' to 'w-[90%] max-w-[1800px]' 
          This makes the footer stretch almost to the edges of the screen.
      */}
      <div className="w-[90%] max-w-[1800px] mx-auto">
        {/* Separator Line */}
        <div className="w-full h-[1px] bg-white/10 mb-12" />

        {/* Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10 lg:gap-0">
          {/* LEFT SIDE: Brand & Copyright */}
          <div className="text-center lg:text-left space-y-10">
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-wide leading-tight">
              <span className="text-purple-400">Ideate Digital</span>
              <br />
              <span className="text-purple-400">Agency</span>
            </h3>
            <p className="text-gray-500 text-sm font-medium">
              All Rights Reserved © {new Date().getFullYear()}
            </p>
          </div>

          {/* RIGHT SIDE: Socials, Link, Button */}
          <div className="flex flex-col items-center lg:items-end gap-8">
            {/* Social Icons Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-transform hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-6 h-6 md:w-7 md:h-7 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </a>
              ))}
            </div>

            {/* Bottom Row: Website + Button */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <span className="text-gray-300 text-lg tracking-wide">
                <a href="https://www.ideate.com.ng">www.ideate.com.ng</a>
              </span>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <VisitButton
                  href="https://wa.me/2348029140650"
                  variant="outline"
                  size="lg"
                >
                  MESSAGE US
                </VisitButton>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
