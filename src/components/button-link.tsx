import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "accent";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  solid: "bg-fg text-ink hover:bg-accent hover:text-ink transition-colors duration-200",
  outline: "border border-fg/28 hover:border-fg hover:text-fg transition-colors duration-200",
  accent: "bg-accent text-ink hover:bg-fg hover:text-ink transition-colors duration-200",
};

const sizes: Record<Size, string> = {
  md: "h-[46px] text-[15px]",
  lg: "h-[50px] text-base",
};

const defaultPadding: Record<Size, string> = {
  md: "px-[18px]",
  lg: "px-5",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  download?: boolean;
  /** Horizontal padding class; defaults per size. */
  padding?: string;
  className?: string;
  id?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "outline",
  size = "md",
  external = false,
  download = false,
  padding,
  className = "",
  id,
}: Props) {
  return (
    <a
      id={id}
      href={href}
      download={download || undefined}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center gap-2.5 ${sizes[size]} ${padding ?? defaultPadding[size]} ${variants[variant]} ${className}`}
    >
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
