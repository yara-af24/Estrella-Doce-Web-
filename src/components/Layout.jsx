import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div id="home">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
