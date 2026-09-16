import Link from "next/link"
import { ArrowRight, Clock, MapPin } from "lucide-react"

import { ROUND_TIMES, slotsForRound, type Round } from "@/lib/zaalindeling"

const ROUNDS: Round[] = [1, 2]

const ROW_BASE = "flex flex-col gap-1 p-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6"

/**
 * Overzicht van de zaalindeling per ronde. Workshops met een gekoppelde kaart
 * linken naar die kaart onder "Workshops" op de programmapagina.
 */
export function ZaalindelingRondes() {
  return (
    <div className="flex flex-col gap-8">
      {ROUNDS.map((round) => (
        <div key={round}>
          <h3 className="mb-3 flex items-center gap-2 font-semibold text-green-primary">
            <Clock className="size-4 shrink-0" aria-hidden="true" />
            Ronde {round} · {ROUND_TIMES[round]}
          </h3>
          <ul className="divide-y divide-green-soft overflow-hidden rounded-xl border border-green-soft">
            {slotsForRound(round).map((slot) => (
              <li key={`${round}-${slot.title}`}>
                {slot.workshopId ? (
                  <Link
                    href={`/programma#${slot.workshopId}`}
                    className={`${ROW_BASE} group outline-none transition-colors hover:bg-green-soft/40 focus-visible:bg-green-soft/40`}
                  >
                    <div className="min-w-0">
                      <p className="flex items-center gap-1.5 font-medium text-dark-text transition-colors group-hover:text-green-primary">
                        {slot.title}
                        <ArrowRight className="size-4 shrink-0 text-green-primary" aria-hidden="true" />
                      </p>
                      <p className="text-sm text-dark-text/60">{slot.audience}</p>
                    </div>
                    <div className="text-sm text-dark-text/70 sm:shrink-0 sm:text-right">
                      <p className="flex items-start gap-1.5 sm:justify-end">
                        <MapPin className="mt-0.5 size-4 shrink-0 text-green-primary" aria-hidden="true" />
                        <span>{slot.location}</span>
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div className={ROW_BASE}>
                    <div className="min-w-0">
                      <p className="font-medium text-dark-text">{slot.title}</p>
                      <p className="text-sm text-dark-text/60">{slot.audience}</p>
                    </div>
                    <div className="text-sm text-dark-text/70 sm:shrink-0 sm:text-right">
                      <p className="flex items-start gap-1.5 sm:justify-end">
                        <MapPin className="mt-0.5 size-4 shrink-0 text-green-primary" aria-hidden="true" />
                        <span>{slot.location}</span>
                      </p>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
