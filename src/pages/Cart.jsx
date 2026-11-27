import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopBar from '../components/shop/TopBar.jsx';
import CartItem from '../components/shop/CartItem.jsx';
import OrderModal from '../components/shop/OrderModal.jsx';
import Attribution from '../components/shared/Attribution.jsx';
import { useCart } from '../context/CartContext.jsx';
import formatPrice from '../utils/formatPrice.js';
import '../styles/products.css';

function Cart() {
  const { cart, count, total, removeItem, clearCart } = useCart();

  const [confirmed, setConfirmed] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Your Cart | Loopstudios';
  }, []);

  const closeModal = useCallback(() => {
    setConfirmed(false);
  }, []);

  function startNewOrder() {
    clearCart();
    navigate('/products');
  }

  return (
    <div className="shop">
      <TopBar backTo="/products" backText="← Back to desserts" />

      <main className="cart-page">
        <section className="cart-card">
          <h1>Your Cart ({count})</h1>

          {cart.length === 0 ? (
            <div className="empty">
              <img src="/images/shop/illustration-empty-cart.svg" alt="" width="128" height="128" />
              <p>Your added items will appear here</p>
              <Link className="outline-btn" to="/products">Browse desserts</Link>
            </div>
          ) : (
            <>
              <ul className="cart-list">
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} onRemove={removeItem} />
                ))}
              </ul>
              <div className="total-row">
                <span>Order Total</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <p className="carbon">
                <img src="/images/shop/icon-carbon-neutral.svg" alt="" width="20" height="20" />
                <span>This is a <strong>carbon-neutral</strong> delivery</span>
              </p>
              <button className="primary-btn" onClick={() => setConfirmed(true)}>
                Confirm Order
              </button>
            </>
          )}
        </section>
      </main>

      {confirmed && (
        <OrderModal cart={cart} total={total} onClose={closeModal} onNewOrder={startNewOrder} />
      )}

      <Attribution />
    </div>
  );
}

export default Cart;
