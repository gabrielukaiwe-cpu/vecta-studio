import { RemoveIcon } from './Icons.jsx';
import formatPrice from '../../utils/formatPrice.js';

// One row in the cart: name, quantity, prices and the remove button
function CartItem({ item, onRemove }) {
  return (
    <li className="cart-item">
      <div>
        <h3 className="item-name">{item.name}</h3>
        <p className="item-meta">
          <span className="item-qty">{item.quantity}x</span>
          <span className="item-unit">@ {formatPrice(item.price)}</span>
          <span className="item-line">{formatPrice(item.price * item.quantity)}</span>
        </p>
      </div>
      <button
        className="remove-btn"
        onClick={() => onRemove(item.id)}
        aria-label={`Remove ${item.name} from cart`}
      >
        <RemoveIcon />
      </button>
    </li>
  );
}

export default CartItem;
