import { useState } from "react";
import { resumeData } from "../../Data/resumeData"; // adjust path

const tabs = ["Work", "Education"];

export const ResumeTabs = () => {
  const [active, setActive] = useState("Education");

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

      {/* Tabs content → ONE card per tab */}
      <div className="border border-neutral-700 rounded-xl p-6 space-y-6">
        {resumeData[active].map((item, idx) => (
          <div key={idx}>
            <p className="text-xs text-neutral-400">{item.date}</p>
            <h3 className="font-semibold text-white">{item.title}</h3>
            {item.place && (
              <p className="text-sm text-neutral-300">{item.place}</p>
            )}
            {item.details && (
              <ul className="list-disc list-inside text-sm text-neutral-400 mt-2 space-y-1">
                {item.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}
            {item.tags && (
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
        ))}
      </div>
    </div>
  );
};
