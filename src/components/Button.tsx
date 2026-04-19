type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
};

export default function Button({
  children,
  variant = 'primary',
  href,
}: ButtonProps) {
  const baseClasses = 'rounded-full px-6 py-3 font-medium transition';
  const variants = {
    primary: 'bg-primary text-white hover:opacity-90',
    secondary:
      'border border-border bg-surface text-text hover:bg-surface-soft',
  };

  const className = `${baseClasses} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}
