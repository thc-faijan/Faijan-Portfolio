"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Shield, Menu, X, Terminal, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Terminal", href: "#terminal" },
  { name: "Writeups", href: "/writeups" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = navLinks
        .filter((link) => link.href.startsWith("#"))
        .map((link) => link.href.substring(1));

      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cyber-bg/90 backdrop-blur-md border-b border-cyber-border py-3 shadow-card-glow"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group text-cyber-light font-mono font-bold text-lg tracking-wider"
          >
            <div className="w-9 h-9 rounded-lg bg-cyber-charcoal border border-cyber-cyan/30 flex items-center justify-center group-hover:border-cyber-cyan group-hover:shadow-cyan-glow transition-all duration-300">
              <Shield className="w-5 h-5 text-cyber-cyan group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-cyber-light group-hover:text-cyber-cyan transition-colors">
              {siteConfig.handle}
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"></span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isHash = link.href.startsWith("#");
              const sectionId = isHash ? link.href.substring(1) : "";
              const isActive = isHash && activeSection === sectionId;

              return isHash ? (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-medium transition-all rounded-md ${
                    isActive
                      ? "text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/30"
                      : "text-cyber-muted hover:text-cyber-light hover:bg-cyber-card"
                  }`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 text-sm font-medium text-cyber-muted hover:text-cyber-light hover:bg-cyber-card transition-all rounded-md flex items-center gap-1"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="relative group overflow-hidden rounded-lg p-[1px] font-mono text-xs font-semibold text-cyber-cyan"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/50 via-cyber-blue/50 to-cyber-cyan/50 rounded-lg group-hover:opacity-100 opacity-70 transition-opacity"></span>
              <span className="relative block px-4 py-2 bg-cyber-bg rounded-[7px] group-hover:bg-cyber-charcoal transition-colors flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyber-cyan" />
                Let's Talk
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-cyber-card border border-cyber-border text-cyber-muted hover:text-cyber-cyan focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cyber-charcoal/95 border-b border-cyber-border backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-3 animate-fadeIn">
          {navLinks.map((link) => {
            const isHash = link.href.startsWith("#");
            return isHash ? (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-cyber-light hover:text-cyber-cyan hover:bg-cyber-card/50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-cyber-light hover:text-cyber-cyan hover:bg-cyber-card/50 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-center py-2.5 px-4 bg-cyber-cyan text-cyber-bg font-mono font-bold text-sm rounded-lg hover:bg-cyber-cyan/90 transition-colors shadow-cyan-glow"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
