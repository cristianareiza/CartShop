import { useFilters } from './useFilters';
import type { Product } from '../types';

export function useFilteredProducts(products: Product[]) {
  const { filters } = useFilters();

  return products.filter((product) => {
    return (
      product.price >= filters.minPrice &&
      (filters.category === 'all' || product.category === filters.category)
    );
  });
}
