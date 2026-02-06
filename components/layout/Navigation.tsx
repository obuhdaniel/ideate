"use client";
import { useState } from "react";
import Image from "next/image";
import StarField from "@/components/ui/StarField";

interface NavigationProps {
  baseUrl?: string;
}
export default function Navigation({
  baseUrl = "", 
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle smooth scrolling
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: "Process", id: `${baseUrl}#process`, scrollId: 'process' },
    { label: "Services", id: `${baseUrl}#services`, scrollId: 'services' },
    { label: "Portfolio", id: `${baseUrl}#portfolio`, scrollId: 'portfolio' },
    { label: "Contact us", id: `/contact`},
  ];

  return (
    <div>
      <nav className="absolute top-[-3%] md:top-[-5%] left-0 w-full z-[100] flex items-center justify-center px-4 md:px-8 pt-6 bg-transparent">
        <div className="flex justify-between items-center md:hidden w-full">
          <a href="#">
            <Image
              src="/images/hero/ideate.png"
              alt="Ideate Logo"
              width={150}
              height={50}
              className="cursor-pointer"
            />
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full md:hidden pt-4 pb-20 bg-gradient-to-br from-[#1D2948] to-[#050a16] via-[#1D2948] via-[#1D2948] via-[#13192A] via-[#0A0c10] via-[#0f1628] via-[#141d33] via-[#141d33] via-[#141d33] via-[#141d33] via-[#141d33]">
            <StarField count={20} className="z-0" />
            <p className="mx-4 px-4 py-2 text-white text-2xl leading-10 font-light border-b-2 border-solid border-[#424345] relative">Welcome to where <br/> ideas evolve</p>
            <Image
              src="/images/custom-images/earth-like-planet.png"
              alt="" 
              width={62}
              height={62}
              className="absolute top-13 left-44"
            />
            <div className="flex flex-col relative items-star px-4 py-2 space-y-3 w-full z-10">
              {menuItems.map((item) => (
                <div key={item.id}  className="w-full px-4 py-1 border-b-1 border-solid border-[#424345]">
                  <a
                    href={item.id}
                    onClick={(e) => {
                      if (!item.scrollId || baseUrl !== "/") return;
                      scrollToSection(e, item.scrollId);
                    }}
                    className="text-white text-lg font-light hover:text-purple-400 transition-colors duration-300 w-full py-2"
                  >
                    <div className="w-full flex justify-between items-center">
                      <p>
                        {item.label}
                      </p>
                      <Image
                        src="/arrow.svg"
                        alt="Arrow"
                        width={21.44}
                        height={27.70}
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="hidden md:block">
          <div className="flex items-center mx-auto gap-12 md:gap-32 w-fit px-8 py-6">
            <a
              href= {`${baseUrl}#process`}
              onClick={(e) => scrollToSection(e, "process")}
              className="text-white text-lg font-light hover:text-purple-400 transition-colors duration-300 hover:scale-105 cursor-pointer"
            >
              Process
            </a>
            <a
              href={`${baseUrl}#services`}
              onClick={(e) => scrollToSection(e, "services")}
              className="text-white text-lg font-light hover:text-purple-400 transition-colors duration-300 hover:scale-105 cursor-pointer"
            >
              Services
            </a>


            <a href="/">
              <Image
                src="/images/hero/ideate.png"
                alt="Ideate Logo"
                width={140}
                height={50}
                className="cursor-pointer" 
              />
            </a>

            <a
              href= {`${baseUrl}#portfolio`}
              onClick={(e) => scrollToSection(e, "portfolio")}
              className="text-white text-lg font-light hover:text-purple-400 transition-colors duration-300 hover:scale-105 cursor-pointer"
            >
              Portfolio
            </a>
            <a
              href= {`/contact`}
              className="text-white text-lg font-light hover:text-purple-400 transition-colors duration-300 hover:scale-105 cursor-pointer"
            >
              Contact us
            </a>
          </div>
         </div> 
      </nav>
    </div>
  );
}
