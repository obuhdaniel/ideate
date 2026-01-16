// @ts-nocheck
"use client";

export default function Navigation() {
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
  };

  return (
    <>
      <nav className="absolute top-[-5%] left-0 w-full z-[100] flex items-center justify-center px-8 pt-6 bg-transparent">
        <div className="flex items-center mx-auto gap-12 md:gap-32 w-fit px-8 py-6">
          <a
            href="#process"
            onClick={(e) => scrollToSection(e, "process")}
            className="text-white text-lg font-light hover:text-purple-400 transition-colors duration-300 hover:scale-105 cursor-pointer"
          >
            Process
          </a>
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, "services")}
            className="text-white text-lg font-light hover:text-purple-400 transition-colors duration-300 hover:scale-105 cursor-pointer"
          >
            Services
          </a>

          <img
            src="/images/hero/ideate.png"
            alt="Ideate Logo"
            width={140}
            height={50}
            className="cursor-pointer" // Optional: makes logo look clickable
          />

          <a
            href="#portfolio"
            onClick={(e) => scrollToSection(e, "portfolio")}
            className="text-white text-lg font-light hover:text-purple-400 transition-colors duration-300 hover:scale-105 cursor-pointer"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="text-white text-lg font-light hover:text-purple-400 transition-colors duration-300 hover:scale-105 cursor-pointer"
          >
            Contact us
          </a>
        </div>
      </nav>
    </>
  );
}
