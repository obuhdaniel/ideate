'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';

interface Slide {
  title: string;
  subtitle: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: 'IDEATE',
    subtitle: 'We Bring Your Idea, Your Brand, Your Product To Life.',
    image: '/images/hero/2.png', // Replace with your image path
  },
  // Add more slides as needed
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
<section className="relative h-screen w-full overflow-hidden bg-[#070d1f]">

  {/* ===== STAR FIELD ===== */}
  <div className="absolute inset-0 z-0">
    {[...Array(60)].map((_, i) => (
      <span
        key={i}
        className="absolute h-[2px] w-[2px] rounded-full bg-white/70 animate-twinkle"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
        }}
      />
    ))}
  </div>

{/* ===== CENTERED ORBIT WITH 6 RINGS ===== */}
<div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
  <div className="relative">
    {[...Array(6)].map((_, i) => {
      const baseSize = 700; // Large starting circle
      const increment = 200; // Only 20px difference between circles
      const size = baseSize + (i * increment);
      
      return (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-[#272731]"
          style={{ 
            width: `${size}px`,
            height: `${size}px`,
            opacity: `${0.9 - (i * 0.15)}`,
            borderWidth: `${2 + i * 0.5}px`, // Optional: thicker borders for outer circles
          }}
        />
      );
    })}
  </div>
</div>
  <Navigation />

  {/* ===== IDEATE BACKDROP TEXT ===== */}
  <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
    <h1 className="text-[12rem] lg:text-[22rem] xl:text-[26rem] -mt-90 font-extralight text-[#d8d8d8]/80">
      IDEATE
    </h1>
  </div>

  {/* ===== HERO IMAGE ===== */}
  <div className="absolute inset-0 z-20 flex items-center justify-center pt-40">
    <img
      src={slides[currentSlide].image}
      alt="Hero"
      className="h-auto max-h-[80vh] object-contain"
    />
    
    {/* vignette */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30" />
  </div>

 <div className="absolute inset-0 z-30 flex flex-col justify-end pb-16">
  <div className="w-full px-4">

    <div className='max-w-7xl  mx-auto flex flex-col md:flex-row items-start md:items-center justify-between p-6 gap-8"'>
      <h2 className="text-xl lg:text-2xl xl:text-3xl font-light leading-tight text-white">
        We Bring Your Idea,
        Your
        <br /> Brand, Your Product To Life.
      </h2>
    </div>
    
    <div className="max-w-7xl  mx-auto flex flex-col md:flex-row items-start md:items-center justify-between p-6 gap-8">

      
  {/* ===== LEFT ARROW ===== */}
  <button
    onClick={prevSlide}
    className="h-12 w-12 rounded-full border-[0.5px] border-gray-200  hover:bg-white flex items-center justify-center shadow-lg transition-colors self-start md:self-center"
  >
    <ChevronLeft className="w-5 h-5 text-white hover:text-black" />
  </button>

  {/* ===== CONTENT - CENTERED ===== */}
  <div className="flex-1 flex flex-col items-center text-center">
    <div className="max-w-xl space-y-4 text-white">
      
    </div>

    {/* ===== PILL-STYLED CTA (CENTERED UNDER TEXT) ===== */}
    <div className="mt-6">
      <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors font-medium shadow-lg">
        Explore
      </button>
    </div>
  </div>

  {/* ===== RIGHT ARROW ===== */}
  <button
    onClick={nextSlide}
    className="h-12 w-12 rounded-full border-[0.5px] border-gray-200 hover:bg-white flex items-center justify-center shadow-lg transition-colors self-end md:self-center"
  >
    <ChevronRight className="w-5 h-5 text-white hover:text-black" />
  </button>
</div>
  </div>
</div>

</section>

  );
}