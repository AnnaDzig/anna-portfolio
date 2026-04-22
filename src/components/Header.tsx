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
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border/80 bg-surface/80 px-4 py-3 shadow-[0_10px_40px_rgba(45,31,38,0.08)] backdrop-blur-xl md:px-6">
        <a
          href="#hero"
          className="min-w-0 truncate text-sm font-semibold uppercase tracking-[0.2em] text-text"
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
            className="hidden md:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary-strong"
          >
            Let’s talk
          </a>

          {!isOpen && (
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-expanded={false}
              aria-label="Open menu"
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-surface md:hidden"
            >
              <span className="absolute h-0.5 w-5 -translate-y-1.5 rounded-full bg-text transition-all duration-300" />
              <span className="absolute h-0.5 w-5 rounded-full bg-text transition-all duration-300" />
              <span className="absolute h-0.5 w-5 translate-y-1.5 rounded-full bg-text transition-all duration-300" />
            </button>
          )}
        </div>
      </div>

      <div className="md:hidden">
        <div
          className={`fixed inset-0 z-[80] transition-opacity duration-500 ${
            isOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }`}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`absolute right-4 top-4 h-11 w-11 rounded-full bg-primary transition-transform duration-[1400ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
                isOpen ? 'scale-[180]' : 'scale-0'
              }`}
            />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="absolute right-4 top-4 z-[100] flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm"
          >
            <span className="absolute h-0.5 w-5 rotate-45 rounded-full bg-white" />
            <span className="absolute h-0.5 w-5 -rotate-45 rounded-full bg-white" />
          </button>

          <div className="relative z-[90] flex min-h-screen items-center justify-center px-6">
            <nav>
              <ul className="flex flex-col items-center gap-6">
                {navLinks.map((link, index) => (
                  <li
                    key={link.href}
                    className={`transition-all duration-500 ${
                      isOpen
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-6 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isOpen ? `${index * 90 + 260}ms` : '0ms',
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className="text-3xl font-semibold text-white transition hover:opacity-80"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}

                <li
                  className={`mt-4 transition-all duration-500 ${
                    isOpen
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-6 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isOpen
                      ? `${navLinks.length * 90 + 320}ms`
                      : '0ms',
                  }}
                >
                  <a
                    href="#contact"
                    onClick={handleLinkClick}
                    className="inline-flex rounded-full border border-white/20 bg-white/15 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                  >
                    Let’s talk
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}