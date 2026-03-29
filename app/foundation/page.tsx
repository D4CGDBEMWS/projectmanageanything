import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kingdom Compassion Foundation Trust — ProjectManageAnything™',
  description: '10% of all ecosystem profits fund the Kingdom Compassion Foundation Trust — supporting orphans, widows, veterans, seniors, and communities in need worldwide.',
}

export default function FoundationPage() {
  return (
    <div>
      <section className="bg-navy text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6">🤲</div>
          <p className="text-gold text-sm font-bold uppercase tracking-widest mb-3">Philanthropic Impact</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Kingdom Compassion Foundation Trust</h1>
          <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto">
            10% of all ProjectManageAnything™ ecosystem profits are directed to the Kingdom Compassion
            Foundation Trust — permanently and by design.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Who We Serve</h2>
              <p className="text-gray-600 leading-relaxed mb-6">The Foundation serves those who have been marginalized, overlooked, or left without access to the tools of a dignified life. Every program in the ecosystem generates profit that flows to this mission.</p>
              <div className="space-y-3">
                {['Orphans and children without family support', 'Widows and single-parent households', 'Foreign-born residents navigating new systems', 'Strangers and displaced individuals', 'Veterans transitioning from service', 'Seniors living with dignity, not charity'].map(s => (
                  <div key={s} className="flex items-center gap-3">
                    <span className="text-gold text-lg">✓</span>
                    <p className="text-gray-700 text-sm">{s}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">The Financial Model</h2>
              <div className="bg-light-navy rounded-xl p-6 space-y-4">
                {[
                  { label: 'Target Annual Ecosystem Profit', value: '$500,000+' },
                  { label: 'Foundation Allocation (10%)', value: '$50,000+ annually' },
                  { label: 'Profit Margin Target', value: '90% digital' },
                  { label: 'Year 5 Philanthropic Distribution', value: '$1,000,000' },
                ].map(item => (
                  <div key={item.label} className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-0">
                    <p className="text-gray-600 text-sm">{item.label}</p>
                    <p className="text-navy font-bold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-navy rounded-2xl p-8 text-white text-center">
            <p className="text-gold font-bold uppercase text-sm tracking-wider mb-4">The Governance Commitment</p>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
              A Stewardship Trust sits at the top of the organizational structure — protecting the mission,
              the intellectual property, and the 10% philanthropic commitment from any future commercial
              pressure to redirect those funds.
            </p>
            <p className="text-gold italic">"We build businesses that fund a mission — not a mission that funds a lifestyle."</p>
            <p className="text-gold font-bold mt-2">— Crystal Stewart</p>
          </div>
        </div>
      </section>
    </div>
  )
}
