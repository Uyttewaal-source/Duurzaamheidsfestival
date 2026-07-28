import Link from "next/link"
import { ArrowDown } from "lucide-react"

import { schedule } from "@/lib/schedule"

export function DaySchedule() {
  return (
    <ol className="max-w-3xl">
      {schedule.map((item, index) => {
        const isLast = index === schedule.length - 1
        return (
          <li key={`${item.time}-${item.title}`} className="relative flex gap-4 pb-8 last:pb-0 sm:gap-6">
            {/* Verbindingslijn (niet bij het laatste moment) */}
            {!isLast && (
              <span
                className="absolute left-[6px] top-4 h-full w-0.5 bg-green-soft sm:left-[7px]"
                aria-hidden="true"
              />
            )}

            {/* Tijd + marker */}
            <div className="flex shrink-0 flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
              <span className="relative z-10 mt-1.5 size-3.5 shrink-0 rounded-full bg-green-primary ring-4 ring-white sm:order-2" />
              <time className="text-sm font-bold tabular-nums text-green-primary sm:order-1 sm:w-14 sm:text-right">
                {item.time}
              </time>
            </div>

            {/* Inhoud */}
            <div className="flex-1 pt-0.5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-dark-text">{item.title}</h3>
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
