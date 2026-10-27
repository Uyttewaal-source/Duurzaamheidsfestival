import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, Euro, Mail, ExternalLink } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { OrganizersSection } from "@/components/organizers-section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimateIn } from "@/components/animate-in"

const practicalInfo = [
  { icon: Calendar, tint: "bg-green-soft text-green-ink", label: "Datum", value: "Vrijdag 25 september 2026" },
  { icon: Clock, tint: "bg-red-soft text-red-primary", label: "Tijd", value: "10:30–16:30 uur" },
  { icon: MapPin, tint: "bg-green-soft text-green-ink", label: "Locatie", value: "Burgers' Zoo, Arnhem" },
  {
    icon: Users,
    tint: "bg-green-soft text-green-ink",
    label: "Voor wie",
    value: "Leerlingen PO/VO, docenten, bestuurders en onderwijsprofessionals",
  },
  { icon: Euro, tint: "bg-green-soft text-green-ink", label: "Kosten", value: "Gratis toegang" },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <HeroSection />

      {/* Intro */}
      <section id="intro" className="bg-paper px-4 py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl">
          <AnimateIn>
            <p className="text-xl leading-relaxed text-dark-text md:text-2xl md:leading-relaxed">
              Duurzaamheid leer je niet alleen uit boeken. Je ziet het op het schoolplein, in de wijk, in de natuur,
              bij bedrijven, in keuzes van gemeenten en in de vragen die leerlingen zelf stellen.
            </p>
          </AnimateIn>
          <AnimateIn delay={100}>
            <p className="mt-6 leading-relaxed text-dark-text/70">
              Tijdens het Duurzaamheidsfestival ontdekken leerlingen, docenten, bestuurders en onderwijsprofessionals
              hoe de wereld zelf een krachtige leeromgeving kan zijn. Onder het thema &apos;De wereld is jouw
              klaslokaal&apos; gaan we naar buiten, doen we inspiratie op en delen we ideeën die je meeneemt naar je
              eigen school, klas of organisatie.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Praktische informatie */}
      <section id="praktische-info" className="bg-white px-4 py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <AnimateIn>
            <h2 className="mb-10 text-3xl font-extrabold text-forest md:text-4xl">Praktische informatie</h2>
          </AnimateIn>
          <AnimateIn delay={80}>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-green-soft bg-green-soft sm:grid-cols-2 lg:grid-cols-3">
              {practicalInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-white p-6">
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.tint}`}>
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-dark-text/50">{item.label}</h3>
                    <p className="mt-0.5 font-medium text-dark-text">{item.value}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4 bg-white p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-soft text-red-primary">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-dark-text/50">Aanmelden</h3>
                  <Button
                    asChild
                    size="sm"
                    className="mt-2 rounded-full bg-red-primary text-white transition-colors hover:bg-red-primary/90"
                  >
                    <a href="https://www.tickettailor.com/events/duurzaamheidsfestival/2158917">
                      Schrijf je in
                      <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Wat kun je verwachten */}
      <section id="verwachtingen" className="bg-paper px-4 py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <AnimateIn>
            <h2 className="mb-10 text-3xl font-extrabold text-forest md:text-4xl">Wat kun je verwachten?</h2>
          </AnimateIn>

          <div className="grid gap-5 sm:grid-cols-2">
            <AnimateIn delay={0}>
              <div className="h-full rounded-2xl border border-green-soft bg-white p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-soft">
                  <svg className="h-6 w-6 text-green-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-dark-text">Leren buiten de klas</h3>
                <p className="leading-relaxed text-dark-text/70">
                  Ervaar hoe schoolplein, wijk, natuur en samenleving onderdeel worden van het leerproces.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={80}>
              <div className="h-full rounded-2xl border border-red-soft bg-white p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-soft">
                  <svg className="h-6 w-6 text-red-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-dark-text">Ontmoeting tussen leerlingen en professionals</h3>
                <p className="leading-relaxed text-dark-text/70">
                  Leerlingen, docenten, schoolleiders en partners gaan met elkaar in gesprek.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={160}>
              <div className="h-full rounded-2xl border border-green-soft bg-white p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-soft">
                  <svg className="h-6 w-6 text-green-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-dark-text">Inspiratie voor duurzaam onderwijs</h3>
                <p className="leading-relaxed text-dark-text/70">
                  Neem concrete voorbeelden, werkvormen en ideeën mee naar je eigen praktijk.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={240}>
              <div className="h-full rounded-2xl border border-red-soft bg-white p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-soft">
                  <svg className="h-6 w-6 text-red-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-dark-text">Samen onderdeel van een grotere beweging</h3>
                <p className="leading-relaxed text-dark-text/70">
                  Ontdek hoe jouw school of organisatie bijdraagt aan duurzaam onderwijs.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Programma teaser */}
      <section id="programma" className="bg-green-soft px-4 py-16 lg:px-6 lg:py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-6">
          <AnimateIn>
            <h2 className="text-3xl font-extrabold text-forest md:text-4xl">Ontdek het festivalprogramma</h2>
          </AnimateIn>
          <AnimateIn delay={80}>
            <p className="max-w-2xl text-lg leading-relaxed text-dark-text/80">
              Van klimaatwatertafels en upcyclen tot escaperooms en het regenwoud van Burgers&apos; Zoo als leslokaal:
              bekijk alle workshops, zoek en filter op thema en stel je eigen festivaldag samen.
            </p>
          </AnimateIn>
          <AnimateIn delay={160}>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-red-primary px-8 text-white transition-colors hover:bg-red-primary/90"
            >
              <Link href="/programma">Bekijk het programma</Link>
            </Button>
          </AnimateIn>
        </div>
      </section>

      {/* Organisatoren */}
      <OrganizersSection />

      {/* Sfeerimpressie */}
      <section className="bg-paper px-4 py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <AnimateIn>
            <h2 className="mb-3 text-3xl font-extrabold text-forest md:text-4xl">
              Proef de sfeer van het festival
            </h2>
          </AnimateIn>
          <AnimateIn delay={80}>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-dark-text/70">
              Beleef de energie, ontmoetingen en creativiteit van een eerdere editie.
            </p>
          </AnimateIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimateIn delay={0} className="sm:col-span-2 lg:col-span-2">
              <div className="h-full overflow-hidden rounded-2xl">
                <img
                  src="/images/festival-2025/duurzaamheidsfestival-buiten.jpg"
                  alt="Deelnemers buiten op het Duurzaamheidsfestival"
                  loading="lazy"
                  className="h-64 w-full object-cover object-center lg:h-80"
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={60}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/images/festival-2025/duurzaamheidsfestival-dansen.jpg"
                  alt="Bezoekers dansen samen op het Duurzaamheidsfestival"
                  loading="lazy"
                  className="h-64 w-full object-cover object-center lg:h-80"
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={120}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/images/festival-2025/duurzaamheidsfestival-workshop.jpg"
                  alt="Workshopdeelnemers aan het werk op het Duurzaamheidsfestival"
                  loading="lazy"
                  className="h-64 w-full object-cover object-center"
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={180}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/images/festival-2025/duurzaamheidsfestival-presentatie.jpg"
                  alt="Spreker geeft een presentatie op het Duurzaamheidsfestival"
                  loading="lazy"
                  className="h-64 w-full object-cover object-center"
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={240}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/images/festival-2025/duurzaamheidsfestival-creatief.jpg"
                  alt="Creatieve activiteit op het Duurzaamheidsfestival"
                  loading="lazy"
                  className="h-64 w-full object-cover object-center"
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={300}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/images/festival-2025/duurzaamheidsfestival-teachers.jpg"
                  alt="Docenten en begeleiders op het Duurzaamheidsfestival"
                  loading="lazy"
                  className="h-64 w-full object-cover object-center"
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={360}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/images/festival-2025/duurzaamheidsfestival-professionals.jpg"
                  alt="Professionals ontmoeten elkaar op het Duurzaamheidsfestival"
                  loading="lazy"
                  className="h-64 w-full object-cover object-center"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Slot-CTA — de signature bosgroene band */}
      <section className="bg-forest px-4 py-20 lg:px-6 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateIn>
            <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              Ontdek de wereld als klaslokaal
            </h2>
          </AnimateIn>
          <AnimateIn delay={80}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Meld je gratis aan voor het Duurzaamheidsfestival op vrijdag 25 september in Burgers&apos; Zoo en neem
              nieuwe ideeën mee terug naar je school, klas of organisatie.
            </p>
          </AnimateIn>
          <AnimateIn delay={160}>
            <Button
              asChild
              size="lg"
              className="mt-10 rounded-full bg-red-primary px-8 text-white transition-colors hover:bg-red-primary/90"
            >
              <a href="https://www.tickettailor.com/events/duurzaamheidsfestival/2158917">
                Schrijf je in
                <ExternalLink className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
          </AnimateIn>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
