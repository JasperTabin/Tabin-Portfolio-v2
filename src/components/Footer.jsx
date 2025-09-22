import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaCat } from "react-icons/fa6"; // import cat

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer 
      className="w-full border-t py-4 flex items-center justify-between bg-transparent"
      style={{ borderColor: 'var(--border)' }}
    >
      <button
        onClick={scrollToTop}
        className="transition-colors hover:opacity-70"
        style={{ color: 'var(--text-primary)' }}
        aria-label="Scroll to top"
      >
        <FaCat size={20} />
      </button>

      <div className="flex space-x-4">
        <a
          href="https://github.com/JasperTabin"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:opacity-70"
          style={{ color: 'var(--text-primary)' }}
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/jasper-tabin-1b8aaa348/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:opacity-70"
          style={{ color: 'var(--text-primary)' }}
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="mailto:tabinjasper@gmail.com"
          className="transition-colors hover:opacity-70"
          style={{ color: 'var(--text-primary)' }}
          aria-label="Send Email"
        >
          <FaEnvelope size={20} />
        </a>
      </div>
    </footer>
  );
}