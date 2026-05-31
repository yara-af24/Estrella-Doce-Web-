import { useState } from 'react';
import Layout from '../components/Layout';
import { useCart } from '../context/CartContext';

export default function Menu({ searchInput }) {
  const { addItem } = useCart();

  const [cheesecakeFlavor, setCheesecakeFlavor] = useState('strawberry');
  const [mousseFlavor, setMousseFlavor] = useState('strawberry');
  const [paveFlavor, setPaveFlavor] = useState('pine');

  const menuItems = [
    {
      id: 'cheesecake',
      title: 'Cheesecake',
      ingredients: 'Nestle cheese, heavy cream, butter, biscuits.',
      price: '$2.00',
      numericPrice: 2.00,
      rating: '★ 5.0',
      badge: 'Best Seller',
      hasFlavors: true,
      currentFlavor: cheesecakeFlavor,
      images: {
        strawberry: '/images/strawberry cheesecake.jpeg',
        dulce: '/images/doce de leite cheesecake.jpeg'
      }
    },
    {
      id: 'crunchy-cake',
      title: 'Crunchy Cake',
      ingredients: 'Nestle cheese, heavy cream, brownie cake, cocoa powder, butter, cornflakes.',
      price: '$2.00',
      numericPrice: 2.00,
      rating: '★ 4.9',
      hasFlavors: false,
      image: '/images/crunchy cake.jpeg'
    },
    {
      id: 'mousse',
      title: 'Mousse',
      ingredients: 'Nestle, ashta.',
      price: '$2.00',
      numericPrice: 2.00,
      rating: '★ 4.8',
      hasFlavors: true,
      currentFlavor: mousseFlavor,
      images: {
        strawberry: '/images/strawberry mousse.jpeg',
        passion: '/images/passion fruit mousse.jpeg'
      }
    },
    {
      id: 'pudding',
      title: 'Pudding',
      ingredients: 'Egg, Nestle, milk, vanilla, sugar.',
      price: '$2.00',
      numericPrice: 2.00,
      rating: '★ 5.0',
      hasFlavors: false,
      image: '/images/puding.jpeg'
    },
    {
      id: 'cinnamon-rolls',
      title: 'Cinnamon Rolls',
      ingredients: 'Flour, yeast, sugar, salt, oil, milk, butter, cinnamon.',
      price: '$2.00',
      numericPrice: 2.00,
      rating: '★ 4.9',
      hasFlavors: false,
      image: '/images/cinnamon rolls.jpeg'
    },
    {
      id: 'pave',
      title: 'The Pave',
      ingredients: 'Nestle milk, cornstarch, custard, biscuit, ladyfingers.',
      price: '$2.00',
      numericPrice: 2.00,
      rating: '★ 5.0',
      hasFlavors: true,
      currentFlavor: paveFlavor,
      images: {
        pine: '/images/pineapple pave.jpeg',
        straw: '/images/strawberry pave.jpeg',
        dulce: '/images/doce de leite pave.jpeg',
        mango: '/images/mango pave.jpeg',
        oreo: '/images/oreo pave.jpeg'
      }
    },
    {
      id: 'bejinho',
      title: 'Bejinho',
      ingredients: 'Nestle, coconut, butter, carnation.',
      price: '$2.00',
      numericPrice: 2.00,
      rating: '★ 4.7',
      hasFlavors: false,
      image: '/images/bejinho.jpeg'
    },
    {
      id: 'chia-delight',
      title: 'Fruit & Chia Delight',
      ingredients: 'Greek yogurt, chia seeds, mixed berries.',
      price: '$2.00',
      numericPrice: 2.00,
      rating: '★ 5.0',
      hasFlavors: false,
      image: '/images/fruit&chia delight.jpeg'
    }
  ];

  const searchTerm = searchInput || '';
  const filteredItems = menuItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.ingredients.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <header className="menu-header">
        <h1>Our Sweets Menu</h1>
        <hr />
      </header>

      <main className="menu-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => {
            const displayImg = item.hasFlavors ? item.images[item.currentFlavor] : item.image;

            return (
              <article key={item.id} className="menu-card">
                <div className="image-container">
                  {item.badge && <span className="badge">{item.badge}</span>}
                  <img 
                    src={displayImg} 
                    className="img-content" 
                    style={{ display: 'block' }} 
                    alt={item.title} 
                  />
                </div>
                
                <div className="card-content">
                  <h3>
                    {item.title} 
                    {item.hasFlavors && ` (${item.currentFlavor})`}
                  </h3>
                  <p className="ingredients">{item.ingredients}</p>
                  
                  {item.id === 'cheesecake' && (
                    <div className="topping-buttons">
                      <button 
                        onClick={() => setCheesecakeFlavor('strawberry')}
                        style={{ backgroundColor: cheesecakeFlavor === 'strawberry' ? '#d4a373' : '#fff', color: cheesecakeFlavor === 'strawberry' ? '#fff' : '#d4a373', border: '1px solid #d4a373', borderRadius: '20px', padding: '6px 12px', fontSize: '0.75rem', cursor: 'pointer', marginRight: '5px' }}
                      >Strawberry</button>
                      <button 
                        onClick={() => setCheesecakeFlavor('dulce')}
                        style={{ backgroundColor: cheesecakeFlavor === 'dulce' ? '#d4a373' : '#fff', color: cheesecakeFlavor === 'dulce' ? '#fff' : '#d4a373', border: '1px solid #d4a373', borderRadius: '20px', padding: '6px 12px', fontSize: '0.75rem', cursor: 'pointer' }}
                      >Doce de leite</button>
                    </div>
                  )}

                  {item.id === 'mousse' && (
                    <div className="topping-buttons">
                      <button 
                        onClick={() => setMousseFlavor('strawberry')}
                        style={{ backgroundColor: mousseFlavor === 'strawberry' ? '#d4a373' : '#fff', color: mousseFlavor === 'strawberry' ? '#fff' : '#d4a373', border: '1px solid #d4a373', borderRadius: '20px', padding: '6px 12px', fontSize: '0.75rem', cursor: 'pointer', marginRight: '5px' }}
                      >Strawberry</button>
                      <button 
                        onClick={() => setMousseFlavor('passion')}
                        style={{ backgroundColor: mousseFlavor === 'passion' ? '#d4a373' : '#fff', color: mousseFlavor === 'passion' ? '#fff' : '#d4a373', border: '1px solid #d4a373', borderRadius: '20px', padding: '6px 12px', fontSize: '0.75rem', cursor: 'pointer' }}
                      >Passion Fruit</button>
                    </div>
                  )}

                  {item.id === 'pave' && (
                    <div className="topping-buttons" style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      <button 
                        onClick={() => setPaveFlavor('pine')}
                        style={{ backgroundColor: paveFlavor === 'pine' ? '#d4a373' : '#fff', color: paveFlavor === 'pine' ? '#fff' : '#d4a373', border: '1px solid #d4a373', borderRadius: '20px', padding: '6px 12px', fontSize: '0.75rem', cursor: 'pointer' }}
                      >Pineapple</button>
                      <button 
                        onClick={() => setPaveFlavor('straw')}
                        style={{ backgroundColor: paveFlavor === 'straw' ? '#d4a373' : '#fff', color: paveFlavor === 'straw' ? '#fff' : '#d4a373', border: '1px solid #d4a373', borderRadius: '20px', padding: '6px 12px', fontSize: '0.75rem', cursor: 'pointer' }}
                      >Strawberry</button>
                      <button 
                        onClick={() => setPaveFlavor('dulce')}
                        style={{ backgroundColor: paveFlavor === 'dulce' ? '#d4a373' : '#fff', color: paveFlavor === 'dulce' ? '#fff' : '#d4a373', border: '1px solid #d4a373', borderRadius: '20px', padding: '6px 12px', fontSize: '0.75rem', cursor: 'pointer' }}
                      >Doce de leite</button>
                      <button 
                        onClick={() => setPaveFlavor('mango')}
                        style={{ backgroundColor: paveFlavor === 'mango' ? '#d4a373' : '#fff', color: paveFlavor === 'mango' ? '#fff' : '#d4a373', border: '1px solid #d4a373', borderRadius: '20px', padding: '6px 12px', fontSize: '0.75rem', cursor: 'pointer' }}
                      >Mango</button>
                      <button 
                        onClick={() => setPaveFlavor('oreo')}
                        style={{ backgroundColor: paveFlavor === 'oreo' ? '#d4a373' : '#fff', color: paveFlavor === 'oreo' ? '#fff' : '#d4a373', border: '1px solid #d4a373', borderRadius: '20px', padding: '6px 12px', fontSize: '0.75rem', cursor: 'pointer' }}
                      >Oreo</button>
                    </div>
                  )}

                  <div className="price-row">
                    <span className="price">{item.price}</span>
                    <span className="rating">{item.rating}</span>
                  </div>

                  <button 
                    className="btn btn-secondary" 
                    onClick={() => addItem({
                      id: item.hasFlavors ? '${item.id}-${item.currentFlavor}' : item.id,
                      name: item.hasFlavors ? '${item.title} (${item.currentFlavor})' : item.title,
                      price: item.numericPrice,
                      image: displayImg,
                      quantity: 1
                    })}
                    style={{ width: '100%', marginTop: '10px', padding: '8px', borderRadius: '20px', fontSize: '0.9rem' }}
                  >
                    Add to Cart
                  </button>
                </div>
              </article>
            );
          })
        ) : (
          <p style={{ textAlign: 'center', gridColumn: '1/-1', padding: '40px', color: '#888' }}>
            No sweets found matching "{searchTerm}"
          </p>
        )}
      </main>
    </Layout>
  );
}