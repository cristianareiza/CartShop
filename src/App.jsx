import { useEffect, useState } from 'react';
import { Products } from './components/products';
import { Filters } from './components/Filters.jsx';
import { useFilteredProducts } from './hooks/useFilteredProducts.js';
import { Cart } from './components/Cart.jsx';
import { CartProvider } from './components/context/Cart.jsx';

function App() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProductData(data.products);
      })
      .catch((err) => console.error('Error al cargar productos:', err));
  }, []);

  const filteredProducts = useFilteredProducts(productData);

  return (
    <CartProvider>
      <Cart />
      <Filters products={productData} />
      <Products products={filteredProducts} />
    </CartProvider>
  );
}

export default App;
