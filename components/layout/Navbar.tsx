'use client'
import Link from 'next/link'
import { useState } from 'react'

const NAV = [
  { label: 'The Ecosystem', href: '/pillars' },
  { label: 'About', href: '/about' },
  { label: 'Foundation', href: '/foundation' },
  { label: 'Community', href: '/community' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-navy border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gold rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PM</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-none">ProjectManageAnything™</p>
              <p className="text-gold text-xs leading-none mt-0.5">Kingdom Compassion Ecosystem</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map(n => (
              <Link key={n.href} href={n.href} className="text-sm font-medium text-gray-300 hover:text-gold transition-colors">{n.label}</Link>
            ))}
          </nav>
          <Link href="https://enterpriseacademy.us" className="hidden md:block bg-gold text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors">
            Enter the Academy →
          </Link>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <div className="w-5 h-0.5 bg-white mb-1" /><div className="w-5 h-0.5 bg-white mb-1" /><div className="w-5 h-0.5 bg-white" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-navy border-t border-white/10 px-4 pb-4">
          {NAV.map(n => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-gray-300 hover:text-gold">{n.label}</Link>)}
          <Link href="https://enterpriseacademy.us" className="block mt-3 bg-gold text-white text-sm font-semibold px-4 py-2 rounded-lg text-center">Enter the Academy →</Link>
        </div>
      )}
    </header>
  )
}
