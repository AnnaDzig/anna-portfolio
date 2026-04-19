import Container from '../components/Container';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-24 text-text">
      <Container>
        <div className="flex max-w-3xl flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-dark">
            About Me
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            A developer who enjoys building thoughtful, modern digital products
          </h2>

          <p className="text-lg leading-8 text-text-soft">
            My path into software development started from a very different
            field — land and cadastral systems — where I worked with structured
            data, accuracy, and complex information. Over time, that analytical
            mindset naturally led me into programming.
          </p>

          <p className="text-lg leading-8 text-text-soft">
            Since then, I’ve built experience across web and mobile development,
            working with technologies such as React, React Native, TypeScript,
            Next.js, Node.js, and .NET. I enjoy creating applications that are
            not only functional, but also intuitive, maintainable, and
            thoughtfully designed.
          </p>
        </div>
      </Container>
    </section>
  );
}
