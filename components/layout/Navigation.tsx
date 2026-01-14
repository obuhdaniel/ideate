export default function Navigation() {
  return (
    <>
      <nav className="left-0 right-0 z-50 flex items-center justify-center px-8 mb-16 bg-transparent">
        <div className="flex items-center mx-auto gap-32 w-fit px-8 py-6">
          <a
            href="#process"
            className="text-white text-lg font-light hover:text-purple-400 transition-colors duration-300 hover:scale-105"
          >
            Process
          </a>
          <a
            href="#services"
            className="text-white text-lg font-light hover:text-purple-400 transition-colors duration-300 hover:scale-105"
          >
            Services
          </a>

          <img
            src="/images/hero/ideate.png"
            alt="Ideate Logo"
            width={140}
            height={50}
          />

          <a
            href="#portfolio"
            className="text-white text-lg font-light hover:text-purple-400 transition-colors duration-300 hover:scale-105"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="text-white text-lg font-light hover:text-purple-400 transition-colors duration-300 hover:scale-105"
          >
            Contact us
          </a>
        </div>
      </nav>
    </>
  );
}
