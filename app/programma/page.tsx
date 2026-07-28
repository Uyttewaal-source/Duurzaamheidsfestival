import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin } from "lucide-react"

import { AnimateIn } from "@/components/animate-in"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { DaySchedule } from "@/components/program/day-schedule"
import { WorkshopGrid } from "@/components/program/workshop-grid"

const programmaDescription =
  "Ontdek het volledige workshopprogramma van het Duurzaamheidsfestival op vrijdag 25 september 2026 in Burgers' Zoo, Arnhem. Zoek en filter op thema en vind de workshops die bij jou passen."

export const metadata: Metadata = {
  title: "Programma | Duurzaamheidsfestival",
  description: programmaDescription,
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.duurzaamheidsfestival.nl/programma",
    siteName: "Duurzaamheidsfestival",
    title: "Het festivalprogramma | Duurzaamheidsfestival",
    description: programmaDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Het festivalprogramma | Duurzaamheidsfestival",
    description: programmaDescription,
  },
}

export default function ProgrammaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Paginakop */}
      <section className="bg-green-soft px-4 py-16 lg:px-6 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <AnimateIn>
            <Link
              href="/#programma"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-green-primary transition-colors hover:text-green-primary/80"
            >
              <ArrowLeft className="size-4" />
              Terug naar de homepage
            </Link>
          </AnimateIn>
          <AnimateIn delay={80}>
            <h1 className="text-3xl font-bold text-green-primary md:text-4xl lg:text-5xl">
              Het festivalprogramma
            </h1>
          </AnimateIn>
          <AnimateIn delay={160}>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-dark-text/80">
              Bekijk het dagprogramma én alle workshops van het Duurzaamheidsfestival. Van de opening en
              inleidingen tot de workshoprondes, met het regenwoud van Burgers&apos; Zoo als leslokaal.
            </p>
          </AnimateIn>
          <AnimateIn delay={240}>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-dark-text/70">
              <span className="inline-flex items-center gap-2">
                <Calendar className="size-4 text-green-primary" />
                Vrijdag 25 september 2026
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-green-primary" />
                Burgers&apos; Zoo, Arnhem
              </span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Programma-inhoud */}
      <section className="bg-white px-4 py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-5xl">
          {/* Dagprogramma */}
          <AnimateIn>
            <h2 className="mb-2 text-2xl font-bold text-green-primary md:text-3xl">Dagprogramma</h2>
          </AnimateIn>
          <AnimateIn delay={80}>
            <p className="mb-10 text-dark-text/70">
              Zo ziet de dag eruit, van inloop tot de afsluitende borrel.
            </p>
          </AnimateIn>
          <AnimateIn delay={120}>
            <DaySchedule />
          </AnimateIn>

          {/* Workshops */}
          <div id="workshops" className="mt-16 scroll-mt-24 lg:mt-24">
            <AnimateIn>
              <h2 className="mb-8 text-2xl font-bold text-green-primary md:text-3xl">Workshops</h2>
            </AnimateIn>
            <WorkshopGrid />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
