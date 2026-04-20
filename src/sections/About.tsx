import Container from '../components/Container';
import Reveal from '../components/Reveal';
import SectionIntro from '../components/SectionIntro';

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-background py-16 text-text sm:py-20 lg:py-24"
    >
      <Container>
         <Reveal>
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-sm sm:p-8 lg:p-10">
            <SectionIntro
              eyebrow="About Me"
              title="A developer who enjoys building thoughtful, modern digital products"
              description="My path into software development started in a very different field — land and cadastral systems — where I worked with structured data, precision, and complex information. Over time, that analytical mindset naturally led me into programming."
            />

            <div className="mt-6 space-y-4 text-sm leading-6 text-text-soft sm:text-base sm:leading-7">
              <p>
                Since then, I’ve built experience across both web and mobile
                development, working with technologies such as React, React
                Native, TypeScript, Next.js, Node.js, and .NET.
              </p>

              <p>
                I enjoy creating applications that are not only functional, but
                also intuitive, maintainable, and thoughtfully designed. For
                me, good development is not just about making something work —
                it is about building something clear, scalable, and valuable
                for real users.
              </p>
            </div>
          </div>

          <aside className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[1.5rem] border border-border bg-surface-soft p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-soft">
                Focus
              </p>
              <p className="mt-3 text-base font-medium leading-7 text-text">
                Frontend and full-stack development with strong attention to
                usability, structure, and clean UI.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-border bg-surface-soft p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-soft">
                Technologies
              </p>
              <p className="mt-3 text-base font-medium leading-7 text-text">
                React, React Native, TypeScript, Next.js, Node.js, C#, and
                .NET.
              </p>
            </div>
          </aside>
          </div>
          </Reveal>
      </Container>
    </section>
  );
}