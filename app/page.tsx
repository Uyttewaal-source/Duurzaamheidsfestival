import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, Euro, Mail, ExternalLink } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { OrganizersSection } from "@/components/organizers-section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Intro Section */}
      <section id="intro" className="bg-white px-4 py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-6 text-lg leading-relaxed text-dark-text">
            Duurzaamheid leer je niet alleen uit boeken. Je ziet het op het schoolplein, in de wijk, in de natuur, bij bedrijven, in keuzes van gemeenten en in de vragen die leerlingen zelf stellen. Tijdens het Duurzaamheidsfestival ontdekken leerlingen, docenten, bestuurders en onderwijsprofessionals hoe de wereld zelf een krachtige leeromgeving kan zijn.
          </p>
          <p className="text-lg leading-relaxed text-dark-text/80">
            Onder het thema &apos;De wereld is jouw klaslokaal&apos; brengen we mensen uit verschillende hoeken van het onderwijs samen. We gaan naar buiten, doen inspiratie op en delen ideeen die je mee terugneemt naar je eigen school, klas of organisatie.
          </p>
        </div>
      </section>

      {/* Praktische Informatie */}
      <section id="praktische-info" className="bg-green-soft px-4 py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-green-primary md:text-4xl">
            Praktische informatie
          </h2>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-soft">
                <Calendar className="h-6 w-6 text-green-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-dark-text">Datum</h3>
                <p className="text-dark-text/70">Woensdag 25 september 2026</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-soft">
                <Clock className="h-6 w-6 text-red-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-dark-text">Tijd</h3>
                <p className="text-dark-text/70">10:30–16:30 uur</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-soft">
                <MapPin className="h-6 w-6 text-green-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-dark-text">Locatie</h3>
                <p className="text-dark-text/70">Burgers&apos; Zoo</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-soft">
                <Users className="h-6 w-6 text-green-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-dark-text">Voor wie</h3>
                <p className="text-dark-text/70">Leerlingen PO/VO, docenten, bestuurders en onderwijsprofessionals</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-soft">
                <Euro className="h-6 w-6 text-red-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-dark-text">Kosten</h3>
                <p className="text-dark-text/70">[Wordt nog bekendgemaakt]</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-soft">
                <Mail className="h-6 w-6 text-green-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-dark-text">Aanmelden</h3>
                <Button asChild size="sm" className="mt-2 rounded-full bg-red-primary hover:bg-red-primary/90 text-white">
                  <a href="https://www.tickettailor.com/events/duurzaamheidsfestival/2158917">
                    Schrijf je in
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wat kun je verwachten */}
      <section id="verwachtingen" className="bg-white px-4 py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-green-primary md:text-4xl">
            Wat kun je verwachten?
          </h2>
          
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-green-soft bg-white p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-green-soft">
                <svg className="h-7 w-7 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-dark-text">Leren buiten de klas</h3>
              <p className="leading-relaxed text-dark-text/80">
                Ervaar hoe schoolplein, wijk, natuur en samenleving onderdeel worden van het leerproces.
              </p>
            </div>

            <div className="rounded-2xl border border-red-soft bg-white p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-red-soft">
                <svg className="h-7 w-7 text-red-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-dark-text">Ontmoeting tussen leerlingen en professionals</h3>
              <p className="leading-relaxed text-dark-text/80">
                Leerlingen, docenten, schoolleiders en partners gaan met elkaar in gesprek.
              </p>
            </div>

            <div className="rounded-2xl border border-green-soft bg-white p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-green-soft">
                <svg className="h-7 w-7 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-dark-text">Inspiratie voor duurzaam onderwijs</h3>
              <p className="leading-relaxed text-dark-text/80">
                Neem concrete voorbeelden, werkvormen en ideeen mee naar je eigen praktijk.
              </p>
            </div>

            <div className="rounded-2xl border border-red-soft bg-white p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-red-soft">
                <svg className="h-7 w-7 text-red-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-dark-text">Samen onderdeel van een grotere beweging</h3>
              <p className="leading-relaxed text-dark-text/80">
                Ontdek hoe jouw school of organisatie bijdraagt aan duurzaam onderwijs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organisatoren */}
      <OrganizersSection />

      {/* CTA Section */}
      <section className="bg-red-soft px-4 py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-red-primary md:text-4xl">
            Ontdek de wereld als klaslokaal
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-dark-text/80">
            Meld je aan voor het Duurzaamheidsfestival op woensdag 25 september in Burgers&apos; Zoo en neem nieuwe ideeën mee terug naar je school, klas of organisatie.
          </p>
          <Button asChild size="lg" className="rounded-full bg-red-primary px-8 hover:bg-red-primary/90 text-white">
            <a href="https://www.tickettailor.com/events/duurzaamheidsfestival/2158917">
              Schrijf je in
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
