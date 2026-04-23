"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Check, Users, Sparkles, MapPin, ArrowRight, PartyPopper } from "lucide-react"
import { WaveDivider } from "@/components/wave-divider"
import Link from "next/link"

export default function AanmeldenPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col overflow-hidden">
        <section className="relative flex min-h-[80vh] items-center justify-center bg-green-light px-4 py-16 lg:px-6">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full bg-orange/20 blur-2xl" />
            <div className="absolute right-[15%] top-[30%] h-48 w-48 rounded-full bg-blue/20 blur-3xl" />
            <div className="absolute bottom-[20%] left-[30%] h-40 w-40 rounded-full bg-green/30 blur-2xl" />
          </div>
          
          <Card className="relative overflow-hidden rounded-[2.5rem] border-0 bg-white shadow-2xl">
            <CardContent className="p-8 text-center lg:p-12">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green/20">
                <PartyPopper className="h-12 w-12 text-green" />
              </div>
              <h1 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Hoera, je bent aangemeld!
              </h1>
              <p className="mb-8 text-muted-foreground">
                Je ontvangt binnen enkele minuten een bevestigingsmail met verdere informatie. We kijken ernaar uit je te ontmoeten op 12 juni 2026!
              </p>
              <div className="mb-8 flex items-center justify-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange" />
                <div className="h-2 w-2 rounded-full bg-blue" />
                <div className="h-2 w-2 rounded-full bg-green" />
              </div>
              <Button asChild size="lg" className="rounded-full bg-secondary px-8 hover:bg-secondary/90">
                <Link href="/">
                  Terug naar home
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    )
  }

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-orange-light px-4 pb-24 pt-16 lg:px-6 lg:pb-32 lg:pt-20">
        <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-orange/20 blur-3xl" />
        <div className="absolute bottom-32 left-[10%] h-48 w-48 rounded-full bg-green/10 blur-3xl" />
        
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-orange shadow-sm">
              <Sparkles className="h-4 w-4" />
              Schrijf je in!
            </div>
            <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Aanmelden
            </h1>
            <p className="text-lg text-muted-foreground">
              Meld je aan voor het Duurzaamheidsfestival 2026 en zet de eerste stap naar inspirerend duurzaam onderwijs.
            </p>
          </div>
        </div>
        
        <WaveDivider fill="fill-background" className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* Registration Form */}
      <section className="px-4 py-12 lg:px-6 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden rounded-3xl border-0 shadow-lg">
                <CardContent className="p-6 lg:p-8">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="firstName" className="font-medium">Voornaam *</Label>
                        <Input id="firstName" required placeholder="Je voornaam" className="rounded-xl border-2 bg-background transition-colors focus:border-secondary" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="lastName" className="font-medium">Achternaam *</Label>
                        <Input id="lastName" required placeholder="Je achternaam" className="rounded-xl border-2 bg-background transition-colors focus:border-secondary" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email" className="font-medium">E-mailadres *</Label>
                      <Input id="email" type="email" required placeholder="je@email.nl" className="rounded-xl border-2 bg-background transition-colors focus:border-secondary" />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="organization" className="font-medium">School / Organisatie</Label>
                      <Input id="organization" placeholder="Naam van je school of organisatie" className="rounded-xl border-2 bg-background transition-colors focus:border-secondary" />
                    </div>
                    
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="role" className="font-medium">Functie</Label>
                        <Input id="role" placeholder="Bijv. docent, schoolleider" className="rounded-xl border-2 bg-background transition-colors focus:border-secondary" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="dietary" className="font-medium">Dieetwensen</Label>
                        <Input id="dietary" placeholder="Veganistisch, glutenvrij, etc." className="rounded-xl border-2 bg-background transition-colors focus:border-secondary" />
                      </div>
                    </div>

                    <div className="rounded-2xl bg-cream p-6">
                      <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">
                        Kies je ticket
                      </h3>
                      <div className="flex flex-col gap-3">
                        <label className="group flex cursor-pointer items-center gap-4 rounded-2xl border-2 border-transparent bg-white p-4 transition-all hover:border-orange/50 has-[:checked]:border-orange has-[:checked]:shadow-md">
                          <input type="radio" name="ticket" value="early" defaultChecked className="h-5 w-5 text-orange accent-orange" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-foreground">Early Bird</span>
                              <span className="rounded-full bg-orange/10 px-2 py-0.5 text-xs font-medium text-orange">Tot 1 april</span>
                            </div>
                            <p className="text-sm text-muted-foreground">Inclusief lunch, koffie/thee en borrel</p>
                          </div>
                          <span className="text-xl font-bold text-orange">€75</span>
                        </label>
                        
                        <label className="group flex cursor-pointer items-center gap-4 rounded-2xl border-2 border-transparent bg-white p-4 transition-all hover:border-secondary/50 has-[:checked]:border-secondary has-[:checked]:shadow-md">
                          <input type="radio" name="ticket" value="regular" className="h-5 w-5 text-secondary accent-secondary" />
                          <div className="flex-1">
                            <span className="font-semibold text-foreground">Regulier</span>
                            <p className="text-sm text-muted-foreground">Inclusief lunch, koffie/thee en borrel</p>
                          </div>
                          <span className="text-xl font-bold text-secondary">€95</span>
                        </label>
                        
                        <label className="group flex cursor-pointer items-center gap-4 rounded-2xl border-2 border-transparent bg-white p-4 transition-all hover:border-green/50 has-[:checked]:border-green has-[:checked]:shadow-md">
                          <input type="radio" name="ticket" value="student" className="h-5 w-5 text-green accent-green" />
                          <div className="flex-1">
                            <span className="font-semibold text-foreground">Student / Gepensioneerd</span>
                            <p className="text-sm text-muted-foreground">Met geldige pas, inclusief lunch en borrel</p>
                          </div>
                          <span className="text-xl font-bold text-green">€50</span>
                        </label>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-2xl bg-blue-light p-4">
                      <input type="checkbox" id="terms" required className="mt-0.5 h-5 w-5 rounded accent-secondary" />
                      <Label htmlFor="terms" className="text-sm font-normal text-muted-foreground">
                        Ik ga akkoord met de algemene voorwaarden en het privacybeleid *
                      </Label>
                    </div>

                    <Button type="submit" size="lg" className="rounded-full bg-orange text-lg hover:bg-orange/90">
                      Meld je aan
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              <Card className="overflow-hidden rounded-3xl border-0 bg-green-light shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Calendar className="h-7 w-7 text-green" />
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">Datum & Locatie</h3>
                  <p className="font-medium text-foreground">12 juni 2026</p>
                  <div className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>De Nieuwe Liefde<br />Da Costakade 102<br />Amsterdam</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden rounded-3xl border-0 bg-blue-light shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Users className="h-7 w-7 text-blue" />
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">Groepskorting</h3>
                  <p className="text-sm text-muted-foreground">
                    Kom je met 5 of meer collega&apos;s? Ontvang <span className="font-semibold text-blue">10% korting</span>! Neem contact op voor een groepscode.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden rounded-3xl border-0 bg-white shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">
                    Dit is inbegrepen
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {[
                      "Toegang tot alle sessies",
                      "Vegetarische lunch",
                      "Koffie, thee & versnaperingen",
                      "Afsluitende borrel",
                      "Certificaat van deelname",
                      "Toegang tot opnames keynotes"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green/20">
                          <Check className="h-3.5 w-3.5 text-green" />
                        </div>
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
