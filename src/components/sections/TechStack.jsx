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
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS",  icon: SiCss3 },
  { name: "JavaScript",  icon: SiJavascript },
  { name: "React",  icon: SiReact },
  { name: "Tailwind",  icon: SiTailwindcss },
  { name: "Vite",  icon: SiVite },
  { name: "Vercel",  icon: SiVercel },
  { name: "GitHub",  icon: SiGithub },
  { name: "GSAP",  },
];

export const TechStack = () => {
  return (
    <section id="techstack">
      <h2 
        className="text-2xl font-semibold pb-4"
        style={{ color: 'var(--text-primary)' }}
      >
        Technologies
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
        {stack.map(({ name, color, icon: Icon }) => (
          <div
            key={name}
            className="group relative flex items-center justify-center h-15 w-full rounded-md border bg-transparent transition-colors hover:opacity-80"
            style={{ 
              borderColor: 'var(--border)',
              ["--hover-color"]: color 
            }}
          >
            {Icon ? (
              <Icon
                aria-hidden
                className="text-3xl absolute transition-opacity duration-300 group-hover:opacity-0 group-hover:scale-90"
                style={{ color: 'var(--text-primary)' }}
              />
            ) : (
              <span
                className="text-lg font-bold absolute transition-opacity duration-300 group-hover:opacity-0 group-hover:scale-90"
                style={{ color: 'var(--text-primary)' }}
              >
                {name}
              </span>
            )}
            <span 
              className="text-sm font-bold opacity-0 absolute transition-all duration-300 transform group-hover:opacity-100 group-hover:scale-100 group-hover:text-[var(--hover-color)]"
              style={{ color: 'var(--text-secondary)' }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};