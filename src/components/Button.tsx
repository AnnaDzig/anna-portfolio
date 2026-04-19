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
    primary: 'bg-[#efa6b8] text-white hover:opacity-90',
    secondary:
      'border border-[#f1d9df] bg-white text-[#2d1f26] hover:bg-[#fff1f4]',
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
