import Container from '../components/Container';
import SectionIntro from '../components/SectionIntro';

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24 text-text"
    >
      <Container>
        <div className="flex max-w-3xl flex-col gap-6">
          <div className="flex max-w-3xl flex-col gap-6">
            <SectionIntro
              eyebrow="About Me"
              title="A developer who enjoys building thoughtful, modern digital products"
              description="My path into software development started from a very different field — land and cadastral systems — where I worked with structured data, accuracy, and complex information. Over time, that analytical mindset naturally led me into programming."
            />

            <p className="text-sm leading-6 sm:text-base sm:leading-7 text-text-soft">
              Since then, I’ve built experience across web and mobile
              development, working with technologies such as React, React
              Native, TypeScript, Next.js, Node.js, and .NET. I enjoy creating
              applications that are not only functional, but also intuitive,
              maintainable, and thoughtfully designed.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
