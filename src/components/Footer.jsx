import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaCat } from "react-icons/fa6"; // import cat

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full border-t border-neutral-700 py-4 flex items-center justify-between bg-transparent">
      <button
        onClick={scrollToTop}
        className="text-white hover:text-neutral-300 transition-colors"
        aria-label="Scroll to top"
      >
        <FaCat size={20} />
      </button>

      <div className="flex space-x-4">
        <a
          href="https://github.com/JasperTabin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-neutral-300 transition-colors"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/jasper-tabin-1b8aaa348/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-neutral-300 transition-colors"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="mailto:tabinjasper@gmail.com"
          className="text-white hover:text-neutral-300 transition-colors"
          aria-label="Send Email"
        >
          <FaEnvelope size={20} />
        </a>
      </div>
    </footer>
  );
}
