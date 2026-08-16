import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200";

const variantClasses: Record<Variant, string> = {
  primary: "bg-accent text-accent-foreground hover:opacity-90",
  secondary: "border border-border text-foreground hover:bg-muted",
  ghost: "text-foreground hover:bg-muted",
};

const sizeClasses: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  sm: "h-9 px-4 text-sm",
};

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);
  const isExternal = /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
