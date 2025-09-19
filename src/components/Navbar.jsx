// Links are not working (In-Progress)

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mb-8">
      <a
        href="#home"
        className="text-lg font-bold text-white hover:text-gray-300 transition-colors"
      >
        JAS.
      </a>

      <div className="flex space-x-6 text-sm">
        <a
          href="#projects"
          className="text-white/70 hover:text-white transition-colors"
        >
          Projects
        </a>

        <a
          href="#contact"
          className="text-white/70 hover:text-white transition-colors"
        >
          Contact
        </a>

        <a
          href="#about"
          className="text-white/70 hover:text-white transition-colors"
        >
          About
        </a>
      </div>
    </nav>
  );
};
