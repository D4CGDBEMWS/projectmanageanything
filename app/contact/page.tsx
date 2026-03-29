import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Contact — ProjectManageAnything™' }

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <p className="text-gold text-sm font-bold uppercase tracking-widest mb-2">Contact</p>
      <h1 className="text-4xl font-bold text-navy mb-4">Get in Touch</h1>
      <p className="text-gray-600 text-lg mb-10">For partnership inquiries, foundation interest, media requests, or general questions about the ecosystem.</p>
      <div className="bg-light-navy rounded-2xl p-10 space-y-6">
        {[
          { label: 'General & Ecosystem Inquiries', value: 'crystal@projectmanageanything.com' },
          { label: 'Enterprise Academy™', value: 'crystal@enterpriseacademy.us' },
          { label: 'Wiser Generations™', value: 'crystal@wisergenerations.com' },
          { label: 'Location', value: 'Smyrna, GA (Metro Atlanta) · Virtual Nationwide' },
        ].map(item => (
          <div key={item.label}>
            <p className="text-xs font-bold text-gold uppercase tracking-wider mb-1">{item.label}</p>
            <p className="text-navy font-medium">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
