import { useState } from "react";
import { resumeData } from "../../Data/resumeData"; // adjust path

const tabs = ["Work", "Education"];

export const ResumeTabs = () => {
  const [active, setActive] = useState("Education");

  const Avatar = ({ logo, title }) => (
    <div className="relative z-10 flex-shrink-0">
      <div className="w-12 h-12 rounded-full bg-neutral-900 border-2 border-neutral-700 overflow-hidden flex items-center justify-center">
        {logo ? (
          <img src={logo} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-sm font-semibold text-white">
            {title
              .split(" ")
              .slice(0, 2)
              .map((w) => w[0])
              .join("")
              .toUpperCase()}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Tabs header */}
      <div className="mb-2 grid w-full grid-cols-2 rounded-lg bg-neutral-800 p-1 h-9">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all
              ${
                active === tab
                  ? "bg-neutral-900 text-white shadow font-semibold"
                  : "text-neutral-400"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Timeline container — make this relative so the line can span to the container edges */}
      <div className="border border-neutral-700 rounded-xl relative">
        {/* Vertical line is positioned relative to the border box and will touch top & bottom */}
        {/* left-12 = p-6 (1.5rem) + half avatar (1.5rem) = 3rem => left-12 */}
        <div className="absolute left-12 top-0 bottom-0 w-px bg-neutral-700 z-0" />

        {/* Inner padded content so spacing stays the same */}
        <div className="p-6 space-y-8 relative z-10">
          {resumeData[active].map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              {/* Avatar (left) */}
              <div className="flex flex-col items-center">
                <Avatar logo={item.logo} title={item.title} />
              </div>

              {/* Content (right) */}
              <div>
                {item.date && (
                  <p className="text-xs text-neutral-400">{item.date}</p>
                )}
                {item.title && (
                  <h3 className="font-semibold text-white">{item.title}</h3>
                )}
                {item.place && (
                  <p className="text-sm text-neutral-300">{item.place}</p>
                )}

                {item.details?.length > 0 && (
                  <ul className="list-disc list-inside text-sm text-neutral-400 mt-2 space-y-1">
                    {item.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}

                {item.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-md text-xs font-medium border border-neutral-600 text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
