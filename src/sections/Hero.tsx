import Container from '../components/Container';
import Button from '../components/Button';

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
      className="scroll-mt-24 bg-background py-24 text-text sm:py-28 lg:py-36"
    >
      <Container>
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-text-soft">
            Full-Stack Developer based in Denmark
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            I build modern web and mobile applications with strong UI foundations
            and clean architecture.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-text-soft sm:text-lg sm:leading-8">
            I work with React, React Native, TypeScript, Next.js, Node.js, and
            .NET to create scalable, maintainable products with clear user
            experiences and practical business value.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
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

          {/* Stack Pills */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-text-soft transition-all duration-300 hover:border-primary hover:text-text"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Highlight Card */}
          <div className="mt-16 w-full max-w-xl rounded-2xl border border-border bg-surface p-8 shadow-sm">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-text-soft">
              Profile
            </h3>

            <p className="mt-2 text-xl font-semibold text-text">
              Anna Dzhyhota
            </p>

            <div className="mt-6 grid gap-6">
              {highlights.map((item) => (
                <div key={item.label} className="grid gap-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-soft">
                    {item.label}
                  </p>
                  <p className="text-base font-medium text-text">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-soft">
                Core stack
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-surface-soft px-3 py-1.5 text-sm font-medium text-text-soft"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
