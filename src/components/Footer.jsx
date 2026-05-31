// Footer logo image: drop src/assets/images/logo.png into assets and import here.
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-col brand-info">
          <h2 className="logo-text" style={{ color: '#ffb6c1', fontSize: '2.2rem' }}>ESTRELLA DOCE</h2>
          <p>Handmade desserts crafted with love. Fresh ingredients, sweet memories — delivered to your door.</p>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Contact</h3>
          <div className="contact-item"><span>📍</span><p>Majdal Anjar, Lebanon</p></div>
          <div className="contact-item"><span>📞</span><p>+961 70 919 780</p></div>
          <div className="contact-item"><span>✉️</span><p>hello@sweetbakery.com</p></div>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Sweet Bakery. All rights reserved.</div>
    </footer>
  );
}
