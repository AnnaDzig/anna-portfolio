import Container from '../components/Container';
import SectionIntro from '../components/SectionIntro';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-24 text-text"
    >
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex max-w-3xl flex-col gap-4">
            <SectionIntro
              eyebrow="Experience"
              title="My professional path across technology, product work, and problem-solving"
              description="My background combines real product development, frontend and mobile engineering, and an earlier analytical career that shaped how I approach structure, detail, and responsibility."
            />
          </div>

          <div className="flex flex-col gap-6">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="rounded-3xl border border-[#f1d9df] bg-white p-4 sm:p-6 shadow-sm"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      {item.role}
                    </h3>
                    <p className="text-base font-medium text-primary-dark">
                      {item.company}
                    </p>
                  </div>

                  <p className="text-sm font-medium text-text-soft">
                    {item.period}
                  </p>
                </div>

                <p className="mt-4 max-w-3xl text-sm leading-6 sm:text-base sm:leading-7 text-text-soft">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
