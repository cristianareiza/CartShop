import { useEffect, useState } from 'react';
import { Products } from './components/products';
import { Filters } from './components/Filters';
import { useFilteredProducts } from './hooks/useFilteredProducts';
import { Cart } from './components/Cart';
import { CartProvider } from './components/context/Cart';
import type { Product, ProductsResponse } from './types';

function App() {
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json() as Promise<ProductsResponse>)
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
