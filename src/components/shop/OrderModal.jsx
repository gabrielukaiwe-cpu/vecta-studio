import { useEffect, useRef } from 'react';
import formatPrice from '../../utils/formatPrice.js';

// The "Order Confirmed" box that appears on top of the cart page
function OrderModal({ cart, total, onClose, onNewOrder }) {
  // A ref is a way to grab a real element on the page, here the button
  const newOrderButton = useRef(null);

  useEffect(() => {
    // remember what had focus so we can give it back when the box closes
    const previouslyFocused = document.activeElement;

    // when the box appears: move the cursor to the button and stop the page scrolling behind it
    newOrderButton.current.focus();
    document.body.classList.add('modal-open');

    function handleKey(event) {
      if (event.key === 'Escape') {
        onClose();
      }
      // the button is the only focusable thing inside the box, so Tab must not leave it
      if (event.key === 'Tab') {
        event.preventDefault();
        newOrderButton.current.focus();
      }
    }
    document.addEventListener('keydown', handleKey);

    // when the box disappears, undo all of that
    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKey);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    // clicking the dark area (but not the box itself) closes the modal
    <div className="overlay" onClick={(event) => event.target === event.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <img src="/images/shop/icon-order-confirmed.svg" alt="" width="48" height="48" />
        <h2 id="modal-title">Order Confirmed</h2>
        <p className="modal-sub">We hope you enjoy your food!</p>

        <div className="order-box">
          <ul className="order-list">
            {cart.map((item) => (
              <li className="order-item" key={item.id}>
                <img src={item.thumbnail} alt="" width="48" height="48" />
                <div className="order-info">
                  <p className="item-name">{item.name}</p>
                  <p className="item-meta">
                    <span className="item-qty">{item.quantity}x</span>
                    <span className="item-unit">@ {formatPrice(item.price)}</span>
                  </p>
                </div>
                <p className="order-line">{formatPrice(item.price * item.quantity)}</p>
              </li>
            ))}
          </ul>
          <div className="total-row">
            <span>Order Total</span>
            <strong>{formatPrice(total)}</strong>
          </div>
        </div>

        <button className="primary-btn" ref={newOrderButton} onClick={onNewOrder}>
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default OrderModal;
