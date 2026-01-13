"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">
              🍽️ <span className="text-orange-600">Cuisine</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-orange-600"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-orange-600"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-orange-600"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-orange-600"
            >
              Reservations
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Button
              size="sm"
              onClick={() => scrollToSection("booking")}
              className="hidden md:inline-flex"
            >
              Book Table
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`h-0.5 w-6 bg-gray-900 transition-all ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-gray-900 transition-all ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-gray-900 transition-all ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-sm font-medium text-gray-700"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-sm font-medium text-gray-700"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-left text-sm font-medium text-gray-700"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("booking")}
                className="text-left text-sm font-medium text-gray-700"
              >
                Reservations
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
