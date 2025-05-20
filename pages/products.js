import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

const products = [
  {
    title: 'Productivity Mastery: AI-Powered Habits',
    description: 'Boost your productivity with actionable, AI-backed strategies. This e-book is your roadmap to working smarter, not harder.',
    link: '#',
  },
  {
    title: 'Automation for Entrepreneurs',
    description: 'Practical guides to automating your business processes, so you can focus on what matters most—growth and innovation.',
    link: '#',
  },
  {
    title: 'AI for Everyday Business',
    description: 'Demystify AI with real-world examples and step-by-step instructions to implement AI in your SME today.',
    link: '#',
  },
];

export default function Products() {
  return (
    <>
      <Head>
        <title>Products | American AI Consultancy</title>
      </Head>
      <Navbar />
      <main style={{ maxWidth: 1050, margin: 'auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: 18 }}>Digital Products & E-books</h1>
        <p style={{ textAlign: 'center', color: '#b3c3e6', fontSize: '1.15rem', marginBottom: 38 }}>
          Unlock the power of AI and automation for your business. Our digital library is crafted for entrepreneurs and teams who want to lead in the digital age.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {products.map((p, idx) => (
            <div key={idx} className="card" style={{ flex: '1 1 320px', minWidth: 280, maxWidth: 340 }}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                <button style={{ marginTop: 16 }}>Learn More</button>
              </a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

