import Container from '../components/Container';
import { techStack } from '../data/techStack';

export default function TechStack() {
  return (
    <section id="tech" className="bg-[#fff9f8] py-24 text-[#2d1f26]">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d97c95]">
              Tech Stack
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Technologies I use to build modern web and mobile products
            </h2>

            <p className="text-lg leading-8 text-[#6e5a63]">
              I enjoy working across frontend, mobile, and backend development,
              choosing tools that help create clean, scalable, and user-friendly
              applications.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {techStack.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-[#f1d9df] bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{group.title}</h3>

                <ul className="mt-4 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-[#fff1f4] px-4 py-2 text-sm font-medium text-[#6e5a63]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
