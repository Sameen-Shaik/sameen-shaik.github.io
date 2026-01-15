"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/section"

export function Education() {
  return (
    <Section id="education" spacing="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My academic journey spanning India and Sweden
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 glass rounded-xl border"
        >
          <div className="text-sm text-primary font-medium mb-2">2022 - 2025</div>
          <h3 className="text-xl font-semibold mb-2">B.Tech Computer Science</h3>
          <p className="text-muted-foreground mb-4">Jawaharlal Nehru Technological University Anantapur</p>
          <p className="text-sm text-muted-foreground">
            Foundation in computer science fundamentals, data structures, algorithms, and software engineering principles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 glass rounded-xl border"
        >
          <div className="text-sm text-primary font-medium mb-2">2025 - 2026 (expected)</div>
          <h3 className="text-xl font-semibold mb-2">BS Computer Science</h3>
          <p className="text-muted-foreground mb-4">Bleking Institute of Technology</p>
          <p className="text-sm text-muted-foreground">
            Advanced coursework in AI, machine learning, and gaining international exposure in technology and innovation.
          </p>
        </motion.div>
      </div>
    </Section>
  )
}
