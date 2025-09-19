import bannerGif from "/src/assets/Cat-Banner.gif";

export const Home = () => {
  return (
    <section id="profile">
      <div className="relative w-full h-42 overflow-hidden rounded-t-2xl">
        <img
          src={bannerGif}
          alt="Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
      </div>

      <div className="flex items-center space-x-4 -mt-0">
        <img
          src="/src/assets/Profile.jpg"
          alt="Profile"
          className="w-[70px] h-[70px] rounded-full object-cover border-2 border-white/20 object-[center_20%]"
          loading="lazy"
        />

        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold text-white flex items-center gap-2">
            <span>Hey, I'm Jasper</span>

            <span className="inline-block cursor-pointer hand-wave" aria-hidden>
              👋
            </span>
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

      <div>
        <span className="mt-4 block text-sm text-white">
          I’m a fresh graduate and aspiring front-end developer with a passion
          for turning ideas into visually engaging, responsive, and
          user-friendly web experiences.
        </span>
      </div>
    </section>
  );
};
