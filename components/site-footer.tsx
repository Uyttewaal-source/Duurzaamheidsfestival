import { Leaf, Heart, ExternalLink } from "lucide-react"

const organizers = [
  { name: "Eco-Schools", url: "https://eco-schools.nl/" },
  { name: "Leren voor Morgen", url: "https://lerenvoormorgen.org/" },
  { name: "Collectief Natuurinclusief", url: "https://collectiefnatuurinclusief.nl/" },
  { name: "Gemeente Arnhem", url: "https://www.arnhem.nl/" },
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer Content */}
      <div className="px-4 py-12 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Brand */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-turquoise">
                  <Leaf className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-background">
                  Duurzaamheidsfestival
                </span>
              </div>
              <p className="text-sm leading-relaxed text-background/70">
                De wereld is jouw klaslokaal - samen werken aan duurzaam onderwijs.
              </p>
            </div>

            {/* Navigatie */}
            <div>
              <h3 className="mb-4 font-semibold text-background">
                Op deze pagina
              </h3>
              <ul className="flex flex-col gap-2 text-sm text-background/70">
                <li>
                  <a href="#intro" className="transition-colors hover:text-background">Over het festival</a>
                </li>
                <li>
                  <a href="#praktische-info" className="transition-colors hover:text-background">Praktische informatie</a>
                </li>
                <li>
                  <a href="#verwachtingen" className="transition-colors hover:text-background">Wat kun je verwachten</a>
                </li>
                <li>
                  <a href="#organisatoren" className="transition-colors hover:text-background">Organisatoren</a>
                </li>
              </ul>
            </div>

            {/* Organisatoren */}
            <div>
              <h3 className="mb-4 font-semibold text-background">
                Organisatoren
              </h3>
              <ul className="flex flex-col gap-2 text-sm text-background/70">
                {organizers.map((org) => (
                  <li key={org.name}>
                    <a 
                      href={org.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:text-background"
                    >
                      {org.name}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10 px-4 py-6 lg:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="flex flex-wrap items-center justify-center gap-1 text-center text-sm text-background/50">
            {new Date().getFullYear()} Duurzaamheidsfestival. Gemaakt met 
            <Heart className="h-3 w-3 text-orange" /> 
            voor duurzaam onderwijs.
          </p>
        </div>
      </div>
    </footer>
  )
}
