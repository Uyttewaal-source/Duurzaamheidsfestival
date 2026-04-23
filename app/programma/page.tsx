"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Sparkles, Leaf, Coffee, MessageCircle, BookOpen } from "lucide-react"

const sessions = [
  {
    id: 1,
    title: "Opening: De wereld als klaslokaal",
    description: "Welkom en inspirerende opening van het festival met een visie op duurzaam onderwijs.",
    time: "09:00 - 09:45",
    location: "Grote Zaal",
    theme: "keynote",
    audience: "iedereen",
    speaker: "Prof. dr. Anna de Vries"
  },
  {
    id: 2,
    title: "Workshop: Schooltuin als leeromgeving",
    description: "Leer hoe je een schooltuin opzet en integreert in je curriculum. Praktische tips en hands-on ervaring.",
    time: "10:00 - 11:30",
    location: "Workshopruimte 1",
    theme: "natuur",
    audience: "docenten",
    speaker: "Mark Janssen"
  },
  {
    id: 3,
    title: "Workshop: Circulaire economie in de les",
    description: "Ontdek lesmateriaal en activiteiten om circulaire economie tastbaar te maken voor leerlingen.",
    time: "10:00 - 11:30",
    location: "Workshopruimte 2",
    theme: "economie",
    audience: "docenten",
    speaker: "Lisa van den Berg"
  },
  {
    id: 4,
    title: "Paneldiscussie: Duurzaamheid in het curriculum",
    description: "Experts bespreken hoe duurzaamheid structureel kan worden opgenomen in het onderwijs.",
    time: "11:45 - 12:30",
    location: "Grote Zaal",
    theme: "beleid",
    audience: "schoolleiders",
    speaker: "Diverse panelleden"
  },
  {
    id: 5,
    title: "Lunch & Netwerken",
    description: "Geniet van een duurzame lunch en maak kennis met andere onderwijsprofessionals.",
    time: "12:30 - 13:30",
    location: "Foyer",
    theme: "netwerk",
    audience: "iedereen",
    speaker: ""
  },
  {
    id: 6,
    title: "Workshop: Burgerwetenschap in het onderwijs",
    description: "Betrek leerlingen bij echte wetenschappelijke projecten en maak wetenschap levend.",
    time: "13:30 - 15:00",
    location: "Workshopruimte 1",
    theme: "wetenschap",
    audience: "docenten",
    speaker: "Dr. Eva Mulder"
  },
  {
    id: 7,
    title: "Workshop: Duurzaam schoolbeleid",
    description: "Praktische stappen om duurzaamheid te verankeren in het schoolbeleid en de schoolcultuur.",
    time: "13:30 - 15:00",
    location: "Workshopruimte 2",
    theme: "beleid",
    audience: "schoolleiders",
    speaker: "Peter de Groot"
  },
  {
    id: 8,
    title: "Workshop: Natuureducatie voor kleuters",
    description: "Specifieke activiteiten en methodieken voor duurzaamheidseducatie in het jonge kind.",
    time: "13:30 - 15:00",
    location: "Workshopruimte 3",
    theme: "natuur",
    audience: "docenten",
    speaker: "Sophie Bakker"
  },
  {
    id: 9,
    title: "Keynote: De toekomst van onderwijs",
    description: "Inspirerende afsluiting over de rol van onderwijs in de transitie naar een duurzame samenleving.",
    time: "15:15 - 16:00",
    location: "Grote Zaal",
    theme: "keynote",
    audience: "iedereen",
    speaker: "Dr. Mohamed El-Amrani"
  },
  {
    id: 10,
    title: "Borrel & Afsluiting",
    description: "Informele afsluiting met drankjes en hapjes, tijd voor laatste netwerkmomenten.",
    time: "16:00 - 17:00",
    location: "Foyer",
    theme: "netwerk",
    audience: "iedereen",
    speaker: ""
  }
]

const themes = [
  { value: "all", label: "Alles", icon: Sparkles },
  { value: "keynote", label: "Keynote", icon: Sparkles },
  { value: "natuur", label: "Natuur", icon: Leaf },
  { value: "economie", label: "Economie", icon: MessageCircle },
  { value: "wetenschap", label: "Wetenschap", icon: BookOpen },
  { value: "beleid", label: "Beleid", icon: MessageCircle },
  { value: "netwerk", label: "Netwerk", icon: Coffee }
]

const audiences = [
  { value: "all", label: "Iedereen" },
  { value: "docenten", label: "Docenten" },
  { value: "schoolleiders", label: "Schoolleiders" }
]

const themeStyles: Record<string, { bg: string, text: string, icon: string, accent: string }> = {
  keynote: { bg: "bg-gradient-to-br from-orange-light to-orange-light/50", text: "text-orange", icon: "bg-orange/20", accent: "bg-orange" },
  natuur: { bg: "bg-gradient-to-br from-green-light to-green-light/50", text: "text-green", icon: "bg-green/20", accent: "bg-green" },
  economie: { bg: "bg-gradient-to-br from-blue-light to-blue-light/50", text: "text-blue", icon: "bg-blue/20", accent: "bg-blue" },
  wetenschap: { bg: "bg-gradient-to-br from-blue-light to-cream", text: "text-blue", icon: "bg-blue/20", accent: "bg-blue" },
  beleid: { bg: "bg-gradient-to-br from-cream to-background", text: "text-secondary", icon: "bg-secondary/20", accent: "bg-secondary" },
  netwerk: { bg: "bg-gradient-to-br from-green-light to-cream", text: "text-green", icon: "bg-green/20", accent: "bg-green" }
}

export default function ProgrammaPage() {
  const [selectedTheme, setSelectedTheme] = useState("all")
  const [selectedAudience, setSelectedAudience] = useState("all")

  const filteredSessions = sessions.filter((session) => {
    const themeMatch = selectedTheme === "all" || session.theme === selectedTheme
    const audienceMatch = selectedAudience === "all" || session.audience === selectedAudience
    return themeMatch && audienceMatch
  })

  return (
    <div className="flex flex-col">
      {/* Hero - Flowing gradient */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-light via-orange-light/80 to-cream">
        {/* Animated background elements */}
        <div className="absolute -right-32 top-16 h-80 w-80 rounded-full bg-orange/10 blur-[100px]" style={{ animation: "pulse-soft 8s ease-in-out infinite" }} />
        <div className="absolute bottom-24 left-[5%] h-64 w-64 rounded-full bg-blue/10 blur-[80px]" style={{ animation: "pulse-soft 10s ease-in-out infinite", animationDelay: "2s" }} />
        
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 lg:px-6 lg:pb-24 lg:pt-20">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-2.5 text-sm font-medium text-orange shadow-sm backdrop-blur-sm">
              <Clock className="h-4 w-4" />
              12 juni 2026 | 09:00 - 17:00
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Programma
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Een dag vol inspirerende sessies, praktische workshops en waardevolle ontmoetingen. Ontdek wat er allemaal te doen is.
            </p>
          </div>
        </div>
        
        {/* Flowing curve */}
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="relative -mb-px block h-12 w-full md:h-16">
          <path d="M0,80 C480,0 960,80 1440,20 L1440,80 L0,80 Z" className="fill-background" />
        </svg>
      </section>

      {/* Filters - Floating card that bridges sections */}
      <section className="relative z-10 -mt-4 px-4 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] bg-white p-6 shadow-xl lg:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-12">
              {/* Theme filters */}
              <div className="flex-1">
                <p className="mb-3 text-sm font-medium text-muted-foreground">Filter op thema</p>
                <div className="flex flex-wrap gap-2">
                  {themes.map((theme) => {
                    const Icon = theme.icon
                    const isActive = selectedTheme === theme.value
                    return (
                      <button
                        key={theme.value}
                        onClick={() => setSelectedTheme(theme.value)}
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all ${
                          isActive 
                            ? "bg-secondary text-white shadow-md" 
                            : "bg-muted/50 text-muted-foreground hover:bg-secondary/10 hover:text-secondary"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {theme.label}
                      </button>
                    )
                  })}
                </div>
              </div>
              
              {/* Audience filters */}
              <div>
                <p className="mb-3 text-sm font-medium text-muted-foreground">Voor wie</p>
                <div className="flex flex-wrap gap-2">
                  {audiences.map((audience) => {
                    const isActive = selectedAudience === audience.value
                    return (
                      <button
                        key={audience.value}
                        onClick={() => setSelectedAudience(audience.value)}
                        className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all ${
                          isActive 
                            ? "bg-orange text-white shadow-md" 
                            : "bg-muted/50 text-muted-foreground hover:bg-orange/10 hover:text-orange"
                        }`}
                      >
                        {audience.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sessions - Timeline style with flowing connections */}
      <section className="relative px-4 py-12 lg:px-6 lg:py-16">
        {/* Background gradient flow */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-cream/30 to-green-light/30" />
        
        <div className="relative mx-auto max-w-6xl">
          <p className="mb-8 text-sm text-muted-foreground">
            {filteredSessions.length} {filteredSessions.length === 1 ? "sessie" : "sessies"} gevonden
          </p>
          
          {/* Timeline */}
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-orange via-blue to-green lg:left-24 lg:block" />
            
            <div className="flex flex-col gap-6">
              {filteredSessions.map((session, index) => {
                const style = themeStyles[session.theme]
                const isEven = index % 2 === 0
                
                return (
                  <div key={session.id} className="relative">
                    {/* Timeline dot */}
                    <div className={`absolute left-4 top-8 z-10 hidden h-5 w-5 rounded-full border-4 border-white shadow-md lg:left-[5.5rem] lg:block ${style.accent}`} />
                    
                    <Card 
                      className={`group overflow-hidden rounded-[2rem] border-0 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl lg:ml-32 ${style.bg}`}
                    >
                      <CardContent className="p-0">
                        <div className="flex flex-col">
                          {/* Header with time */}
                          <div className="flex items-center gap-4 border-b border-black/5 bg-white/40 p-5 backdrop-blur-sm">
                            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${style.icon}`}>
                              <Clock className={`h-5 w-5 ${style.text}`} />
                            </div>
                            <div className="flex-1">
                              <p className={`text-lg font-semibold ${style.text}`}>{session.time}</p>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="h-3.5 w-3.5" />
                                {session.location}
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <span className={`rounded-full bg-white/80 px-3 py-1 text-xs font-medium ${style.text}`}>
                                {session.theme.charAt(0).toUpperCase() + session.theme.slice(1)}
                              </span>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="p-6">
                            <h3 className="mb-3 font-serif text-xl font-semibold text-foreground lg:text-2xl">
                              {session.title}
                            </h3>
                            <p className="mb-4 leading-relaxed text-muted-foreground">
                              {session.description}
                            </p>
                            
                            {session.speaker && (
                              <div className="flex items-center gap-3 rounded-xl bg-white/60 p-3 backdrop-blur-sm">
                                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${style.icon}`}>
                                  <Users className={`h-5 w-5 ${style.text}`} />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-foreground">{session.speaker}</p>
                                  <p className="text-xs text-muted-foreground">
                                    {session.audience.charAt(0).toUpperCase() + session.audience.slice(1)}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>

          {filteredSessions.length === 0 && (
            <div className="rounded-[2rem] bg-white py-16 text-center shadow-lg">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cream">
                <Sparkles className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="mb-2 text-lg font-medium text-foreground">
                Geen sessies gevonden
              </p>
              <p className="mb-6 text-muted-foreground">
                Probeer andere filters te selecteren.
              </p>
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => {
                  setSelectedTheme("all")
                  setSelectedAudience("all")
                }}
              >
                Filters resetten
              </Button>
            </div>
          )}
        </div>
        
        {/* Bottom flow */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="h-10 w-full md:h-14">
            <path d="M0,60 C360,20 720,40 1080,10 S1440,30 1440,30 L1440,60 L0,60 Z" className="fill-cream" />
          </svg>
        </div>
      </section>

      {/* Bottom spacer */}
      <div className="h-8 bg-cream" />
    </div>
  )
}
