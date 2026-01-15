import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

export function Section({ 
  children, 
  className, 
  container = true, 
  spacing = 'lg',
  ...props 
}: SectionProps) {
  const spacings = {
    none: "",
    sm: "py-8",
    md: "py-16",
    lg: "py-24",
    xl: "py-32",
  }

  return (
    <section 
      className={cn(spacings[spacing], className)} 
      {...props}
    >
      {container ? (
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {children}
        </div>
      ) : children}
    </section>
  )
}
