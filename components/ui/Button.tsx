import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "outline";
};

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const variantClass = variant === "primary" ? "btn-primary" : "btn-outline";
  return (
    <button className={`btn ${variantClass} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}