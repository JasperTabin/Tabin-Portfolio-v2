import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiVercel,
  SiGit,
} from "react-icons/si";

const stack = [
  { name: "HTML", color: "#E34F26", icon: SiHtml5 },
  { name: "CSS", color: "#1572B6", icon: SiCss3 },
  { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
  { name: "React", color: "#61DAFB", icon: SiReact },
  { name: "Tailwind", color: "#06B6D4", icon: SiTailwindcss },
  { name: "Vite", color: "#646CFF", icon: SiVite },
  { name: "Vercel", color: "#FFFFFF", icon: SiVercel },
  { name: "Git", color: "#F05032", icon: SiGit },
];

export const TechStack = () => {
  return (
    <section id="techstack">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {stack.map(({ name, color, icon: Icon }) => (
          <div
            key={name}
            className="group flex flex-col items-center justify-center p-2 rounded-md border border-neutral-700 bg-transparent hover:bg-neutral-800/10 transition"
            style={{ ["--hover-color"]: color }}
          >
            {Icon && (
              <Icon
                aria-hidden
                className="text-2xl mb-1 text-white transition-transform duration-300 transform group-hover:-translate-y-1 group-hover:text-[var(--hover-color)]"
              />
            )}
            <p className="text-xs text-neutral-300">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
