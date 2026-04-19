type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
}: SectionIntroProps) {
  return (
    <div className="flex max-w-3xl flex-col gap-3 sm:gap-4">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-dark sm:text-sm">
        {eyebrow}
      </p>

      <h2 className="text-xl sm:text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <p className="text-sm leading-6 sm:text-base sm:leading-7 text-text-soft sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  );
}
