import Container from '../components/Container';
import SectionIntro from '../components/SectionIntro';
import { techStack } from '../data/techStack';

export default function TechStack() {
  return (
    <section
      id="tech"
      className="scroll-mt-24 bg-background py-16 text-text sm:py-20 lg:py-24"
    >
      <Container>
        <div className="flex flex-col gap-12">
          <SectionIntro
            eyebrow="Tech Stack"
            title="Technologies I use to build modern web and mobile products"
            description="I enjoy working across frontend, mobile, and backend development, choosing tools that help create clean, scalable, and user-friendly applications."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {techStack.map((group) => (
              <article
                key={group.title}
                className="rounded-[2rem] border border-border bg-surface p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-text sm:text-xl">
                  {group.title}
                </h3>

                <ul className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-surface-soft px-4 py-2 text-sm font-medium text-text-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}