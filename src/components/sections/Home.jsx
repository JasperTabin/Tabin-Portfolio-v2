import bannerGif from "/src/assets/Cat-Banner.gif";
import {
  FaLinkedin,
  FaFileAlt,
  FaGithub,
} from "react-icons/fa";

export const Home = () => {
  return (
    <section id="profile">
      {/* Banner */}
      <div className="relative w-full h-42 overflow-hidden rounded-t-2xl">
        <img
          src={bannerGif}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
      </div>

      {/* Profile + Intro */}
      <div className="flex items-center gap-4">
        <img
          src="/src/assets/Profile.jpg"
          alt="Profile"
          className="w-[70px] h-[70px] rounded-full object-cover border-2 border-white/20 object-[center_20%]"
          loading="lazy"
        />
        <div>
          <h1 className="text-2xl font-semibold text-white flex items-center gap-2">
            <span>Hey, I'm Jasper</span>
            <span className="inline-block cursor-pointer hand-wave" aria-hidden>
              👋
            </span>
          </h1>

          <div className="relative text-sm h-[20px] w-[160px] cursor-pointer overflow-hidden group mt-1">
            <span className="absolute left-0 top-0 transition-transform duration-800 transform group-hover:-translate-y-5 group-hover:opacity-0 opacity-100 text-white/70">
              🟢 Available for work
            </span>
            <span
  onClick={() => window.location.href = "mailto:tabinjasper@gmail.com"}
  className="absolute left-0 top-0 transition-transform duration-800 transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-white/70 cursor-pointer"
>
  Reach out ✉︎
</span>

          </div>
        </div>
      </div>

      {/* Brief Description */}
      <p className="mt-4 text-sm text-white leading-relaxed max-w-prose">
        Frontend Developer from the Philippines. I enjoy turning designs into code.
        When not coding, I'm exploring gaming, music, and coffee shops. Open to new opportunities!
      </p>

      {/* About me Section */}
      <div>
      <h2 className="text-xl text-white font-semibold pt-4">About</h2>
        <p className="pt-1 text-sm text-white leading-relaxed max-w-prose">
            Graduated in 2025 with a BS in Information Technology, earning honors as Dean’s Lister, Best in Capstone, and Cum Laude. 
            Focused on building clean, modern web applications.
          </p>
      </div>

      {/* Socials */}
      <div className="mt-4">
        <h2 className="text-sm text-white/80 font-light mb-2">
          Connect with me — here are my socials:
        </h2>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/jasper-tabin-1b8aaa348/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 hover:bg-white/10 text-white p-3 rounded-full transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://jaspertabin.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 hover:bg-white/10 text-white p-3 rounded-full transition"
            aria-label="Visit Website"
          >
            <FaGithub />
          </a>

          <a
            href="/public/Tabin_Resume.pdf"
            download
            className="bg-white/5 hover:bg-white/10 text-white p-3 rounded-full transition"
            aria-label="Download Resume"
          >
            <FaFileAlt />
          </a>
        </div>
      </div>
    </section>
  );
};
