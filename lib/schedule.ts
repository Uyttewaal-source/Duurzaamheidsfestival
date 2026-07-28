// Plenair dagprogramma Duurzaamheidsfestival 2026
//
// Eenmalig overgezette dagindeling. Wordt getoond als verticale tijdlijn
// bovenaan de programmapagina (component: components/program/day-schedule.tsx).
// Tijden met dubbele punt, consistent met de rest van de site ("10:30–16:30 uur").

export type ScheduleSpeaker = {
  name: string
  role?: string
}

export type ScheduleItem = {
  /** Starttijd, bijv. "11:00". */
  time: string
  title: string
  /** Optionele korte toelichting. */
  description?: string
  /** Toont een "Optioneel"-label. */
  optional?: boolean
  /** Workshopronde: toont een verwijzing naar het workshopaanbod. */
  workshopRound?: boolean
  speakers?: ScheduleSpeaker[]
}

export const schedule: ScheduleItem[] = [
  {
    time: "09:00",
    title: "Dierentuinbezoek",
    optional: true,
  },
  {
    time: "10:30",
    title: "Welkom & informatiemarkt",
    description: "Aanmelden in het Safari Restaurant.",
  },
  {
    time: "11:00",
    title: "De wereld als jouw klaslokaal",
    description: "Thematische inleidingen door:",
    speakers: [
      { name: "Nawfal Al Jeburi", role: "Docent duurzaam ondernemen & oprichter stichting OFF TREND" },
      { name: "Michelle Hieltjes", role: "Duurzaamheidscoördinator, De Onderwijsspecialisten" },
    ],
  },
  {
    time: "11:40",
    title: "Workshopronde 1",
    workshopRound: true,
  },
  {
    time: "13:00",
    title: "Lunch, informatiemarkt & silent disco",
  },
  {
    time: "14:00",
    title: "Workshopronde 2",
    workshopRound: true,
  },
  {
    time: "15:20",
    title: "Oogst van de dag",
  },
  {
    time: "16:00",
    title: "Borrel & silent disco",
  },
]
