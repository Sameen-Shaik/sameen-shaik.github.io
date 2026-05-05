"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, Database, Brain, Server, Layout, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "SQL", "Java", "C"],
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    title: "Data Science & ML",
    icon: Brain,
    skills: ["Pandas", "NumPy", "Scikit-learn", "XGBoost", "PyTorch", "Feature Engineering"],
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Generative AI & LLMs",
    icon: Database,
    skills: ["RAG", "LangChain", "Prompt Engineering", "Chroma", "Pinecone", "Embeddings"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["Django", "Flask", "FastAPI", "REST APIs"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Visualization & UI",
    icon: Layout,
    skills: ["Matplotlib", "Seaborn", "Streamlit", "Gradio"],
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Tools & Infrastructure",
    icon: GitBranch,
    skills: ["Git", "Docker", "Linux", "PostgreSQL", "SQLite", "Pytest"],
    color: "from-orange-500/20 to-amber-500/20",
  },
];

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <p className="text-accent text-sm font-semibold tracking-wider uppercase">Technical Arsenal</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Tools &<br />
              <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-muted max-w-md">
              A comprehensive toolkit built through hands-on project experience and continuous learning in ML/AI.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group relative glass rounded-2xl p-6 card-hover overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium bg-white/5 text-muted-light rounded-lg border border-white/5 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Overview */}
        <div className={`mt-12 glass rounded-2xl p-8 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "4+", label: "Languages", icon: "01" },
              { value: "20+", label: "Frameworks", icon: "02" },
              { value: "15+", label: "Tools & Libs", icon: "03" },
              { value: "3+", label: "Cloud Platforms", icon: "04" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <span className="text-xs text-muted-dark mb-2 block">{stat.icon}</span>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
