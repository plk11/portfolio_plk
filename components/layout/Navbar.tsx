"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { personalInfo } from "@/data/portfolio";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200",
        isScrolled
          ? "border-border bg-background/80 backdrop-blur-sm"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="section-container flex h-16 items-center justify-between">
        <Link href="#" className="text-base font-semibold tracking-tight text-foreground">
          {personalInfo.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                activeId === item.id ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button href="#contact" size="sm">
            Let&apos;s Work Together
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-border bg-background md:hidden">
          <ul className="section-container flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-base font-medium",
                    activeId === item.id ? "bg-muted text-foreground" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button href="#contact" className="w-full" onClick={() => setIsMenuOpen(false)}>
                Let&apos;s Work Together
              </Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
