import Link from 'next/link'
import { PILLARS, YEAR_PLAN } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full border-2 border-gold" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full border border-gold" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <p className="text-gold text-sm font-bold uppercase tracking-widest mb-4">Kingdom Compassion Ecosystem</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Project Manage<br /><span className="text-gold">Anything.™</span>
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-4 max-w-3xl">
            A global ecosystem for education, financial empowerment, community exchange, leadership development, storytelling, sustainability, and philanthropic impact.
          </p>
          <p className="text-gold text-lg font-medium italic mb-10">
            "Teach · Equip · Exchange · Prosper · Share · Sustain · Give Back"
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/pillars" className="bg-gold text-white font-bold px-8 py-4 rounded-lg hover:bg-amber-600 transition-colors text-lg">Explore the 7 Pillars</Link>
            <Link href="/about" className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-lg hover:border-gold hover:text-gold transition-colors text-lg">Our Vision</Link>
          </div>
        </div>
      </section>

      {/* Mission strip */}
      <section className="bg-gold py-6">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-white text-center font-bold text-lg">
            Founded by Crystal Stewart, PMP® · The Project Management Evangelist™ · Smyrna, Georgia
          </p>
        </div>
      </section>

      {/* 7 Pillars preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-bold uppercase tracking-widest mb-2">The Structure</p>
            <h2 className="text-4xl font-bold text-navy mb-4">7 Pillars. One Mission.</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Each pillar serves a specific community need. Together they form a self-reinforcing ecosystem where education funds empowerment, empowerment builds community, and community sustains impact.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map(p => (
              <div key={p.number} className={`border-2 ${p.color} rounded-2xl p-6 hover:shadow-lg transition-shadow`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{p.icon}</span>
                  <span className="w-8 h-8 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center">{p.number}</span>
                </div>
                <h3 className="font-bold text-navy text-lg mb-1">{p.name}</h3>
                <p className={`text-sm font-medium mb-3 ${p.textColor}`}>{p.tagline}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.description}</p>
                {p.url !== '#' ? (
                  <a href={p.url} className={`text-sm font-bold ${p.textColor} hover:underline`}>{p.cta} →</a>
                ) : (
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full">{p.cta}</span>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/pillars" className="bg-navy text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors inline-block">View All 7 Pillars in Detail →</Link>
          </div>
        </div>
      </section>

      {/* 5-Year Vision */}
      <section className="py-20 bg-light-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-bold uppercase tracking-widest mb-2">The Roadmap</p>
            <h2 className="text-4xl font-bold text-navy">5-Year Master Plan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {YEAR_PLAN.map((y, i) => (
              <div key={y.year} className="bg-white rounded-xl p-5 border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center mb-3">{i + 1}</div>
                <p className="text-xs font-bold text-gold uppercase tracking-wider mb-1">{y.year}</p>
                <p className="font-bold text-navy text-sm mb-3">{y.title}</p>
                <ul className="space-y-1">
                  {y.items.map(item => (
                    <li key={item} className="text-xs text-gray-600 flex items-start gap-1">
                      <span className="text-gold mt-0.5 flex-shrink-0">·</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation strip */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🤲</div>
          <h2 className="text-3xl font-bold mb-4">Kingdom Compassion Foundation Trust</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            10% of all ecosystem profits are directed to the Kingdom Compassion Foundation Trust —
            supporting orphans, widows, foreigners, strangers, veterans, and seniors through
            humanitarian initiatives worldwide.
          </p>
          <Link href="/foundation" className="bg-gold text-white font-bold px-8 py-3 rounded-lg hover:bg-amber-600 transition-colors inline-block">Foundation Impact →</Link>
        </div>
      </section>

      {/* Enter the ecosystem */}
      <section className="py-16 bg-light-gold border-t border-gold/20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Enter the Ecosystem</h2>
          <p className="text-gray-600 mb-8 text-lg">Start with the program that fits your situation. Every entry point connects to the larger vision.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://enterpriseacademy.us" className="bg-navy text-white rounded-xl p-5 text-left hover:bg-blue-900 transition-colors">
              <p className="text-gold font-bold text-xs uppercase tracking-wider mb-1">Ages 17–21</p>
              <p className="font-bold text-white">Enterprise Academy™</p>
              <p className="text-gray-300 text-sm mt-1">Life Is a Project™ · CAPM® Pathway</p>
            </a>
            <a href="https://wisergenerations.com" className="bg-teal text-white rounded-xl p-5 text-left hover:opacity-90 transition-opacity">
              <p className="text-gold font-bold text-xs uppercase tracking-wider mb-1">Adults · Veterans · Corporate</p>
              <p className="font-bold text-white">Wiser Generations™</p>
              <p className="text-gray-200 text-sm mt-1">PMP® & CAPM® Certification Training</p>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
