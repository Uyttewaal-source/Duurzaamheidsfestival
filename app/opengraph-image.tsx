import { createOgImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og"

export const alt = "Duurzaamheidsfestival — De wereld is jouw klaslokaal"
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return createOgImage({
    eyebrow: "De wereld is jouw klaslokaal",
    title: "Duurzaamheidsfestival",
    meta: "Vrijdag 25 september 2026 · Burgers' Zoo, Arnhem",
  })
}
