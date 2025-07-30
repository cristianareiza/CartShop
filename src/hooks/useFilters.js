import { useContext } from 'react';
import { FiltersContext } from '../components/context/filters-context';

export function useFilters() {
  const context = useContext(FiltersContext);
  return context;
}
