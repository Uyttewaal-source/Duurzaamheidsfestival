import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { AnimateIn } from "@/components/animate-in"

const organizers = [
  {
    name: "Eco-Schools",
    url: "https://eco-schools.nl/",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0MPmAxI5eJbGOyoiOMlkn1lx0PlvcG.png",
  },
  {
    name: "Leren voor Morgen",
    url: "https://lerenvoormorgen.org/",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sEZIs3qTI06GScihT4n2tktEitINmp.png",
  },
  {
    name: "Collectief Natuurinclusief",
    url: "https://collectiefnatuurinclusief.nl/",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9RpSJ8sUZUSu55nfXaIExZJY1QAQq9.png",
  },
  {
    name: "Gemeente Arnhem",
    url: "https://www.arnhem.nl/",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VyOLxbq7inP7DvaXnhiVqoLGdqU4Ym.png",
  },
]

export function OrganizersSection() {
  return (
    <section id="organisatoren" className="bg-white px-4 py-16 lg:px-6 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <h2 className="mb-4 text-center text-3xl font-bold text-green-primary md:text-4xl">
            Georganiseerd door
          </h2>
        </AnimateIn>
        <AnimateIn delay={80}>
          <p className="mx-auto mb-12 max-w-3xl text-center leading-relaxed text-dark-text/80">
            Het Duurzaamheidsfestival wordt georganiseerd door Eco-Schools, Leren voor Morgen, Collectief Natuurinclusief en de Gemeente Arnhem. Samen brengen zij onderwijs, natuur, duurzaamheid en samenleving bij elkaar rond het thema: De wereld is jouw klaslokaal.
          </p>
        </AnimateIn>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {organizers.map((org, index) => (
            <AnimateIn key={org.name} delay={index * 100}>
              <a
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:border-green-primary hover:shadow-lg"
              >
                <div className="relative mb-4 flex h-24 w-full items-center justify-center">
                  <Image
                    src={org.logo}
                    alt={org.name}
                    width={140}
                    height={80}
                    className="h-auto w-auto max-h-24 object-contain transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 text-center text-sm font-semibold text-dark-text">{org.name}</h3>
                <span className="flex items-center gap-1 text-xs text-dark-text/60 transition-colors group-hover:text-green-primary">
                  Bezoek website
                  <ExternalLink className="h-3 w-3" />
                </span>
              </a>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
