import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, BookOpen, TreesIcon as Tree, Sparkles, ArrowRight, Heart, Leaf, Globe, Lightbulb } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-green-light px-4 py-24 lg:px-6 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 shadow-sm">
            <Calendar className="h-4 w-4 text-orange" />
            <span className="font-medium text-foreground">12 juni 2026</span>
            <span className="text-muted-foreground">Utrecht</span>
          </div>
          
          <h1 className="mb-6 font-serif text-5xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
            De wereld is je{" "}
            <span className="text-orange">klaslokaal</span>
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Ontdek hoe je duurzaamheid tot leven brengt in het onderwijs. Een dag vol inspiratie, verbinding en concrete handvatten.
          </p>
          
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-orange px-8 hover:bg-orange/90">
              <Link href="/aanmelden">
                Meld je aan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-2 px-8">
              <Link href="/programma">Bekijk programma</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white px-4 py-16 lg:px-6 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {[
              { icon: Users, value: "500+", label: "Deelnemers", color: "bg-green-light text-green" },
              { icon: BookOpen, value: "30+", label: "Workshops", color: "bg-orange-light text-orange" },
              { icon: Sparkles, value: "15+", label: "Sprekers", color: "bg-blue-light text-blue" },
              { icon: Tree, value: "1", label: "Onvergetelijke dag", color: "bg-green-light text-green" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${stat.color}`}>
                  <stat.icon className="h-7 w-7" />
                </div>
                <div className="text-3xl font-bold text-foreground md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-cream px-4 py-20 lg:px-6 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-light px-4 py-2 text-sm font-medium text-green">
                <Heart className="h-4 w-4" />
                Over het festival
              </span>
              <h2 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
                Samen werken aan een duurzame toekomst
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                Het Duurzaamheidsfestival brengt onderwijsprofessionals samen die geloven dat educatie de sleutel is tot een duurzame wereld.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Leer van experts, wissel ervaringen uit met collega&apos;s en ga naar huis met praktische tools die je direct kunt toepassen.
              </p>
              
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-cream bg-orange-light text-sm font-bold text-orange">ES</div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-cream bg-blue-light text-sm font-bold text-blue">LvM</div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-cream bg-green-light text-green">
                    <Leaf className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Een initiatief van</p>
                  <p className="text-sm text-muted-foreground">Eco-Schools, Leren voor Morgen & CN</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-3xl bg-white p-8 shadow-sm lg:p-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-light">
                <Tree className="h-8 w-8 text-green" />
              </div>
              <blockquote className="font-serif text-2xl font-medium leading-relaxed text-foreground">
                &ldquo;Leren buiten het klaslokaal opent deuren die in boeken gesloten blijven.&rdquo;
              </blockquote>
              <div className="mt-6 flex gap-2">
                <div className="h-2 w-8 rounded-full bg-orange" />
                <div className="h-2 w-2 rounded-full bg-blue" />
                <div className="h-2 w-2 rounded-full bg-green" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-white px-4 py-20 lg:px-6 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
              Wat kun je verwachten?
            </h2>
            <p className="text-lg text-muted-foreground">
              Een dag vol inspiratie, praktische workshops en waardevolle ontmoetingen
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {[
              {
                icon: BookOpen,
                title: "Programma",
                description: "Van interactieve workshops tot inspirerende keynotes. Ontdek sessies over natuur, economie, maatschappij en meer.",
                link: "/programma",
                linkText: "Bekijk het programma",
                color: "bg-orange-light text-orange"
              },
              {
                icon: Users,
                title: "Sprekers",
                description: "Leer van experts en pioniers op het gebied van duurzaam onderwijs die hun kennis en ervaring delen.",
                link: "/sprekers",
                linkText: "Ontmoet de sprekers",
                color: "bg-blue-light text-blue"
              },
              {
                icon: MapPin,
                title: "Locatie",
                description: "Een inspirerende locatie in het hart van Nederland. Goed bereikbaar met OV en voldoende parkeren.",
                link: "/praktisch",
                linkText: "Praktische informatie",
                color: "bg-green-light text-green"
              }
            ].map((item, i) => (
              <div key={i} className="rounded-3xl bg-muted/30 p-8">
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}>
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-serif text-2xl font-semibold text-foreground">{item.title}</h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">{item.description}</p>
                <Link href={item.link} className="inline-flex items-center font-medium text-foreground hover:text-orange">
                  {item.linkText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-blue-light px-4 py-20 lg:px-6 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <div className="space-y-4">
                {[
                  { icon: Leaf, title: "Buiten leren", desc: "Natuur als klaslokaal", color: "bg-green-light text-green" },
                  { icon: Lightbulb, title: "Innovatie", desc: "Nieuwe onderwijsmethoden", color: "bg-orange-light text-orange" },
                  { icon: Globe, title: "Verbinding", desc: "Lokaal en globaal denken", color: "bg-white text-blue" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-2xl bg-white p-5">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-blue">
                <Sparkles className="h-4 w-4" />
                Onze visie
              </span>
              <h2 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
                De wereld als leeromgeving
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                Duurzaamheid leer je niet alleen uit boeken. Door leerlingen in contact te brengen met de natuur, de gemeenschap en echte vraagstukken, maken we onderwijs betekenisvol.
              </p>
              <ul className="space-y-3">
                {[
                  "Praktische tools voor direct in de klas",
                  "Inspirerende voorbeelden uit het hele land",
                  "Netwerken met gelijkgestemde professionals"
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-light">
                      <div className="h-2 w-2 rounded-full bg-green" />
                    </div>
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="bg-white px-4 py-20 lg:px-6 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
              Voor wie is dit festival?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Het festival is bedoeld voor iedereen die werkt in het onderwijs en gelooft in duurzame educatie
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Docenten", desc: "Primair en voortgezet onderwijs", color: "bg-orange-light" },
              { title: "Schoolleiders", desc: "Directie en management", color: "bg-blue-light" },
              { title: "Onderwijsondersteuners", desc: "Coaches en begeleiders", color: "bg-green-light" },
              { title: "Beleidsmakers", desc: "Bestuur en curriculum", color: "bg-cream" },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl ${item.color} p-6 text-center`}>
                <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-light px-4 py-20 lg:px-6 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Doe je mee?
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
            Schrijf je in voor het Duurzaamheidsfestival 2026 en maak samen met honderden onderwijsprofessionals het verschil voor een duurzame toekomst.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-orange px-8 hover:bg-orange/90">
              <Link href="/aanmelden">
                Meld je nu aan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-2 bg-white px-8">
              <Link href="/faq">Veelgestelde vragen</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
