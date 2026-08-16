"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn("reveal", isInView && "is-visible", className)}
      style={isInView && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
