import { useState } from 'react';
import Layout from '../components/Layout';


export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <Layout>
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you — orders, questions, or just to say hi.</p>
        </div>
        <img src="/images/sweets.jpeg"></img>
            

        <div className="contact-wrapper">
          <div className="contact-info-side">
            <div className="info-grid">
              <div className="info-card"><i>📍</i><h4>Address</h4><p>Majdal Anjar, Lebanon</p></div>
              <div className="info-card"><i>📞</i><h4>Phone</h4><p>+961 70 919 780</p></div>
              <div className="info-card"><i>✉️</i><h4>Email</h4><p>hello@sweetbakery.com</p></div>
              <div className="info-card"><i>🕒</i><h4>Hours</h4><p>Daily 9am – 10pm</p></div>
            </div>
            <div className="map-container">
              <iframe title="map" src="https://www.google.com/maps?q=Sharjah&output=embed"></iframe>
            </div>
          </div>

          <div className="contact-form-side">
            <h2>Send a Message</h2>
            <p>Fill the form and we'll get back within 24 hours.</p>
            {sent && <p style={{ color: 'green', fontWeight: 600 }}>✓ Message sent — thank you!</p>}
            <form onSubmit={submit}>
              <div className="form-group">
                <label>Name</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <button type="submit" className="btn-send">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
