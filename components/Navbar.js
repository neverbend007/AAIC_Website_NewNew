import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '0.7rem 0', background: 'rgba(10,37,64,0.98)', color: '#fff', marginBottom: 0, boxShadow: '0 2px 16px 0 rgba(10,37,64,0.06)' }}>
      <div style={{ display: 'flex', alignItems: 'center', maxWidth: 1200, margin: 'auto', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 38, height: 38, background: 'linear-gradient(120deg, #47b6ff 0%, #0a2540 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 20, color: '#fff', boxShadow: '0 2px 8px 0 rgba(71,182,255,0.12)' }}>
            <span>AI</span>
          </div>
          <Link href="/">
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 22, letterSpacing: 1, textDecoration: 'none', cursor: 'pointer' }}>
              American AI Consultancy
            </span>
          </Link>
        </div>
        <div style={{ display: 'flex', gap: 18 }}>
          <Link href="/services"><span style={{ color: '#e9eef6', fontWeight: 500, fontSize: 17, cursor: 'pointer', transition: 'color 0.2s' }}>Services</span></Link>
          <Link href="/products"><span style={{ color: '#e9eef6', fontWeight: 500, fontSize: 17, cursor: 'pointer', transition: 'color 0.2s' }}>Products</span></Link>
          <Link href="/about"><span style={{ color: '#e9eef6', fontWeight: 500, fontSize: 17, cursor: 'pointer', transition: 'color 0.2s' }}>About</span></Link>
          <Link href="/contact"><span style={{ color: '#e9eef6', fontWeight: 500, fontSize: 17, cursor: 'pointer', transition: 'color 0.2s' }}>Contact</span></Link>
        </div>
      </div>
    </nav>
  );
}

