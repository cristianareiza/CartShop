import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';
import type { Filters } from '../../types';

export interface FiltersContextValue {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
}

export const FiltersContext = createContext<FiltersContextValue | undefined>(
  undefined
);

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<Filters>({
    category: 'all',
    minPrice: 0,
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
