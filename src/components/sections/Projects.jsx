/* Project Section showcasing only 2 projects. */

import { defaultProjects } from "../../Data/ProjectData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects({ projects = defaultProjects }) {
  return (
    <section id="projects">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between pb-4">
          <h2 className="text-2xl text-white font-semibold">Pinned Projects</h2>
          <a
            href="/projects"
            className="text-sm font-semibold text-white/90 hover:underline"
          >
            More projects →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((p) => (
            <article
              key={p.id}
              className="group bg-transparent border border-neutral-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full aspect-video bg-neutral-900 flex items-center justify-center overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {p.links?.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-2xl hover:text-gray-300"
                      aria-label={link.label}
                    >
                      {link.label === "Source" ? (
                        <FaGithub />
                      ) : (
                        <FaExternalLinkAlt />
                      )}
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-4">
                <h3
                  id={`project-${p.id}`}
                  className="text-sm font-bold text-white"
                >
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-300">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
