import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Train, Car, Clock, Accessibility, Coffee, Mail, ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PraktischPage() {
  return (
    <div className="flex flex-col">
      {/* Hero - Flowing gradient */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-light via-green-light/80 to-cream">
        {/* Animated background */}
        <div className="absolute -right-32 top-16 h-80 w-80 rounded-full bg-green/15 blur-[100px]" style={{ animation: "pulse-soft 8s ease-in-out infinite" }} />
        <div className="absolute bottom-20 left-[5%] h-64 w-64 rounded-full bg-orange/10 blur-[80px]" style={{ animation: "pulse-soft 10s ease-in-out infinite", animationDelay: "2s" }} />
        
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 lg:px-6 lg:pb-24 lg:pt-20">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-2.5 text-sm font-medium text-green shadow-sm backdrop-blur-sm">
              <MapPin className="h-4 w-4" />
              Alles voor je bezoek
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Praktische informatie
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Alles wat je moet weten voor een succesvolle dag op het Duurzaamheidsfestival.
            </p>
          </div>
        </div>
        
        {/* Flowing curve */}
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="relative -mb-px block h-12 w-full md:h-16">
          <path d="M0,80 Q720,0 1440,80 L1440,80 L0,80 Z" className="fill-background" />
        </svg>
      </section>

      {/* Location - Overlapping card design */}
      <section className="relative px-4 py-12 lg:px-6 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
            {/* Text and info */}
            <div className="lg:w-1/2 lg:pt-8">
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Locatie
              </h2>
              
              <div className="mb-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-green-light to-cream p-6 shadow-lg lg:p-8">
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <MapPin className="h-7 w-7 text-green" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      De Nieuwe Liefde
                    </h3>
                    <p className="text-muted-foreground">
                      Da Costakade 102<br />
                      1053 WP Amsterdam
                    </p>
                  </div>
                </div>
                <p className="leading-relaxed text-muted-foreground">
                  Een prachtige locatie die historische charme combineert met moderne faciliteiten. De perfecte plek voor een inspirerend festival.
                </p>
              </div>
            </div>
            
            {/* Map visual */}
            <div className="relative lg:w-1/2">
              <div className="relative">
                {/* Stacked effect */}
                <div className="absolute -left-4 top-4 h-full w-full rounded-[2rem] bg-blue/10" />
                <div className="absolute -left-2 top-2 h-full w-full rounded-[2rem] bg-green/10" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-light to-green-light shadow-xl">
                  <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg" style={{ animation: "float-gentle 5s ease-in-out infinite" }}>
                      <MapPin className="h-10 w-10 text-secondary" />
                    </div>
                    <p className="text-lg font-semibold text-foreground">Amsterdam</p>
                    <p className="text-muted-foreground">Het hart van Nederland</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Transition */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="h-10 w-full md:h-14">
            <path d="M0,60 C360,20 720,40 1080,10 S1440,30 1440,30 L1440,60 L0,60 Z" className="fill-cream" />
          </svg>
        </div>
      </section>

      {/* Travel Info - Flowing cards */}
      <section className="relative bg-cream px-4 pb-8 pt-8 lg:px-6 lg:pt-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Bereikbaarheid
          </h2>
          
          <div className="flex flex-col gap-6 lg:flex-row">
            {/* OV Card - Left */}
            <Card className="flex-1 overflow-hidden rounded-[2rem] border-0 bg-gradient-to-br from-blue-light to-blue-light/50 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
              <CardContent className="p-6 lg:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Train className="h-7 w-7 text-blue" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Met het openbaar vervoer
                  </h3>
                </div>
                <div className="mb-6 space-y-3">
                  {[
                    "Tram 17 richting Osdorp, halte Kinkerstraat (10 min)",
                    "Bus 21 richting Geuzenveld, halte Da Costakade (15 min)",
                    "Lopend vanaf Amsterdam Lelylaan: ca. 20 minuten"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl bg-white/70 p-4 backdrop-blur-sm">
                  <p className="text-sm font-medium text-blue">
                    We moedigen reizen met het OV aan!
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Car Card - Right */}
            <Card className="flex-1 overflow-hidden rounded-[2rem] border-0 bg-gradient-to-br from-orange-light to-orange-light/50 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
              <CardContent className="p-6 lg:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Car className="h-7 w-7 text-orange" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Met de auto
                  </h3>
                </div>
                <div className="mb-6 space-y-3">
                  {[
                    "Betaald parkeren in de omgeving (ca. 4 euro per uur)",
                    "P+R aan de rand van de stad is voordeliger",
                    "Overweeg carpoolen met collega's"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl bg-white/70 p-4 backdrop-blur-sm">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-orange">Tip:</span> Parkeergarage De Baarsjes is op 5 minuten lopen.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Transition */}
        <div className="relative mt-12 lg:mt-16">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-12 w-full md:h-16">
            <path d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Day Overview - Timeline */}
      <section className="relative px-4 pb-8 pt-8 lg:px-6 lg:pt-12">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-green-light/20 to-blue-light/30" />
        
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10">
              <Calendar className="h-7 w-7 text-secondary" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Dagindeling
            </h2>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute bottom-8 left-7 top-8 hidden w-1 rounded-full bg-gradient-to-b from-green via-orange to-blue md:left-24 md:block" />
            
            <div className="flex flex-col gap-5">
              {[
                { time: "08:30 - 09:00", title: "Inloop & registratie", desc: "Koffie en thee staan klaar", color: "from-green-light to-green-light/30", icon: Coffee, iconColor: "text-green", dotColor: "bg-green" },
                { time: "09:00 - 12:30", title: "Ochtendprogramma", desc: "Opening, keynote & workshops", color: "from-orange-light to-orange-light/30", icon: Clock, iconColor: "text-orange", dotColor: "bg-orange" },
                { time: "12:30 - 13:30", title: "Lunch & netwerken", desc: "Duurzame lunch en gesprekken", color: "from-cream to-green-light/20", icon: Coffee, iconColor: "text-secondary", dotColor: "bg-secondary" },
                { time: "13:30 - 16:00", title: "Middagprogramma", desc: "Workshops & slotkeynote", color: "from-blue-light to-blue-light/30", icon: Clock, iconColor: "text-blue", dotColor: "bg-blue" },
                { time: "16:00 - 17:00", title: "Borrel & afsluiting", desc: "Informeel netwerken", color: "from-green-light to-cream", icon: Coffee, iconColor: "text-green", dotColor: "bg-green" }
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex gap-4 md:gap-8">
                    {/* Icon/dot */}
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg">
                      <Icon className={`h-6 w-6 ${item.iconColor}`} />
                      {/* Connector dot on timeline */}
                      <div className={`absolute -right-1 top-1/2 hidden h-4 w-4 -translate-y-1/2 translate-x-full rounded-full border-4 border-white shadow-sm md:block ${item.dotColor}`} />
                    </div>
                    
                    {/* Content card */}
                    <div className={`flex-1 rounded-2xl bg-gradient-to-r ${item.color} p-5 shadow-md transition-all hover:shadow-lg lg:p-6`}>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="font-semibold text-foreground">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                        <span className={`mt-2 inline-flex w-fit whitespace-nowrap rounded-full bg-white/80 px-4 py-1.5 text-sm font-semibold sm:mt-0 ${item.iconColor}`}>
                          {item.time}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        
        {/* Transition */}
        <div className="relative mt-16 lg:mt-20">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-12 w-full md:h-16">
            <path d="M0,80 Q360,0 720,40 T1440,0 L1440,80 L0,80 Z" className="fill-blue-light" />
          </svg>
        </div>
      </section>

      {/* Accessibility */}
      <section className="relative bg-blue-light px-4 pb-8 pt-8 lg:px-6 lg:pt-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
            {/* Content */}
            <div className="lg:w-1/2">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <Accessibility className="h-7 w-7 text-blue" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                  Toegankelijkheid
                </h2>
              </div>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                We streven ernaar het festival toegankelijk te maken voor iedereen. De locatie is volledig rolstoeltoegankelijk.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Rolstoeltoegankelijke ingang",
                  "Aangepaste toiletten",
                  "Ringleiding in de grote zaal",
                  "Rustige ruimte beschikbaar"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-2xl bg-white/70 p-4 backdrop-blur-sm">
                    <div className="h-3 w-3 shrink-0 rounded-full bg-green" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact card */}
            <div className="lg:w-1/2">
              <Card className="overflow-hidden rounded-[2rem] border-0 bg-white shadow-xl">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="mb-4 font-serif text-xl font-semibold text-foreground">
                    Speciale wensen?
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    Heb je speciale wensen of heb je hulp nodig? Neem gerust contact met ons op zodat we samen kunnen kijken naar de mogelijkheden.
                  </p>
                  <a 
                    href="mailto:toegankelijkheid@duurzaamheidsfestival.nl" 
                    className="inline-flex items-center gap-2 rounded-full bg-blue/10 px-5 py-2.5 font-medium text-blue transition-colors hover:bg-blue/20"
                  >
                    <Mail className="h-4 w-4" />
                    toegankelijkheid@duurzaamheidsfestival.nl
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Transition */}
        <div className="relative mt-16 lg:mt-20">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-12 w-full md:h-16">
            <path d="M0,0 C240,80 720,80 1200,40 S1440,0 1440,0 L1440,80 L0,80 Z" className="fill-cream" />
          </svg>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-cream px-4 pb-16 pt-8 lg:px-6 lg:pb-20 lg:pt-12">
        {/* Decorative */}
        <div className="absolute left-1/4 top-10 h-32 w-32 rounded-full bg-green/10 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-40 w-40 rounded-full bg-orange/10 blur-3xl" />
        
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
            Nog vragen?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Bekijk onze veelgestelde vragen of neem contact met ons op.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-secondary px-8 shadow-lg shadow-secondary/25 hover:bg-secondary/90">
              <Link href="/faq">
                Bekijk de FAQ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-2 bg-white px-8 hover:bg-secondary/5">
              <a href="mailto:info@duurzaamheidsfestival.nl">Neem contact op</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
