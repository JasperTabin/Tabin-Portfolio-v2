import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiVercel,
  SiGithub,
} from "react-icons/si";

const stack = [
  { name: "HTML", color: "#E34F26", icon: SiHtml5 },
  { name: "CSS", color: "#1572B6", icon: SiCss3 },
  { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
  { name: "React", color: "#61DAFB", icon: SiReact },
  { name: "Tailwind", color: "#06B6D4", icon: SiTailwindcss },
  { name: "Vite", color: "#646CFF", icon: SiVite },
  { name: "Vercel", color: "#FFFFFF", icon: SiVercel },
  { name: "GitHub", color: "#FFFFFF", icon: SiGithub },
  { name: "GSAP", color: "#88CE02" },
];

export const TechStack = () => {
  return (
    <section id="techstack">
      <h2 className="text-2xl text-white font-semibold pb-4">Technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
        {stack.map(({ name, color, icon: Icon }) => (
          <div
            key={name}
            className="group relative flex items-center justify-center h-15 w-full rounded-md border border-neutral-700 bg-transparent hover:bg-neutral-800/10 transition"
            style={{ ["--hover-color"]: color }}
          >
            {Icon ? (
              <Icon
                aria-hidden
                className="text-3xl text-white absolute transition-opacity duration-300 group-hover:opacity-0 group-hover:scale-90"
              />
            ) : (
              <span
                className="text-lg font-bold text-white absolute transition-opacity duration-300 group-hover:opacity-0 group-hover:scale-90"
              >
                {name}
              </span>
            )}
            <span className="text-sm font-bold text-neutral-300 opacity-0 absolute transition-all duration-300 transform group-hover:opacity-100 group-hover:scale-100 group-hover:text-[var(--hover-color)]">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
