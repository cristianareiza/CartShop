import './Cart.css';
import React, { useId } from 'react';
import { CartIcon, ClearCartIcon } from './icons.jsx';
import { useCart } from '../hooks/useCart';

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, removeFromCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />

              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>

              <footer>
                <small>Qty: {product.quantity}</small>
                <button onClick={() => removeFromCart(product)}>-</button>
              </footer>
            </li>
          ))}
        </ul>

        {cart.length > 0 && (
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
        )}
      </aside>
    </>
  );
}
