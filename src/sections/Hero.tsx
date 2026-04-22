import Container from '../components/Container';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

const stack = [
  'React',
  'TypeScript',
  'Next.js',
  'React Native',
  '.NET',
  'Node.js',
];

const highlights = [
  { label: 'Focus', value: 'Frontend architecture & product UI' },
  { label: 'Experience', value: 'Web and mobile product development' },
  { label: 'Based in', value: 'Denmark' },
  { label: 'Approach', value: 'Clean structure, scalable solutions' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden scroll-mt-24 bg-background py-24 text-text sm:py-28 lg:py-36"
    >
      {/* soft background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-4rem] top-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-[-2rem] top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-[-4rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-surface-soft blur-3xl" />
      </div>

      <Container>
        <div className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-text-soft">
                Full-Stack Developer based in Denmark
              </p>

              <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                I build modern web and mobile applications with strong UI
                foundations and clean architecture.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-text-soft sm:text-lg sm:leading-8">
                I work with React, React Native, TypeScript, Next.js, Node.js,
                and .NET to create scalable, maintainable products with clear
                user experiences and practical business value.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="#projects">View Projects</Button>

                <a
                  href="#contact"
                  className="inline-flex items-center rounded-xl border border-border bg-surface px-6 py-3 text-sm font-medium text-text transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
                >
                  Contact
                </a>

                <a
                  href="/Anna-Dzhyhota-CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl border border-border bg-surface px-6 py-3 text-sm font-medium text-text transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
                >
                  View CV
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text-soft transition-all duration-300 hover:border-primary hover:text-text"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative mx-auto w-full max-w-xl">
              {/* floating mini cards */}
              <div className="absolute -left-4 top-10 z-10 rounded-2xl border border-border bg-surface/95 px-4 py-3 shadow-lg backdrop-blur animate-float">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-soft">
                  Focus
                </p>
                <p className="mt-1 text-sm font-medium text-text">
                  Frontend architecture
                </p>
              </div>

              <div className="absolute -right-4 bottom-12 z-10 rounded-2xl border border-border bg-surface/95 px-4 py-3 shadow-lg backdrop-blur animate-float-delayed">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-soft">
                  Based in
                </p>
                <p className="mt-1 text-sm font-medium text-text">Denmark</p>
              </div>

              {/* main visual card */}
              <div className="relative rounded-[2rem] border border-border bg-surface/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur">
                <div className="rounded-[1.5rem] border border-border bg-gradient-to-br from-surface to-surface-soft p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-soft">
                        Profile
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-text">
                        Anna Dzhyhota
                      </p>
                    </div>

                    <div className="h-12 w-12 rounded-2xl border border-border bg-surface-soft" />
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {highlights.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-border bg-surface/80 p-4"
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-text-soft">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm font-medium leading-6 text-text">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-border bg-surface/80 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-text-soft">
                      Core stack
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-surface-soft px-3 py-1.5 text-sm font-medium text-text-soft"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* decorative block for future SVG / illustration */}
                  <div className="mt-6 rounded-[1.5rem] border border-border bg-surface/70 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-text-soft">
                          Available for
                        </p>
                        <p className="mt-2 text-sm font-medium text-text">
                          Frontend / Full-Stack roles
                        </p>
                      </div>

                      <div className="h-3 w-3 rounded-full bg-primary" />
                    </div>

                    <div className="mt-4 h-36 rounded-[1.25rem] bg-gradient-to-br from-primary/20 via-surface-soft to-surface" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}