"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/section"
import { Badge } from "@/components/badge"
import { Database, Brain, BarChart3, Globe, Cpu, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Data Wrangling & Analytics",
    icon: Database,
    skills: [
      { name: "Python", status: "proficient" },
      { name: "SQL", status: "proficient" },
      { name: "Pandas", status: "proficient" },
      { name: "NumPy", status: "proficient" },
    ],
    extras: ["Data cleaning & transformation using notebooks", "Exploratory Data Analysis (EDA)"]
  },
  {
    title: "Machine Learning & Applied AI",
    icon: Brain,
    skills: [
      { name: "Scikit-Learn", status: "proficient" },
    ],
    extras: ["Supervised & basic Unsupervised ML", "Model evaluation & feature engineering"],
    learning: ["PyTorch"]
  },
  {
    title: "Visualization & Business Intelligence",
    icon: BarChart3,
    skills: [
      { name: "Matplotlib", status: "proficient" },
      { name: "Seaborn", status: "proficient" },
    ],
    learning: ["Tableau", "PowerBI"]
  },
  {
    title: "Web & Product Development",
    icon: Globe,
    skills: [
      { name: "Flask", status: "proficient" },
      { name: "Django", status: "proficient" },
      { name: "Streamlit", status: "proficient" },
    ],
    learning: ["Taipy (Data App Frameworks)"]
  },
  {
    title: "Computer Science Foundations",
    icon: Cpu,
    skills: [
      { name: "Data Structures & Algorithms", status: "proficient" },
      { name: "Object-Oriented Programming (OOP)", status: "proficient" },
      { name: "Databases (SQL)", status: "proficient" },
      { name: "Operating Systems (basics)", status: "proficient" },
    ]
  },
  {
    title: "Dev Tools & Deployment",
    icon: Wrench,
    skills: [
      { name: "Git", status: "proficient" },
      { name: "GitHub", status: "proficient" },
      { name: "VS Code", status: "proficient" },
      { name: "Jupyter", status: "proficient" },
      { name: "Virtual Environments", status: "proficient" },
      { name: "Vercel / Static Hosts", status: "proficient" },
      { name: "Linux (Basics)", status: "proficient" },
    ]
  }
]

const skillLevels = [
  {
    level: "Proficient",
    color: "bg-emerald-500",
    skills: ["Python", "SQL", "Pandas", "NumPy", "Git", "Jupyter"]
  },
  {
    level: "Intermediate",
    color: "bg-amber-500",
    skills: ["Matplotlib", "Seaborn", "Flask", "Django", "Streamlit"]
  },
  {
    level: "Learning",
    color: "bg-blue-500",
    skills: ["PyTorch", "Tableau", "PowerBI", "Taipy"]
  }
]

export function Skills() {
  return (
    <Section id="skills" spacing="lg">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4">Technical Toolkit</h2>
        <p className="text-muted-foreground">
            From data to deployment with Python.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 glass rounded-2xl border flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <category.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{category.title}</h3>
            </div>
            
            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill.name} className="text-sm flex items-center gap-1.5">
                    <span className="text-emerald-500">✔</span> {skill.name}
                  </span>
                ))}
              </div>
              
              {category.extras && (
                <div className="space-y-1">
                  {category.extras.map((extra) => (
                    <p key={extra} className="text-sm text-muted-foreground flex items-center gap-1.5">
                      <span className="text-emerald-500">✔</span> {extra}
                    </p>
                  ))}
                </div>
              )}
              
              {category.learning && category.learning.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.learning.map((skill) => (
                    <span key={skill} className="text-sm flex items-center gap-1.5 text-muted-foreground">
                      <span className="text-amber-500">🟨</span> Learning: {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-8 glass rounded-2xl border"
      >
        <h3 className="text-xl font-bold mb-6 text-center">Skill Levels (Quick View)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillLevels.map((group) => (
            <div key={group.level} className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className={`h-3 w-3 rounded-full ${group.color}`} />
                <span className="font-semibold">{group.level}</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
