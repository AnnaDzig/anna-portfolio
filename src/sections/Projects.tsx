import Container from '../components/Container';
import { projects } from '../data/projects';
import Button from '../components/Button';
import SectionIntro from '../components/SectionIntro';
import Reveal from '../components/Reveal';

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-background py-16 text-text sm:py-20 lg:py-24"
    >
      <Container>
       
        <div className="flex flex-col gap-12">
           <Reveal>
          <div className="max-w-3xl">
            <SectionIntro
              eyebrow="Selected Projects"
              title="Projects that reflect how I think, build, and solve problems"
              description="I enjoy working on products that combine clean implementation, thoughtful structure, and practical value for real users."
            />
          </div>
</Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.1}>
            <article
  className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
>
  {/* IMAGE */}
  <div className="relative h-48 w-full overflow-hidden">
    <img
      src={project.image}
      alt={project.title}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    {/* overlay */}
    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
  </div>

  {/* CONTENT */}
  <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-semibold text-text sm:text-2xl">
        {project.title}
      </h3>

      <p className="text-sm leading-6 text-text-soft sm:text-base sm:leading-7">
        {project.description}
      </p>
    </div>

    <ul className="flex flex-wrap gap-2">
      {project.stack.map((item) => (
        <li
          key={item}
          className="rounded-full bg-surface-soft px-3 py-1 text-xs font-medium text-text-soft sm:text-sm"
        >
          {item}
        </li>
      ))}
    </ul>

    <div className="mt-auto pt-4">
      <Button href={project.link}>View Project</Button>
    </div>
  </div>
</article>
                </Reveal>
            ))}
          </div>
          </div>
      </Container>
    </section>
  );
}