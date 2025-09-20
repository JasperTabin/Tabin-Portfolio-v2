import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { defaultProjects } from "../../Data/ProjectData";

export const All_Projects = () => {
  return (
    <section>
      <div className="flex flex-col gap-16">
        {defaultProjects.map((project) => (
          <div key={project.id} className="group relative">
            {project.links && (
              <a
                href={project.links.find(l => l.label.toLowerCase() === "visit")?.url || project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-68 rounded-xl overflow-hidden relative"
              >
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 hover:opacity-100 rounded-xl"></div>
              </a>
            )}

            <div className="pt-4">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-white/70 mt-2">{project.description}</p>

              {project.tech && project.tech.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white/10 text-white text-xs rounded-full transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-4 flex gap-3">
                {project.links &&
                  project.links.map((link) => {
                    let Icon = null;
                    let classes =
                      "px-4 py-2 flex items-center gap-2 font-medium rounded-lg transition-all duration-300 transform hover:scale-105";

                    if (link.label.toLowerCase() === "source") {
                      Icon = FaGithub;
                      classes += " bg-black text-white hover:bg-gray-800";
                    }
                    if (link.label.toLowerCase() === "visit") {
                      Icon = FaExternalLinkAlt;
                      classes += " bg-white text-black hover:bg-gray-100";
                    }

                    return (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes}
                      >
                        {Icon && <Icon />}
                        {link.label}
                      </a>
                    );
                  })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
