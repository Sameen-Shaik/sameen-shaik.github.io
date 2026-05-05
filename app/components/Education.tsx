"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Award, Calendar, MapPin, ArrowUpRight } from "lucide-react";

const education = [
  {
    degree: "B.S. in Computer Science (Dual Degree)",
    school: "Blekinge Institute of Technology (BTH)",
    location: "Karlskrona, Sweden",
    period: "2025 -- June 2026",
    description: "Advanced studies in computer science with focus on AI and ML systems.",
  },
  {
    degree: "B.Tech in Computer Science",
    school: "Jawaharlal Nehru Technological University (JNTU)",
    location: "India",
    period: "2022 -- 2025",
    description: "Foundation in computer science fundamentals, programming, and software engineering.",
  },
];

const certifications = [
  {
    title: "SQL for Data Science",
    provider: "IBM / edX",
    link: "https://courses.edx.org/certificates/80dfe50c55814fe5a3cb96ce31d5e2f5",
  },
  {
    title: "Introduction to Cloud Computing",
    provider: "IBM / edX",
    link: "https://courses.edx.org/certificates/91b1b81eea22494eb633251cea54643e",
  },
];

export default function Education() {
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
    <section id="education" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <p className="text-accent text-sm font-semibold tracking-wider uppercase">Background</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Education &<br />
            <span className="text-gradient">Credentials</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              Education
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-5 top-12 bottom-0 w-px bg-gradient-to-b from-accent/50 to-transparent" />
              
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className={`relative pl-16 pb-8 last:pb-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-surface-card border border-accent/30 flex items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                  
                  <div className="glass rounded-2xl p-6 card-hover">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-accent font-medium mb-2">{edu.school}</p>
                    <div className="flex items-center gap-2 text-sm text-muted mb-3">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                    <p className="text-muted text-sm">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-500" />
              </div>
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group glass rounded-xl p-5 card-hover flex items-start gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="text-amber-400" size={22} />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-white font-semibold mb-1 group-hover:text-accent transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-muted text-sm">{cert.provider}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>

            {/* Learning Card */}
            <div className={`glass rounded-xl p-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h4 className="text-white font-semibold mb-3">Always Learning</h4>
              <p className="text-muted text-sm mb-4">
                Expanding knowledge through courses, projects, and hands-on experimentation.
              </p>
              <div className="flex flex-wrap gap-2">
                {["ML", "Deep Learning", "LLMs", "MLOps"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs bg-white/5 text-muted-light rounded-full border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
