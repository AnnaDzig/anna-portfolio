import Button from '../components/Button';
import Container from '../components/Container';

export default function Hero() {
  return (
    <section className="bg-background py-10 text-text sm:py-14 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:min-h-[calc(100vh-80px)] lg:grid-cols-2 lg:items-center">
          <div className="min-w-0">
            <div className="flex flex-col gap-4 sm:gap-6">
              <p className="text-sm font-medium text-primary-dark">
                Hi, I’m Anna
              </p>

              <h1 className="max-w-[10ch] text-[2.25rem] font-bold leading-[1.05] sm:max-w-[12ch] sm:text-4xl md:text-5xl lg:text-6xl">
                Frontend / Full-Stack Developer based in Denmark
              </h1>

              <p className="max-w-[32ch] text-sm leading-6 sm:text-base sm:leading-7 text-text-soft sm:max-w-xl sm:text-lg sm:leading-8">
                I build modern web and mobile applications using React, React
                Native, TypeScript, and .NET — focusing on clean architecture,
                performance, and real user impact.
              </p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button href="#projects">View Projects</Button>
                <Button href="#contact" variant="secondary">
                  Contact Me
                </Button>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:min-w-0 lg:justify-self-end">
            <div className="w-full rounded-[2rem] border border-border bg-surface p-8 shadow-sm lg:max-w-md">
              <div className="flex flex-col gap-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-dark">
                  Portfolio Focus
                </p>

                <h2 className="text-xl sm:text-2xl font-semibold leading-snug">
                  Clean code, thoughtful UI, and modern product development
                </h2>

                <p className="text-sm leading-6 sm:text-base sm:leading-7 text-text-soft">
                  I enjoy building applications that are functional, clear,
                  maintainable, and pleasant to use.
                </p>

                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'React Native', '.NET'].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full bg-surface-soft px-4 py-2 text-sm font-medium text-text-soft"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
