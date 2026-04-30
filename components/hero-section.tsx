import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-green-soft px-4 py-20 lg:px-6 lg:py-32">
      {/* Decorative butterfly element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 lg:opacity-10">
        <svg 
          viewBox="0 0 200 200" 
          className="h-64 w-64 text-red-primary md:h-96 md:w-96 lg:h-[500px] lg:w-[500px]"
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
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dag_van_de_Duurzaamheid_Onderwijs-J91GEkiaO7goxanKcEHsiH1WPbMMOW.png"
            alt="Dag van de Duurzaamheid Onderwijs"
            width={400}
            height={120}
            className="h-auto w-full max-w-md"
          />
        </div>
        
        {/* Main title */}
        <h1 className="mb-6 text-4xl font-bold leading-tight text-green-primary md:text-5xl lg:text-6xl">
          De wereld is jouw{" "}
          <span className="text-red-primary">klaslokaal</span>
        </h1>
        
        {/* Subtitle */}
        <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-dark-text/80 md:text-xl">
          Een dag waarop leren naar buiten gaat: de school uit, de wereld in.
        </p>
        
        {/* Date */}
        <div className="mb-4 flex items-center justify-center gap-2 text-dark-text">
          <Calendar className="h-5 w-5 text-red-primary" />
          <span className="text-lg font-semibold">Woensdag 30 september</span>
        </div>
        
        {/* Target audience */}
        <p className="mb-10 text-dark-text/70">
          Voor leerlingen, docenten, bestuurders en onderwijsprofessionals
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="rounded-full bg-red-primary px-8 hover:bg-red-primary/90 text-white">
            <a href="https://www.tickettailor.com/events/duurzaamheidsfestival/2158917">
              Schrijf je in
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-green-primary bg-white px-8 text-green-primary hover:bg-green-soft">
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
