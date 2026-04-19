import Container from '../components/Container';
import Button from '../components/Button';
import SectionIntro from '../components/SectionIntro';

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24bg-white py-16 sm:py-20 lg:py-24 text-text"
    >
      <Container>
        <div className="flex max-w-3xl flex-col gap-6">
          <SectionIntro
            eyebrow="Contact"
            title="Let’s build something meaningful together"
            description="I’m open to frontend and full-stack opportunities where I can contribute to thoughtful products, clean user experiences, and scalable solutions."
          />

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
