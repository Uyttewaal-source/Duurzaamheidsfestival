// Organisaties op de Inspiratiemarkt van het Duurzaamheidsfestival 2026.
//
// Logo's: plaats een bestand in public/images/inspiratiemarkt/ en vul het pad
// in bij `logo` (bijv. "/images/inspiratiemarkt/eromesmarko.png"). Zolang `logo`
// leeg is, toont de kaart een nette placeholder-tegel met de initialen.
// Aanbevolen bestandsnaam = de `slug` hieronder (bv. eromesmarko.png of .svg).

export type Organisation = {
  name: string
  url: string
  /** Wordt gebruikt als aanbevolen logobestandsnaam. */
  slug: string
  /** Pad naar het logo in /public, bijv. "/images/inspiratiemarkt/saavr.png". */
  logo?: string
}

export const organisaties: Organisation[] = [
  {
    name: "Windesheim",
    slug: "windesheim",
    url: "https://www.windesheim.com/study-programmes/bachelor-s-degrees/bachelor-degrees/global-project-and-change-management?uc=1",
  },
  {
    name: "Eromesmarko",
    slug: "eromesmarko",
    url: "https://eromesmarko.nl/",
  },
  {
    name: "i3 Connect",
    slug: "i3-connect",
    url: "https://i3-connect.com/nl",
  },
  {
    name: "Rooftop Revolution",
    slug: "rooftop-revolution",
    url: "https://www.rooftoprevolution.nl",
  },
  {
    name: "Saavr",
    slug: "saavr",
    url: "https://saavr.nl/",
  },
  {
    name: "Global Exploration",
    slug: "global-exploration",
    url: "https://www.global-exploration.nl/home",
  },
  {
    name: "Statiegeld NL (Verpact)",
    slug: "statiegeld-nl",
    url: "https://www.verpact.nl",
  },
  {
    name: "From Waste to Wonder",
    slug: "from-waste-to-wonder",
    url: "https://www.workshop-fromwastetowonder.com/",
  },
  {
    name: "Van Hall Larenstein",
    slug: "van-hall-larenstein",
    url: "https://www.hvhl.nl/studeren-bij-hvhl/velp/locatie/",
  },
  {
    name: "Compabee",
    slug: "compabee",
    url: "https://www.compabee.nl/",
  },
  {
    name: "Teachers for Climate",
    slug: "teachers-for-climate",
    url: "https://www.teachersforclimate.nl",
  },
]
