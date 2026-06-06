import { Link } from 'react-router-dom';
import Layout from '../components/Layout';


const galleryItems = [1, 2, 3, 4, 5, 6];

export default function Home() {
  return (
    <Layout>
      
      <section className="hero-section">
        <div className="hero-text">
          <h2>Indulge in <br />every sweet bite.</h2>
          <Link to="/menu" className="btn btn-secondary">Order Now</Link>
        </div>
        <div className="hero-image">
          <img
            src="/images/homecake.jpeg"
            alt="Signature cake"
            style={{ width: 670, height: 1000, borderRadius: '0px', objectFit: 'cover' }} 
          />
        </div>
      </section>

      
       <section className="gallery-section" style={{ overflow: 'hidden', padding: '40px 0' }}>
        <h2 className="script-title" style={{ color: 'white', textAlign: 'center' }}>Our Gallery</h2>
        <div className="gallery-wrapper" style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
          
          
          <style>{`
            @keyframes smoothScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-270px * 6)); }
            }
          `}</style>

          <div 
            className="gallery-scroll-container"
            style={{ 
              display: 'flex', 
              width: 'max-content',
              animation: 'smoothScroll 20s linear infinite',
              gap: '20px'
            }}
          >
            
            {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6,7,8,9,10,11].map((n, index) => (
              <img
                key={index}
                src={`/images/gallery${index + 1}.jpeg`}
                alt="sweet"
                style={{ 
                  width: '300px', 
                  height: '300px', 
                  borderRadius: '15px', 
                  objectFit: 'cover',
                  flexShrink: 0 
                }}
              />
            ))}
          </div>
        </div>
        <div className="gallery-footer" style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/menu" className="btn-start">Explore Menu</Link>
        </div>
      </section>

      
      <section className="bestseller-section">
        <div className="bestseller-container">
          <div>
            <h3 className="script-title">Our Bestseller</h3>
            <p>Our award-winning signature dessert.</p>
          </div>
          <div className="bestseller-image-wrapper">
            <img
              src="/images/bestseller.jpeg"
              alt="Bestseller"
              style={{ width: 400, height: 550, borderRadius: '50%', objectFit: 'cover', margin: '0 auto', display: 'block' }}
            />
          </div>
          <div>
            <Link to="/menu" className="btn btn-secondary">Order Now</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}