import Container from '../components/Container';
export default function Hero() {
  return (
    <section className="min-h-screen bg-[#fff9f8] px-6 py-16 text-[#2d1f26]">
      <Container>
        <div className="flex flex-col justify-center gap-6">
          <p className="text-base font-medium text-[#d97c95]">Hi, I’m Anna </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Frontend / Full-Stack Developer based in Denmark
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-[#6e5a63]">
            I build modern web and mobile applications using React, React
            Native, TypeScript, and .NET — focusing on clean architecture,
            performance, and real user impact.
          </p>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <button className="rounded-full bg-[#efa6b8] px-6 py-3 font-medium text-white transition hover:opacity-90">
              View Projects
            </button>

            <button className="rounded-full border border-[#f1d9df] bg-white px-6 py-3 font-medium text-[#2d1f26] transition hover:bg-[#fff1f4]">
              Contact Me
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
