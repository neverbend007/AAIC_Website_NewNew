export default function Footer() {
  return (
    <footer style={{ padding: '2rem 0 1.2rem 0', background: 'linear-gradient(90deg, #0a2540 50%, #23395d 100%)', textAlign: 'center', marginTop: 60, color: '#e9eef6', borderRadius: '22px 22px 0 0', boxShadow: '0 -2px 16px 0 rgba(10,37,64,0.10)' }}>
      <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 10 }}>AI Innovation for the Modern Business</div>
      <small style={{ color: '#b3c3e6' }}>&copy; {new Date().getFullYear()} American AI Consultancy. All rights reserved.</small>
    </footer>
  );
}

