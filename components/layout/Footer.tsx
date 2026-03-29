import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <p className="text-gold font-bold text-lg">ProjectManageAnything™</p>
            <p className="text-gray-300 text-sm mt-1 mb-4">Kingdom Compassion Ecosystem</p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">A global ecosystem for education, financial empowerment, community exchange, leadership development, storytelling, sustainability, and philanthropic impact.</p>
            <p className="text-gold text-sm mt-4 italic font-medium">"Teach · Equip · Exchange · Prosper · Share · Sustain · Give Back"</p>
          </div>
          <div>
            <p className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-3">The 7 Pillars</p>
            <div className="flex flex-col gap-2">
              {[
                ['Enterprise Academy™', 'https://enterpriseacademy.us'],
                ['Wiser Generations™', 'https://wisergenerations.com'],
                ['VillageTrade™', '#'],
                ['The Wealth Channel™', '#'],
                ['Sacred Seasons™', '#'],
                ['Goshen Publishing™', '#'],
                ['Sustainability Institute™', '#'],
              ].map(([l, h]) => (
                <a key={l} href={h} className="text-sm text-gray-400 hover:text-gold transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-3">Organization</p>
            <div className="flex flex-col gap-2">
              {[['About the Vision', '/about'], ['Foundation Impact', '/foundation'], ['Community', '/community'], ['Contact', '/contact']].map(([l, h]) => (
                <Link key={h} href={h} className="text-sm text-gray-400 hover:text-gold transition-colors">{l}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Kingdom Compassion Enterprises LLC. All rights reserved.</p>
          <p className="text-gray-500 text-xs">Crystal Stewart, The Project Management Evangelist™ · Smyrna, GA</p>
        </div>
      </div>
    </footer>
  )
}
