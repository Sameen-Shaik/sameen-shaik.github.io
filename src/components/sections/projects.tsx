"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/section"
import { Badge } from "@/components/badge"
import { Button } from "@/components/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Personal Expense Tracker",
    problem: "It's easy to lose track of small expenses throughout the day.",
    value: "Keeps all spending in one place and shows where your money is actually going.",
    stack: ["Python", "Pandas", "Streamlit", "Plotly"],
    tags: ["Data Analytics", "Web Dev"],
    github: "https://github.com/Sameen-Shaik/Simple-Personal-Expense-Tracker",
    demo: "https://simple-personal-expense-tracker.streamlit.app"
  },
  {
    title: "Attendance Management System",
    problem: "Manually checking and keeping track of attendance can be confusing and inefficient for students and faculty.",
    value: "Allows faculty to mark attendance digitally and students to check their attendance in real time, improving transparency and convenience.",
    stack: ["Django", "Python", "PostgreSQL", "HTML","CSS"],
    tags: ["Web App", "Full Stack", "Data Analytics"],
    github: "https://github.com/Sameen-Shaik/Attendance-Management-System-Django-",
    demo: null
  },
  {
    title: "Neural Vision: Object Detection",
    problem: "Real-time identification of items for automated inventory management.",
    value: "Increases warehouse efficiency by 40% through automated scanning.",
    stack: ["Python", "OpenCV", "TensorFlow", "FastAPI"],
    tags: ["Machine Learning", "Computer Vision", "AI"],
    github: "https://github.com/sameenshaik/neural-vision",
    demo: null
  }
]

export function Projects() {
  return (
    <Section id="projects" spacing="lg" className="bg-muted/30">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
          <p className="text-muted-foreground">
            A selection of projects that demonstrate my ability to solve problems 
            using data and software.
          </p>
        </div>
        <a href="https://github.com/Sameen-Shaik" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">View All on GitHub</Button>
          </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group flex flex-col bg-background rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-video bg-muted relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground opacity-20 group-hover:opacity-40 transition-opacity">
                {/* Project Image Placeholder */}
                <span className="text-4xl font-bold">{project.title.charAt(0)}</span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-[10px] uppercase tracking-tighter">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <div className="space-y-3 mb-6 flex-1">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Problem:</span> {project.problem}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Value:</span> {project.value}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded">
                    {tech}
                  </span>
                ))}
              </div>

<div className="flex items-center gap-4 mt-auto pt-6 border-t">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="ghost" className="gap-2 p-0 h-auto hover:bg-transparent hover:text-primary">
                      <Github className="h-4 w-4" /> Code
                    </Button>
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="ml-auto">
                      <Button size="sm" variant="ghost" className="gap-2 p-0 h-auto hover:bg-transparent hover:text-primary">
                        Live Demo <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
