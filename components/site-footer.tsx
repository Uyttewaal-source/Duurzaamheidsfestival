import { Heart, ExternalLink } from "lucide-react"
import Image from "next/image"

const organizers = [
  { name: "Eco-Schools", url: "https://eco-schools.nl/" },
  { name: "Leren voor Morgen", url: "https://lerenvoormorgen.org/" },
  { name: "Collectief Natuurinclusief", url: "https://collectiefnatuurinclusief.nl/" },
  { name: "Gemeente Arnhem", url: "https://www.arnhem.nl/" },
]

export function SiteFooter() {
  return (
    <footer className="bg-dark-text text-white">
      {/* Main Footer Content */}
      <div className="px-4 py-12 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Brand */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DUURZAAMHEIDS%20FESTIAVL-JZPXtBKIEgkc6XFNuRgA2Xo.jpg"
                  alt="Duurzaamheidsfestival"
                  width={120}
                  height={40}
                  className="h-auto w-32"
                />
              </div>
              <p className="text-sm leading-relaxed text-white/70">
                De wereld is jouw klaslokaal - samen werken aan duurzaam onderwijs.
              </p>
            </div>

            {/* Navigatie */}
            <div>
              <h3 className="mb-4 font-semibold text-white">
                Op deze pagina
              </h3>
              <ul className="flex flex-col gap-2 text-sm text-white/70">
                <li>
                  <a href="#intro" className="transition-colors hover:text-white">Over het festival</a>
                </li>
                <li>
                  <a href="#praktische-info" className="transition-colors hover:text-white">Praktische informatie</a>
                </li>
                <li>
                  <a href="#verwachtingen" className="transition-colors hover:text-white">Wat kun je verwachten</a>
                </li>
                <li>
                  <a href="#organisatoren" className="transition-colors hover:text-white">Organisatoren</a>
                </li>
              </ul>
            </div>

            {/* Organisatoren */}
            <div>
              <h3 className="mb-4 font-semibold text-white">
                Organisatoren
              </h3>
              <ul className="flex flex-col gap-2 text-sm text-white/70">
                {organizers.map((org) => (
                  <li key={org.name}>
                    <a 
                      href={org.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:text-white"
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
      <div className="border-t border-white/10 px-4 py-6 lg:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="flex flex-wrap items-center justify-center gap-1 text-center text-sm text-white/50">
            {new Date().getFullYear()} Duurzaamheidsfestival. Gemaakt met 
            <Heart className="h-3 w-3 text-red-primary" /> 
            voor duurzaam onderwijs.
          </p>
        </div>
      </div>
    </footer>
  )
}
