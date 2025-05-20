import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About | American AI Consultancy</title>
      </Head>
      <Navbar />
      <main style={{ maxWidth: 900, margin: 'auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: 24 }}>About American AI Consultancy</h1>
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ color: '#47b6ff', fontSize: 22, marginBottom: 10 }}>Our Mission</h2>
          <p style={{ fontSize: '1.15rem', color: '#e9eef6', marginBottom: 0 }}>
            To empower small and medium enterprises with the transformative power of artificial intelligence and automation—making advanced technology accessible, practical, and profitable for every business.
          </p>
        </section>
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ color: '#47b6ff', fontSize: 22, marginBottom: 10 }}>Expertise</h2>
          <p style={{ fontSize: '1.12rem', color: '#b3c3e6', marginBottom: 0 }}>
            Our team combines deep expertise in AI, machine learning, business process automation, and digital transformation. We have delivered solutions across retail, logistics, healthcare, and professional services—helping our clients achieve measurable growth and efficiency.
          </p>
        </section>
        <section>
          <h2 style={{ color: '#47b6ff', fontSize: 22, marginBottom: 10 }}>What Our Clients Say</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
            <div className="card" style={{ flex: '1 1 300px', minWidth: 260, maxWidth: 340 }}>
              <p style={{ fontStyle: 'italic' }}>
                "American AI Consultancy helped us automate our invoicing process, saving us countless hours each month. Their expertise is unmatched."
              </p>
              <div style={{ color: '#47b6ff', fontWeight: 600, marginTop: 10 }}>— Jane D., Retail Owner</div>
            </div>
            <div className="card" style={{ flex: '1 1 300px', minWidth: 260, maxWidth: 340 }}>
              <p style={{ fontStyle: 'italic' }}>
                "Their AI solutions gave us new insights into our customers and helped us grow our business in ways we never thought possible."
              </p>
              <div style={{ color: '#47b6ff', fontWeight: 600, marginTop: 10 }}>— Michael S., Logistics Director</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
