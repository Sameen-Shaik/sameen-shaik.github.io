"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/section"

export function About() {
  return (
    <Section id="about" spacing="lg" className="bg-muted/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative aspect-square max-w-md mx-auto md:mx-0"
        >
          <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-6" />
          <div className="absolute inset-0 bg-primary/10 rounded-2xl rotate-3" />
          <div className="relative h-full w-full bg-muted rounded-2xl overflow-hidden border">
            {/* Placeholder for portrait */}
            <div className="flex items-center justify-center h-full text-muted-foreground italic">
            {/* Placeholder for alt */}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">My Journey</h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              I am a dedicated Computer Science student with a unique academic trajectory, 
              currently pursuing a dual degree program that bridges the educational excellence 
              of <span className="text-foreground font-medium">India</span> and <span className="text-foreground font-medium">Sweden</span>.
            </p>
            <p>
              My passion lies at the intersection of <span className="text-foreground font-medium">Data Science</span> and <span className="text-foreground font-medium">Software Engineering</span>. 
              I believe that the most powerful solutions are built by combining robust engineering with 
              data-driven insights.
            </p>
            <p>
              With 3 years of foundation in India and my final year in Sweden, I am developing 
              a global perspective on technology and problem-solving. My focus is on 
              applied AI, scalable web applications, and creating products that deliver 
              tangible value.
            </p>
            <p>
              Beyond the classroom, I'm an explorer of ventures—specifically interested in 
              leveraging tech to facilitate cross-border trade and collaboration.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 glass rounded-lg border">
              <span className="block text-2xl font-bold text-primary">3+1</span>
              <span className="text-sm text-muted-foreground uppercase tracking-tight">Dual Degree Setup</span>
            </div>
            <div className="p-4 glass rounded-lg border">
              <span className="block text-2xl font-bold text-primary">EU+IN</span>
              <span className="text-sm text-muted-foreground uppercase tracking-tight">Global Ambition</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
