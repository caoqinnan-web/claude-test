import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 ease-out active:scale-95";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-coral text-white hover:bg-coral/90 hover:shadow-lg hover:shadow-coral/30 hover:-translate-y-0.5",
    secondary:
      "bg-accent-blue text-white hover:bg-accent-blue/90 hover:shadow-lg hover:shadow-accent-blue/30 hover:-translate-y-0.5",
    outline:
      "border-2 border-deep-text dark:border-white text-deep-text dark:text-white hover:bg-deep-text hover:text-white dark:hover:bg-white dark:hover:text-deep-text hover:shadow-lg",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
