import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-12 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight">
              SAMEEN<span className="text-primary/60"> SHAIK</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-xs">
              Computer Science student specializing in Data Science and Web Development. 
              Bridging the gap between India and Sweden through technology.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <Link href="https://github.com/Sameen-Shaik" target="_blank" className="p-2 glass rounded-full hover:bg-accent transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/muhammad-sameen-shaik-b937b43a2" target="_blank" className="p-2 glass rounded-full hover:bg-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:sameenshaik17@outlook.com" className="p-2 glass rounded-full hover:bg-accent transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sameen Shaik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
