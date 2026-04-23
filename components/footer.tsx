import Link from "next/link"
import { Leaf, Mail, MapPin, ArrowRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Wave transition from page content */}
      <div className="bg-green-light/50">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="h-10 w-full md:h-14">
          <path d="M0,60 C360,20 720,40 1080,10 S1440,30 1440,30 L1440,60 L0,60 Z" className="fill-secondary" />
        </svg>
      </div>
      
      <div className="bg-secondary">
        {/* Decorative elements */}
        <div className="absolute -left-32 top-40 h-64 w-64 rounded-full bg-white/5" />
        <div className="absolute -right-20 bottom-20 h-48 w-48 rounded-full bg-white/5" />
        <div className="absolute left-1/3 top-1/2 h-4 w-4 rounded-full bg-orange/30" style={{ animation: "float-gentle 6s ease-in-out infinite" }} />
        <div className="absolute bottom-1/4 right-1/3 h-3 w-3 rounded-full bg-green/30" style={{ animation: "float-gentle 5s ease-in-out infinite", animationDelay: "1s" }} />
        
        {/* Partner Logos */}
        <div className="relative border-b border-white/10 px-4 py-12 lg:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="mb-8 text-center text-sm font-medium text-white/60">
              Een initiatief van
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <div className="group flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all group-hover:bg-white/20">
                  <span className="text-xl font-bold text-white">ES</span>
                </div>
                <span className="text-sm text-white/70">Eco-Schools</span>
              </div>
              <div className="group flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all group-hover:bg-white/20">
                  <span className="text-xl font-bold text-white">LvM</span>
                </div>
                <span className="text-sm text-white/70">Leren voor Morgen</span>
              </div>
              <div className="group flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all group-hover:bg-white/20">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <span className="text-sm text-white/70">Collectief Natuurinclusief</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="relative px-4 py-12 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {/* Brand */}
              <div className="lg:col-span-1">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-serif text-lg font-bold text-white">
                    Duurzaamheidsfestival
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  De wereld is je klaslokaal - samen werken aan duurzaam onderwijs.
                </p>
              </div>
              
              {/* Contact */}
              <div>
                <h3 className="mb-4 font-serif text-lg font-semibold text-white">
                  Contact
                </h3>
                <ul className="flex flex-col gap-3 text-sm text-white/70">
                  <li>
                    <a href="mailto:info@duurzaamheidsfestival.nl" className="flex items-center gap-2 transition-colors hover:text-white">
                      <Mail className="h-4 w-4" />
                      info@duurzaamheidsfestival.nl
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>De Nieuwe Liefde<br />Amsterdam</span>
                  </li>
                </ul>
              </div>
              
              {/* Navigation */}
              <div>
                <h3 className="mb-4 font-serif text-lg font-semibold text-white">
                  Navigatie
                </h3>
                <ul className="flex flex-col gap-2 text-sm text-white/70">
                  <li>
                    <Link href="/programma" className="transition-colors hover:text-white">Programma</Link>
                  </li>
                  <li>
                    <Link href="/sprekers" className="transition-colors hover:text-white">Sprekers</Link>
                  </li>
                  <li>
                    <Link href="/praktisch" className="transition-colors hover:text-white">Praktische info</Link>
                  </li>
                  <li>
                    <Link href="/faq" className="transition-colors hover:text-white">FAQ</Link>
                  </li>
                </ul>
              </div>
              
              {/* CTA */}
              <div>
                <h3 className="mb-4 font-serif text-lg font-semibold text-white">
                  Doe mee
                </h3>
                <p className="mb-4 text-sm text-white/70">
                  Meld je aan voor 12 juni 2026 en maak deel uit van de beweging.
                </p>
                <Button asChild className="rounded-full bg-orange shadow-lg shadow-orange/25 hover:bg-orange/90">
                  <Link href="/aanmelden">
                    Aanmelden
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="relative border-t border-white/10 px-4 py-6 lg:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="flex items-center justify-center gap-1 text-center text-sm text-white/50">
              &copy; {new Date().getFullYear()} Duurzaamheidsfestival. Gemaakt met 
              <Heart className="h-3 w-3 text-orange" /> 
              voor duurzaam onderwijs.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
