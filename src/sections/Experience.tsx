import Container from '../components/Container';
import Reveal from '../components/Reveal';
import SectionIntro from '../components/SectionIntro';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-background py-16 text-text sm:py-20 lg:py-24"
    >
      <Container>
        <Reveal>
        <div className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <SectionIntro
              eyebrow="Experience"
              title="My professional path across technology, product work, and problem-solving"
              description="My background combines real product development, frontend and mobile engineering, and an earlier analytical career that shaped how I approach structure, detail, and responsibility."
            />
          </div>

          {/* timeline wrapper */}
          <div className="relative flex flex-col gap-6">
            {/* vertical line */}
            <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-border md:block" />

            {experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="relative rounded-[2rem] border border-border bg-surface p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:p-6 md:pl-10"
              >
                {/* timeline dot */}
                <div className="absolute left-0 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-primary md:block" />

                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-text sm:text-2xl">
                      {item.role}
                    </h3>

                    <p className="text-base font-medium text-primary">
                      {item.company}
                    </p>
                  </div>

                  <p className="text-sm font-medium text-text-soft">
                    {item.period}
                  </p>
                </div>

                <p className="mt-4 max-w-3xl text-sm leading-6 text-text-soft sm:text-base sm:leading-7">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          </div>
          </Reveal>
      </Container>
    </section>
  );
}