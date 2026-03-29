import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Community — ProjectManageAnything™' }

export default function CommunityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <p className="text-gold text-sm font-bold uppercase tracking-widest mb-2">Community</p>
      <h1 className="text-4xl font-bold text-navy mb-4">The Kingdom Compassion Community</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">A growing network of educators, entrepreneurs, veterans, career transitioners, and community builders connected through the 7 pillars of the ecosystem.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: '🎓', title: 'Learners', desc: 'Students in Enterprise Academy™ and Wiser Generations™ programs' },
          { icon: '🔄', title: 'Traders', desc: 'VillageTrade™ members exchanging skills and services' },
          { icon: '📖', title: 'Storytellers', desc: 'Goshen Publishing™ authors sharing transformational stories' },
        ].map(c => (
          <div key={c.title} className="bg-light-navy rounded-xl p-6">
            <div className="text-3xl mb-3">{c.icon}</div>
            <p className="font-bold text-navy mb-2">{c.title}</p>
            <p className="text-gray-600 text-sm">{c.desc}</p>
          </div>
        ))}
      </div>
      <div className="bg-navy rounded-2xl p-8 text-white">
        <p className="font-bold text-xl mb-2">Community Portal — Coming Soon</p>
        <p className="text-gray-300 mb-4">The full community platform is in development. Enter the ecosystem now through Enterprise Academy™ or Wiser Generations™.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://enterpriseacademy.us" className="bg-gold text-white font-bold px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors">Enterprise Academy™</a>
          <a href="https://wisergenerations.com" className="border-2 border-white text-white font-bold px-6 py-2 rounded-lg hover:border-gold hover:text-gold transition-colors">Wiser Generations™</a>
        </div>
      </div>
    </div>
  )
}
