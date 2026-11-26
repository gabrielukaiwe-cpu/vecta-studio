import { useEffect } from 'react';
import TopBar from '../components/shop/TopBar.jsx';
import ProductCard from '../components/shop/ProductCard.jsx';
import Attribution from '../components/shared/Attribution.jsx';
import products from '../data/products.js';
import '../styles/products.css';

// The products page: the top bar with the cart icon, then the grid of desserts
function Products() {
  useEffect(() => {
    document.title = 'Desserts | Loopstudios Products';
  }, []);

  return (
    <div className="shop">
      <TopBar backTo="/" backText="← Loopstudios" showCart />
      <main>
        <h1>Desserts</h1>
        <div className="grid">
          {/* one ProductCard for every dessert in the products list */}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Attribution />
    </div>
  );
}

export default Products;
