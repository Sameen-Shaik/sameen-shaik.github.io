"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, MapPin, Phone, ArrowUpRight, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sameenshaik17@outlook.com",
    href: "mailto:sameenshaik17@outlook.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+46 793254110",
    href: "tel:+46793254110",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Karlskrona, Sweden",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "Sameen-Shaik",
    href: "https://github.com/Sameen-Shaik",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/muhammad-sameen-shaik-b937b43a2/",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <p className="text-accent text-sm font-semibold tracking-wider uppercase">Get In Touch</p>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Let&apos;s Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Open to opportunities in Data Science, Machine Learning, and AI Engineering roles
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Cards */}
          <div className={`space-y-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
              <Send className="w-5 h-5 text-accent" />
              Contact Info
            </h3>
            
            {contactInfo.map((item, index) => (
              <div
                key={item.label}
                className="group glass rounded-xl p-5 flex items-center gap-4 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="text-accent" size={22} />
                </div>
                <div className="flex-grow">
                  <p className="text-xs text-muted uppercase tracking-wider mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white hover:text-accent transition-colors font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium">{item.value}</p>
                  )}
                </div>
                {item.href && (
                  <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
                )}
              </div>
            ))}

            {/* Status Card */}
            <div className="glass rounded-xl p-5 mt-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-white font-medium">Available for work</span>
              </div>
              <p className="text-muted text-sm">
                Currently open for full-time positions and freelance projects in ML/AI.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className={`space-y-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
              <Github className="w-5 h-5 text-accent" />
              Online Presence
            </h3>
            
            {socialLinks.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass rounded-xl p-5 flex items-center gap-4 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="text-accent" size={22} />
                </div>
                <div className="flex-grow">
                  <p className="text-xs text-muted uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-white font-medium group-hover:text-accent transition-colors">
                    {item.value}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
              </a>
            ))}

            {/* Quick CTA */}
            <a 
              href="mailto:sameenshaik17@outlook.com"
              className="block w-full mt-6 py-4 bg-accent text-surface font-semibold rounded-xl text-center hover:glow-accent transition-all duration-300"
            >
              Send Me an Email
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">Sameen</span>
              <span className="text-accent">.</span>
            </div>
            <p className="text-muted text-sm">
              © {new Date().getFullYear()} Shaik Mahammed Sameen. Crafted with care.
            </p>
            <div className="flex items-center gap-4">
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
              <a
                href="mailto:sameenshaik17@outlook.com"
                className="text-muted hover:text-accent transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
