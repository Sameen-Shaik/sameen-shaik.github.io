"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github, Database, BarChart3, Cpu, Bot, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Attendance Management System",
    description: "A full-stack web application with role-based authentication supporting faculty and students with separate dashboards, real-time attendance tracking, and comprehensive analytics.",
    tech: ["Django", "PostgreSQL", "Python"],
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
    github: "https://github.com/Sameen-Shaik/Attendance-Management-System-Django",
    metric: "Real-time",
    metricLabel: "Analytics",
  },
  {
    title: "Bike Availability Forecasting",
    description: "Regression models on 163K+ records to predict bike availability using real-world time-series data. XGBoost achieved MAE 4.81, R² 0.61.",
    tech: ["XGBoost", "Scikit-learn", "Pandas"],
    icon: BarChart3,
    color: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    github: "https://github.com/Sameen-Shaik/Dubin-Bikes",
    metric: "163K+",
    metricLabel: "Records",
  },
  {
    title: "PCB Defect Detection",
    description: "Deep learning models (CNN + YOLOv8) to detect 6 defect types with up to 97% accuracy. Includes full pipeline with Flask API deployment.",
    tech: ["PyTorch", "YOLOv8", "Flask"],
    icon: Cpu,
    color: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-500/10 to-purple-500/10",
    github: "https://github.com/Sameen-Shaik/PCB-Defect-detection-using-CNN",
    metric: "97%",
    metricLabel: "Accuracy",
  },
  {
    title: "RAG-Powered Titanic Chatbot",
    description: "Retrieval-augmented chatbot enabling natural language querying of datasets using dual LLM architecture for enhanced reliability.",
    tech: ["LangChain", "LLMs", "RAG"],
    icon: Bot,
    color: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-500/10 to-orange-500/10",
    github: "https://github.com/Sameen-Shaik/rag-powered-chatbot",
    metric: "Dual LLM",
    metricLabel: "Validation",
  }
];

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <p className="text-accent text-sm font-semibold tracking-wider uppercase">Featured Work</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Selected<br />
              <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <a 
            href="https://github.com/Sameen-Shaik"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-muted hover:text-accent transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">View all on GitHub</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative glass rounded-2xl p-8 card-hover overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                    <project.icon className="text-white" size={28} />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">{project.metric}</p>
                      <p className="text-xs text-muted uppercase tracking-wider">{project.metricLabel}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all">
                      <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-white/5 text-muted-light rounded-lg border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://github.com/Sameen-Shaik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-surface font-semibold rounded-xl hover:glow-accent transition-all duration-300 group"
          >
            <Github className="w-5 h-5" />
            Explore All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
