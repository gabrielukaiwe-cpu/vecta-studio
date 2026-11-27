import { AddIcon, DecIcon, IncIcon } from './Icons.jsx';
import { useCart } from '../../context/CartContext.jsx';
import formatPrice from '../../utils/formatPrice.js';

function ProductCard({ product }) {
  const { getQuantity, changeQuantity } = useCart();

  const quantity = getQuantity(product.id);
  const selected = quantity > 0;

  return (
    <article className={selected ? 'product is-selected' : 'product'}>
      <div className="product-media">
        <picture>
          <source media="(min-width: 1000px)" srcSet={product.image.desktop} />
          <source media="(min-width: 600px)" srcSet={product.image.tablet} />
          <img src={product.image.mobile} alt={product.name} />
        </picture>

        <button
          className="add-btn"
          onClick={() => changeQuantity(product, 1)}
          aria-label={`Add ${product.name} to cart`}
        >
          <AddIcon /> Add to Cart
        </button>

        <div className="stepper">
          <button
            onClick={() => changeQuantity(product, -1)}
            aria-label={`Decrease quantity of ${product.name}`}
          >
            <DecIcon />
          </button>
          <span className="qty">{quantity}</span>
          <button
            onClick={() => changeQuantity(product, 1)}
            aria-label={`Increase quantity of ${product.name}`}
          >
            <IncIcon />
          </button>
        </div>
      </div>

      <p className="category">{product.category}</p>
      <h2 className="name">{product.name}</h2>
      <p className="price">{formatPrice(product.price)}</p>
    </article>
  );
}

export default ProductCard;
