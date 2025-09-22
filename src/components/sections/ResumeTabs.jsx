import { useState } from "react";
import { resumeData } from "../../Data/resumeData";

const tabs = ["Work", "Education"];

export const ResumeTabs = () => {
  const [active, setActive] = useState("Work");

  const Avatar = ({ logo, title }) => (
    <div className="relative z-10 flex-shrink-0">
      <div 
        className="w-12 h-12 rounded-full border-2 overflow-hidden flex items-center justify-center"
        style={{ 
          backgroundColor: 'var(--secondary)',
          borderColor: 'var(--border)'
        }}
      >
        {logo ? (
          <img src={logo} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span 
            className="text-sm font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
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
    <section id="resume">
      
      <h2 
        className="text-2xl font-semibold pb-4"
        style={{ color: 'var(--text-primary)' }}
      >
        My Career
      </h2>

      <div 
        className="mb-2 grid w-full grid-cols-2 rounded-lg p-1 h-9"
        style={{ backgroundColor: 'var(--secondary)' }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all
              ${
                active === tab
                  ? "shadow font-semibold"
                  : ""
              }`}
            style={{
              backgroundColor: active === tab ? 'var(--primary)' : 'transparent',
              color: active === tab ? 'var(--text-primary)' : 'var(--text-secondary)'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div 
        className="border rounded-xl relative"
        style={{ borderColor: 'var(--border)' }}
      >
        <div 
          className="absolute left-12 top-0 bottom-0 w-px z-0" 
          style={{ backgroundColor: 'var(--border)' }}
        />

        <div className="p-6 space-y-8 relative z-10">
          {resumeData[active].map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="flex flex-col items-center">
                <Avatar logo={item.logo} title={item.title} />
              </div>

              <div>
                {item.date && (
                  <p 
                    className="text-xs"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.date}
                  </p>
                )}
                {item.title && (
                  <h3 
                    className="font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.title}
                  </h3>
                )}
                {item.place && (
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.place}
                  </p>
                )}

                {item.details?.length > 0 && (
                  <ul 
                    className="list-disc list-inside text-sm mt-2 space-y-1"
                    style={{ color: 'var(--text-secondary)' }}
                  >
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
                        className="px-3 py-1 rounded-md text-xs font-medium border"
                        style={{ 
                          borderColor: 'var(--border)',
                          color: 'var(--text-secondary)',
                          backgroundColor: 'var(--secondary)'
                        }}
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
    </section>
  );
};