import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ehnovate.tech'),
  title: {
    default: 'Ehnovate Technologies — AI Surveillance, Intelligence & Enterprise Systems',
    template: '%s | Ehnovate Technologies',
  },
  description:
    'Ehnovate Technologies engineers intelligent AI surveillance, investigative intelligence, and enterprise software that helps institutions see faster, decide sooner, and act with confidence.',
  keywords: [
    'AI surveillance',
    'OWL-AI',
    'Secure-Link',
    'intelligence platform',
    'enterprise software',
    'public safety technology',
    'computer vision',
    'threat detection',
    'ERP',
  ],
  authors: [{ name: 'Ehnovate Technologies' }],
  openGraph: {
    title: 'Ehnovate Technologies — AI, Security & Enterprise Systems',
    description:
      'Engineering intelligent AI, security & enterprise systems that help institutions see faster, decide sooner, and act with confidence.',
    type: 'website',
    siteName: 'Ehnovate Technologies',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} bg-background`}>
      <body className="min-h-screen font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
