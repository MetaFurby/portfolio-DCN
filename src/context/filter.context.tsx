import { createContext, useContext, useState } from 'react';

const initialState : number [] = [];

export type FilterContextType = {
	filters: number[];
	setFilters: React.Dispatch<React.SetStateAction<number[]>>;
};

export const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children } : { children: React.ReactNode }) => {
  const [filters, setFilters] = useState(initialState);
  return <FilterContext.Provider value={{ filters, setFilters }}>{children}</FilterContext.Provider>;
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('FilterContext must be used within a FilterProvider');
  }
  return context;
};