import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mb-8">
      <Link
        to="/"
        className="text-lg font-bold text-white hover:text-gray-300 transition-colors"
      >
        JAS.
      </Link>

      <div className="flex space-x-6 text-sm">
        <Link
          to="/projects"
          className="text-white/70 hover:text-white transition-colors"
        >
          Projects
        </Link>
      </div>
    </nav>
  );
};
