import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/main.css';

import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import ProtectedRoute from './components/ProtectedRoute';

import Landing from './pages/Landing';
import Home from './pages/Home';
import Menu from './pages/Menu'; // تأكدي أن الاستيراد يبقى هكذا بعد إضافة export default Menu في أسفل الملف
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            {/* تم التأكد من عمل السلة بشكل تلقائي بفضل وجود الـ CartProvider فوق */}
            <Route path="/menu" element={<Menu searchInput="" />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={
              <ProtectedRoute><Contact /></ProtectedRoute>
            } />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}