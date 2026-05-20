import { useState } from 'react';
import Container from '../components/Container';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import kazbooImage2 from '../assets/projects/kazboo2.png';
import SectionIntro from '../components/SectionIntro';
import { kazbooInfoCards } from '../data/kazbooInfoCards';

const techStack = [
  'React Native',
  'TypeScript',
  'Expo (SDK 52)',
  'Expo Router',
  'Redux Toolkit',
  'Axios',
  'Formik',
  'NativeWind',
  'Expo Secure Store',
  'Expo Image Picker',
  'Expo AV',
  'REST API',
  'AWS S3',
  '.NET (C# Backend)',
];

type InfoCardProps = {
  title?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image?: string;
  children: React.ReactNode;
};

function InfoCard({ title, icon: Icon, image, children }: InfoCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-border bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl" />
      </div>

      <div className="relative z-10">
        {(title || Icon || image) && (
          <div className="mb-4 flex items-center gap-3">
            {Icon && (
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-soft transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
                <Icon className="h-6 w-6 text-text-soft transition-colors duration-300 group-hover:text-primary sm:h-7 sm:w-7" />
              </div>
            )}

            {image && (
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-soft transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
                <img
                  src={image}
                  alt=""
                  className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                />
              </div>
            )}

            {title && (
              <h2 className="text-xl font-semibold leading-tight sm:text-2xl">
                {title}
              </h2>
            )}
          </div>
        )}

        {children}
      </div>
    </div>
  );
}

export default function KazbooProjectPage() {
  const [openContribution, setOpenContribution] = useState<number | null>(null);
  return (
    <main className="overflow-x-hidden bg-background text-text">
      <section className="scroll-mt-24 py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                  Commercial Project
                </p>

                <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                  Kazboo App
                </h1>

                <p className="mt-6 max-w-3xl text-base leading-8 text-text-soft sm:text-lg">
                  KazbooApp is a cross-platform mobile application built with
                  React Native, Expo, and TypeScript. I worked as a Software
                  Developer from January 2023 to January 2025, focusing on
                  implementing and maintaining user-facing features in a real
                  production environment.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="group mt-8 overflow-hidden rounded-[2rem] border border-border bg-surface shadow-lg shadow-black/5">
                <div className="relative overflow-hidden">
                  <img
                    src={kazbooImage2}
                    alt="Kazboo App preview"
                    className="max-h-[420px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>
            </Reveal>

            <div className="mt-10 mb-5 grid gap-6">
              <Reveal>
                <InfoCard title="Project status">
                  <p className="mt-4 leading-7 text-text-soft">
                    This project is no longer publicly available. Kazboo ApS was
                    declared bankrupt in January 2025 during the final stage of
                    product deployment, so the application was not officially
                    released and cannot currently be viewed as a live product.
                  </p>
                </InfoCard>
              </Reveal>

              <Reveal>
                <InfoCard title="Product overview">
                  <p className="mt-4 leading-7 text-text-soft">
                    The application included authentication, user profiles,
                    social interactions such as friends and connections, as well
                    as media uploads. It was integrated with multiple REST API
                    endpoints powered by a C# .NET backend, with media storage
                    handled via AWS S3.
                  </p>
                </InfoCard>
              </Reveal>
            </div>

            <Reveal>
              <InfoCard title="My contribution">
                <ul className="mt-5 space-y-3">
                  {[
                    {
                      title:
                        'Implemented and maintained core mobile features using React Native and Expo',
                      description:
                        'I worked on real user-facing functionality inside a production mobile app, including screens, reusable UI parts, and feature improvements across the app.',
                    },
                    {
                      title:
                        'Integrated REST APIs using Axios and handled async data flows',
                      description:
                        'I connected the mobile app with backend endpoints, handled loading and error states, and made sure data was displayed correctly across different screens.',
                    },
                    {
                      title:
                        'Worked on user profile updates, social features, and media uploads',
                      description:
                        'I contributed to profile editing, friend-related functionality, and upload flows where users could add or update their content.',
                    },
                    {
                      title:
                        'Implemented video upload logic using expo-av to extract duration metadata',
                      description:
                        'I worked with video files before upload and used expo-av to read video duration metadata, so the backend received the needed information together with the file.',
                    },
                    {
                      title:
                        'Built forms with Formik, including validation and error handling',
                      description:
                        'I created and maintained forms with validation, clear feedback, and error handling to make user input more reliable.',
                    },
                    {
                      title:
                        'Collaborated closely with backend developers and designers',
                      description:
                        'I worked with backend developers around API behavior and with designers to keep the implementation close to the expected product experience.',
                    },
                  ].map((item, index) => {
                    const isOpen = openContribution === index;

                    return (
                      <li
                        key={item.title}
                        className="group relative overflow-hidden rounded-lg border border-border bg-surface/60 px-4 py-3 text-text-soft backdrop-blur-sm opacity-0 transition-all duration-300 animate-[fadeSlideIn_0.5s_ease-out_forwards] hover:-translate-y-0.5 hover:border-primary hover:bg-surface-soft"
                        style={{ animationDelay: `${index * 120}ms` }}
                      >
                        <div className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        <div className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(120deg,transparent,var(--primary-ring),transparent)] opacity-0 transition-all duration-700 group-hover:translate-x-[120%] group-hover:opacity-70" />

                        <div className="relative flex items-start gap-3">
                          <button
                            type="button"
                            onClick={() =>
                              setOpenContribution(isOpen ? null : index)
                            }
                            aria-expanded={isOpen}
                            aria-label={
                              isOpen ? 'Hide explanation' : 'Show explanation'
                            }
                            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary drop-shadow-[0_0_6px_var(--primary)] transition-all duration-300 hover:bg-primary hover:text-white ${
                              isOpen ? 'rotate-90 bg-primary text-white' : ''
                            }`}
                          >
                            ›
                          </button>

                          <div className="min-w-0">
                            <p className="text-sm leading-6 sm:text-base">
                              {item.title}
                            </p>

                            <div
                              className={`grid transition-all duration-300 ease-out ${
                                isOpen
                                  ? 'mt-3 grid-rows-[1fr] opacity-100'
                                  : 'grid-rows-[0fr] opacity-0'
                              }`}
                            >
                              <div className="overflow-hidden">
                                <p className="border-l border-primary/40 pl-4 text-sm leading-6 text-text-soft/80">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </InfoCard>
            </Reveal>

            <div className="mt-14 pt-6">
              <Reveal>
                <SectionIntro
                  eyebrow="Project Details"
                  title="Architecture, quality, and production experience"
                  description="Key technical decisions, production challenges, and lessons learned while working on KazbooApp."
                />
              </Reveal>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {kazbooInfoCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <Reveal key={card.title}>
                      <InfoCard>
                        <div className="mb-4 flex items-center gap-3">
                          {Icon && (
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-soft sm:h-16 sm:w-16">
                              <Icon className="h-7 w-7 text-text-soft transition-colors duration-300 group-hover:text-primary sm:h-8 sm:w-8" />
                            </div>
                          )}

                          <h2 className="text-xl font-semibold leading-tight sm:text-2xl">
                            {card.title}
                          </h2>
                        </div>

                        {card.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="mt-4 text-left leading-7 text-text-soft"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </InfoCard>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            <Reveal>
              <div className="mt-8 mb-5 max-w-5xl">
                <InfoCard title="Tech stack">
                  <div className="relative mt-5 overflow-hidden rounded-2xl border border-primary/50 bg-background shadow-[0_0_35px_var(--primary-ring),inset_0_0_25px_rgba(255,255,255,0.03)]">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,var(--primary-ring),transparent_45%),radial-gradient(circle_at_80%_70%,var(--primary-ring),transparent_50%)] opacity-70" />

                    <div className="relative flex items-center gap-2 border-b border-primary/30 bg-surface-soft/80 px-4 py-3 backdrop-blur-md">
                      <span className="h-3 w-3 rounded-full bg-primary-deep shadow-[0_0_10px_var(--primary-deep)]" />
                      <span className="h-3 w-3 rounded-full bg-primary-strong shadow-[0_0_10px_var(--primary-strong)]" />
                      <span className="h-3 w-3 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />

                      <span className="ml-3 text-xs font-semibold uppercase tracking-[0.18em] text-text-soft">
                        kazboo-terminal
                      </span>
                    </div>

                    <div className="relative px-4 py-5 font-mono text-sm sm:px-5">
                      <p className="font-semibold text-primary drop-shadow-[0_0_8px_var(--primary)]">
                        KazbooApp OS{' '}
                        <span className="text-text-soft drop-shadow-none">
                          [Frontend Build]
                        </span>
                      </p>

                      <p className="mt-2 text-text-soft">
                        Loading technologies used in production...
                      </p>

                      <p className="mt-5 font-semibold text-primary drop-shadow-[0_0_8px_var(--primary)]">
                        anna@kazboo:~${' '}
                        <span className="text-text drop-shadow-[0_0_6px_var(--primary-ring)]">
                          skills --list
                        </span>
                      </p>

                      <div className="mt-4 grid gap-3">
                        {techStack.map((tech) => (
                          <div
                            key={tech}
                            className="group relative overflow-hidden rounded-xl border border-primary/40 bg-surface/70 px-4 py-3 font-bold tracking-wide text-text shadow-[0_0_14px_var(--primary-ring)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-surface-soft hover:shadow-[0_0_24px_var(--primary-ring)]"
                          >
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,var(--primary-ring),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
                            <span className="relative text-primary drop-shadow-[0_0_8px_var(--primary)]">
                              [ok]
                            </span>{' '}
                            <span className="relative text-text drop-shadow-[0_0_10px_var(--primary-ring)]">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>

                      <p className="mt-5 font-semibold text-primary drop-shadow-[0_0_8px_var(--primary)]">
                        anna@kazboo:~$ <span className="animate-pulse">_</span>
                      </p>
                    </div>
                  </div>
                </InfoCard>
              </div>
            </Reveal>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                href={`${import.meta.env.BASE_URL}#projects`}
                variant="secondary"
              >
                Back to Projects
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
