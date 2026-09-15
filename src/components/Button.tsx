import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  const variants = {
    primary: 'bg-[#f97316] hover:bg-[#ea6c0a] text-white focus-visible:ring-[#f97316]',
    secondary: 'bg-[#1e3a6e] hover:bg-[#142a52] text-white focus-visible:ring-[#1e3a6e]',
    outline:
      'border-2 border-[#1e3a6e] text-[#1e3a6e] hover:bg-[#1e3a6e] hover:text-white focus-visible:ring-[#1e3a6e]',
    ghost: 'text-[#1e3a6e] hover:bg-blue-50 focus-visible:ring-[#1e3a6e]',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus-visible:ring-red-600',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
