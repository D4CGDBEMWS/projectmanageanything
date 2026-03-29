import type { Metadata } from 'next'
import Link from 'next/link'
import { EXPANSION_CITIES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About the Vision — ProjectManageAnything™',
  description: 'Crystal Stewart\'s vision for a global ecosystem of education, empowerment, and impact. The story behind ProjectManageAnything™ and Kingdom Compassion.',
}

export default function AboutPage() {
  return (
    <div>
      <section className="bg-navy text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-bold uppercase tracking-widest mb-3">The Vision</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Build a Global Ecosystem That Equips Communities.</h1>
          <p className="text-gray-300 text-xl leading-relaxed">
            ProjectManageAnything™ is not a company. It is a conviction — that every community, every individual,
            every family deserves access to the tools of education, financial empowerment, and purposeful work.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-3xl font-bold text-navy">Crystal Stewart — The Architect</h2>
          <p>Crystal Stewart spent 20+ years in enterprise transformation, watched organizations build extraordinary systems — and watched communities go without them. She served in the U.S. Army. She built Enterprise Academy™. She wrote a memoir about her son Christian's survival from a terminal diagnosis. And through all of it, one conviction grew: the same tools that build great organizations can build great communities.</p>
          <p>ProjectManageAnything™ is the expression of that conviction. Seven pillars. One mission. A global network of resilient communities that teach, equip, exchange, prosper, share, sustain, and give back.</p>

          <div className="bg-light-gold border-l-4 border-gold p-6 rounded-r-xl">
            <p className="text-navy italic text-xl">"The same discipline that builds great projects builds great lives. The same systems that empower great organizations can empower great communities. That's the whole vision."</p>
            <p className="text-gold font-bold mt-3">— Crystal Stewart, PMP®</p>
          </div>

          <h2 className="text-3xl font-bold text-navy mt-10">The Mission</h2>
          <p className="text-2xl font-medium text-navy italic">Teach · Equip · Exchange · Prosper · Share · Sustain · Give Back.</p>
          <p>Every word in that mission statement is a pillar. Every pillar is a community it serves. The ecosystem is designed so that participants don't just consume — they contribute, trade, publish, grow, and eventually fund the philanthropic work that sustains the whole.</p>

          <h2 className="text-3xl font-bold text-navy mt-10">Global Expansion — Port Cities</h2>
          <p>The long-term vision includes physical hubs in strategic port cities — training campuses, sustainability demonstration farms, community trade centers, and publishing and media centers.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {EXPANSION_CITIES.map(c => (
              <div key={c.city} className="bg-light-navy rounded-lg p-3 text-center">
                <p className="text-2xl mb-1">{c.flag}</p>
                <p className="font-bold text-navy text-sm">{c.city}</p>
                <p className="text-gray-500 text-xs">{c.state}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-navy text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Start Here</h2>
          <p className="text-gray-300 mb-6">The ecosystem begins with education. Enter through the program that fits your season.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://enterpriseacademy.us" className="bg-gold text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors">Enterprise Academy™ →</a>
            <a href="https://wisergenerations.com" className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:border-gold hover:text-gold transition-colors">Wiser Generations™ →</a>
          </div>
        </div>
      </section>
    </div>
  )
}
