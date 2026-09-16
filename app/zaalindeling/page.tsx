import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { AnimateIn } from "@/components/animate-in"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ZaalindelingRondes } from "@/components/program/zaalindeling-rondes"

export const metadata: Metadata = {
  title: "Zaalindeling | Duurzaamheidsfestival",
  description:
    "Bekijk de zaalindeling per ronde van het Duurzaamheidsfestival: in welke zaal en op welk moment elke workshop plaatsvindt. Klik op een workshop voor de beschrijving.",
}

export default function ZaalindelingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Paginakop */}
      <section className="bg-green-soft px-4 py-16 lg:px-6 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <AnimateIn>
            <Link
              href="/programma"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-green-primary transition-colors hover:text-green-primary/80"
            >
              <ArrowLeft className="size-4" />
              Naar het programma
            </Link>
          </AnimateIn>
          <AnimateIn delay={80}>
            <h1 className="text-3xl font-bold text-green-primary md:text-4xl lg:text-5xl">Zaalindeling</h1>
          </AnimateIn>
          <AnimateIn delay={160}>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-dark-text/80">
              In welke zaal en op welk moment vindt elke workshop plaats? Klik op een workshop om naar de beschrijving
              te gaan.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Zaalindeling */}
      <section className="bg-white px-4 py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <AnimateIn>
            <ZaalindelingRondes />
          </AnimateIn>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
