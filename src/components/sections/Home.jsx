import bannerGif from "/src/assets/Cat-Banner.gif";
import { FaLinkedin, FaDownload, FaFileAlt, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export const Home = () => {
  return (
    <section id="profile">
      <div className="relative w-full h-42 overflow-hidden rounded-t-2xl">
        <img src={bannerGif} alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
      </div>

      <div className="flex items-center space-x-4 ">
        <img
          src="/src/assets/Profile.jpg"
          alt="Profile"
          className="w-[70px] h-[70px] rounded-full object-cover border-2 border-white/20 object-[center_20%]"
          loading="lazy"
        />
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold text-white flex items-center gap-2">
            <span>Hey, I'm Jasper</span>
            <span className="inline-block cursor-pointer hand-wave" aria-hidden>👋</span>
          </h1>

          <div className="relative text-sm h-[20px] w-[160px] cursor-pointer overflow-hidden group">
            <span className="absolute left-0 top-0 transition-transform duration-800 transform group-hover:-translate-y-5 group-hover:opacity-0 opacity-100 text-white/70">
              🟢 Available for work
            </span>
            <span className="absolute left-0 top-0 transition-transform duration-800 transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-white/70">
              Reach out ✉︎
            </span>
          </div>
        </div>
      </div>

      <span className="text-sm text-white">
        I’m a fresh graduate and aspiring front-end developer with a passion
        for turning ideas into visually engaging, responsive, and user-friendly web experiences.
      </span>

      {/* Social + Actions */}
      <div className="mt-4 flex gap-3">
        <a href="https://www.linkedin.com/in/jasper-tabin-1b8aaa348/" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 text-white p-2 rounded-full transition" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
       
        <a href="https://jaspertabin.github.io/" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 text-white p-2 rounded-full transition" aria-label="Visit Website">
          <FaGithub />
        </a>

         <a href="/public/Tabin_Resume.pdf" download className="bg-white/5 hover:bg-white/10 text-white p-2 rounded-full transition" aria-label="Download Resume">
          <FaFileAlt />
        </a>
      </div>
    </section>
  );
};
