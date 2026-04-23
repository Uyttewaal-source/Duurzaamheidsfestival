import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, HelpCircle, ArrowRight, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const faqItems = [
  {
    question: "Wanneer vindt het festival plaats?",
    answer: "Het Duurzaamheidsfestival vindt plaats op donderdag 12 juni 2026. De deuren openen om 08:30 uur en het programma start om 09:00 uur. We sluiten af met een borrel om 17:00 uur.",
    category: "algemeen"
  },
  {
    question: "Wat kost deelname?",
    answer: "Early bird tickets kosten 75 euro (tot 1 april 2026). Reguliere tickets kosten 95 euro. Studenten en gepensioneerden betalen 50 euro. Bij het ticket is lunch, koffie/thee en de afsluitende borrel inbegrepen.",
    category: "tickets"
  },
  {
    question: "Krijg ik een certificaat of bewijs van deelname?",
    answer: "Ja, alle deelnemers ontvangen na afloop een digitaal certificaat van deelname. Dit kan worden gebruikt voor nascholing en professionele ontwikkeling.",
    category: "algemeen"
  },
  {
    question: "Kan ik me inschrijven voor specifieke workshops?",
    answer: "Ja, na je aanmelding ontvang je een link om je in te schrijven voor de workshops van je keuze. Sommige workshops hebben een beperkte capaciteit, dus wees er snel bij.",
    category: "programma"
  },
  {
    question: "Is er catering aanwezig?",
    answer: "Ja, er is een uitgebreide vegetarische lunch, koffie, thee en versnaperingen gedurende de dag. Bij de aanmelding kun je dieetwensen doorgeven (veganistisch, glutenvrij, etc.).",
    category: "praktisch"
  },
  {
    question: "Kan ik mijn collega's meenemen?",
    answer: "Absoluut! We moedigen teams aan om samen te komen. Bij groepen van 5 of meer personen uit dezelfde organisatie bieden we 10% korting. Neem contact op voor een groepscode.",
    category: "tickets"
  },
  {
    question: "Is parkeren mogelijk?",
    answer: "Er is betaald parkeren in de buurt van de locatie. We raden aan om met het openbaar vervoer te komen, dit past ook beter bij het thema van het festival. Bekijk de praktische informatie voor details.",
    category: "praktisch"
  },
  {
    question: "Kan ik mijn aanmelding annuleren?",
    answer: "Tot 4 weken voor het festival kun je kosteloos annuleren. Daarna kun je je ticket overdragen aan een collega. Neem contact op via info@duurzaamheidsfestival.nl.",
    category: "tickets"
  },
  {
    question: "Is het festival geschikt voor mijn school/onderwijsniveau?",
    answer: "Het festival is relevant voor alle onderwijsniveaus: van primair onderwijs tot voortgezet onderwijs en MBO. Er zijn specifieke workshops voor verschillende doelgroepen, en de plenaire sessies zijn breed toepasbaar.",
    category: "programma"
  },
  {
    question: "Worden de sessies opgenomen?",
    answer: "De keynotes worden opgenomen en achteraf beschikbaar gesteld voor deelnemers. Workshops worden niet opgenomen vanwege het interactieve karakter.",
    category: "programma"
  },
  {
    question: "Hoe kan ik contact opnemen met de organisatie?",
    answer: "Je kunt ons bereiken via info@duurzaamheidsfestival.nl. We streven ernaar binnen 2 werkdagen te reageren.",
    category: "algemeen"
  },
  {
    question: "Is de locatie toegankelijk voor mensen met een beperking?",
    answer: "Ja, de locatie is volledig rolstoeltoegankelijk. Er zijn aangepaste toiletten, een ringleiding in de grote zaal, en een rustige ruimte. Neem contact op als je specifieke wensen hebt.",
    category: "praktisch"
  }
]

const colors = [
  { bg: "bg-gradient-to-r from-green-light to-green-light/50", accent: "bg-green" },
  { bg: "bg-gradient-to-r from-orange-light to-orange-light/50", accent: "bg-orange" },
  { bg: "bg-gradient-to-r from-blue-light to-blue-light/50", accent: "bg-blue" },
  { bg: "bg-gradient-to-r from-cream to-green-light/30", accent: "bg-secondary" }
]

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      {/* Hero - Flowing gradient */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream via-cream/80 to-background">
        {/* Animated background */}
        <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-orange/10 blur-[100px]" style={{ animation: "pulse-soft 8s ease-in-out infinite" }} />
        <div className="absolute bottom-20 right-[5%] h-64 w-64 rounded-full bg-blue/10 blur-[80px]" style={{ animation: "pulse-soft 10s ease-in-out infinite", animationDelay: "2s" }} />
        
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 lg:px-6 lg:pb-20 lg:pt-20">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-2.5 text-sm font-medium text-secondary shadow-sm backdrop-blur-sm">
              <HelpCircle className="h-4 w-4" />
              We helpen je graag
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Veelgestelde vragen
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Vind snel antwoorden op de meest voorkomende vragen over het Duurzaamheidsfestival.
            </p>
          </div>
        </div>
        
        {/* Flowing curve */}
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="relative -mb-px block h-10 w-full md:h-14">
          <path d="M0,60 C480,0 960,60 1440,20 L1440,60 L0,60 Z" className="fill-background" />
        </svg>
      </section>

      {/* FAQ - Flowing design */}
      <section className="relative px-4 py-8 lg:px-6 lg:py-12">
        {/* Background gradient flow */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-green-light/10 to-blue-light/20" />
        
        <div className="relative mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqItems.map((item, index) => {
              const colorIndex = index % colors.length
              const color = colors[colorIndex]
              
              return (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className={`overflow-hidden rounded-2xl border-0 ${color.bg} shadow-sm transition-all data-[state=open]:shadow-lg`}
                >
                  <AccordionTrigger className="px-6 py-5 text-left font-serif text-lg font-semibold text-foreground hover:no-underline [&[data-state=open]>svg]:text-orange">
                    <div className="flex items-start gap-4">
                      <div className={`mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full ${color.accent}`} />
                      <span>{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="ml-6 rounded-xl bg-white/70 p-4 backdrop-blur-sm">
                      <p className="leading-relaxed text-muted-foreground">{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
        
        {/* Transition */}
        <div className="relative mt-16 lg:mt-20">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-12 w-full md:h-16">
            <path d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z" className="fill-cream" />
          </svg>
        </div>
      </section>

      {/* Contact CTA - Flowing design */}
      <section className="relative overflow-hidden bg-cream px-4 pb-16 pt-4 lg:px-6 lg:pb-20">
        {/* Decorative */}
        <div className="absolute left-1/4 top-10 h-32 w-32 rounded-full bg-blue/10 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-40 w-40 rounded-full bg-green/15 blur-3xl" />
        
        <div className="relative mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-orange/10 via-green/10 to-blue/10 p-1">
            <Card className="overflow-hidden rounded-[2.3rem] border-0 bg-white shadow-xl">
              <CardContent className="p-8 text-center lg:p-12">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange/20 to-green/20" style={{ animation: "float-gentle 5s ease-in-out infinite" }}>
                  <MessageCircle className="h-10 w-10 text-orange" />
                </div>
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                  Staat je vraag er niet bij?
                </h2>
                <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
                  Geen probleem! Neem gerust contact met ons op. We helpen je graag verder.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button asChild size="lg" className="rounded-full bg-orange px-8 shadow-lg shadow-orange/25 hover:bg-orange/90">
                    <a href="mailto:info@duurzaamheidsfestival.nl">
                      <Mail className="mr-2 h-4 w-4" />
                      Stuur een e-mail
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full border-2 bg-white px-8 hover:bg-secondary/5">
                    <Link href="/praktisch">
                      Praktische informatie
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
