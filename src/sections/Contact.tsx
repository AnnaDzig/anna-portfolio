import Container from '../components/Container';
import Button from '../components/Button';
import SectionIntro from '../components/SectionIntro';
import Reveal from '../components/Reveal';
import TechSphere from '../components/TechSphere';

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-background py-16 text-text sm:py-20 lg:py-24"
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-surface p-6 shadow-sm sm:p-8 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
                <div className="flex flex-col gap-6">
                  <SectionIntro
                    eyebrow="Contact"
                    title="Let’s build something meaningful together"
                    description="I’m open to frontend and full-stack opportunities where I can contribute to thoughtful products, clean user experiences, and scalable solutions."
                  />

                  <div className="pt-2">
                    <Button href="mailto:anna.soft.dev@gmail.com">
                      Send Email
                    </Button>
                  </div>

                  <div className="grid gap-4 pt-2">
                    <a
                      href="mailto:anna.soft.dev@gmail.com"
                      className="rounded-2xl border border-border bg-surface-soft px-5 py-4 text-base font-medium text-text-soft transition hover:border-primary hover:text-primary"
                    >
                      anna.soft.dev@gmail.com
                    </a>

                    <a
                      href="https://github.com/AnnaDzig"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-border bg-surface-soft px-5 py-4 text-base font-medium text-text-soft transition hover:border-primary hover:text-primary"
                    >
                      GitHub
                    </a>

                    <a
                      href="https://www.linkedin.com/in/ann-dzhyhota/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-border bg-surface-soft px-5 py-4 text-base font-medium text-text-soft transition hover:border-primary hover:text-primary"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                <TechSphere />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
