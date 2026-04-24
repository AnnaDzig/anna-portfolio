import Container from '../components/Container';
import Reveal from '../components/Reveal';
import SectionIntro from '../components/SectionIntro';

const highlights = [
  {
    title: 'Frontend focus',
    text: 'React, React Native, TypeScript, Next.js',
  },
  {
    title: 'Product mindset',
    text: 'Clean UI, usability, maintainable structure',
  },
  {
    title: 'Growing backend',
    text: 'C#, .NET, APIs, architecture thinking',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-background py-8 text-text sm:py-12 lg:py-16"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <Reveal>
                      <SectionIntro
                        eyebrow="About Me"
                        title="Thoughtful developer with a strong eye for clean digital
                products"
              description="My path into software development started with structured data,
                precision, and complex systems. Today, I use that analytical
                mindset to build modern web and mobile applications."
                      />
                    </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <article
                className="rounded-[2rem] border border-border bg-surface/90 p-6 shadow-sm backdrop-blur-sm sm:p-8 lg:p-10  transition-all duration-300 ease-out
  hover:-translate-y-1.5 hover:scale-[1.02]
  hover:border-primary/40 hover:shadow-[0_16px_40px_var(--primary-ring)]"
              >
                <div className="space-y-5 text-base leading-8 text-text-soft sm:text-lg sm:leading-9">
                  <p>
                    I’m a frontend-focused developer based in Denmark. I build
                    interfaces that are clear, responsive, and pleasant to use.
                  </p>

                  <p>
                    My strongest experience is with{' '}
                    <span className="font-semibold text-text">React</span>,{' '}
                    <span className="font-semibold text-text">
                      React Native
                    </span>
                    ,{' '}
                    <span className="font-semibold text-text">TypeScript</span>,
                    and <span className="font-semibold text-text">Next.js</span>
                    . I also continue growing my backend skills with{' '}
                    <span className="font-semibold text-text">C#</span> and{' '}
                    <span className="font-semibold text-text">.NET</span>.
                  </p>

                  <p>
                    I care about more than making things work. I enjoy creating
                    products that are maintainable, well-structured, and useful
                    for real users.
                  </p>
                </div>
              </article>

              <aside className="grid gap-4">
                {highlights.map((item) => (
                  <div
                    className="
  group relative overflow-hidden rounded-[1.6rem] border border-border bg-surface-soft p-6 shadow-sm
  transition-all duration-300 ease-out
  hover:-translate-y-1.5 hover:scale-[1.02]
  hover:border-primary/40 hover:shadow-[0_16px_40px_var(--primary-ring)]
"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--primary-soft),transparent_60%)]" />
                    </div>
                    <div className="relative">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-strong">
                        {item.title}
                      </p>
                      <p className="mt-3 text-lg font-medium leading-8 text-text">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </aside>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
