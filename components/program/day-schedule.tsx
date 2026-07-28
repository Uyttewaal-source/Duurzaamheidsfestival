import Link from "next/link"
import { ArrowDown } from "lucide-react"

import { schedule } from "@/lib/schedule"

export function DaySchedule() {
  return (
    <ol className="max-w-3xl">
      {schedule.map((item, index) => {
        const isLast = index === schedule.length - 1
        return (
          <li
            key={`${item.time}-${item.title}`}
            className="grid grid-cols-[2.75rem_1.25rem_minmax(0,1fr)] gap-x-3 sm:grid-cols-[3.5rem_1.5rem_minmax(0,1fr)] sm:gap-x-4"
          >
            {/* Tijd — in een eigen kolom links van de tijdlijn */}
            <time className="pt-1 text-right text-sm font-bold tabular-nums text-green-primary">
              {item.time}
            </time>

            {/* Marker + verbindingslijn */}
            <div className="relative flex justify-center">
              {!isLast && (
                <span
                  className="absolute left-1/2 top-2 h-full w-0.5 -translate-x-1/2 bg-green-soft"
                  aria-hidden="true"
                />
              )}
              <span className="relative z-10 mt-1.5 size-3.5 shrink-0 rounded-full bg-green-primary ring-4 ring-white" />
            </div>

            {/* Inhoud */}
            <div className={isLast ? "pb-0" : "pb-8"}>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold leading-snug text-dark-text">{item.title}</h3>
                {item.optional && (
                  <span className="rounded-full bg-green-soft px-2 py-0.5 text-xs font-medium text-green-primary">
                    Optioneel
                  </span>
                )}
              </div>

              {item.description && <p className="mt-1 leading-relaxed text-dark-text/70">{item.description}</p>}

              {item.speakers && (
                <ul className="mt-2 space-y-1">
                  {item.speakers.map((speaker) => (
                    <li key={speaker.name} className="text-sm text-dark-text/70">
                      <span className="font-medium text-dark-text">{speaker.name}</span>
                      {speaker.role ? ` — ${speaker.role}` : ""}
                    </li>
                  ))}
                </ul>
              )}

              {item.workshopRound && (
                <Link
                  href="#workshops"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-green-primary underline-offset-4 outline-none transition-colors hover:underline focus-visible:underline"
                >
                  Bekijk de workshops
                  <ArrowDown className="size-4" aria-hidden="true" />
                </Link>
              )}
            </div>
          </li>
        )
      })}
    </ol>
  )
}
