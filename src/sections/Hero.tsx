import Container from '../components/Container';
import Button from '../components/Button';
export default function Hero() {
  return (
    <section className="min-h-screen bg-background px-6 py-16 text-text">
      <Container>
        <div className="flex flex-col justify-center gap-6">
          <p className="text-base font-medium text-primary-dark">
            Hi, I’m Anna{' '}
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Frontend / Full-Stack Developer based in Denmark
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-text-soft">
            I build modern web and mobile applications using React, React
            Native, TypeScript, and .NET — focusing on clean architecture,
            performance, and real user impact.
          </p>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Button href="#projects">View Projects</Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
