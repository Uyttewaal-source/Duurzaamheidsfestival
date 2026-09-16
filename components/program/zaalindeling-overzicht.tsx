"use client"

import { useState } from "react"
import { ChevronDown, MapPin } from "lucide-react"

import { ZaalindelingRondes } from "./zaalindeling-rondes"

export function ZaalindelingOverzicht() {
  const [open, setOpen] = useState(false)

  return (
    <div className="overflow-hidden rounded-2xl border border-green-soft bg-white">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="zaalindeling-inhoud"
        className="flex w-full cursor-pointer flex-col items-start gap-4 bg-green-soft/60 p-5 text-left outline-none transition-colors hover:bg-green-soft focus-visible:ring-[3px] focus-visible:ring-green-primary/50 lg:p-6"
      >
        <span className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-green-primary">
            <MapPin className="size-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-lg font-semibold text-dark-text">Zaalindeling per ronde</span>
            <span className="mt-0.5 block text-sm text-dark-text/70">
              Bekijk in welke zaal elke workshop plaatsvindt
            </span>
          </span>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-primary px-4 py-2 text-sm font-medium text-white">
          {open ? "Verberg overzicht" : "Toon overzicht"}
          <ChevronDown
            className={`size-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </span>
      </button>

      <div id="zaalindeling-inhoud" hidden={!open} className="border-t border-green-soft p-5 lg:p-6">
        <ZaalindelingRondes />
      </div>
    </div>
  )
}
