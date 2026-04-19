import Container from '../components/Container';
import Button from '../components/Button';

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 text-[#2d1f26]">
      <Container>
        <div className="flex max-w-3xl flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d97c95]">
            Contact
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Let’s build something meaningful together
          </h2>

          <p className="text-lg leading-8 text-[#6e5a63]">
            I’m open to frontend and full-stack opportunities where I can
            contribute to thoughtful products, clean user experiences, and
            scalable solutions.
          </p>

          <div className="flex flex-col gap-4 text-base text-[#6e5a63]">
            <a
              href="mailto:anna.soft.dev@gmail.com"
              className="hover:text-[#d97c95]"
            >
              anna.soft.dev@gmail.com
            </a>

            <a
              href="https://github.com/AnnaDzig"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#d97c95]"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ann-dzhyhota/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#d97c95]"
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
