"use client";

import { useEffect, useRef, useState } from "react";
import { Brain, Database, Code2, Terminal, Zap, Target, Layers } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "ML & AI",
    description: "Predictive modeling, deep learning, and feature engineering with proven results.",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Building robust pipelines and processing systems for large-scale datasets.",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Code2,
    title: "Full-Stack",
    description: "End-to-end system development from backend APIs to frontend interfaces.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Terminal,
    title: "Production",
    description: "Deploying scalable ML solutions with Docker, REST APIs, and cloud infrastructure.",
    color: "from-purple-500/20 to-pink-500/20",
  },
];

export default function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <p className="text-accent text-sm font-semibold tracking-wider uppercase">About Me</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Building intelligent<br />
            <span className="text-gradient">systems at scale</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Bio Card - Spans 2 columns */}
          <div className={`lg:col-span-2 glass rounded-2xl p-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Professional Focus</h3>
                <p className="text-muted text-sm">Data Scientist & Machine Learning Engineer</p>
              </div>
            </div>
            
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I&apos;m a <span className="text-white font-medium">Data Scientist and Machine Learning Engineer</span> with hands-on experience building end-to-end ML and AI systems. My expertise spans the entire pipeline—from data preprocessing and feature engineering to model deployment and API integration.
              </p>
              <p>
                I specialize in solving real-world problems using scalable architectures, with strong experience in predictive modeling, deep learning, and retrieval-augmented generation (RAG). I&apos;m known for writing clean, production-ready code and rapidly translating complex requirements into practical solutions.
              </p>
              <p>
                Currently pursuing a dual degree in Computer Science at <span className="text-white font-medium">Blekinge Institute of Technology (BTH)</span> in Sweden, combining academic knowledge with practical industry skills.
              </p>
            </div>

            {/* Quick Tags */}
            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
              {["Python", "PyTorch", "Django", "PostgreSQL", "Docker"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs bg-white/5 text-muted-light rounded-full border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Column */}
          <div className="space-y-6">
            {/* Experience Stat */}
            <div className={`glass rounded-2xl p-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted text-sm">Experience</span>
                <Zap className="w-4 h-4 text-accent" />
              </div>
              <p className="text-4xl font-bold text-white">4<span className="text-accent">+</span></p>
              <p className="text-muted text-sm mt-1">Years</p>
            </div>

            {/* Projects Stat */}
            <div className={`glass rounded-2xl p-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted text-sm">Projects</span>
                <Layers className="w-4 h-4 text-accent" />
              </div>
              <p className="text-4xl font-bold text-white">10<span className="text-accent">+</span></p>
              <p className="text-muted text-sm mt-1">Completed</p>
            </div>

            {/* CTA Card */}
            <a 
              href="#projects" 
              className={`block glass rounded-2xl p-6 hover:bg-surface-hover transition-all duration-700 delay-400 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <p className="text-white font-semibold mb-1 group-hover:text-accent transition-colors">View My Work</p>
              <p className="text-muted text-sm">Explore projects &rarr;</p>
            </a>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`glass rounded-xl p-6 card-hover group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 5) * 100}ms` }}
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="text-white" size={20} />
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
