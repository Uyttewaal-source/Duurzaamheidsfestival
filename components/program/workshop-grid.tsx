"use client"

import { useMemo, useState } from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Search, SlidersHorizontal } from "lucide-react"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { THEMES, workshops, type Theme } from "@/lib/workshops"
import { WorkshopCard } from "./workshop-card"

type Filter = Theme | "all"

function matchesQuery(workshop: (typeof workshops)[number], query: string): boolean {
  if (!query) return true
  const haystack = [
    workshop.title,
    workshop.theme,
    workshop.description,
    workshop.audience,
    ...workshop.speakers.flatMap((speaker) => [speaker.name, speaker.role ?? ""]),
  ]
    .join(" ")
    .toLowerCase()
  return haystack.includes(query.trim().toLowerCase())
}

export function WorkshopGrid() {
  const [query, setQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState<Filter>("all")

  const filtered = useMemo(
    () =>
      workshops.filter(
        (workshop) => (activeFilter === "all" || workshop.theme === activeFilter) && matchesQuery(workshop, query),
      ),
    [query, activeFilter],
  )

  const filters: Filter[] = ["all", ...THEMES]

  return (
    <div className="flex flex-col gap-8">
      {/* Zoeken + filteren */}
      <div className="flex flex-col gap-5">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-dark-text/40"
            aria-hidden="true"
          />
          <Input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Zoek op titel, spreker of onderwerp…"
            aria-label="Zoek in het workshopprogramma"
            className="h-12 rounded-full border-green-soft bg-white pl-12 text-base shadow-sm focus-visible:ring-green-primary/50"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 inline-flex items-center gap-1.5 text-sm font-medium text-dark-text/60">
            <SlidersHorizontal className="size-4" aria-hidden="true" />
            Thema:
          </span>
          {filters.map((filter) => {
            const isActive = activeFilter === filter
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-green-primary/50",
                  isActive
                    ? "bg-green-primary text-white"
                    : "bg-green-soft text-green-primary hover:bg-green-primary/15",
                )}
              >
                {filter === "all" ? "Alle workshops" : filter}
              </button>
            )
          })}
        </div>
      </div>

      <p className="text-sm text-dark-text/60" aria-live="polite">
        {filtered.length === workshops.length
          ? `${workshops.length} workshops`
          : `${filtered.length} van ${workshops.length} workshops`}
      </p>

      {/* Kaarten — max. één kaart tegelijk open (type="single" collapsible) */}
      {filtered.length > 0 ? (
        <AccordionPrimitive.Root
          type="single"
          collapsible
          className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </AccordionPrimitive.Root>
      ) : (
        <div className="rounded-2xl border border-dashed border-green-soft bg-white p-12 text-center">
          <p className="text-dark-text/70">
            Geen workshops gevonden voor deze zoekopdracht.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("")
              setActiveFilter("all")
            }}
            className="mt-3 text-sm font-medium text-green-primary underline-offset-4 hover:underline"
          >
            Filters wissen
          </button>
        </div>
      )}
    </div>
  )
}
