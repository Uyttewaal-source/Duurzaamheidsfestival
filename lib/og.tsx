import { ImageResponse } from "next/og"

// Gedeelde afmetingen + generator voor de social-share (Open Graph) afbeelding.
// Wordt gebruikt door de opengraph-image / twitter-image route-bestanden.
export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = "image/png"

// Huisstijlkleuren (gelijk aan app/globals.css)
const GREEN_PRIMARY = "#2BB573"
const GREEN_SOFT = "#D5F0E3"
const RED_PRIMARY = "#CC3427"
const DARK_TEXT = "#1F2933"

type OgImageOptions = {
  eyebrow: string
  title: string
  meta: string
}

export function createOgImage({ eyebrow, title, meta }: OgImageOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: GREEN_SOFT,
          padding: "80px",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        {/* Merknaam */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              width: "28px",
              height: "28px",
              borderRadius: "9999px",
              backgroundColor: RED_PRIMARY,
              marginRight: "18px",
            }}
          />
          <div style={{ display: "flex", fontSize: "34px", fontWeight: 700, color: GREEN_PRIMARY }}>
            Duurzaamheidsfestival
          </div>
        </div>

        {/* Eyebrow + titel */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              fontWeight: 600,
              color: RED_PRIMARY,
              textTransform: "uppercase",
              letterSpacing: "3px",
              marginBottom: "20px",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "82px",
              fontWeight: 800,
              color: DARK_TEXT,
              lineHeight: 1.05,
              maxWidth: "960px",
            }}
          >
            {title}
          </div>
        </div>

        {/* Praktische regel */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              width: "56px",
              height: "8px",
              borderRadius: "9999px",
              backgroundColor: GREEN_PRIMARY,
              marginRight: "20px",
            }}
          />
          <div style={{ display: "flex", fontSize: "30px", fontWeight: 600, color: DARK_TEXT }}>{meta}</div>
        </div>
      </div>
    ),
    OG_SIZE,
  )
}
