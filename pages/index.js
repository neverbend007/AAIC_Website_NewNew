import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>American AI Consultancy</title>
        <meta name="description" content="AI & Automation Solutions for SMEs | Digital Products & E-books" />
      </Head>
      <Navbar />
      <section style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(120deg, #0a2540 70%, #47b6ff 100%)',
        borderRadius: '0 0 32px 32px',
        boxShadow: '0 8px 32px 0 rgba(10,37,64,0.18)',
        marginBottom: 40,
        padding: '3rem 1rem 4rem 1rem'
      }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: 20, textAlign: 'center', color: '#fff', letterSpacing: 1 }}>Empowering Your Business with AI & Automation</h1>
        <p style={{ fontSize: '1.3rem', color: '#e9eef6', maxWidth: 700, textAlign: 'center', marginBottom: 32 }}>
          American AI Consultancy helps SMEs unlock growth, efficiency, and innovation by delivering tailored AI solutions, automation strategies, and actionable digital resources.
        </p>
        <a href="/services"><button>Discover Our Services</button></a>
      </section>
      <main style={{ maxWidth: 1050, margin: 'auto', marginTop: -40, zIndex: 2, position: 'relative' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          <div className="card" style={{ flex: '1 1 340px', minWidth: 320 }}>
            <h2>AI & Automation for SMEs</h2>
            <p>From process automation to predictive analytics, we help you harness AI to drive real business results.</p>
          </div>
          <div className="card" style={{ flex: '1 1 340px', minWidth: 320 }}>
            <h2>Digital Products</h2>
            <p>Explore our library of e-books and guides designed to make AI and automation accessible for business owners and teams.</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 50 }}>
          <a href="/products"><button style={{ background: 'linear-gradient(90deg, #0a2540 0%, #47b6ff 100%)' }}>Browse E-books</button></a>
        </div>
      </main>
      <Footer />
    </>
  );
}

