import Container from '../components/Container';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import ThreeLayerPortrait from '../components/ThreeLayerPortrait';
import Github from '../assets/icons/github.svg?react';
import Linkedin from '../assets/icons/linkedin.svg?react';
import Mail from '../assets/icons/mail.svg?react';

const quickStats = [
  { value: '3+', label: 'Years building products' },
  { value: 'React / RN', label: 'Web and mobile focus' },
  { value: '.NET', label: 'Growing backend depth' },
  { value: 'Denmark', label: 'Based in Denmark' },
];

const contactLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/AnnaDzig',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ann-dzhyhota/',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:anna.soft.dev@gmail.com',
    icon: Mail,
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background py-10 text-text sm:py-14 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-7rem] top-[-5rem] h-72 w-72 rounded-full bg-primary/16 blur-3xl" />
        <div className="absolute right-[-5rem] top-[12%] h-80 w-80 rounded-full bg-primary-strong/12 blur-3xl" />
        <div className="absolute bottom-[-7rem] left-[18%] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:88px_88px]" />
      </div>

      <Container>
        <div className="relative grid items-center gap-14 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-2xl">
            <Reveal>
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-surface-soft px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-strong shadow-sm">
                Available for new opportunities
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="p-6 text-5xl font-semibold leading-[0.94] tracking-tight text-text sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                Full-Stack
                <span className="mt-2 block bg-gradient-to-r from-primary-strong via-primary to-primary-strong bg-clip-text text-transparent">
                  Frontend
                </span>
                <span className="mt-2 block">Developer</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 pb-4 max-w-xl text-xl leading-8 text-text-soft sm:text-2xl sm:leading-9">
                Building thoughtful web and mobile products with clean UI,
                scalable structure, and a strong focus on real user value.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-3 pb-4 max-w-2xl text-base leading-8 text-text-soft">
                I create modern interfaces and products with React, React
                Native, TypeScript, and Next.js, while continuing to grow my
                backend expertise with .NET and long-term architecture thinking.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="pb-4">
                <Button href="#projects">View Project</Button>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {quickStats.map((item) => (
                  <article
                    key={item.label}
                    className="rounded-[1.35rem] border border-border bg-surface/95 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35"
                  >
                    <div className="text-lg font-semibold text-primary-strong">
                      {item.value}
                    </div>
                    <div className="mt-1 text-sm text-text-soft">
                      {item.label}
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <div className="mx-auto w-full max-w-[760px] xl:ml-auto">
              <div className="relative overflow-hidden rounded-[2.25rem] border border-border bg-surface/85 p-4 shadow-[0_28px_80px_rgba(45,31,38,0.12)] backdrop-blur-sm">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,166,184,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(201,132,151,0.12),transparent_34%)]" />

                <div className="relative rounded-[1.85rem] border border-border/70 bg-surface-soft/40 p-3">
                  <ThreeLayerPortrait />
                </div>

                <div className="relative mt-6">
                  <p className="text-xs pt-4 font-semibold uppercase tracking-[0.24em] text-primary-strong">
                    Anna Dzhyhota · Denmark
                  </p>

                  <p className="pt-3 pb-3 max-w-2xl text-base leading-8 text-text-soft">
                    I’m Anna, a frontend-focused developer based in Denmark,
                    passionate about building elegant digital experiences for
                    web and mobile with clarity, structure, and real product
                    value.
                  </p>
                </div>

                <div className="relative pb-6 flex flex-wrap items-center gap-3">
                  {contactLinks.map((link) => {
                    const Icon = link.icon;

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={
                          link.href.startsWith('http') ? '_blank' : undefined
                        }
                        rel={
                          link.href.startsWith('http')
                            ? 'noreferrer noopener'
                            : undefined
                        }
                        aria-label={link.label}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2.5 text-sm font-medium text-text-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-soft hover:text-text"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{link.label}</span>
                      </a>
                    );
                  })}
                </div>

                <div className="relative mt-5">
                  <div className="relative h-1.5 overflow-hidden rounded-full bg-surface-soft">
                    <div className="relative h-full w-[100%] rounded-full bg-gradient-to-r from-primary to-primary-strong">
                      <div className="absolute inset-0 overflow-hidden rounded-full">
                        <div className="shimmer absolute inset-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
