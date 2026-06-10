import { useState } from 'react';

import Container from '../components/Container';
import SectionIntro from '../components/SectionIntro';
import Reveal from '../components/Reveal';
import TechSphere from '../components/TechSphere';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });

  const handleSubmit = (
    event: React.SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio contact from ${formData.name || 'visitor'}`,
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:anna.soft.dev@gmail.com?subject=${subject}&body=${body}`;
  };

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

                  <form onSubmit={handleSubmit} className="grid gap-4 pt-2">
                    <label className="group relative block">
                      <span className="sr-only">Email</span>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(event) =>
                          setFormData((current) => ({
                            ...current,
                            email: event.target.value,
                          }))
                        }
                        placeholder="Email"
                        required
                        className="w-full rounded-2xl border border-border bg-surface-soft px-4 py-4 text-base font-medium text-text outline-none transition placeholder:text-text-soft/70 focus:border-primary focus:bg-surface"
                      />
                    </label>

                    <label className="group relative block">
                      <span className="sr-only">Name</span>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(event) =>
                          setFormData((current) => ({
                            ...current,
                            name: event.target.value,
                          }))
                        }
                        placeholder="Name"
                        required
                        className="w-full rounded-2xl border border-border bg-surface-soft px-4 py-4 text-base font-medium text-text outline-none transition placeholder:text-text-soft/70 focus:border-primary focus:bg-surface"
                      />
                    </label>

                    <label className="block">
                      <span className="sr-only">Message</span>

                      <textarea
                        value={formData.message}
                        onChange={(event) =>
                          setFormData((current) => ({
                            ...current,
                            message: event.target.value,
                          }))
                        }
                        placeholder="Message"
                        required
                        rows={5}
                        className="w-full resize-none rounded-2xl border border-border bg-surface-soft px-5 py-4 text-base font-medium text-text outline-none transition placeholder:text-text-soft/70 focus:border-primary focus:bg-surface"
                      />
                    </label>

                    <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-text shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/90 sm:w-auto"
                      >
                        Send Message
                      </button>

                      <a
                        href="mailto:anna.soft.dev@gmail.com"
                        className="text-sm font-medium text-text-soft transition hover:text-primary"
                      >
                        anna.soft.dev@gmail.com
                      </a>
                    </div>
                  </form>

                  <div className="grid gap-4 pt-2 sm:grid-cols-2">
                    <a
                      href="https://github.com/AnnaDzig"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-border bg-surface-soft px-5 py-4 text-base font-medium text-text-soft transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                    >
                      GitHub
                    </a>

                    <a
                      href="https://www.linkedin.com/in/ann-dzhyhota/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-border bg-surface-soft px-5 py-4 text-base font-medium text-text-soft transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-border bg-surface-soft p-4 sm:min-h-[380px] lg:min-h-[480px]">
                  <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                  <div className="absolute bottom-8 right-8 h-28 w-28 rounded-full bg-primary/10 blur-2xl" />

                  <div className="relative w-full max-w-[420px]">
                    <TechSphere />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
