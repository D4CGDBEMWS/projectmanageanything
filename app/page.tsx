import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://projectmanageanything.com'),
  title: 'ProjectManageAnything™ — Coming Soon',
  description: 'A global ecosystem for education, financial empowerment, community exchange, leadership development, storytelling, sustainability, and philanthropic impact. Launching soon.',
  robots: { index: false, follow: false },
}

export default function ComingSoonPage() {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, fontFamily: 'Inter, sans-serif', background: '#1B2A4A', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '40px 24px', maxWidth: '600px' }}>
          <div style={{ width: '72px', height: '72px', background: '#C8962E', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px', fontSize: '28px', fontWeight: '800', color: '#fff' }}>
            PM
          </div>
          <p style={{ color: '#C8962E', fontSize: '13px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', margin: '0 0 16px' }}>
            Kingdom Compassion Ecosystem
          </p>
          <h1 style={{ color: '#ffffff', fontSize: '48px', fontWeight: '800', lineHeight: '1.1', margin: '0 0 24px' }}>
            ProjectManage<br /><span style={{ color: '#C8962E' }}>Anything.™</span>
          </h1>
          <p style={{ color: '#9EB3CC', fontSize: '20px', lineHeight: '1.6', margin: '0 0 16px' }}>
            A global ecosystem for education, empowerment, and impact.
          </p>
          <p style={{ color: '#C8962E', fontSize: '16px', fontWeight: '600', fontStyle: 'italic', margin: '0 0 40px' }}>
            "Teach · Equip · Exchange · Prosper · Share · Sustain · Give Back"
          </p>
          <div style={{ width: '60px', height: '3px', background: '#C8962E', margin: '0 auto 40px', borderRadius: '2px' }} />
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(200,150,46,0.3)', borderRadius: '16px', padding: '32px', marginBottom: '40px' }}>
            <p style={{ color: '#C8962E', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px' }}>Launching Soon</p>
            <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>
              The full ecosystem is under construction. Seven pillars. One mission. Built to equip communities with education, financial empowerment, and purposeful work.
            </p>
          </div>
          <p style={{ color: '#64748b', fontSize: '12px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 16px' }}>The 7 Pillars</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '40px' }}>
            {['Enterprise Academy™','Wiser Generations™','VillageTrade™','The Wealth Channel™','Sacred Seasons™','Goshen Publishing™','Sustainability Institute™'].map(p => (
              <span key={p} style={{ background: 'rgba(255,255,255,0.07)', color: '#94a3b8', fontSize: '12px', padding: '6px 14px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)' }}>{p}</span>
            ))}
          </div>
          <p style={{ color: '#64748b', fontSize: '12px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 16px' }}>Live Now</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '48px' }}>
            <a href="https://enterpriseacademy.us" style={{ background: '#C8962E', color: '#fff', fontWeight: '700', fontSize: '14px', padding: '12px 24px', borderRadius: '10px', textDecoration: 'none' }}>Enterprise Academy™ →</a>
            <a href="https://wisergenerations.com" style={{ border: '2px solid #C8962E', color: '#C8962E', fontWeight: '700', fontSize: '14px', padding: '12px 24px', borderRadius: '10px', textDecoration: 'none' }}>Wiser Generations™ →</a>
          </div>
          <p style={{ color: '#334155', fontSize: '13px', margin: 0 }}>© {new Date().getFullYear()} Kingdom Compassion Enterprises LLC · Crystal Stewart, The Project Management Evangelist™</p>
        </div>
      </body>
    </html>
  )
}
