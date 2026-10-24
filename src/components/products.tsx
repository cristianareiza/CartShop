import { useCart } from '../hooks/useCart';
import { AddToCartIcon } from './icons';
import type { Product } from '../types';
interface ProductsProps {
  products?: Product[];
}

export function Products({ products = [] }: ProductsProps) {
  const { addToCart } = useCart();

  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />

            <div className="product-info">
              <strong>{product.title}</strong>
              <span>${product.price}</span>

              <button onClick={() => addToCart(product)}>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
