"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { Section } from "@/components/section"
import { ArrowRight, Download, Mail } from "lucide-react"

export function Hero() {
  return (
    <Section spacing="xl" className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="success" className="mb-6 px-4 py-1.5 text-sm uppercase tracking-wider">
            Open to Internships and Jobs
          </Badge>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Building intelligent systems <br /> 
          <span className="gradient-text">for a global future.</span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Sameen Shaik — CS Student passionate about <span className="text-foreground font-medium">Data Science & Applied AI</span>. 
        </motion.p>

<motion.div 
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => {
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </Button>
            <a href="/Resume - Sameen Shaik.pdf" download>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="h-4 w-4" /> Resume
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="ghost" 
              className="gap-2"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <Mail className="h-4 w-4" /> Contact
            </Button>
          </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t pt-12 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground">Education</span>
            <span className="font-medium">B.Tech CS (India + Sweden)</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground">Focus</span>
            <span className="font-medium">Data Science & ML</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground">Location</span>
            <span className="font-medium">India / Sweden</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground">Status</span>
            <span className="font-medium">Junior CS Student</span>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
