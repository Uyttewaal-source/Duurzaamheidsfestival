import { ExternalLink } from "lucide-react"

const organizers = [
  {
    name: "Eco-Schools",
    url: "https://eco-schools.nl/",
    initials: "ES",
    color: "bg-turquoise-light text-turquoise",
  },
  {
    name: "Leren voor Morgen",
    url: "https://lerenvoormorgen.org/",
    initials: "LvM",
    color: "bg-orange-light text-orange",
  },
  {
    name: "Collectief Natuurinclusief",
    url: "https://collectiefnatuurinclusief.nl/",
    initials: "CN",
    color: "bg-green-light text-green",
  },
  {
    name: "Gemeente Arnhem",
    url: "https://www.arnhem.nl/",
    initials: "GA",
    color: "bg-turquoise-light text-turquoise",
  },
]

export function OrganizersSection() {
  return (
    <section id="organisatoren" className="bg-muted/30 px-4 py-16 lg:px-6 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Georganiseerd door
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Het Duurzaamheidsfestival wordt georganiseerd door Eco-Schools, Leren voor Morgen, Collectief Natuurinclusief en de Gemeente Arnhem. Samen brengen zij onderwijs, natuur, duurzaamheid en samenleving bij elkaar rond het thema: De wereld is jouw klaslokaal.
        </p>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {organizers.map((org) => (
            <a
              key={org.name}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-border bg-background p-6 transition-all hover:border-turquoise hover:shadow-lg"
            >
              <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-xl ${org.color} font-bold transition-transform group-hover:scale-110`}>
                {org.initials}
              </div>
              <h3 className="mb-2 text-center font-semibold text-foreground">{org.name}</h3>
              <span className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-turquoise">
                Bezoek website
                <ExternalLink className="h-3 w-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
