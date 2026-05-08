type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};
export default function Button({
  children,
  variant = 'primary',
  href,
  target,
  rel,
}: ButtonProps) {
  const baseClasses =
    'inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition sm:w-auto sm:px-6';

  const variants = {
    primary: 'bg-primary text-white hover:opacity-90',
    secondary:
      'border border-border bg-surface text-text hover:bg-surface-soft',
  };

  const className = `${baseClasses} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={className}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}
