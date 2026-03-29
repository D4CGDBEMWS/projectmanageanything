import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://projectmanageanything.com'),
  title: { default: 'ProjectManageAnything™ — A Global Ecosystem for Education & Impact', template: '%s | ProjectManageAnything™' },
  description: 'ProjectManageAnything™ is the umbrella ecosystem connecting Enterprise Academy™, VillageTrade™, The Wealth Channel™, Sacred Seasons™, Goshen Publishing™, the Sustainability Institute™, and Kingdom Compassion Foundation™.',
  keywords: ['project management ecosystem', 'Kingdom Compassion', 'Crystal Stewart', 'Enterprise Academy', 'community empowerment', 'financial education', 'VillageTrade', 'Wealth Channel'],
  openGraph: { type: 'website', url: 'https://projectmanageanything.com', siteName: 'ProjectManageAnything™' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
