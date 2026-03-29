import type { Metadata } from 'next'
import { PILLARS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'The 7 Pillars — ProjectManageAnything™ Ecosystem',
  description: 'Explore all 7 pillars of the Kingdom Compassion ecosystem: Enterprise Academy™, Wiser Generations™, VillageTrade™, The Wealth Channel™, Sacred Seasons™, Goshen Publishing™, and the Sustainability Institute™.',
}

export default function PillarsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <p className="text-gold text-sm font-bold uppercase tracking-widest mb-2">The Ecosystem</p>
        <h1 className="text-4xl font-bold text-navy mb-4">The 7 Pillars</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Each pillar addresses a distinct community need. Together they form an integrated system
          where every participant can teach, equip, exchange, prosper, share, sustain, and give back.
        </p>
      </div>

      <div className="space-y-10">
        {PILLARS.map((p) => (
          <div key={p.number} className={`border-2 ${p.color} rounded-2xl overflow-hidden`}>
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl">{p.icon}</span>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-navy text-white text-sm font-bold flex items-center justify-center">{p.number}</span>
                        <h2 className="text-2xl font-bold text-navy">{p.name}</h2>
                      </div>
                      <p className={`font-medium mt-1 ${p.textColor}`}>{p.tagline}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">{p.description}</p>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Programs & Offerings</p>
                    <div className="flex flex-wrap gap-2">
                      {p.programs.map(prog => (
                        <span key={prog} className="bg-white border border-gray-200 text-navy text-xs font-medium px-3 py-1.5 rounded-full">{prog}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  {p.url !== '#' ? (
                    <a href={p.url} className="block bg-navy text-white font-bold py-4 px-6 rounded-xl text-center hover:bg-blue-900 transition-colors text-lg">
                      {p.cta} →
                    </a>
                  ) : (
                    <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
                      <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Coming Soon</p>
                      <p className="text-gray-500 text-sm">This pillar is in development. Join the waitlist to be notified at launch.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
