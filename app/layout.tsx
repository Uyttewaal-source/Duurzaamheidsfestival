import type { Metadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-nunito',
  display: 'swap',
});

const nunitoSans = Nunito_Sans({ 
  subsets: ["latin"],
  variable: '--font-nunito-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Duurzaamheidsfestival 2026 | De wereld is je klaslokaal',
  description: 'Het jaarlijkse duurzaamheidsfestival voor onderwijs. Georganiseerd door Eco-Schools, Leren voor Morgen en Collectief Natuurinclusief.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${nunito.variable} ${nunitoSans.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
