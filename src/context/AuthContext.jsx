import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);
const USERS_KEY = 'bakery_users';
const SESSION_KEY = 'bakery_session';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const s = localStorage.getItem(SESSION_KEY);
    if (s) setUser(JSON.parse(s));
  }, []);

  const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  const saveUsers = (u) => localStorage.setItem(USERS_KEY, JSON.stringify(u));

  const register = ({ name, email, password }) => {
    const users = getUsers();
    if (users.find((u) => u.email === email)) {
      return { ok: false, error: 'Email already registered.' };
    }
    const newUser = { name, email, password };
    users.push(newUser);
    saveUsers(users);
    const session = { name, email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return { ok: true };
  };

  const login = ({ email, password }) => {
    const users = getUsers();
    const found = users.find((u) => u.email === email && u.password === password);
    if (!found) return { ok: false, error: 'Invalid email or password.' };
    const session = { name: found.name, email: found.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return { ok: true };
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
