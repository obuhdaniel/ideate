"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "ACES",
    subtitle: "UNIBEN",
    description:
      "Website for the Association of Computer Engineering Students, UNIBEN",
    image: "/images/projects/aces2.png", // Replace with your image
    link: "https://aces-uniben.com",
  },
  // Add more projects here
];

export default function PortfolioSection() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#2d3561] via-[#1a1f3a] to-[#0f1123] py-20 lg:py-32">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/40 animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient orbs/blurs */}
      {/* Top left blue blur */}
      <div className="absolute top-0 left-0 w-10s0 h-100 bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow" />

      {/* Bottom right purple blur */}
      <div
        className="absolute bottom-0 right-0 w-125 h-125 bg-purple-600/15 rounded-full blur-[120px] animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />

      {/* Top right decorative ellipses */}
      <div className="absolute top-16 right-32 w-28 h-28 opacity-40">
        <div className="relative w-full h-full">
          {[...Array(4)].map((_, i) => (
            <div
              key={`ellipse-top-${i}`}
              className="absolute inset-0 rounded-full border border-purple-400/30"
              style={{
                transform: `scale(${1 + i * 0.25}) translateY(${i * 3}px)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom left decorative ellipses */}
      <div className="absolute bottom-32 left-24 w-24 h-24 opacity-30">
        <div className="relative w-full h-full">
          {[...Array(4)].map((_, i) => (
            <div
              key={`ellipse-bottom-${i}`}
              className="absolute inset-0 rounded-full border border-purple-400/30"
              style={{
                transform: `scale(${1 + i * 0.25}) translateY(${i * 3}px)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Small decorative plus/cross shapes */}
      <div className="absolute top-1/3 left-1/4 text-purple-400/30 text-2xl">
        +
      </div>
      <div className="absolute bottom-1/4 right-1/3 text-purple-400/30 text-2xl">
        +
      </div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Header section */}
        <div className="mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-purple-400 text-lg font-light">//</span>
            <span className="text-purple-400 text-lg font-light">
              Our Portfolio
            </span>
          </div>

          <h2 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Projects We Have Done And Completed.
          </h2>

          <p className="text-gray-300 text-lg lg:text-xl font-light">
            What We Offer. Designed for people. Built for the future.
          </p>
        </div>

        {/* Project showcase with arrows on both sides */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Project info */}
          <div className="space-y-8 lg:space-y-10">
            <div>
              <h3 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-none">
                <span className="text-purple-400">
                  {projects[currentProject].title}
                </span>
                <span className="text-white">
                  {" "}
                  {projects[currentProject].subtitle}
                </span>
              </h3>
            </div>

            <p className="text-gray-300 text-lg lg:text-xl font-light leading-relaxed max-w-md">
              {projects[currentProject].description}
            </p>

            <button className="group relative flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:gap-4 hover:shadow-lg hover:shadow-purple-500/50">
              VISIT
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
            </button>
          </div>

          {/* Right side - Laptop mockup with arrows on sides */}
          <div className="relative w-full ">
  {/* Arrow rail (controls positioning, not the mockup) */}
  <div className="relative mx-auto flex w-full max-w-[1600px] items-center justify-center">
    
    {/* LEFT ARROW */}
    <button
      onClick={prevProject}
      aria-label="Previous project"
      className="
        absolute left-0
        -translate-x-1/2
        z-30
        flex h-14 w-14 items-center justify-center
        rounded-full border border-white/30
        bg-white/5 backdrop-blur-md
        text-white
        transition-all duration-300
        hover:scale-110 hover:border-white/60 hover:bg-white/10
      "
    >
      <ChevronLeft className="h-6 w-6" />
    </button>

    {/* LAPTOP CONTAINER (fixed max width) */}
    <div className="relative w-3/4 max-w-2xl ">
      {/* Screen */}
      <div className="overflow-hidden rounded-t-2xl border-4 border-gray-800 bg-gray-900 shadow-2xl">
        <div className="relative aspect-[16/10] bg-white">
          <Image
            src={projects[currentProject].image}
            alt={projects[currentProject].title}
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>

      {/* Base */}
      <div className="relative h-4 rounded-b-2xl bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="absolute inset-x-0 top-0 h-px bg-gray-700" />
      </div>

      {/* Shadow */}
      <div className="absolute -bottom-5 left-1/2 h-10 w-[90%] -translate-x-1/2 rounded-full bg-black/30 blur-xl" />

      {/* Glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-purple-500/40 blur-3xl opacity-30" />
    </div>

    {/* RIGHT ARROW */}
    <button
      onClick={nextProject}
      aria-label="Next project"
      className="
        absolute right-0
        translate-x-1/2
        z-30
        flex h-14 w-14 items-center justify-center
        rounded-full border border-white/30
        bg-white/5 backdrop-blur-md
        text-white
        transition-all duration-300
        hover:scale-110 hover:border-white/60 hover:bg-white/10
      "
    >
      <ChevronRight className="h-6 w-6" />
    </button>

  </div>
</div>

        </div>

        {/* Remove the bottom navigation arrows since they're now beside the laptop */}
      </div>
    </section>
  );
}

const NavArrow = ({
  direction,
  onClick,
  label,
}: {
  direction: "left" | "right";
  onClick: () => void;
  label: string;
}) => {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;

  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`
        pointer-events-auto
        flex h-14 w-14 items-center justify-center
        rounded-full border border-white/30
        bg-white/5 backdrop-blur-md
        text-white
        transition-all duration-300
        hover:scale-110 hover:border-white/60 hover:bg-white/10
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400
      `}
    >
      <Icon className="h-6 w-6" />
    </button>
  );
};
