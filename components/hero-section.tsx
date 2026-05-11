import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, ChevronDown, Clock, MapPin } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-green-soft px-4 py-20 lg:px-6 lg:py-32">
      {/* Decorative butterfly element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 lg:opacity-10">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dag_van_de_Duurzaamheid_vlinder-iMpgfnsCazvXM9PynZFWO3G4MoqpRm.png"
          alt="Butterfly decoration"
          width={500}
          height={500}
          className="h-64 w-64 md:h-96 md:w-96 lg:h-[500px] lg:w-[500px]"
        />
      </div>
      
      <div className="relative mx-auto max-w-4xl text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DUURZAAMHEIDS%20FESTIAVL-9cczSLGFhz8AYm5bbjYZVsucX97o9f.jpg"
            alt="Duurzaamheidsfestival"
            width={400}
            height={100}
            className="h-auto w-full max-w-md"
          />
        </div>
        
        {/* Main title */}
        <h1 className="mb-6 text-4xl font-bold leading-tight text-green-primary md:text-5xl lg:text-6xl">
          De wereld is jouw{" "}
          <span className="text-red-primary">klaslokaal</span>
        </h1>
        
        {/* Subtitle */}
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-dark-text/80 md:text-xl">
          Een dag waarop leren naar buiten gaat: de school uit, de wereld in.
        </p>
        
        {/* Key info grid */}
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          <div className="flex items-center justify-center gap-2 text-dark-text">
            <Calendar className="h-5 w-5 text-red-primary" />
            <span className="font-semibold">Woensdag 25 september</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-dark-text">
            <Clock className="h-5 w-5 text-red-primary" />
            <span className="font-semibold">10:30–16:30 uur</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-dark-text">
            <MapPin className="h-5 w-5 text-red-primary" />
            <span className="font-semibold">Burgers&apos; Zoo</span>
          </div>
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
