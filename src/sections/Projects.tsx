import Container from '../components/Container';
import { projects } from '../data/projects';
import Button from '../components/Button';
import SectionIntro from '../components/SectionIntro';

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-background py-16 text-text sm:py-20 lg:py-24"
    >
      <Container>
        <div className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <SectionIntro
              eyebrow="Selected Projects"
              title="Projects that reflect how I think, build, and solve problems"
              description="I enjoy working on products that combine clean implementation, thoughtful structure, and practical value for real users."
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col rounded-[2rem] border border-border bg-surface p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:p-6"
              >
                <div className="flex flex-1 flex-col gap-5">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold text-text sm:text-2xl">
                      {project.title}
                    </h3>

                    <p className="text-sm leading-6 text-text-soft sm:text-base sm:leading-7">
                      {project.description}
                    </p>
                  </div>

                  <ul className="flex flex-wrap gap-3">
                    {project.stack.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-surface-soft px-4 py-2 text-sm font-medium text-text-soft"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <Button href={project.link}>View Project</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}