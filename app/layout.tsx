import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: '--font-open-sans',
  display: 'swap',
});

const siteUrl = 'https://www.duurzaamheidsfestival.nl'
const siteDescription =
  "Het Duurzaamheidsfestival voor onderwijs op vrijdag 25 september 2026 in Burgers' Zoo, Arnhem. Georganiseerd door Eco-Schools, Leren voor Morgen, Collectief Natuurinclusief en Gemeente Arnhem."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Duurzaamheidsfestival | De wereld is jouw klaslokaal',
  description: siteDescription,
  generator: 'v0.app',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dag_van_de_Duurzaamheid_vlinder-iMpgfnsCazvXM9PynZFWO3G4MoqpRm.png',
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: siteUrl,
    siteName: 'Duurzaamheidsfestival',
    title: 'Duurzaamheidsfestival | De wereld is jouw klaslokaal',
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duurzaamheidsfestival | De wereld is jouw klaslokaal',
    description: siteDescription,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${openSans.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased">
        <main>{children}</main>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
