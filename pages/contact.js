import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | American AI Consultancy</title>
      </Head>
      <Navbar />
      <main style={{ padding: '2rem', maxWidth: 900, margin: 'auto' }}>
        <h1>Contact Us</h1>
        <p>Have questions or want to work with us? Reach out below:</p>
        <form style={{ maxWidth: 500 }}>
          <label>Name:<br /><input type="text" name="name" required style={{ width: '100%', marginBottom: 10 }} /></label><br />
          <label>Email:<br /><input type="email" name="email" required style={{ width: '100%', marginBottom: 10 }} /></label><br />
          <label>Message:<br /><textarea name="message" required rows={4} style={{ width: '100%', marginBottom: 10 }} /></label><br />
          <button type="submit">Send</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
