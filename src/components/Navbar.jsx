import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';


export default function Navbar() {
  const { count } = useCart();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="main-header">
        <Link to="/home" className="logo-text small-logo" style={{ textDecoration: 'none' }}>
          ESTRELLA
           DOCE
        </Link>
        <div className="header-right">
          <div className="search-bar d-none d-md-flex">
            <input type="text" placeholder="Search..." />
            <button className="search-btn"><i className="bi bi-search"></i></button>
          </div>
          {user ? (
            <button className="btn btn-secondary" style={{ padding: '6px 14px' }}
              onClick={() => { logout(); navigate('/'); }}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn btn-secondary" style={{ padding: '6px 14px' }}>Login</Link>
          )}
          <div className="cart-icon">
            <Link to="/cart" aria-label="Cart">
              <i className="bi bi-bag-heart-fill" style={{ fontSize: 28, color: 'var(--hot-pink)' }}></i>
              {count > 0 && <span className="cart-badge">{count}</span>}
            </Link>
          </div>
          <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
            <i className="bi bi-list"></i>
          </button>
        </div>
      </header>
      <nav className={`sub-nav ${open ? 'open' : ''}`}>
        <ul>
          <li><Link to="/home" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/menu" onClick={() => setOpen(false)}>Menu</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          <li><Link to="/cart" onClick={() => setOpen(false)}>Cart</Link></li>
        </ul>
      </nav>
    </>
  );
}
