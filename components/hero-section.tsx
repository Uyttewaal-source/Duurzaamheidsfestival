import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="bg-green-soft">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-6 lg:py-24">
        {/* Left: wordmark, headline, facts, actions */}
        <div className="hero-fade-up">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DUURZAAMHEIDS%20FESTIAVL-iqBRIQ5fAiP4pBtiWyAAcbA3vrtq1k.png"
            alt="Duurzaamheidsfestival"
            width={360}
            height={90}
            priority
            className="mb-8 h-11 w-auto"
          />

          <h1 className="text-4xl font-extrabold leading-[1.04] tracking-tight text-dark-text md:text-5xl lg:text-6xl">
            De wereld is jouw <span className="leaf-underline">klaslokaal</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-dark-text/80">
            Een dag waarop het onderwijs naar buiten gaat: de school uit, de wereld in.
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-dark-text">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-green-primary" aria-hidden="true" />
              <dd className="font-semibold">Vrijdag 25 september</dd>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-green-primary" aria-hidden="true" />
              <dd className="font-semibold">10:30–16:30 uur</dd>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-green-primary" aria-hidden="true" />
              <dd className="font-semibold">Burgers&apos; Zoo</dd>
            </div>
          </dl>

          <p className="mt-4 text-dark-text/60">
            Voor leerlingen, docenten, bestuurders en onderwijsprofessionals
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-red-primary px-8 text-white transition-colors duration-200 hover:bg-red-primary/90"
            >
              <a href="https://www.tickettailor.com/events/duurzaamheidsfestival/2158917">
                Schrijf je in
                <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-green-primary bg-transparent px-8 text-green-ink transition-colors duration-200 hover:bg-green-primary/10"
            >
              <Link href="/programma">Bekijk het programma</Link>
            </Button>
          </div>
        </div>

        {/* Right: the festival, outside */}
        <div className="hero-fade-up relative" style={{ animationDelay: "0.15s" }}>
          <div className="overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-forest/10">
            <img
              src="/images/festival-2025/duurzaamheidsfestival-buiten.jpg"
              alt="Deelnemers buiten op een eerdere editie van het Duurzaamheidsfestival"
              className="aspect-[4/5] w-full object-cover object-center"
            />
          </div>
          <span className="absolute -bottom-4 left-6 rounded-full bg-red-primary px-5 py-2 text-sm font-semibold text-white shadow-lg">
            Gratis toegang
          </span>
        </div>
      </div>
    </section>
  )
}
