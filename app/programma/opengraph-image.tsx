import { createOgImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og"
import { workshops } from "@/lib/workshops"

export const alt = "Het festivalprogramma van het Duurzaamheidsfestival"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return createOgImage({
    eyebrow: "Duurzaamheidsfestival",
    title: "Het festivalprogramma",
    meta: `${workshops.length} workshops · Vrijdag 25 september 2026`,
  })
}
