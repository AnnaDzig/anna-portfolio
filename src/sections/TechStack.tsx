import { useMemo, useState } from 'react';
import Container from '../components/Container';
import Reveal from '../components/Reveal';
import SectionIntro from '../components/SectionIntro';
import { techStack, type TechTabKey } from '../data/techStack';

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<TechTabKey>('technical');

  const activeSection = useMemo(() => {
    return techStack.find((tab) => tab.key === activeTab) ?? techStack[0];
  }, [activeTab]);

  return (
    <section
      id="tech"
      className="scroll-mt-24 bg-background py-16 text-text sm:py-20 lg:py-24"
    >
      <Container>
        <div className="flex flex-col gap-12">
          <Reveal>
            <SectionIntro
              eyebrow="Tech Stack"
              title="Skills & Expertise"
              description="Technical competencies and professional skills I’ve developed through experience and continuous learning."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex justify-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-border bg-surface p-2 shadow-sm">
                {techStack.map((tab) => {
                  const isActive = activeTab === tab.key;

                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveTab(tab.key)}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 sm:px-5 ${
                        isActive
                          ? 'bg-text text-background shadow-sm'
                          : 'text-text-soft hover:bg-surface-soft hover:text-text'
                      }`}
                    >
                      <img
                        src={tab.icon}
                        alt=""
                        aria-hidden="true"
                        className={`h-4 w-4 shrink-0 ${
                          isActive ? 'brightness-0 invert' : ''
                        }`}
                      />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <div
            className={`grid gap-6 ${
              activeSection.groups.length === 1
                ? 'mx-auto max-w-3xl'
                : 'md:grid-cols-2 xl:grid-cols-3'
            }`}
          >
            {activeSection.groups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.08}>
                <article
                  className="
                    rounded-[2rem] border border-border bg-surface p-6 shadow-sm
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-md
                    sm:p-7
                  "
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="
                        mb-5 flex h-16 w-16 items-center justify-center rounded-full
                        border border-border bg-surface-soft
                      "
                    >
                      <img
                        src={group.icon}
                        alt=""
                        aria-hidden="true"
                        className="h-7 w-7 object-contain"
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-text sm:text-2xl">
                      {group.title}
                    </h3>
                  </div>

                  <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li key={item.label}>
                        <div
                          className={`
                            flex items-center gap-3 rounded-2xl border px-4 py-3
                            transition-all duration-300
                            ${
                              item.highlighted
                                ? 'border-primary bg-surface-soft shadow-[0_0_0_1px_var(--primary)]'
                                : 'border-border bg-background hover:border-primary hover:bg-surface-soft'
                            }
                          `}
                        >
                          <img
                            src={item.icon}
                            alt=""
                            aria-hidden="true"
                            className="h-5 w-5 shrink-0 object-contain"
                          />
                          <span className="text-sm font-medium text-text sm:text-[15px]">
                            {item.label}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
