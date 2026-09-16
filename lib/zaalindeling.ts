// Zaalindeling & rondes Duurzaamheidsfestival 2026
//
// Eenmalig overgezet uit het aangeleverde CSV (Zaalindeling/aantallen concept
// workshopprogramma). Twee workshoprondes van 75 minuten; de tijden sluiten aan
// op de dagprogramma-tijdlijn (lib/schedule.ts): ronde 1 om 11:40, ronde 2 om
// 14:00. "Beleef de Bush!" draait in beide rondes.
//
// Dit is de bron van waarheid voor ronde + zaal. De workshopkaart
// leest het via getWorkshopSchedule(); het inklapbare zaaloverzicht rendert de
// slots per ronde. Een slot zonder workshopId heeft géén eigen workshopkaart en
// verschijnt alleen in het overzicht (op dit moment zijn alle slots gekoppeld).

export type Round = 1 | 2

export const ROUND_TIMES: Record<Round, string> = {
  1: "11:40",
  2: "14:00",
}

export type ScheduleSlot = {
  round: Round
  /** Verwijst naar een workshop in lib/workshops.ts; leeg = geen eigen kaart. */
  workshopId?: string
  /** Titel zoals getoond in het zaaloverzicht. */
  title: string
  audience: string
  location: string
}

export const scheduleSlots: ScheduleSlot[] = [
  // ── Ronde 1 ─────────────────────────────────────────────────────────────
  {
    round: 1,
    workshopId: "duurzaamheid-in-dna",
    title: "Duurzaamheid in het DNA van je school brengen",
    audience: "Onderwijsprofessionals",
    location: "Kilimanjaro Lodge",
  },
  {
    round: 1,
    workshopId: "klimaatbestendige-stad",
    title: "Klimaatbestendige stad",
    audience: "Leerlingen",
    location: "Mount Kenia Lodge",
  },
  {
    round: 1,
    workshopId: "toekomst-is-een-verhaal",
    title: "De toekomst is een verhaal",
    audience: "Iedereen",
    location: "Canopy Lodge",
  },
  {
    round: 1,
    workshopId: "beleef-de-bush",
    title: "Beleef de Bush!",
    audience: "Iedereen",
    location: "Dierentuin (verzamelen op het terras)",
  },
  {
    round: 1,
    workshopId: "eigen-mokken",
    title: "Versieren van eigen mokken",
    audience: "Leerlingen",
    location: "Safari Restaurant – bij de bar",
  },
  {
    round: 1,
    workshopId: "natuurinclusief-onderwijs",
    title: "Community of Practice Natuurinclusief onderwijs",
    audience: "Onderwijsprofessionals",
    location: "Safari Restaurant – bij het podium",
  },
  {
    round: 1,
    workshopId: "upcycle-kledingstuk",
    title: "Upcycle een eigen kledingstuk!",
    audience: "Iedereen",
    location: "Safari Restaurant – op het podium",
  },
  {
    round: 1,
    workshopId: "escaperoom-larenstein",
    title: "Escaperoom: Kennislandgoed Larenstein",
    audience: "Iedereen",
    location: "Tree Tops Lodge",
  },
  {
    round: 1,
    workshopId: "onze-toekomst-op-aarde",
    title: "Onze Toekomst op Aarde",
    audience: "Iedereen (behalve PO-leerlingen)",
    location: "Knoefzaal",
  },
  // ── Ronde 2 ─────────────────────────────────────────────────────────────
  {
    round: 2,
    workshopId: "kerndoelen",
    title: "Natuur en duurzaamheid in de kerndoelen",
    audience: "Onderwijsprofessionals",
    location: "Kilimanjaro Lodge",
  },
  {
    round: 2,
    workshopId: "wereld-op-je-bord",
    title: "De wereld op je bord",
    audience: "Leerlingen",
    location: "Mount Kenia Lodge",
  },
  {
    round: 2,
    workshopId: "global-escape",
    title: "Global Escape – De Wereld in je Klas",
    audience: "Iedereen",
    location: "Safari Restaurant – op 6 plekken",
  },
  {
    round: 2,
    workshopId: "plantenrace",
    title: "Plantenrace",
    audience: "Leerlingen",
    location: "Safari Restaurant – voor het podium",
  },
  {
    round: 2,
    workshopId: "speed-dating",
    title: "Speed dating",
    audience: "Iedereen",
    location: "Safari Restaurant – bij de bar",
  },
  {
    round: 2,
    workshopId: "beleef-de-bush",
    title: "Beleef de Bush!",
    audience: "Iedereen",
    location: "Dierentuin (verzamelen op het terras)",
  },
  {
    round: 2,
    workshopId: "didactic-bricks",
    title: "Didactic Bricks",
    audience: "Onderwijsprofessionals",
    location: "Canopy Lodge",
  },
  {
    round: 2,
    workshopId: "raad-van-alle-wezens",
    title: "De Raad van Alle Wezens",
    audience: "Iedereen",
    location: "Tree Tops Lodge",
  },
  {
    round: 2,
    workshopId: "eco-positief-leven",
    title: "In 9 stappen naar een eco-positief leven",
    audience: "Iedereen",
    location: "Knoefzaal",
  },
]

export type WorkshopSchedule = {
  rounds: Round[]
  times: string[]
  location: string
}

/**
 * Ronde(s), tijd(en) en zaal voor een workshop. Retourneert null
 * als de workshop niet in de zaalindeling staat. Een workshop in beide rondes
 * (Beleef de Bush!) gebruikt dezelfde zaal, dus die wordt één keer teruggegeven.
 */
export function getWorkshopSchedule(workshopId: string): WorkshopSchedule | null {
  const slots = scheduleSlots.filter((slot) => slot.workshopId === workshopId)
  if (slots.length === 0) return null
  const rounds = slots.map((slot) => slot.round)
  return {
    rounds,
    times: rounds.map((round) => ROUND_TIMES[round]),
    location: slots[0].location,
  }
}

/** Slots van één ronde, in volgorde. */
export function slotsForRound(round: Round): ScheduleSlot[] {
  return scheduleSlots.filter((slot) => slot.round === round)
}
