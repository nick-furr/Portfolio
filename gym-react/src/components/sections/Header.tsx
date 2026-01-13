"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#programs", label: "Programs" },
    { href: "#schedule", label: "Schedule" },
    { href: "#coaches", label: "Coaches" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[--color-border] bg-[--color-bg]/95 backdrop-blur-sm">
      <nav className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="#home"
          className="text-2xl font-bold tracking-wider text-[--color-text] transition-colors hover:text-[--color-primary]"
        >
          IRONCLAD
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative text-sm font-medium uppercase tracking-wider text-[--color-muted] transition-colors hover:text-[--color-primary]"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[--color-primary] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="#contact">
            <Button size="md">Free Trial</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-[--color-text] hover:text-[--color-primary] md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-[--color-border] bg-[--color-card] md:hidden">
          <ul className="flex flex-col space-y-1 p-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-md px-4 py-3 text-sm font-medium uppercase tracking-wider text-[--color-muted] transition-colors hover:bg-[--color-card-alt] hover:text-[--color-primary]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">Free Trial</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
