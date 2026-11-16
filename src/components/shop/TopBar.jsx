import { Link } from 'react-router-dom';
import { CartIcon } from './Icons.jsx';
import { useCart } from '../../context/CartContext.jsx';

// The bar at the top of the products and cart pages.
// backTo and backText say where the back link goes. showCart decides if the cart icon appears.
function TopBar({ backTo, backText, showCart }) {
  const { count } = useCart();

  return (
    <header className="topbar">
      <Link className="back-link" to={backTo}>{backText}</Link>

      {showCart && (
        <Link className="cart-link" to="/cart" aria-label="View your cart">
          <CartIcon />
          <span className="cart-count" aria-live="polite">{count}</span>
        </Link>
      )}
    </header>
  );
}

export default TopBar;
