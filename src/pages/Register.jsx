import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const { register } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const res = register(form);
    if (!res.ok) return setErr(res.error);
    navigate('/home');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create Account</h2>
        {err && <p style={{ color: 'crimson', textAlign: 'center', marginBottom: 10 }}>{err}</p>}
        <form onSubmit={submit}>
          <div className="form-group">
            <label>Name</label>
            <input required value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" required value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" required minLength={6} value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })} />
          </div>
          <button type="submit" className="btn-send">Register</button>
        </form>
        <p className="switch-link">Have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}
