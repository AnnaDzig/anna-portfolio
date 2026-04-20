import { useEffect, useState } from 'react';

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
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="min-w-0 truncate text-base font-semibold tracking-wide text-text sm:text-lg"
        >
          Anna Dzhyhota
        </a>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative z-[70] flex h-12 w-12 items-center justify-center rounded-full bg-surface md:hidden"
        >
          <span
            className={`absolute h-0.5 w-6 rounded-full bg-text transition-all duration-300 ${
              isOpen ? 'rotate-45' : '-translate-y-2'
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 rounded-full bg-text transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 rounded-full bg-text transition-all duration-300 ${
              isOpen ? '-rotate-45' : 'translate-y-2'
            }`}
          />
        </button>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-text-soft transition hover:text-primary-dark"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="md:hidden">
        <div
          className={`pointer-events-none fixed right-4 top-4 z-[55] h-12 w-12 rounded-full bg-primary transition-transform duration-500 ease-out sm:right-6 ${
            isOpen ? 'scale-[90]' : 'scale-100'
          }`}
        />

        <div
          className={`fixed inset-0 z-[60] flex items-center justify-center transition-opacity duration-300 md:hidden ${
            isOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }`}
        >
          <nav>
            <ul
              className={`flex flex-col items-center gap-8 transition-all duration-500 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-3xl font-semibold text-white transition hover:opacity-80"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
