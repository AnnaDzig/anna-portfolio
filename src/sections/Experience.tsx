import Container from '../components/Container';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-background py-24 text-text"
    >
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-dark">
              Experience
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              My professional path across technology, product work, and
              problem-solving
            </h2>

            <p className="text-lg leading-8 text-text-soft">
              My background combines real product development, frontend and
              mobile engineering, and an earlier analytical career that shaped
              how I approach structure, detail, and responsibility.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="rounded-3xl border border-[#f1d9df] bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold">{item.role}</h3>
                    <p className="text-base font-medium text-primary-dark">
                      {item.company}
                    </p>
                  </div>

                  <p className="text-sm font-medium text-text-soft">
                    {item.period}
                  </p>
                </div>

                <p className="mt-4 max-w-3xl text-base leading-7 text-text-soft">
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
