/* Static Cards, The only animation is applied at the whole page. */

import React from "react";
import { defaultProjects } from "../../Data/ProjectData";

export const All_Projects = () => {
  return (
    <section>
      <div className="flex flex-col gap-16">
        {defaultProjects.map((project) => (
          <div key={project.id}>
            <div className="w-full h-68 rounded-xl overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-sm text-white/70 mt-2">
                {project.description}
              </p>

              {project.tech && project.tech.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white/10 text-white text-xs rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-4 flex gap-3">
                {project.links && project.links.length > 0
                  ? project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2 font-medium rounded-lg ${
                          link.type === "primary"
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-white text-black hover:bg-gray-200"
                        }`}
                      >
                        {link.label}
                      </a>
                    ))
                  : project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
                      >
                        Visit
                      </a>
                    )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
