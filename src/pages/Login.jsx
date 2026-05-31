import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [err, setErr] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location.state?.from || '/home';

  const submit = (e) => {
    e.preventDefault();
    const res = login(form);
    if (!res.ok) return setErr(res.error);
    navigate(redirect, { replace: true });
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        {err && <p style={{ color: 'crimson', textAlign: 'center', marginBottom: 10 }}>{err}</p>}
        <form onSubmit={submit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" required value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" required value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })} />
          </div>
          <button type="submit" className="btn-send">Login</button>
        </form>
        <p className="switch-link">No account? <Link to="/register">Register</Link></p>
        <p className="switch-link"><Link to="/">← Back to landing</Link></p>
      </div>
    </div>
  );
}
