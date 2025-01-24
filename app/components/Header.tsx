"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glassmorphism shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            BIN Lookup
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-6 text-gray-600">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-primary">
                API Pricing
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/examples" className="hover:text-primary">
                Examples
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-primary focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="mt-4 space-y-4 md:hidden text-gray-600">
            <li>
              <Link href="/" className="block hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="block hover:text-primary">
                API Pricing
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block hover:text-primary">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/examples" className="block hover:text-primary">
                Examples
              </Link>
            </li>
            <li>
              <Link href="/about" className="block hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
