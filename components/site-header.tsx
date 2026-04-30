"use client"

import { useState } from "react"
import { Menu, X, Leaf, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#intro", label: "Over" },
  { href: "#praktische-info", label: "Praktisch" },
  { href: "#verwachtingen", label: "Programma" },
  { href: "#organisatoren", label: "Organisatoren" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-turquoise shadow-sm">
            <Leaf className="h-6 w-6 text-white" />
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-foreground">
              Duurzaamheidsfestival
            </span>
            <span className="block text-xs text-muted-foreground">30 september</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-turquoise-light hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="ml-2 rounded-full bg-orange hover:bg-orange/90">
            <a href="https://www.tickettailor.com/events/duurzaamheidsfestival/2158917">
              Schrijf je in
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-turquoise-light md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Sluit menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border/50 bg-background px-4 py-6 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-turquoise-light"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-4 rounded-full bg-orange hover:bg-orange/90">
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
