export default function Navigation() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-8 mb-16 bg-transparent">
        <div className="flex items-center justify-between w-full max-w-6xl px-8 py-6">
          <a
            href="#home"
            className="text-white text-sm font-light hover:text-purple-400 transition-colors duration-300 hover:scale-105"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-white text-sm font-light hover:text-purple-400 transition-colors duration-300 hover:scale-105"
          >
            Services
          </a>

          <img
            src="/images/hero/ideate.png"
            alt="Ideate Logo"
            width={100}
            height={50}
          />

          <a
            href="#portfolio"
            className="text-white text-sm font-light hover:text-purple-400 transition-colors duration-300 hover:scale-105"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="text-white text-sm font-light hover:text-purple-400 transition-colors duration-300 hover:scale-105"
          >
            Contact us
          </a>
        </div>
      </nav>
    </>
  );
}
