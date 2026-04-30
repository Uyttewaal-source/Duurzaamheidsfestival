import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-turquoise-light px-4 py-20 lg:px-6 lg:py-32">
      {/* Decorative butterfly element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 lg:opacity-20">
        <svg 
          viewBox="0 0 200 200" 
          className="h-64 w-64 text-orange md:h-96 md:w-96 lg:h-[500px] lg:w-[500px]"
          fill="currentColor"
        >
          {/* Simplified butterfly shape */}
          <ellipse cx="70" cy="70" rx="50" ry="60" />
          <ellipse cx="130" cy="70" rx="50" ry="60" />
          <ellipse cx="70" cy="130" rx="40" ry="50" />
          <ellipse cx="130" cy="130" rx="40" ry="50" />
          <ellipse cx="100" cy="100" rx="8" ry="40" fill="currentColor" />
        </svg>
      </div>
      
      <div className="relative mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-background px-5 py-2.5 shadow-sm">
          <span className="text-sm font-semibold uppercase tracking-wide text-turquoise">Duurzaamheidsfestival</span>
        </div>
        
        {/* Main title */}
        <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
          De wereld is jouw{" "}
          <span className="text-turquoise">klaslokaal</span>
        </h1>
        
        {/* Subtitle */}
        <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Een dag waarop leren naar buiten gaat: de school uit, de wereld in.
        </p>
        
        {/* Date */}
        <div className="mb-4 flex items-center justify-center gap-2 text-foreground">
          <Calendar className="h-5 w-5 text-orange" />
          <span className="text-lg font-semibold">Woensdag 30 september</span>
        </div>
        
        {/* Target audience */}
        <p className="mb-10 text-muted-foreground">
          Voor leerlingen, docenten, bestuurders en onderwijsprofessionals
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="rounded-full bg-orange px-8 hover:bg-orange/90">
            <a href="https://www.tickettailor.com/events/duurzaamheidsfestival/2158917">
              Schrijf je in
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full border-2 bg-background px-8">
            <a href="#praktische-info">
              Bekijk praktische informatie
              <ChevronDown className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
