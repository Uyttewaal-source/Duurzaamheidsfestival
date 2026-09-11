import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

import { AnimateIn } from "@/components/animate-in"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { organisaties } from "@/lib/inspiratiemarkt"

export const metadata: Metadata = {
  title: "Inspiratiemarkt | Duurzaamheidsfestival",
  description:
    "Ontdek de organisaties op de inspiratiemarkt van het Duurzaamheidsfestival in Burgers' Zoo, Arnhem. Bekijk wie er zijn en verken hun werk rond duurzaamheid en onderwijs.",
}

const INITIAL_STOPWORDS = new Set(["van", "de", "der", "den", "het", "en", "&", "voor", "of", "the", "to"])

function getInitials(name: string): string {
  const words = name
    .replace(/[^\p{L}\p{N}\s'-]/gu, " ")
    .split(/\s+/)
    .filter((word) => word.length > 0 && !INITIAL_STOPWORDS.has(word.toLowerCase()))
  const letters = words.slice(0, 2).map((word) => word[0]?.toUpperCase() ?? "")
  return letters.join("") || name.slice(0, 1).toUpperCase()
}

export default function InspiratiemarktPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Paginakop */}
      <section className="bg-green-soft px-4 py-16 lg:px-6 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <AnimateIn>
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-green-primary transition-colors hover:text-green-primary/80"
            >
              <ArrowLeft className="size-4" />
              Terug naar de homepage
            </Link>
          </AnimateIn>
          <AnimateIn delay={80}>
            <h1 className="text-3xl font-bold text-green-primary md:text-4xl lg:text-5xl">Inspiratiemarkt</h1>
          </AnimateIn>
          <AnimateIn delay={160}>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-dark-text/80">
              Op de inspiratiemarkt ontmoet je organisaties die zich inzetten voor duurzaamheid en onderwijs. Ontdek
              wie er zijn en klik door naar hun website om meer te weten te komen.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Organisaties */}
      <section className="bg-white px-4 py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {organisaties.map((org, index) => (
              <AnimateIn key={org.slug} delay={index * 60}>
                <a
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Bezoek de website van ${org.name} (opent in een nieuw tabblad)`}
                  className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 text-center outline-none transition-all duration-200 hover:-translate-y-1 hover:border-green-primary hover:shadow-lg focus-visible:ring-[3px] focus-visible:ring-green-primary/50"
                >
                  <div className="flex h-20 w-full items-center justify-center">
                    {org.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={org.logo}
                        alt={`Logo van ${org.name}`}
                        loading="lazy"
                        className="max-h-20 max-w-[85%] object-contain"
                      />
                    ) : (
                      <span className="flex size-16 items-center justify-center rounded-2xl bg-green-soft text-lg font-bold text-green-primary">
                        {getInitials(org.name)}
                      </span>
                    )}
                  </div>
                  <span className="font-semibold text-dark-text">{org.name}</span>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-green-primary">
                    Bezoek website
                    <ExternalLink className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
