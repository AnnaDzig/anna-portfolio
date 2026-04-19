import Container from '../components/Container';
import { projects } from '../data/projects';
import Button from '../components/Button';
import SectionIntro from '../components/SectionIntro';

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24bg-white py-16 sm:py-20 lg:py-24 text-text"
    >
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex max-w-3xl flex-col gap-4">
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
                className="flex h-full flex-col rounded-3xl border border-[#f1d9df] bg-[#fff9f8] p-4 sm:p-6 shadow-sm"
              >
                <div className="flex flex-1 flex-col gap-5">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      {project.title}
                    </h3>

                    <p className="text-sm leading-6 sm:text-base sm:leading-7 text-[#6e5a63]">
                      {project.description}
                    </p>
                  </div>

                  <ul className="flex flex-wrap gap-3">
                    {project.stack.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-white px-4 py-2 text-sm font-medium text-text-soft"
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
