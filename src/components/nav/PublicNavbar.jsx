"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GraduationCap, Menu, X, LogIn } from "lucide-react";

export default function PublicNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Dynamic glass effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Result Search", href: "/" },
    { name: "Merit List", href: "/merit-list" },
    { name: "Analytics", href: "/analytics" },
    { name: "Notices", href: "/notices" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:-translate-y-0.5">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 tracking-tight">
              EduPulse
            </span>
          </Link>

          {/* Desktop Navigation (Pill Style) */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex space-x-1 mr-6 bg-gray-200/50 backdrop-blur-md p-1.5 rounded-2xl border border-white/50">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-bold text-gray-600 rounded-xl hover:text-blue-700 hover:bg-white hover:shadow-sm transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Premium Dark Login Button */}
            <Link
              href="/login"
              className="group relative inline-flex items-center justify-center space-x-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)] hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <div className="relative flex items-center space-x-2">
                <LogIn className="h-4 w-4 text-gray-300 group-hover:text-white transition-colors" />
                <span>Teacher Login</span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-gray-100/80 backdrop-blur-sm text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-2xl transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-4 border-t border-gray-100">
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 w-full bg-gray-900 text-white px-4 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20 active:scale-95"
            >
              <LogIn className="h-5 w-5" />
              <span>Teacher Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
