import Container from '../components/Container';
import SectionIntro from '../components/SectionIntro';
import { techStack } from '../data/techStack';

export default function TechStack() {
  return (
    <section
      id="tech"
      className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-24 text-text"
    >
      <Container>
        <div className="flex flex-col gap-12">
          <SectionIntro
            eyebrow="Tech Stack"
            title="Technologies I use to build modern web and mobile products"
            description="I enjoy working across frontend, mobile, and backend development, choosing tools that help create clean, scalable, and user-friendly applications."
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {techStack.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border-border bg-white p-4 sm:p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{group.title}</h3>

              <ul className="mt-4 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-surface-soft px-4 py-2 text-sm font-medium text-text-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
