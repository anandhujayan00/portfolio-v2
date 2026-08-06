import { cn } from "@/lib/utils";
import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "primary" | "secondary" | "accent" | "default";
}

const Heading = ({
  children,
  className,
  as: Component = "h2",
  variant = "default",
}: HeadingProps) => {
  const variants = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    default: "text-foreground",
  };

  return (
    <Component
      className={cn(
        "font-poppins font-bold tracking-tight",
        Component === "h1" && "text-4xl md:text-6xl lg:text-7xl",
        Component === "h2" && "text-3xl md:text-5xl",
        Component === "h3" && "text-2xl md:text-3xl",
        variants[variant],
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Heading;
