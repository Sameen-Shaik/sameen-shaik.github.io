"use client";

import { useEffect, useState } from "react";
import { ArrowDownRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden noise-bg"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className={`space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-accent/20">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-light">Available for opportunities</span>
            </div>

            {/* Name with gradient */}
            <div className="space-y-2">
              <p className="text-muted text-lg">Hello, I&apos;m</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block text-white">Shaik</span>
                <span className="block text-gradient-animate">Muhammad Sameen</span>
              </h1>
            </div>

            {/* Title */}
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-accent" />
              <p className="text-xl md:text-2xl text-muted-light">
                Data Scientist & ML Engineer
              </p>
            </div>

            {/* Description */}
            <p className="text-muted text-lg max-w-lg leading-relaxed">
              Building end-to-end ML and AI systems—from data preprocessing to model deployment. 
              Focused on solving real-world problems with scalable architectures.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-accent text-surface font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:glow-accent"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Work
                  <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                </span>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>

            {/* Stats Row */}
            <div className="flex gap-8 pt-6 border-t border-white/5">
              <div>
                <p className="text-2xl font-bold text-white">10 Months+</p>
                <p className="text-sm text-muted">of Consistent ML Practice</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-sm text-muted">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">6+</p>
                <p className="text-sm text-muted">ML Models</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className={`hidden lg:block relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Abstract Code Visualization */}
            <div className="relative">
              {/* Main Circle */}
              <div className="w-80 h-80 mx-auto relative">
                {/* Rotating Ring */}
                <div className="absolute inset-0 border border-accent/20 rounded-full animate-spin-slow" />
                <div className="absolute inset-4 border border-dashed border-white/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
                
                {/* Inner Content */}
                <div className="absolute inset-8 glass-strong rounded-full flex items-center justify-center glow-accent">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gradient mb-2">ML</div>
                    <div className="text-sm text-muted">Engineer</div>
                  </div>
                </div>

                {/* Orbiting Dots */}
                <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '15s' }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-3 h-3 bg-accent rounded-full glow-accent" />
                </div>
                <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-2 h-2 bg-amber-400 rounded-full" />
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-8 top-1/4 glass rounded-lg p-3 animate-float" style={{ animationDelay: '0s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center">
                    <span className="text-accent text-xs font-bold">Py</span>
                  </div>
                  <span className="text-sm text-muted-light">Python</span>
                </div>
              </div>

              <div className="absolute -right-4 top-1/3 glass rounded-lg p-3 animate-float" style={{ animationDelay: '-2s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center">
                    <span className="text-accent text-xs font-bold">DL</span>
                  </div>
                  <span className="text-sm text-muted-light">PyTorch</span>
                </div>
              </div>

              <div className="absolute left-0 bottom-1/4 glass rounded-lg p-3 animate-float" style={{ animationDelay: '-4s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center">
                    <span className="text-accent text-xs font-bold">AI</span>
                  </div>
                  <span className="text-sm text-muted-light">LangChain</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Social Links */}
        <div className={`flex items-center gap-6 mt-16 pt-8 border-t border-white/5 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-sm text-muted">Connect:</span>
          <a
            href="https://github.com/Sameen-Shaik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-sameen-shaik-b937b43a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:sameenshaik17@outlook.com"
            className="text-muted hover:text-accent transition-colors"
          >
            <Mail size={20} />
          </a>
          <span className="ml-auto text-sm text-muted flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Karlskrona, Sweden
          </span>
        </div>
      </div>
    </section>
  );
}
