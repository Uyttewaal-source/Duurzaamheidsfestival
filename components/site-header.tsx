"use client"

import { useState } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { href: "#intro", label: "Over" },
  { href: "#praktische-info", label: "Praktisch" },
  { href: "#verwachtingen", label: "Programma" },
  { href: "#organisatoren", label: "Organisatoren" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-6">
        <a href="#" className="flex items-center gap-2">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DUURZAAMHEIDS%20FESTIAVL-JZPXtBKIEgkc6XFNuRgA2Xo.jpg"
            alt="Duurzaamheidsfestival"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-green-primary hover:bg-green-soft"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="ml-2 rounded-full bg-red-primary hover:bg-red-primary/90 text-white">
            <a href="https://www.tickettailor.com/events/duurzaamheidsfestival/2158917">
              Schrijf je in
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-soft md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Sluit menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="h-5 w-5 text-green-primary" />
          ) : (
            <Menu className="h-5 w-5 text-green-primary" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-6 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-green-soft"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-4 rounded-full bg-red-primary hover:bg-red-primary/90 text-white">
              <a 
                href="https://www.tickettailor.com/events/duurzaamheidsfestival/2158917" 
                onClick={() => setIsOpen(false)}
              >
                Schrijf je in
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
