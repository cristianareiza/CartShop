import { useFilters } from './useFilters';

export function useFilteredProducts(products) {
  const { filters } = useFilters();

  return products.filter((product) => {
    return (
      product.price >= filters.minPrice &&
      (filters.category === 'all' || product.category === filters.category)
    );
  });
}
