"use client"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown, Clock, MapPin, Users } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import type { Theme, Workshop } from "@/lib/workshops"
import { getWorkshopSchedule } from "@/lib/zaalindeling"

// Thema-tags blijven binnen de huisstijl (green-soft / red-soft).
const themeTagStyles: Record<Theme, string> = {
  "Natuur & buiten leren": "bg-green-soft text-green-primary",
  "Klimaat & voedsel": "bg-green-soft text-green-primary",
  "Circulair & afval": "bg-red-soft text-red-primary",
  "Beleid & curriculum": "bg-red-soft text-red-primary",
  "Spel & ontmoeting": "bg-green-soft text-green-primary",
}

const INITIAL_STOPWORDS = new Set(["van", "de", "der", "den", "het", "en", "&", "voor", "of", "the"])

function getInitials(name: string): string {
  const words = name
    .replace(/[^\p{L}\s'-]/gu, " ")
    .split(/\s+/)
    .filter((word) => word.length > 0 && !INITIAL_STOPWORDS.has(word.toLowerCase()))
  const letters = words.slice(0, 2).map((word) => word[0]?.toUpperCase() ?? "")
  return letters.join("") || name.slice(0, 1).toUpperCase()
}

export function WorkshopCard({ workshop }: { workshop: Workshop }) {
  const speakerNames = workshop.speakers.map((speaker) => speaker.name).join(", ")

  const schedule = getWorkshopSchedule(workshop.id)
  const roundLabel = schedule
    ? schedule.rounds.length > 1
      ? `Ronde ${schedule.rounds.join(" & ")}`
      : `Ronde ${schedule.rounds[0]}`
    : null
  const timeLabel = schedule
    ? schedule.times.length > 1
      ? `${schedule.times.slice(0, -1).join(", ")} en ${schedule.times[schedule.times.length - 1]}`
      : schedule.times[0]
    : null

  return (
    <AccordionPrimitive.Item
      value={workshop.id}
      className="group h-fit overflow-hidden rounded-2xl border border-green-soft bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md data-[state=open]:border-green-primary/40 data-[state=open]:shadow-md"
    >
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger className="flex min-h-40 w-full flex-1 flex-col gap-3 rounded-2xl p-6 text-left outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-green-primary/50">
          <div className="flex items-start justify-between gap-3">
            <span
              className={cn(
                "inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium",
                themeTagStyles[workshop.theme],
              )}
            >
              {workshop.theme}
            </span>
            <ChevronDown className="mt-0.5 size-5 shrink-0 text-green-primary transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </div>
          <h3 className="text-lg font-semibold leading-snug text-dark-text">{workshop.title}</h3>
          <div className="mt-auto flex flex-col gap-2">
            <p className="flex items-start gap-2 text-sm text-dark-text/60">
              <Users className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{speakerNames}</span>
            </p>
            {schedule && (
              <p className="flex items-start gap-2 text-sm text-dark-text/50">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>
                  {roundLabel} · {schedule.location}
                </span>
              </p>
            )}
          </div>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>

      <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className="flex flex-col gap-5 px-6 pb-6">
          <p className="whitespace-pre-line text-sm leading-relaxed text-dark-text/80">{workshop.description}</p>

          {schedule && (
            <div className="flex flex-col gap-2 rounded-xl bg-green-soft/40 p-4 text-sm">
              <p className="flex items-center gap-2 text-dark-text">
                <Clock className="size-4 shrink-0 text-green-primary" aria-hidden="true" />
                <span>
                  {roundLabel} · {timeLabel}
                </span>
              </p>
              <p className="flex items-center gap-2 text-dark-text">
                <MapPin className="size-4 shrink-0 text-green-primary" aria-hidden="true" />
                <span>
                  {schedule.location}
                  {schedule.capacity ? ` · ${schedule.capacity}` : ""}
                </span>
              </p>
            </div>
          )}

          <p className="text-sm">
            <span className="font-medium text-dark-text">Voor wie: </span>
            <span className="text-dark-text/70">{workshop.audience}</span>
          </p>

          <div className="border-t border-green-soft pt-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-dark-text/50">
              {workshop.speakers.length > 1 ? "Sprekers" : "Spreker"}
            </p>
            <ul className="flex flex-col gap-3">
              {workshop.speakers.map((speaker) => (
                <li key={speaker.name} className="flex items-start gap-3">
                  <Avatar className="size-9 border border-green-soft">
                    <AvatarFallback className="bg-green-soft text-xs font-semibold text-green-primary">
                      {getInitials(speaker.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-dark-text">{speaker.name}</p>
                    {speaker.role && <p className="text-sm text-dark-text/60">{speaker.role}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  )
}
