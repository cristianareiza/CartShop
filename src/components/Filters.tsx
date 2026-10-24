import './Filters.css';
import { useId, type ChangeEvent } from 'react';
import { useFilters } from '../hooks/useFilters';
import type { Product } from '../types';

interface FiltersProps {
  products?: Product[];
}

export function Filters({ products = [] }: FiltersProps) {
  const { filters, setFilters } = useFilters();

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const handleChangeMinPrice = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: Number(event.target.value),
    }));
  };

  const handleChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio desde:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoría:</label>
        <select
          id={categoryFilterId}
          value={filters.category}
          onChange={handleChangeCategory}
        >
          <option value="all">Todas</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
