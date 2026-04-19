import Container from '../components/Container';
import Button from '../components/Button';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24bg-white py-24 text-text">
      <Container>
        <div className="flex max-w-3xl flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-dark">
            Contact
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Let’s build something meaningful together
          </h2>

          <p className="text-lg leading-8 text-text-soft">
            I’m open to frontend and full-stack opportunities where I can
            contribute to thoughtful products, clean user experiences, and
            scalable solutions.
          </p>

          <div className="flex flex-col gap-4 text-base text-text-soft">
            <a
              href="mailto:anna.soft.dev@gmail.com"
              className="hover:text-primary-dark"
            >
              anna.soft.dev@gmail.com
            </a>

            <a
              href="https://github.com/AnnaDzig"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary-dark"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ann-dzhyhota/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary-dark"
            >
              LinkedIn
            </a>
          </div>

          <div className="pt-4">
            <Button href="mailto:anna.soft.dev@gmail.com">Send Email</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
