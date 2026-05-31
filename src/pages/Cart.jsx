import Layout from '../components/Layout';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { items, updateQty, removeItem, clearCart, total } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const placeOrder = () => {
    if (!user) {
      navigate('/login', { state: { from: '/cart' } });
      return;
    }
    alert(`Thank you ${user.name}! Your order of AED ${total} has been placed.`);
    clearCart();
    navigate('/home');
  };

  return (
    <Layout>
      <div style={{ padding: '40px 20px' }}>
        <h1 style={{ textAlign: 'center', color: 'var(--hot-pink)', marginBottom: 30 }}>Your Cart</h1>
        {items.length === 0 ? (
          <p style={{ textAlign: 'center' }}>Your cart is empty. <a href="/menu" style={{ color: 'var(--hot-pink)' }}>Browse menu →</a></p>
        ) : (
          <div className="cart-wrapper">
            <div className="cart-items">
              {items.map((it) => (
                <div key={it.key} className="cart-item-row">
                  {it.image
                    ? <img src={it.image} alt={it.name} className="cart-item-img" />
                    : <div className="cart-item-img img-ph">{it.id}</div>}
                  <div className="cart-item-info">
                    <strong>{it.name}</strong>
                    <p style={{ color: '#888', fontSize: '0.85rem' }}>Topping: {it.topping}</p>
                    <p style={{ color: 'var(--hot-pink)', fontWeight: 600 }}>AED {it.price}</p>
                  </div>
                  <div className="cart-qty">
                    <button onClick={() => updateQty(it.key, -1)}>−</button>
                    <span>{it.qty}</span>
                    <button onClick={() => updateQty(it.key, +1)}>+</button>
                  </div>
                  <button className="cart-remove" onClick={() => removeItem(it.key)}>✕</button>
                </div>
              ))}
            </div>
            <aside className="cart-summary">
              <h3 style={{ marginBottom: 15 }}>Summary</h3>
              <p>Items: {items.reduce((s, i) => s + i.qty, 0)}</p>
              <p style={{ fontSize: '1.4rem', fontWeight: 700, margin: '15px 0' }}>Total: AED {total}</p>
              <button className="btn btn-secondary" style={{ width: '100%' }} onClick={placeOrder}>
                Place Order
              </button>
              {!user && <p style={{ fontSize: '0.8rem', marginTop: 10 }}>You'll be asked to log in first.</p>}
            </aside>
          </div>
        )}
      </div>
    </Layout>
  );
}
