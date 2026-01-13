import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden cursor-pointer";

    const variants = {
      primary:
        "bg-[--color-primary] text-black hover:bg-[--color-primary-dark] focus-visible:ring-[--color-primary] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:rounded-full before:bg-white/10 before:transition-all before:duration-600 before:-translate-x-1/2 before:-translate-y-1/2 hover:before:w-[300px] hover:before:h-[300px] active:scale-95",
      secondary:
        "bg-[--color-card] text-[--color-text] hover:bg-[--color-card-alt] border border-[--color-border] focus-visible:ring-[--color-text]",
      outline:
        "border border-[--color-border] text-[--color-text] hover:border-[--color-primary] hover:text-[--color-primary] focus-visible:ring-[--color-primary]",
      ghost:
        "text-[--color-text] hover:text-[--color-primary] after:content-['→'] after:transition-transform after:duration-200 hover:after:translate-x-1",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
