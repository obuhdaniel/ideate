"use client";

import {
  Lightbulb,
  Code,
  Smartphone,
  Layers,
  Mail,
  ArrowUpRight,
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "UI/UX DESIGN",
    description:
      "User-centric interfaces designed to captivate and engage your audience.",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "WEBSITE DEVELOPMENT",
    description:
      "Scalable, secure, and responsive websites built to elevate your online presence.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "SOFTWARE DEVELOPMENT",
    description:
      "Innovative software solutions tailored to streamline your business processes.",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "MOBILE APPS",
    description:
      "Cutting-edge mobile applications designed for seamless user experiences.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#1a1f3a] via-[#0f1123] to-[#0a0d1a] py-20 lg:py-32">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/30 animate-twinkle"
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
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow" />
      
      <div className="absolute top-20 left-20 w-64 h-64 ">
         <img
                src="/images/services/planet1.png"
                alt="Rocket"
                className="w-full h-full object-contain"
              />
      </div>

      <div className="absolute top-2/6 right-24 w-64 h-64 ">
         <img
                src="/images/services/planet2.png"
                alt="Rocket"
                className="w-full h-full object-contain"
              />
      </div>

       <div className="absolute top-2/6 left-24 w-64 h-64 ">
         <img
                src="/images/services/globe.png"
                alt="Rocket"
                className="w-full h-full object-contain"
              />
      </div>

      <div className="absolute top-10 right-30 w-64 h-64 ">
         <img
                src="/images/services/globe.png"
                alt="Rocket"
                className="w-full h-full object-contain"
              />
      </div>

      {/* Bottom right purple blur */}
      <div
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Top right purple orb */}
      <div className="absolute top-20 right-24 w-32 h-32 bg-purple-500/20 rounded-full blur-[40px]" />

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Header section */}
<div className="mb-16 lg:mb-20 grid grid-cols-1 gap-10 lg:grid-cols-[4fr_1fr] lg:gap-12 items-center">
  
  {/* Text section (≈80%) */}
  <div className="max-w-4xl">
    <div className="flex items-center gap-3 mb-6">
      <span className="text-purple-400 text-lg font-light">//</span>
      <span className="text-purple-400 text-lg font-light">
        Our Services
      </span>
    </div>

    <h2 className="text-white text-4xl lg:text-5xl xl:text-6xl font-medium mb-6 leading-tight">
      What We Do; Done with Intention
    </h2>

    <p className="text-gray-400 text-base lg:text-lg font-light leading-relaxed">
      What We Offer. Designed for people. Built for the future.
    </p>
  </div>

  {/* Rocket image (≈20%) */}
  <div className=" hidden   md:flex justify-center lg:justify-end">
    <div className="w-64 h-64">
      <img
        src="/images/services/rocket.png"
        alt="Rocket"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>


        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm p-8 lg:p-10 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-xl lg:text-2xl font-bold mb-4 tracking-wide">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm lg:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:via-purple-500/10 group-hover:to-purple-500/5 transition-all duration-500 blur-xl" />
            </div>
          ))}
        </div>

        {/* Contact CTA Section */}
        {/* Contact CTA Section */}
        <div className="relative mt-20">
          {/* Left border spill - extends from top of viewport to bottom */}
          <div
            aria-hidden
            className="
      absolute
      left-0
      top-0
      bottom-0
      w-px
      bg-white/20
    "
            style={{ height: "130%", transform: "translateY(-10%)" }}
          />

          <div
            aria-hidden
            className="
      absolute
      right-0
      top-0
      bottom-0
      w-px
      bg-white/20
    "
            style={{ height: "130%", transform: "translateY(-10%)" }}
          />

          <div
            aria-hidden
            className="
      absolute
      top-0
      left-0
      right-0
      h-px
      bg-white/20
    "
            style={{ width: "110%", transform: "translateX(-5%)" }}
          />

          <div
            aria-hidden
            className="
      absolute
      bottom-0
      left-0
      right-0
      h-px
      bg-white/20
    "
            style={{ width: "110%", transform: "translateX(-5%)" }}
          />

          {/* Card */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[220px] flex-col gap-8 p-8 lg:min-h-[200px] lg:flex-row lg:items-stretch lg:p-12">
              {/* Left content */}
              <div className="flex flex-1 flex-col">
                <h3 className="text-white text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                  HAVE AN IDEA BUT HAVING DIFFICULTIES <br /> IMPLEMENTING IT?
                </h3>

                <p className="text-lg text-gray-300">
                  Email us at{" "}
                  <a
                    href="mailto:ideatedigitalagency@gmail.com"
                    className="text-white hover:text-purple-400 transition-colors duration-300"
                  >
                    ideatedigitalagency@gmail.com
                  </a>
                </p>
              </div>

              {/* Right action column */}
              <div className="flex lg:w-auto lg:flex-col">
                <button
                  className="
          mt-auto
          group
          flex items-center gap-3
          bg-purple-600 hover:bg-purple-700
          text-white
          px-8 py-4
          rounded-full
          text-sm font-semibold
          uppercase tracking-wider
          transition-all duration-300
          hover:gap-4 hover:shadow-lg hover:shadow-purple-500/50
          whitespace-nowrap
        "
                >
                  FILL THE FORM
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why We Started Section */}
        


        <div className="relative mt-40">
  {/* Left border spill - extends from top of viewport to bottom */}
  <div
    aria-hidden
    className="
      absolute
      left-0
      top-0
      bottom-0
      w-px
      bg-white/20
    "
    style={{ height: '110%', transform: 'translateY(-5%)' }}
  />

  <div
    aria-hidden
    className="
      absolute
      right-0
      top-0
      bottom-0
      w-px
      bg-white/20
    "
    style={{ height: '110%', transform: 'translateY(-5%)' }}
  />

  <div
    aria-hidden
    className="
      absolute
      top-0
      left-0
      right-0
      h-px
      bg-white/20
    "
    style={{ width: '110%', transform: 'translateX(-5%)' }}
  />

  <div
    aria-hidden
    className="
      absolute
      bottom-0
      left-0
      right-0
      h-px
      bg-white/20
    "
    style={{ width: '110%', transform: 'translateX(-5%)' }}
  />


  {/* Card */}
<div className="relative bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
  {/* Background decorative element */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />

  {/* Content */}
  <div className=" p-20 max-w-4xl mx-auto text-center">
          <h3 className="text-white text-3xl lg:text-4xl font-bold mb-8">
            WHY WE STARTED IDEATE
          </h3>

          <div className="space-y-6 text-gray-400 text-base lg:text-lg leading-relaxed">
            <p>
              Creative design agency is built on innovation, collaboration and
              turning ideas into reality. We believe ideas are the foundation of
              transformation, so we channel our expertise into projects that
              inspire change and create lasting impact.
            </p>

            <p>
              Starting Ideate Agency was inspired by a simple observation:
              incredible ideas often go unrealized due to lack of direction,
              execution skills, or the right support system. We recognized this
              gap and decided to bridge it. Our mission is to empower
              individuals, startups, and established businesses by transforming
              their concepts into visually stunning, functional, and impactful
              solutions.
            </p>

            <p>
              At Ideate, we believe that design is more than aesthetics—it's
              about solving problems, enhancing user experiences, and creating
              meaningful connections between brands and their audiences. We
              thrive on challenges and take pride in pushing creative boundaries
              to deliver results that exceed expectations.
            </p>

            <p>
              Whether it's a bold startup with a groundbreaking idea or an
              established company seeking to innovate, we're here to help bring
              visions to life. We don't just design; we ideate, collaborate, and
              create experiences that resonate.
            </p>

            <p className="text-white font-medium pt-4">
              Your idea deserves to be more than just a thought—it deserves to
              thrive.
            </p>
          </div>
        </div>
</div>

</div>
      </div>
    </section>
  );
}
