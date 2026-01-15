"use client"

import * as React from "react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-4",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      )}
    >
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          SAMEEN<span className="text-primary/60"> SHAIK</span>
        </Link>

<nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  const element = document.querySelector(item.href)
                  element?.scrollIntoView({ behavior: "smooth" })
                }}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

<div className="flex items-center gap-4">
            <ThemeToggle />
            <Button 
              variant="primary" 
              size="sm" 
              className="hidden sm:flex"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Hire Me
            </Button>
          </div>
      </div>
    </header>
  )
}
