import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <section id="landing">
      <div className="landing-content">
        <h1 className="logo-text large-logo">ESTRELLA DOCE</h1>
        <p className="tagline">Handmade sweets, baked with love</p>
        <Link to="/home" className="btn btn-primary">Enter Shop</Link>
      </div>
    </section>
  );
}
