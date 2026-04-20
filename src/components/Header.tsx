import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tech', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border/80 bg-white/80 px-4 py-3 shadow-[0_10px_40px_rgba(45,31,38,0.08)] backdrop-blur-xl md:px-6">
        <a
          href="#hero"
          className="text-sm font-semibold tracking-[0.2em] text-text uppercase"
        >
          Anna Dzhyhota
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-text-soft transition hover:bg-surface-soft hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary-dark"
  >
            Let’s talk
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 rounded bg-text transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`h-0.5 w-5 rounded bg-text transition ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-0.5 w-5 rounded bg-text transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#fff9f8]/95 backdrop-blur-xl md:hidden">
          <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-2xl font-semibold text-text transition hover:text-primary-dark"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-4 inline-flex rounded-full bg-primary px-6 py-3 text-base font-semibold text-white"
            >
              Contact me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}