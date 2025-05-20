import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

const services = [
  {
    title: 'AI Opportunity Assessment',
    description: 'Pinpoint high-impact AI use-cases in your business. We analyze your workflows and recommend the smartest automation and AI strategies for rapid ROI.',
    benefit: 'Unlock new efficiencies and revenue streams.'
  },
  {
    title: 'Business Process Automation',
    description: 'Automate repetitive, manual tasks with custom-built workflows, bots, and integrations—freeing your team to focus on growth.',
    benefit: 'Reduce costs and accelerate operations.'
  },
  {
    title: 'Custom AI Solutions',
    description: 'We design and deploy tailored AI models for your unique challenges—predictive analytics, customer insights, document processing, and more.',
    benefit: 'Gain a competitive edge with bespoke technology.'
  },
  {
    title: 'AI Training & Workshops',
    description: 'Empower your staff with hands-on training in AI, automation tools, and data-driven decision making.',
    benefit: 'Drive adoption and long-term value.'
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | American AI Consultancy</title>
      </Head>
      <Navbar />
      <main style={{ maxWidth: 1050, margin: 'auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: 30 }}>AI & Automation Services for SMEs</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {services.map((svc, idx) => (
            <div key={idx} className="card" style={{ flex: '1 1 340px', minWidth: 320 }}>
              <h2>{svc.title}</h2>
              <p>{svc.description}</p>
              <div style={{ color: '#47b6ff', fontWeight: 600, marginTop: 10 }}>{svc.benefit}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

