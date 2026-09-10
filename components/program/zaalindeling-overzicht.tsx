"use client"

import { useState } from "react"
import { ChevronDown, Clock, MapPin } from "lucide-react"

import { ROUND_TIMES, slotsForRound, type Round } from "@/lib/zaalindeling"

const ROUNDS: Round[] = [1, 2]

export function ZaalindelingOverzicht() {
  const [open, setOpen] = useState(false)

  return (
    <div className="overflow-hidden rounded-2xl border border-green-soft bg-white">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="zaalindeling-inhoud"
        className="flex w-full items-center justify-between gap-4 p-5 text-left outline-none transition-colors hover:bg-green-soft/30 focus-visible:ring-[3px] focus-visible:ring-green-primary/50 lg:p-6"
      >
        <span>
          <span className="block text-lg font-semibold text-dark-text">Zaalindeling per ronde</span>
          <span className="mt-0.5 block text-sm text-dark-text/60">
            Bekijk in welke zaal elke workshop plaatsvindt
          </span>
        </span>
        <ChevronDown
          className={`size-5 shrink-0 text-green-primary transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <div id="zaalindeling-inhoud" hidden={!open} className="border-t border-green-soft px-5 pb-6 pt-2 lg:px-6">
        {ROUNDS.map((round) => (
          <div key={round} className="mt-4">
            <h3 className="mb-3 flex items-center gap-2 font-semibold text-green-primary">
              <Clock className="size-4 shrink-0" aria-hidden="true" />
              Ronde {round} · {ROUND_TIMES[round]}
            </h3>
            <ul className="divide-y divide-green-soft overflow-hidden rounded-xl border border-green-soft">
              {slotsForRound(round).map((slot) => (
                <li
                  key={`${round}-${slot.title}`}
                  className="flex flex-col gap-1 p-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
                >
                  <div className="min-w-0">
                    <p className="font-medium text-dark-text">{slot.title}</p>
                    <p className="text-sm text-dark-text/60">{slot.audience}</p>
                  </div>
                  <div className="text-sm text-dark-text/70 sm:shrink-0 sm:text-right">
                    <p className="flex items-start gap-1.5 sm:justify-end">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-green-primary" aria-hidden="true" />
                      <span>{slot.location}</span>
                    </p>
                    {slot.capacity && <p className="mt-0.5 text-dark-text/50">{slot.capacity}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
