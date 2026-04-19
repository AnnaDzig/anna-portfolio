import Container from '../components/Container';
import { projects } from '../data/projects';
import Button from '../components/Button';

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24 text-[#2d1f26]">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d97c95]">
              Selected Projects
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Projects that reflect how I think, build, and solve problems
            </h2>

            <p className="text-lg leading-8 text-[#6e5a63]">
              I enjoy working on products that combine clean implementation,
              thoughtful structure, and practical value for real users.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col rounded-3xl border border-[#f1d9df] bg-[#fff9f8] p-6 shadow-sm"
              >
                <div className="flex flex-1 flex-col gap-5">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>

                    <p className="text-base leading-7 text-[#6e5a63]">
                      {project.description}
                    </p>
                  </div>

                  <ul className="flex flex-wrap gap-3">
                    {project.stack.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#6e5a63]"
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
