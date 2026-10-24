import { useContext } from 'react';
import { FiltersContext } from '../components/context/filters-context';

export function useFilters() {
  const context = useContext(FiltersContext);

  if (context === undefined) {
    throw new Error('useFilters must be used within a FiltersProvider');
  }

  return context;
}
