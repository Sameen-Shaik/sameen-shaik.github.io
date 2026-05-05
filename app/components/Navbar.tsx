"use client";

import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, FileDown } from "lucide-react";
// import { Menu, X, Github, Linkedin } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = navLinks.map(link => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500 ${
          scrolled ? "glass-strong" : "bg-transparent"
        }`}>
          {/* Logo */}
          <a href="#home" className="relative group">
            <span className="text-xl font-bold text-white tracking-tight">
              Sameen<span className="text-accent">Shaik</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-muted hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/Sameen-Shaik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-sameen-shaik-b937b43a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
            >
              <Linkedin size={18} />
            </a>

            {/* Resume Button */}
            <a
              href="/Resume%20-%20Sameen%20Shaik.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 text-muted hover:text-accent text-sm font-semibold rounded-lg hover:bg-white/5 transition-colors border border-white/10"
            >
              <FileDown size={16} />
              Resume
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-lg hover:bg-accent/20 transition-colors border border-accent/20"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 glass-strong rounded-xl p-4 animate-scale-in">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted hover:text-white hover:bg-white/5 transition-colors text-sm font-medium px-4 py-3 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
              {/* Resume Button */}
              <a
                href="/Resume%20-%20Sameen%20Shaik.pdf"
                download
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-muted hover:text-accent hover:bg-white/5 transition-colors text-sm font-medium rounded-lg border border-white/10"
                onClick={() => setIsOpen(false)}
              >
                <FileDown size={16} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="block w-full text-center px-4 py-3 bg-accent text-surface font-semibold rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
