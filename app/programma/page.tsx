import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin } from "lucide-react"

import { AnimateIn } from "@/components/animate-in"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { WorkshopGrid } from "@/components/program/workshop-grid"

export const metadata: Metadata = {
  title: "Programma | Duurzaamheidsfestival",
  description:
    "Ontdek het volledige workshopprogramma van het Duurzaamheidsfestival op vrijdag 25 september 2026 in Burgers' Zoo, Arnhem. Zoek en filter op thema en vind de workshops die bij jou passen.",
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
              Van klimaatwatertafels tot natuurwandelingen en escaperooms: ontdek alle workshops van het
              Duurzaamheidsfestival. Zoek en filter op thema en vind de workshops die bij jou passen.
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

      {/* Workshops */}
      <section className="bg-white px-4 py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <WorkshopGrid />
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
