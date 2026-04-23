import { Card, CardContent } from "@/components/ui/card"
import { User, Mail, ArrowRight, Sparkles, Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const speakers = [
  {
    id: 1,
    name: "Prof. dr. Anna de Vries",
    role: "Hoogleraar Duurzame Educatie",
    organization: "Universiteit Utrecht",
    bio: "Anna is een vooraanstaand expert op het gebied van duurzaamheid in het onderwijs. Ze onderzoekt hoe scholen kunnen bijdragen aan de transitie naar een duurzame samenleving.",
    color: "from-orange-light to-orange-light/30",
    accent: "bg-orange/20",
    textColor: "text-orange",
    featured: true
  },
  {
    id: 2,
    name: "Mark Janssen",
    role: "Oprichter Groene Schoolpleinen",
    organization: "Stichting Groene Schoolpleinen",
    bio: "Mark helpt al meer dan 10 jaar scholen bij het vergroenen van hun buitenruimte. Hij gelooft dat elk kind toegang moet hebben tot natuur op school.",
    color: "from-green-light to-cream",
    accent: "bg-green/20",
    textColor: "text-green",
    featured: false
  },
  {
    id: 3,
    name: "Lisa van den Berg",
    role: "Curriculum Ontwikkelaar",
    organization: "Leren voor Morgen",
    bio: "Lisa ontwikkelt lesmateriaal dat circulaire economie toegankelijk maakt voor alle leeftijden. Ze combineert theorie met praktische toepassingen.",
    color: "from-blue-light to-blue-light/30",
    accent: "bg-blue/20",
    textColor: "text-blue",
    featured: false
  },
  {
    id: 4,
    name: "Dr. Eva Mulder",
    role: "Wetenschapper & Educator",
    organization: "RIVM",
    bio: "Eva verbindt wetenschap met onderwijs door middel van burgerwetenschapsprojecten. Ze laat leerlingen echte data verzamelen voor wetenschappelijk onderzoek.",
    color: "from-cream to-green-light/30",
    accent: "bg-secondary/20",
    textColor: "text-secondary",
    featured: false
  },
  {
    id: 5,
    name: "Peter de Groot",
    role: "Directeur Duurzame Scholen",
    organization: "Stichting Eco-Schools Nederland",
    bio: "Peter begeleidt scholen naar het Eco-Schools keurmerk. Hij heeft meer dan 200 scholen geholpen bij het verduurzamen van hun onderwijs en organisatie.",
    color: "from-orange-light/80 to-cream",
    accent: "bg-orange/20",
    textColor: "text-orange",
    featured: false
  },
  {
    id: 6,
    name: "Sophie Bakker",
    role: "Pedagoog & Natuurcoach",
    organization: "Collectief Natuurinclusief",
    bio: "Sophie specialiseert zich in natuureducatie voor jonge kinderen. Ze ontwikkelt methodieken om peuters en kleuters in contact te brengen met de natuur.",
    color: "from-green-light/80 to-blue-light/30",
    accent: "bg-green/20",
    textColor: "text-green",
    featured: false
  },
  {
    id: 7,
    name: "Dr. Mohamed El-Amrani",
    role: "Toekomstdenker & Auteur",
    organization: "Onafhankelijk",
    bio: "Mohamed schrijft en spreekt over de toekomst van onderwijs. Zijn boek &apos;Leren voor 2050&apos; is verplichte kost voor iedereen die werkt aan onderwijsinnovatie.",
    color: "from-blue-light/80 to-orange-light/30",
    accent: "bg-blue/20",
    textColor: "text-blue",
    featured: true
  },
  {
    id: 8,
    name: "Karen Visser",
    role: "Programmamanager",
    organization: "GreenPort West-Holland",
    bio: "Karen bouwt bruggen tussen onderwijs en bedrijfsleven in de tuinbouwsector. Ze ontwikkelt stages en projecten waarin leerlingen werken aan echte duurzaamheidsvraagstukken.",
    color: "from-cream to-green-light/30",
    accent: "bg-secondary/20",
    textColor: "text-secondary",
    featured: false
  }
]

export default function SprekersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero - Flowing gradient */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-light via-blue-light/80 to-cream">
        {/* Animated background */}
        <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-blue/10 blur-[100px]" style={{ animation: "pulse-soft 8s ease-in-out infinite" }} />
        <div className="absolute bottom-20 right-[5%] h-64 w-64 rounded-full bg-green/10 blur-[80px]" style={{ animation: "pulse-soft 10s ease-in-out infinite", animationDelay: "2s" }} />
        
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 lg:px-6 lg:pb-24 lg:pt-20">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-2.5 text-sm font-medium text-blue shadow-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Inspirerende mensen
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Sprekers
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Maak kennis met de experts, pioniers en praktijkmensen die het festival tot een inspirerende dag maken.
            </p>
          </div>
        </div>
        
        {/* Flowing curve */}
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="relative -mb-px block h-12 w-full md:h-16">
          <path d="M0,80 C360,20 720,60 1080,10 S1440,40 1440,40 L1440,80 L0,80 Z" className="fill-background" />
        </svg>
      </section>

      {/* Featured speakers - Large cards */}
      <section className="relative px-4 py-12 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
            Keynote sprekers
          </h2>
          
          <div className="mb-12 grid gap-6 md:grid-cols-2">
            {speakers.filter(s => s.featured).map((speaker, index) => (
              <Card 
                key={speaker.id} 
                className={`group relative overflow-hidden rounded-[2rem] border-0 bg-gradient-to-br ${speaker.color} shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl`}
              >
                {/* Decorative elements */}
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/20" />
                <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/10" />
                
                <CardContent className="relative p-8 lg:p-10">
                  <div className="mb-6 flex items-start gap-5">
                    <div className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-[1.5rem] bg-white shadow-md ${speaker.textColor}`}>
                      <User className="h-12 w-12" />
                    </div>
                    <div className="pt-2">
                      <h3 className="font-serif text-2xl font-bold text-foreground">
                        {speaker.name}
                      </h3>
                      <p className={`text-sm font-semibold ${speaker.textColor}`}>
                        {speaker.role}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {speaker.organization}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {speaker.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All speakers - Flowing grid with varied backgrounds */}
      <section className="relative overflow-hidden px-4 pb-8 pt-0 lg:px-6">
        {/* Background gradient flow */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-cream/50 to-green-light/30" />
        
        <div className="relative mx-auto max-w-6xl">
          <h2 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
            Workshop leiders
          </h2>
          
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {speakers.filter(s => !s.featured).map((speaker, index) => (
              <Card 
                key={speaker.id} 
                className={`group relative overflow-hidden rounded-[1.5rem] border-0 bg-gradient-to-br ${speaker.color} shadow-md transition-all hover:-translate-y-1 hover:shadow-lg`}
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start gap-4">
                    <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ${speaker.textColor}`}>
                      <User className="h-8 w-8" />
                    </div>
                    <div className="min-w-0 pt-1">
                      <h3 className="font-serif text-lg font-bold text-foreground">
                        {speaker.name}
                      </h3>
                      <p className={`text-sm font-medium ${speaker.textColor}`}>
                        {speaker.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-3 inline-block rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                    {speaker.organization}
                  </div>
                  
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {speaker.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Transition to CTA */}
        <div className="relative mt-16">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-12 w-full md:h-16">
            <path d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z" className="fill-cream" />
          </svg>
        </div>
      </section>

      {/* Become a Speaker CTA */}
      <section className="relative overflow-hidden bg-cream px-4 pb-8 pt-4 lg:px-6">
        <div className="relative mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-secondary via-secondary to-blue p-1">
            <div className="rounded-[2.3rem] bg-white p-8 text-center lg:p-12">
              {/* Decorative */}
              <div className="absolute -left-8 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-secondary/10 blur-2xl" />
              <div className="absolute -right-8 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-orange/10 blur-2xl" />
              
              <div className="relative">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-secondary/20 to-blue/20">
                  <Mail className="h-10 w-10 text-secondary" />
                </div>
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                  Wil je ook spreken?
                </h2>
                <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
                  Heb je een inspirerend verhaal of praktijkervaring die je wilt delen? We zijn altijd op zoek naar nieuwe stemmen in het duurzaamheidsonderwijs.
                </p>
                <Button asChild size="lg" className="rounded-full bg-secondary px-8 shadow-lg shadow-secondary/25 hover:bg-secondary/90">
                  <a href="mailto:sprekers@duurzaamheidsfestival.nl">
                    Neem contact op
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick link to program - Flows into footer */}
      <section className="bg-gradient-to-b from-cream to-green-light/50 px-4 py-12 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-white p-8 shadow-lg md:flex-row lg:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange/10">
                <Heart className="h-7 w-7 text-orange" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Benieuwd naar de sessies?
                </h3>
                <p className="text-muted-foreground">
                  Bekijk het volledige programma met alle workshops en keynotes.
                </p>
              </div>
            </div>
            <Button asChild className="shrink-0 rounded-full bg-orange px-8 shadow-md shadow-orange/20 hover:bg-orange/90">
              <Link href="/programma">
                Naar het programma
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
